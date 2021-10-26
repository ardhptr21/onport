const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const Profile = require("./Profile");

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
    photo: {
      required: false,
      type: String,
      validate: {
        validator: (v) => !Joi.string().uri({ allowRelative: false }).validate(v).error,
        message: "Photo url is not valid url",
      },
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
    verified: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.post("save", async (doc) => {
  try {
    const profile = await Profile.create({ _userId: doc._id });
    console.log(`Success create "${doc.name}" Profile with id profile "${profile._id}"`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = mongoose.model("User", userSchema);
