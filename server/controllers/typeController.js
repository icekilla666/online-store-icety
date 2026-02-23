const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async delete(req, res, next) {
    const { id } = req.body;
    const type = await Type.destroy({ where: { id } });
    if (!type) {
      return next(ApiError.badRequest("Type not found."));
    }
    return res.json({ message: "Type deleted successfully." });
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
