const { request, response } = require("express");
const UserVerify = require("../models/UserVerify");
const User = require("../models/User");
const Profile = require("../models/Profile");

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

    if (userVerify < Data.now()) {
      await UserVerify.findByIdAndDelete(userVerify._id);
      return res.status(404).json({ status: 404, success: false, message: "Link verification expired" });
    }

    const user = await User.findByIdAndUpdate(userVerify._userId, { $set: { verified: true } });
    await Profile.create({ _userId: user._id });

    res.status(200).json({ status: 200, success: true, message: "Email verified" });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 *  Handle client request to send verify email address again
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.sendVerify = (req, res) => {};
