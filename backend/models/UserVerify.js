const mongoose = require("mongoose");
const userVerifySchema = new mongoose.Schema({
  _userId: {
    required: true,
    type: String,
  },
  uniqueStr: {
    required: true,
    type: String,
  },
  expires_at: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.model("UserVerify", userVerifySchema);
