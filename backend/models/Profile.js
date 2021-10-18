const mongoose = require("mongoose");
const Joi = require("joi");
const { v4: uuid4 } = require("uuid");

const profileSchema = new mongoose.Schema(
  {
    _userId: {
      required: true,
      type: mongoose.Types.ObjectId,
    },
    skills: {
      required: false,
      type: [
        {
          _id: false,
          id: {
            required: true,
            type: String,
            default: uuid4(),
          },
          name: {
            required: true,
            type: String,
          },
        },
      ],
    },
    projects: {
      required: false,
      type: [
        {
          _id: false,
          id: {
            required: true,
            type: String,
            default: uuid4(),
          },
          title: {
            required: [true, "Project title can't be empty"],
            type: String,
            maxlength: [50, "The length of project title can't be more than 50 character"],
          },
          description: {
            required: [true, "Project description can't be empty"],
            type: String,
            maxlength: [100, "The length of project description can't be less than 100 character"],
          },
          url: {
            required: [true, "Project url can't be empty"],
            type: String,
            validate: {
              validator: (v) => !Joi.string().uri({ allowRelative: false }).validate(v).error,
              message: "Project url is not a valid url",
            },
          },
        },
      ],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Profile", profileSchema);
