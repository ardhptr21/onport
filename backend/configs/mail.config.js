const { readFileSync } = require("fs");
const nodemailer = require("nodemailer");
const chalk = require("chalk");

const EMAIL = process.env.EMAIL_SENDER;
const PASSWORD = process.env.PASSWORD_EMAIL_SENDER;

const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

module.exports.sendEmailVerification = (emailTo, linkVerification) => {
  const html = readFileSync(`${__dirname}/../template/email-verification.html`, "utf-8").replace(
    /\|link-verification\|/g,
    linkVerification
  );

  const options = {
    from: "Onport <no-reply@gmail.com>",
    to: emailTo,
    subject: "Onport Email Verification",
    html,
  };

  transpoter.sendMail(options, (err) => {
    if (err) return console.log(chalk.red(err.message));
    console.log(chalk.green("Success send email"));
  });
};
