const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");
class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async delete(req, res, next) {
    const { id } = req.body;
    const brand = await Brand.destroy({ where: { id } });
    if (!brand) {
      return next(ApiError.badRequest("Brand not found."));
    }
    return res.json({ message: "Brand deleted successfully." });
  }

  async edit(req, res, next) {
    const { id, name } = req.body;
    const brand = await Brand.findOne({ where: { id } });
    if (!brand) {
      return next(ApiError.badRequest("Brand not found."));
    }

    try {
      brand.name = name;
      await brand.save();
      return res.json(brand);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
