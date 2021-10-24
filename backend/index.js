if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/**----------------------
 **      REQUIRE LIBRARY
 *------------------------**/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

/**----------------------
 **      MIDDLEWARES
 *------------------------**/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:3000",
  })
);

/**----------------------
 **      ROUTES
 *------------------------**/
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/user", userRoutes);
app.get("/", (req, res) => res.send("Hello World"));

/**----------------------
 **      CONNECT DB & LISTEN
 *------------------------**/
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT} and connected to database`));
  })
  .catch((err) => {
    console.log("Server not running because database can't connected");
    console.log(err);
  });
