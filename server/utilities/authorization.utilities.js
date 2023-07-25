const jwt = require("jsonwebtoken");
const secretkey = process.env.SECRET_KEY;
const checkToken = async (req,res) => {
    var {token} = req.body
  try {
    if (token === "" || token === undefined || token === null) {
      res.json({
        success: false
      });
    } else {
      res.json({
        user_token: jwt.verify(token, secretkey),
        success: true
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
      success: false
    });
  }
};
const generateToken = async (id, name, email, category) => {
  try {
    const payload = {
      id,
      name,
      email,
      category
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
