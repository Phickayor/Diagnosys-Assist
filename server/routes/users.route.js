const express = require("express");
const { register, existingUser } = require("../controllers/users.controller");
const router = express();

router.post("/register", existingUser, register);

module.exports = router;
