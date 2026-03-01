const { Router } = require("express");
const router = new Router();
const wishlistController = require("../controllers/wishlistController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, wishlistController.addWishDevice);
router.get("/", authMiddleware, wishlistController.getWishDevices);
router.delete("/", authMiddleware, wishlistController.removeWishDevice);

module.exports = router;
