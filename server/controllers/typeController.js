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

  async edit(req, res, next) {
    const {id, name} = req.body;
    const type = await Type.findOne({ where: { id } });
    if(!type) {
      return next(ApiError.badRequest("Type not found."));
    }
    try {
      type.name = name;
      await type.save();
      return res.json(type);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
