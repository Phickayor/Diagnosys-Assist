const express = require("express");
const { register, existingUser, login } = require("../controllers/users.controller");
const router = express();

router.post("/register", existingUser, register);
router.post("/login", login);
module.exports = router;
