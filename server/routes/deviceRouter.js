const { Router } = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const authRoleMiddleware = require("../middleware/authRoleMiddleware");
const multer = require("multer");
const upload = multer();

router.post('/', authRoleMiddleware("ADMIN"), deviceController.create);
router.delete('/', authRoleMiddleware("ADMIN"), deviceController.delete);
router.patch("/:id", upload.any(), deviceController.edit);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;
