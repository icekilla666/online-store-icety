const { Router } = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const authRoleMiddleware = require("../middleware/authRoleMiddleware");

router.post("/", authRoleMiddleware("ADMIN"), typeController.create);
router.delete("/", authRoleMiddleware("ADMIN"), typeController.delete);
router.get("/", typeController.getAll);

module.exports = router;