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
    const { deviceId } = req.params;
    const userId = req.user?.id;

    try {
      if (!userId) {
        return next(ApiError.unauthorized("User not authenticated"));
      }

      const basket = await Basket.findOne({ where: { userId } });
      if (!basket) {
        return next(ApiError.badRequest("Basket not found"));
      }

      const deletedCount = await BasketDevice.destroy({
        where: { basketId: basket.id, deviceId: deviceId },
      });

      if (deletedCount === 0) {
        return next(ApiError.badRequest("Device not found in basket."));
      }

      return res.json({ message: "Device removed from basket." });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async clearBasket(req, res, next) {
    const userId = req.user?.id;

    try {
      if (!userId) {
        return next(ApiError.unauthorized("User not authenticated"));
      }

      const basket = await Basket.findOne({ where: { userId } });
      if (!basket) {
        return next(ApiError.badRequest("Basket not found"));
      }

      const deletedCount = await BasketDevice.destroy({
        where: { basketId: basket.id },
      });

      return res.json({
        message: "Basket cleared successfully",
        count: deletedCount,
      });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BasketController();
