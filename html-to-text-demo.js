var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

//The plugin checks if there is no text option specified and populates it based on the html value.
// Load the htmlToText function
var htmlToText = require('nodemailer-html-to-text').htmlToText;

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: 'advwebtest@gmail.com',
    pass: 'srekduvlzsgwlkdy',
  },
}));

// Attach it as a 'compile' handler for a nodemailer transport object
// Takes options for the html-to-text converter and returns a nodemailer plugin function
transporter.use('compile', htmlToText());

var mailOptions = {
  from: 'advwebtest@gmail.com',
  to: 'dmakadi@calstatela.edu',
  subject: 'Sending Email using Nodemailer',
  html: '<b>Dear Alexa, </b> <br/><i>Thanks for your request for information about product.</i><br/> I’m happy to share these details with you. <br/> I also want to let you know how our business has helped others. <br/> You can find more information about our business in our website.<br/> Please let me know if I can be of more help. <br/><b>Thank you, </b> <br/><b> Dipali Makadia </b>',
};

//Sends an email using the preselected transport object
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});  