/**----------------------
 **      REQUIRE LIBRARY
 *------------------------**/
const express = require("express");
const mongoose = require("mongoose");
const corsConfig = require("./configs/cors.config");

const app = express();
const PORT = process.env.PORT || 8080;
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  app.use(require("morgan")("dev"));
}
const chalk = require("chalk");

/**----------------------
 **      MIDDLEWARES
 *------------------------**/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(corsConfig);

/**----------------------
 **      ROUTES
 *------------------------**/
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes");
const authRoutes = require("./routes/auth.routes");
const emailRoutes = require("./routes/email.routes");

app.use("/auth", emailRoutes);
app.use("/email", authRoutes);
app.use("/profile", profileRoutes);
app.use("/user", userRoutes);
app.get("/", (req, res) => res.send("Hello World"));

/**----------------------
 **      CONNECT DB & LISTEN
 *------------------------**/
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(chalk.green(`App Running on port ${PORT}!\n`)));
  })
  .catch((err) => {
    console.log(chalk.red("Server not running because database can't connected"));
    console.log(err);
  });
