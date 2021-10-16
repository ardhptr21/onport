const router = require("express").Router();

router.get("/:id", () => {});

router
  .route("/:id/skills")
  .get(() => {})
  .post(() => {})
  .patch(() => {});

router
  .route("/:id/projects")
  .get(() => {})
  .post(() => {})
  .patch(() => {});

module.exports = router;
