const nodemailer = require("nodemailer");

// Create a SendinBlue transporter
let transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Outlook SMTP host
  port: 587, // Port for secure TLS (587) or SSL (465) connection
  secure: false, // Set to true for SSL connection (465), false for TLS (587)
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

module.exports = transporter;
