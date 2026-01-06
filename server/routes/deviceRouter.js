const { Router } = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const authRoleMiddleware = require("../middleware/authRoleMiddleware");

router.post('/', authRoleMiddleware("ADMIN"), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;
