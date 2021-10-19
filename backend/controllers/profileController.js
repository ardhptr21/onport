const { isValidObjectId } = require("mongoose");
const Profile = require("../models/Profile");
const { v4: uuid4 } = require("uuid");

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
  // get userId from the params id value
  const _userId = req.params.id;

  // check if _userId is not valid object id
  if (!isValidObjectId(_userId))
    return res.status(400).json({ status: 400, success: false, message: `Id ${_userId} is not valid object id` });

  try {
    const profile = await Profile.findOne({ _userId });

    // check if profile is null
    if (!profile)
      return res
        .status(404)
        .json({ status: 404, success: false, message: `Profile with user id ${_userId} is not found` });

    res.status(200).json({ status: 200, success: true, data: profile });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**----------------------
 *    SKILLS CONTROLLER
 *------------------------**/
module.exports.getSkills = async (req, res) => {
  // get user id from the params id value
  const _userId = req.params.id;

  // check if _userId is not valid id
  if (!isValidObjectId(_userId))
    return res.status(400).json({ status: 400, success: false, message: `Id ${_userId} is not valid object id` });

  try {
    const profile = await Profile.findOne({ _userId });

    // check if profile is null
    if (!profile)
      return res
        .status(404)
        .json({ status: 404, success: false, message: `Profile skills with user id ${_userId} is not found` });

    res.status(200).json({ status: 200, success: true, data: profile.skills });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
    console.log(err);
  }
};

module.exports.addSkill = async (req, res) => {
  // get the skill name from request body
  const { skill } = req.body;

  // get the user id from request params id value
  const _userId = req.params.id;

  // check if _userId is not valid object id
  if (!isValidObjectId(_userId))
    return res.status(400).json({ status: 400, success: false, message: `Id ${_userId} is not valid object id` });

  try {
    const profile = await Profile.findOne({ _userId });

    // cek if profile is null
    if (!profile)
      return res
        .status(404)
        .json({ status: 404, success: false, message: `Profile skills with user id ${_userId} is not found` });

    // get the current all skills
    const skills = profile.skills;
    // push new skill into current all skills
    const newSkill = { id: uuid4(), name: skill };
    skills.push(newSkill);

    const updated = await Profile.findOneAndUpdate({ _userId }, { skills }, { new: true, runValidators: true });

    res.status(200).json({ status: 200, success: true, data: updated.skills });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
    console.log(err);
  }
};

module.exports.updateSkill = async (req, res) => {
  // get the new skill name and the skill id from request body
  const { skill, id } = req.body;

  // get the user id from request params id value
  const _userId = req.params.id;

  // check if _userId and id is not valid object id
  if (!isValidObjectId(_userId) && !isValidObjectId(id))
    return res.status(400).json({ status: 400, success: false, message: "Skill id or user id is not valid object id" });

  try {
    const profile = await Profile.findOne({ _userId });

    // check if profile is null
    if (!profile)
      return res
        .status(404)
        .json({ status: 404, success: false, message: `Profile skills with user id ${_userId} is not found` });

    // get the skills and map to update one
    let skills = profile.skills;
    skills = skills.map((s) => (s.id === id ? { id: s.id, name: skill } : s));

    const updated = await Profile.findOneAndUpdate({ _userId }, { skills }, { new: true, runValidators: true });

    res.status(200).json({ status: 200, success: true, data: updated.skills });
  } catch (err) {
    res.sendStatus(500);
  }
};

/**----------------------
 *    PROJECTS CONTROLLER
 *------------------------**/
module.exports.getProjects = async (req, res) => {
  // get user id from the params id value
  const _userId = req.params.id;

  // check if _userId is not valid id
  if (!isValidObjectId(_userId))
    return res.status(400).json({ status: 400, success: false, message: `Id ${_userId} is not valid object id` });

  try {
    const profile = await Profile.findOne({ _userId });

    // check if profile is null
    if (!profile)
      return res
        .status(404)
        .json({ status: 404, success: false, message: `Profile projects with user id ${_userId} is not found` });

    res.status(200).json({ status: 200, success: true, data: profile.projects });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
    console.log(err);
  }
};
module.exports.addProject = async (req, res) => {
  res.send("ADD NEW PROJECT");
};
module.exports.updateProject = async (req, res) => {
  res.send("UPDATE PROJECT");
};
