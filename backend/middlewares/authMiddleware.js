const { request, response } = require("express");
const jwt = require("jsonwebtoken");

/**
 * Middleware for manage request access, can access if authorized
 *
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.isAuth = (req, res, next) => {
  const TOKEN = req.header("Authorization");

  if (!TOKEN) return res.status(401).json({ status: 401, verify: false, message: "Token is empty" });

  try {
    jwt.verify(TOKEN, process.env.SECRET_JWT_KEY);
    next();
  } catch (err) {
    res.status(401).json({ status: 401, allow: false, message: "Access Denied" });
    console.log(err);
  }
};

/**
 * Middleware for manage request access, can access if not authorized
 *
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.isGuest = (req, res, next) => {
  const TOKEN = req.header("Authorization");

  try {
    jwt.verify(TOKEN, process.env.SECRET_JWT_KEY);
    res.status(401).json({ status: 401, allow: false, message: "Already Authorized" });
  } catch {
    next();
  }
};
