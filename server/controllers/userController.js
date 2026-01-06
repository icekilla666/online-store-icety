const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Email and password are required"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("User with this email already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5); // хэшируем пароль, чтобы в базе не хранить обычный пароль
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const jwtToken = generateJwt(user.id, user.email, user.role); 

    return res.json({ jwtToken });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest("User not found"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password); // сравниваем пароль
    if (!comparePassword) {
      return next(ApiError.badRequest("Incorrect password"));
    }
    const jwtToken = generateJwt(user.id, user.email, user.role);  // При каждой сессии генерируем новый токен, будь это регистрация или логин. Токен представляет из себя зашифрованную информацию о пользователе и сроке действия токена. Если бы токена не было, то при каждом запросе к защищенному ресурсу серверу пришлось бы каждый раз заново проверять логин и пароль пользователя, что неэффективно и неудобно.
    return res.json({ jwtToken });
  }

  async check(req, res, next) {
    const jwtToken = generateJwt(req.user.id, req.user.email, req.user.role);
    res.json({jwtToken});
  }
}

module.exports = new UserController();
