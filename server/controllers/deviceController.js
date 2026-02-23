const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, shortDesc, price, brandId, typeId, info } = req.body;
      const files = req.files;

      let mainImage = null;
      let additionalImages = [];

      if (files && files.img) {
        const fileName = uuid.v4() + path.extname(files.img.name);
        const filePath = path.resolve(__dirname, "..", "static", fileName);
        await files.img.mv(filePath);
        mainImage = fileName;
      }

      if (files && files.images) {
        if (Array.isArray(files.images)) {
          for (const file of files.images) {
            const fileName = uuid.v4() + path.extname(file.name);
            const filePath = path.resolve(__dirname, "..", "static", fileName);
            await file.mv(filePath);
            additionalImages.push(fileName);
          }
        } else {
          const fileName = uuid.v4() + path.extname(files.images.name);
          const filePath = path.resolve(__dirname, "..", "static", fileName);
          await files.images.mv(filePath);
          additionalImages.push(fileName);
        }
      }

      const device = await Device.create({
        name,
        shortDesc,
        price,
        brandId,
        typeId,
        img: mainImage,
        images: additionalImages,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async delete(req, res, next) {
    const { id } = req.body;
    const device = await Device.destroy({ where: { id } });
    if (!device) {
      return next(ApiError.badRequest("Device not found."));
    }
    console.log(`Device with ID ${id} deleted.`);
    return res.json({ message: "Device deleted successfully." });
  }

  async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { name, shortDesc, price, brandId, typeId } = req.body;
      const device = await Device.findByPk(id);
      if (!device) {
        return res.status(404).json({ message: "Device not found" });
      }

      if (name) device.name = name;
      if (shortDesc) device.shortDesc = shortDesc;
      if (price) device.price = price;
      if (brandId) device.brandId = brandId;
      if (typeId) device.typeId = typeId;

      await device.save();

      res.json(device);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
