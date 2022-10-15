const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host:"smtppro.zoho.in",
  secure: true,
  port: 465,
  auth: {user: "tigersoni2424@zohomail.in", pass: 'GqWapivy95Zh'
  },
});
  var mailOptions = {
    from: 'tigersoni2424@zohomail.in',
    to: 'bhadiyadrasarthak2002@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function(error, info){if (error)  console.log(error);
     else console.log('Email sent: ' + info.response);
    });
  module.exports = transporter