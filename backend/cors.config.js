const cors = require("cors");
const chalk = require("chalk");

let whiteList = ["http://localhost:3000", "http://localhost:5000", "http://localhost:8000", "http://localhost:80"];
if (process.env.ORIGIN) {
  const envOrigin = process.env.ORIGIN.split(",");
  whiteList = [...whiteList, ...envOrigin];
}

console.log(chalk.bgGreen.bold.black("\nALLOWED CORS ORIGIN: "));
whiteList.forEach((list) => {
  console.log(chalk.yellow(`- ${list}`));
});
console.log("\n");

const corsConfig = cors({
  origin: (origin, callback) => {
    if (process.env.NODE_ENV !== "production") {
      callback(null, true);
      return;
    }
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
});

module.exports = corsConfig;
