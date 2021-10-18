const router = require("express").Router();
const profileController = require("../controllers/profileController");

router
  .route("/skills/:id")
  .get(profileController.getSkills)
  .patch(profileController.updateSkill)
  .post(profileController.addSkill);

router
  .route("/projects/:id")
  .get(profileController.getProjects)
  .patch(profileController.updateProject)
  .post(profileController.addProject);

router.get("/:id", profileController.getAll);

module.exports = router;
