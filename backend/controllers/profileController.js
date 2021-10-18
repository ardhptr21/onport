const { isValidObjectId } = require("mongoose");
const Profile = require("../models/Profile");

const parseError = ({ message, errors }) => {
  const parse = {};

  if (errors != null) {
    Object.keys(errors).forEach((key) => {
      const error = errors[key];
      parse[key] = error.properties.message;
    });
  }

  return parse;
};

module.exports.getAll = async (req, res) => {
  // get userId for the params id
  const _userId = req.params.id;

  // check if _userId is not valid object id
  if (!isValidObjectId(_userId))
    return res.status(400).json({ status: 400, success: false, message: `Id ${_userId} is not valid object id` });

  try {
    const profile = await Profile.findOne({ _userId: _userId });

    // check if profile is null
    if (!profile)
      return res
        .status(404)
        .json({ status: 404, success: false, message: `Profile with user id ${_userId} is not found` });

    res.status(200).json({ status: 200, success: true, data: profile });
  } catch (err) {
    const error = parseError(err);
    res.status(500).json({ status: 500, success: false, error });
    console.log(err);
  }
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
