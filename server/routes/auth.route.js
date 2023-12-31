const express = require("express");
const {
  register,
  existingUser,
  login,
  photoupload
} = require("../controllers/auth.controller");
const { checkToken } = require("../utilities/authorization.utilities");
//const validator = require("../utilities/emailvalidator.utilities");
const verificationmail = require("../utilities/emailverification.utilities");
const router = express();

router.post("/register", existingUser, register);
router.post("/login", login);
router.post("/verifytoken", checkToken);
router.post("/verifyemail", verificationmail);
router.post("/photoupload", photoupload);
module.exports = router;
