module.exports.getAll = async (req, res) => {
  res.send("GET ALL PROFILES");
};

/**----------------------
 *    SKILLS CONTROLLER
 *------------------------**/
module.exports.getSkills = async (req, res) => {
  res.send("GET ALL SKILLS");
};
module.exports.addSkill = async (req, res) => {
  res.send("ADD NEW SKILL");
};
module.exports.updateSkill = async (req, res) => {
  res.send("UPDATE SKILL");
};

/**----------------------
 *    PROJECTS CONTROLLER
 *------------------------**/
module.exports.getProjects = async (req, res) => {
  res.send("GET ALL PROJECTS");
};
module.exports.addProject = async (req, res) => {
  res.send("ADD NEW PROJECT");
};
module.exports.updateProject = async (req, res) => {
  res.send("UPDATE PROJECT");
};
