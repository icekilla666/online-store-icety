const { Router } = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const authRoleMiddleware = require("../middleware/authRoleMiddleware");
const multer = require("multer");
const upload = multer();

router.post(
  "/",
  authRoleMiddleware("ADMIN"),
  upload.any(),
  deviceController.create,
);

router.delete("/:id", authRoleMiddleware("ADMIN"), deviceController.delete);

router.patch("/:id", upload.any(), deviceController.edit);

router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
