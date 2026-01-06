const { Basket, BasketDevice, Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async addDevice(req, res, next) {
    const { deviceId } = req.body;
    const userId = req.user.id;

    try {
      const basket = await Basket.findOne({ where: { userId } });
      const basketItem = await BasketDevice.create({
        basketId: basket.id,
        deviceId: deviceId,
      });
      return res.json(basketItem);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getDevices(req, res, next) {
    const userId = req.user.id;
    try {
      const basket = await Basket.findOne({
        where: { userId },
        include: [{ model: BasketDevice, include: [Device] }],
      });
      return res.json(basket);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async removeDevice(req, res, next) {
    const { deviceId } = req.body;
    const userId = req.user.id;
    try {
      const basket = await Basket.findOne({ where: { userId } });
      const basketItem = await BasketDevice.destroy({
        where: { basketId: basket.id, deviceId: deviceId },
      });
      if (!basketItem) {
        return next(ApiError.badRequest("Device not found in basket."));
      }
      return res.json({ message: "Device removed from basket." });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BasketController();
