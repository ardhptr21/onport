if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/**----------------------
 **      REQUIRE LIBRARY
 *------------------------**/
const express = require("express");

const app = express();

/**----------------------
 **      MIDDLEWARES
 *------------------------**/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**----------------------
 **      ROUTES
 *------------------------**/
app.get("/", (req, res) => res.send("Hello World"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
