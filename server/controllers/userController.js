const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role, name, lastname, number) => {
  return jwt.sign(
    { id, email, role, name, lastname, number },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    },
  );
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role, name, lastname, number } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Email and password are required"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("User with this email already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5); // хэшируем пароль, чтобы в базе не хранить обычный пароль
    const user = await User.create({
      email,
      role,
      name,
      lastname,
      number,
      password: hashPassword,
    });
    const jwtToken = generateJwt(
      user.id,
      user.email,
      user.role,
      user.name,
      user.lastname,
      user.number,
    );

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
    const jwtToken = generateJwt(
      user.id,
      user.email,
      user.role,
      user.name,
      user.lastname,
      user.number,
    );
    return res.json({ jwtToken });
  }

  async check(req, res) {
    const jwtToken = generateJwt(
      req.user.id,
      req.user.email,
      req.user.role,
      req.user.name,
      req.user.lastname,
      req.user.number,
    );
    res.json({ jwtToken });
  }

  async edit(req, res, next) {
    const { email, name, lastname, number } = req.body;
    const user = await User.findOne({ where: { id: req.user.id } });

    if (!user) {
      return next(ApiError.badRequest("User not found"));
    }
    await user.update({ email, name, lastname, number });
    const updatedUser = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });

    res.json(updatedUser);
  }
}

module.exports = new UserController();
