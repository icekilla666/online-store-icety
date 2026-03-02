const { Router } = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, basketController.addDevice);
router.get("/", authMiddleware, basketController.getDevices);
router.delete("/", authMiddleware, basketController.clearBasket);
router.patch("/:deviceId", authMiddleware, basketController.updateQuantity);
router.delete("/:deviceId", authMiddleware, basketController.removeDevice);

module.exports = router;
