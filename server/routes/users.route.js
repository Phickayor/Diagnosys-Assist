const express = require("express");
const { register, existingUser, login } = require("../controllers/users.controller");
const { checkToken } = require("../utilities/authorization.utilities");
const router = express();

router.post("/register", existingUser, register);
router.post("/login", login);
router.post("/verifytoken", checkToken);
module.exports = router;
