const { request, response } = require("express");
const UserVerify = require("../models/UserVerify");
const User = require("../models/User");
const Profile = require("../models/Profile");
const { sendEmailVerification } = require("../configs/mail.config");
const { v4: uuid4 } = require("uuid");

/**
 *  Handle client request to verify email address
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.verify = async (req, res) => {
  // get the uniqueStr from request parmas
  const uniqueStr = req.params.uniqueStr;

  try {
    const userVerify = await UserVerify.findOne({ uniqueStr });
    if (!userVerify) return res.status(404).json({ status: 404, success: false, message: "Can't verify this link" });

    if (userVerify.expires_at < Date.now()) {
      await UserVerify.findByIdAndDelete(userVerify._id);
      return res.status(404).json({ status: 404, success: false, message: "Link verification expired" });
    }

    await UserVerify.findByIdAndDelete(userVerify._id);
    const user = await User.findByIdAndUpdate(userVerify._userId, { $set: { verified: true } });
    await Profile.create({ _userId: user._id });
    res.status(200).json({ status: 200, success: true, message: "Email verified" });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
    console.log(err);
  }
};

/**
 *  Handle client request to send verify email address again
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.sendVerify = async (req, res) => {
  // get the userId from request params id value
  const _userId = req.params.id;

  try {
    const user = await User.findById(_userId);

    const uniqueStr = uuid4() + user._id;
    const expires_at = Date.now() + 3600;
    await UserVerify.create({ _userId, uniqueStr, expires_at });
    sendEmailVerification(user.email, `${process.env.FRONTEND_URL}/email/verify/${uniqueStr}`);
    res.status(200).json({ status: 200, success: true, message: "Verification email sent successfully" });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
    console.log(err);
  }
};
