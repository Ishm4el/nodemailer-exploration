var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const path = require('path');

//add the express-handlebars plugin
var hbs = require('nodemailer-express-handlebars');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: 'testemailsendercs5220@gmail.com',
      pass: 'qfxygrrassiyyorp',
    },
  }));

 //declare options object for use in transporter.use function further below
  var options = {
    //passing the engine being used, express-handlebars
    viewEngine: 'express-handlebars',
    //the file path where the views/templates are stored
    viewPath: '.'
  // viewPath: './viewPath'
    }

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve(__dirname, "emailTemplate"),
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, "emailTemplate"),
  extName: ".handlebars",
};

//attach the plugin to the nodemailer transporter
  transporter.use('compile', hbs(handlebarOptions));

  var mailOptions = {
    from: 'testemailsendercs5220@gmail.com',
    to: 'testemailreceiver5220@gmail.com',
    subject: 'Sending Email using nodemailer',
    text: 'Hi its demo message!',
    //added template to previous mailOptions object, references file with template
    template: 'template2'
  };

 //transporter.sendMail(mail);

 transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

