const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    // Если метод запроса OPTIONS, просто пропускаем его дальше. Если не сделать проверку, то при запросах с фронтенда (особенно с использованием fetch или axios) браузер сначала отправляет OPTIONS-запрос для проверки доступности ресурса (CORS preflight request). Если мы не обработаем этот запрос, то клиент получит ошибку.
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; // Извлекаем токен из заголовка Authorization. Обычно токен передается в формате "Bearer <token>", поэтому мы разделяем строку по пробелу и берем вторую часть. На выходе получается сам токен без Bearer.
    if (!token) {
     return res.status(401).json({ message: "User is not authorized!" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Проверяем токен с помощью секретного ключа, который хранится в env. Если токен валиден, функция вернет расшифрованные данные (payload), которые мы сохраняем в переменную decoded.
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message }); // если ошибка jwt malformed то есть проблема с токеном, чтобы исправить это
  }
};
