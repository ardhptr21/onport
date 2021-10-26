const router = require("express").Router();
const emailController = require("../controllers/emailController");
const { isGuest } = require("../middlewares/authMiddleware");

router.post("/send-verify/:id", isGuest, emailController.sendVerify);
router.post("/verify/:uniqueStr", isGuest, emailController.verify);

module.exports = router;
