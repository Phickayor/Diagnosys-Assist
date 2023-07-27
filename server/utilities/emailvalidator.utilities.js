const axios = require("axios");
const validator = async (req, res, next) => {
  var mail = req.body.email;
  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${process.env.BOUNCE_KEY}&email=${mail}`
    );
    const data = await response.data;
    return data.status === "valid" ? next() : res.json({ isValid: false , errormessage:data.error });
  } catch (error) {
    console.error("Error occurred while verifying email:", error.message);
    res.json({ error });
  }
};

module.exports = validator;
