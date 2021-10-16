const mongoose = require("mongoose");
const Joi = require("joi");

const profileSchema = new mongoose.Schema(
  {
    _userId: {
      required: true,
      type: mongoose.Types.ObjectId,
    },
    skills: {
      required: false,
      type: [String],
    },
    projects: {
      required: false,
      type: [
        {
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
              validator: Joi.string().uri({ allowRelative: false }).valid,
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
