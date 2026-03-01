const { Wishlist, WishlistDevice, Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class WishlistController {
  async addWishDevice(req, res, next) {
    const { deviceId } = req.body;
    const userId = req.user.id;

    try {
      // Ищем вишлист пользователя
      let wishlist = await Wishlist.findOne({ where: { userId } });

      // 👇 Если вишлиста нет - создаем его
      if (!wishlist) {
        wishlist = await Wishlist.create({ userId });
      }

      // Проверяем, есть ли уже такой товар в вишлисте
      const existingItem = await WishlistDevice.findOne({
        where: {
          wishlistId: wishlist.id,
          deviceId: deviceId,
        },
      });

      if (existingItem) {
        return next(ApiError.badRequest("Device already in wishlist"));
      }

      const wishlistItem = await WishlistDevice.create({
        wishlistId: wishlist.id,
        deviceId: deviceId,
      });

      const itemWithDevice = await WishlistDevice.findOne({
        where: { id: wishlistItem.id },
        include: [{ model: Device, as: "device" }],
      });

      return res.json(itemWithDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getWishDevices(req, res, next) {
    const userId = req.user.id;
    try {
      let wishlist = await Wishlist.findOne({
        where: { userId },
        include: [
          {
            model: WishlistDevice,
            include: [Device],
          },
        ],
      });
      if (!wishlist) {
        wishlist = await Wishlist.create({ userId });
      }
      return res.json(wishlist);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async removeWishDevice(req, res, next) {
    const { deviceId } = req.body;
    const userId = req.user?.id;

    try {
      const wishlist = await Wishlist.findOne({ where: { userId } });
      if (!wishlist) {
        return next(ApiError.badRequest("Wishlist not found"));
      }

      const wishlistDevice = await WishlistDevice.findOne({
        where: { wishlistId: wishlist.id, deviceId: deviceId },
      });

      if (!wishlistDevice) {
        return res.json({ message: "Device not found" });
      }

      await WishlistDevice.destroy({
        where: { wishlistId: wishlist.id, deviceId: deviceId },
      });
      return res.json({ message: "Device removed from wishlist." });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new WishlistController();
