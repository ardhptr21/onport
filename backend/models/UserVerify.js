const mongoose = require("mongoose");
const userVerifySchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  uniqueStr: {
    required: true,
    type: String,
  },
  expires_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserVerify", userVerifySchema);
