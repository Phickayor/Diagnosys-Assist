const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = async (pswd) => {
  try {
    let salt = await bcrypt.genSalt(saltRounds);
    let hashedPassword = await bcrypt.hash(pswd, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

const deCryptPassword = async (pswd, hash) => {
  try {
    const match = await bcrypt.compare(pswd, hash);
    if (match) {
      return {
        match,
        success: true
      };
    } else {
      return {
        message: "Password doesn't match",
        success: false
      };
    }
  } catch (error) {
    return {
      message: error.message,
      success: false
    };
  }
};

module.exports = { encryptPassword, deCryptPassword };
