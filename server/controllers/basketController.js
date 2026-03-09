const { Basket, BasketDevice, Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async addDevice(req, res, next) {
    const { deviceId, quantity = 1 } = req.body;
    const userId = req.user.id;

    try {
      const basket = await Basket.findOne({ where: { userId } });

      const existingItem = await BasketDevice.findOne({
        where: { basketId: basket.id, deviceId: deviceId },
      });

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        await existingItem.save();
        if (newQuantity > 10) {
          return next(
            ApiError.badRequest("Maximum quantity is 10 items per product"),
          );
        }
        const updatedItem = await BasketDevice.findOne({
          where: { id: existingItem.id },
          include: [Device],
        });
        return res.json(updatedItem);
      } else {
        const basketItem = await BasketDevice.create({
          basketId: basket.id,
          deviceId: deviceId,
          quantity: quantity,
        });

        const newItem = await BasketDevice.findOne({
          where: { id: basketItem.id },
          include: [Device],
        });
        return res.json(newItem);
      }
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getDevices(req, res, next) {
    const userId = req.user.id;
    try {
      const basket = await Basket.findOne({
        where: { userId },
        include: [
          {
            model: BasketDevice,
            include: [Device],
          },
        ],
      });
      return res.json(basket);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateQuantity(req, res, next) {
    const { deviceId } = req.params;
    const { quantity } = req.body;
    const userId = req.user.id;

    try {
      const basket = await Basket.findOne({ where: { userId } });

      const item = await BasketDevice.findOne({
        where: { basketId: basket.id, deviceId },
      });

      if (!item) {
        return next(ApiError.badRequest("Device not found in basket"));
      }

      if (quantity <= 0) {
        await item.destroy();
        return res.json({ message: "Device removed from basket" });
      }

      item.quantity = quantity;
      await item.save();

      const updatedItem = await BasketDevice.findOne({
        where: { id: item.id },
        include: [Device],
      });

      return res.json(updatedItem);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async removeDevice(req, res, next) {
    const { deviceId } = req.params;
    const userId = req.user?.id;

    try {
      const basket = await Basket.findOne({ where: { userId } });
      if (!basket) {
        return next(ApiError.badRequest("Basket not found"));
      }

      await BasketDevice.destroy({
        where: { basketId: basket.id, deviceId: deviceId },
      });

      return res.json({ message: "Device removed from basket." });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async clearBasket(req, res, next) {
    const userId = req.user?.id;

    try {
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
