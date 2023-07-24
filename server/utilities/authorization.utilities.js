const jwt = require("jsonwebtoken");
const secretkey = process.env.SECRET_KEY;
const checkToken = async (token) => {
  try {
    if (token === "" || token === undefined || token === null) {
      return {
        success: false
      };
    } else {
      return {
        user_token: jwt.verify(token, secretkey),
        success: true
      };
    }
  } catch (error) {
    return {
      message: error.message,
      success: false
    };
  }
};
const generateToken = async (email, id, category) => {
  try {
    const payload = {
      email,
      id
    };
    const token = jwt.sign(payload, secretkey, { expiresIn: "1h" });
    return token
      ? {
          success: true,
          token: token,
          message: "token generated"
        }
      : {
          success: false,
          token: null,
          message: "no token generated"
        };
  } catch (error) {
    console.log("Error in generating Token", error);
    return 0;
  }
};

module.exports = { generateToken, checkToken };
