const { request, response } = require("express");
const { isValidObjectId } = require("mongoose");
const User = require("../models/User");

/**
 * Handle request to get one user info
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.get = async (req, res) => {
  // get the id for the params
  const _id = req.params.id;

  // check if id is valid id
  if (!isValidObjectId(_id))
    return res.status(400).json({ status: 400, success: false, message: `Id ${_id} is not valid object id` });

  try {
    const user = await User.findById(_id);

    // check if user is not null
    if (!user)
      return res.status(404).json({ status: 404, success: false, message: `User with id ${_id} is not found` });

    // deleted user password, before send back the user data
    delete { ...user }._doc.password;

    res.status(200).json({ status: 200, success: true, data: user });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
    console.log(err);
  }
};

/**
 * Handle request to add/register the new user
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.add = async (req, res) => {
  // get the name, email, and password value from the request body
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(200).json({ status: 200, success: true, data: { id: user._id } });
  } catch (err) {
    const error = parseError(err);
    res.status(500).json({ status: 500, success: false, error });
    console.log(err);
  }
};

/**
 * Handle request to update one or more user info
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.update = async (req, res) => {
  // get the name, position, and about value from request body
  const { name, position, about, photo } = req.body;

  // get the id from the params
  const _id = req.params.id;

  // check if the id is valid object id
  if (!isValidObjectId(_id))
    return res.status(400).json({ status: 400, success: false, message: `Id ${_id} is not valid object id` });

  try {
    const user = await User.findByIdAndUpdate(
      _id,
      { name, position, about, photo },
      { new: true, runValidators: true }
    );

    // deleted user password, before send back the user data
    delete { ...user }._doc.password;
    res.status(200).json({ status: 200, success: true, data: user });
  } catch (err) {
    const error = parseError(err);
    res.status(500).json({ status: 500, success: false, error });
  }
};

/**----------------------
 *      HANDLE ERROR
 *------------------------**/
const parseError = ({ message, errors }) => {
  const parse = {};

  if (message.includes("E11000")) {
    parse["email"] = "Email is already exists";
  }

  if (errors != null) {
    Object.keys(errors).forEach((key) => {
      const error = errors[key];
      parse[key] = error.properties.message;
    });
  }

  return parse;
};
