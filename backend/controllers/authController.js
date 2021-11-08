const { request, response } = require("express");
const User = require("../models/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 *  Handle client request to login
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.login = async (req, res) => {
  // get email and password value from request body
  const { email, password } = req.body;

  // validate email and password
  const emailValidate = Joi.string().email().required().validate(email);
  const passwordValidate = Joi.string().required().validate(password);

  // check if email or password is not valid
  if (emailValidate.error || passwordValidate.error) {
    return res.status(400).json({
      status: 400,
      success: false,
      error: { email: emailValidate.error?.message, password: passwordValidate.error?.message },
    });
  }

  try {
    // get user with valid email value
    const user = await User.findOne({ email });

    // check if user with that email is not found
    if (!user)
      return res
        .status(400)
        .json({ status: 400, success: false, message: "Can't find user with that email or password" });

    if (!user.verified)
      return res.status(401).json({
        status: 401,
        success: false,
        id: user._id,
        verified: "UNVERIFIED",
        message: "You must verify your email before login",
      });

    // compare request password and hashing password
    const result = await bcrypt.compare(password, user.password);

    // check if compare result is false
    if (!result)
      return res
        .status(400)
        .json({ status: 400, success: false, message: "Can't find user with that email or password" });

    // create JWT token if all find
    const TOKEN = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRET_JWT_KEY, {
      expiresIn: "3d",
    });

    // send back the JWT TOKEN
    res.status(200).json({ status: 200, success: true, token: TOKEN });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
    console.log(err);
  }
};

/**
 * Verify all request must have a valid token
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.verify = async (req, res) => {
  const TOKEN = req.header("Authorization");
  if (!TOKEN) return res.status(401).json({ status: 401, verify: false, message: "Token is empty" });

  try {
    jwt.verify(TOKEN, process.env.SECRET_JWT_KEY);

    res.status(200).json({ status: 200, verify: true });
  } catch (err) {
    res.status(401).json({ status: 401, verify: false, message: "We can't verify" });
    console.log(err);
  }
};
