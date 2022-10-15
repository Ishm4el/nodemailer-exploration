
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


 //declare handlebarOptions object for use in transporter.use function further below
const handlebarOptions = {
   //passing the engine being used, express-handlebars
viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve(__dirname, "emailTemplate"),
    defaultLayout: false,
},
  //the file path where the views/templates are stored
  viewPath: path.resolve(__dirname, "emailTemplate"),
  extName: ".handlebars",
};

//attach the plugin to the nodemailer transporter
transporter.use('compile', hbs(handlebarOptions));

var mailOptions = {
    from: 'testemailsendercs5220@gmail.com',
    to: 'testemailreceiver5220@gmail.com',
    subject: 'Express-handlebars Test Email',
    //Commented out text value below, this won't show anymore. Need the 'context' object below filled out to pass to the viewer and show in the email
    // text: 'This email was testing the Express-Handlebars plugin, if received the test was successful',
    
    //added template and context fields to previous mailOptions object, template references file with template
    template: 'template2',
    context: {
      textBody: 'This green text was passed on to the view engine from the javascript file. This email was testing the Express-Handlebars plugin overall, if received and 3 bodies of text are displayed, this test was successful'
  }
  };
//send mail function
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

