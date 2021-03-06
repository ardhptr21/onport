const router = require("express").Router();
const profileController = require("../controllers/profileController");
const { isAuth } = require("../middlewares/authMiddleware");

router
  .route("/skills/:id")
  .get(profileController.getSkills)
  .patch(isAuth, profileController.updateSkill)
  .post(isAuth, profileController.addSkill)
  .delete(isAuth, profileController.deleteSkill);

router
  .route("/projects/:id")
  .get(profileController.getProjects)
  .patch(isAuth, profileController.updateProject)
  .post(isAuth, profileController.addProject)
  .delete(isAuth, profileController.deleteProject);

router.get("/:id", profileController.getAll);

module.exports = router;
