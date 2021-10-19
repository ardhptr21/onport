const { isValidObjectId } = require("mongoose");
const Profile = require("../models/Profile");
const { v4: uuid4 } = require("uuid");

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
    // push the new skill
    const profile = await Profile.findOneAndUpdate(
      { _userId },
      { $push: { skills: { name: skill, id: uuid4() } } },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: 200, success: true, data: profile.skills });
  } catch (err) {
    const error = parseErrorAdd(err, "skills");
    res.status(500).json({ status: 500, success: false, error });
    console.log(err);
  }
};

module.exports.updateSkill = async (req, res) => {
  // get the new skill name and the skill id from request body
  const { skill, id } = req.body;

  // get the user id from request params id value
  const _userId = req.params.id;

  try {
    // find one skill and update into new value
    const updated = await Profile.findOneAndUpdate(
      { _userId, "skills.id": id },
      {
        $set: {
          "skills.$.name": skill,
        },
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: 200, success: true, data: updated.skills });
  } catch (err) {
    const error = parseErrorUpdate(err);
    res.status(500).json({ status: 500, success: false, error });
    console.log(err);
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

/**----------------------
 *    ERROR PARSING
 *------------------------**/

// PARSE ERROR WHEN ADD SOMETHING
const parseErrorAdd = ({ errors }, where) => {
  const parse = {};

  Object.keys(errors).forEach((field) => {
    errors = errors[field].errors;
    Object.keys(errors).forEach((nestedField) => {
      const error = errors[nestedField];
      parse[nestedField] = error.properties.message;
    });
  });

  return parse;
};

// PARSE ERROR WHEN UPDATE SOMETHING
const parseErrorUpdate = ({ errors }) => {
  const parse = {};

  Object.keys(errors).forEach((field) => {
    const error = errors[field];
    parse[field.replace(/\w+.\d./, "")] = error.message;
  });

  return parse;
};
