const router = require("express").Router();
const userController = require("../controllers/userController");
const { isGuest, isAuth } = require("../middlewares/authMiddleware");

router.route("/:id").get(userController.get).put(isAuth, userController.update);
router.post("/", isGuest, userController.add);
module.exports = router;
