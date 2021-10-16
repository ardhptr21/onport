const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "Name can't be empty"],
      type: String,
      maxlength: [100, "The length of name can't be more than 100 character"],
    },
    email: {
      required: [true, "Email can't be empty"],
      type: String,
      unique: true,
      validate: {
        validator: (v) => !Joi.string().email({ allowUnicode: false }).validate(v).error,
        message: "Email is not valid a email",
      },
    },
    password: {
      required: [true, "Password can't be empty"],
      type: String,
    },
    position: {
      required: false,
      type: String,
    },
    about: {
      required: false,
      type: String,
      minlength: [200, "The length of about can't be less than 200 character"],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", userSchema);
