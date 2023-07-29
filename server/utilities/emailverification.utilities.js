const transporter = require("../config/transporterconfig");
const generateOtp = require("./otpgenerator.utilities");

const verificationmail = async (req, res) => {
  var email = req.body.email;
  email.toLowerCase();
  var otp = generateOtp();
  var mailOptions = {
    from: `"Diagnosyst Assist" <${process.env.MAIL_USERNAME}>`,
    to: email,
    subject: "Verify your email on Diagnosys Assist",
    text: `Your OTP is : ${otp}`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
      res.json({ info: "success" });
    }
  });
};

module.exports = verificationmail;
