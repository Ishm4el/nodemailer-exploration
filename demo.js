var nodemailer = require('nodemailer');

var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '',
  },
}));

var mailOptions = {
  from: '',
  to: '',
  subject: 'Sending Email using nodemailer',
  text: 'Hi its demo message!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
