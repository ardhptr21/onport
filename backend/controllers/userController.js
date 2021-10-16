const User = require("../models/User");

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

module.exports.get = async (req, res) => {
  res.send("GET");
};
module.exports.add = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(200).json({ status: 200, success: true, data: user });
  } catch (err) {
    const error = parseError(err);
    res.status(400).json({ status: 400, success: false, error });
    console.log(err);
  }
};

module.exports.update = async (req, res) => {
  res.send("UPDATE");
};
