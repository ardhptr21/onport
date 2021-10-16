const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/:id").get(userController.get).put(userController.update);
router.post("/", userController.add);
module.exports = router;
