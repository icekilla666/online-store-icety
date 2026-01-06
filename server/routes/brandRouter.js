const { Router } = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const authRoleMiddleware = require("../middleware/authRoleMiddleware");

router.post('/', authRoleMiddleware("ADMIN"), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;
