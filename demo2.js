var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

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
    viewPath: './nodemailer-exploration-main2'
  // viewPath: './viewPath'
    }

//attach the plugin to the nodemailer transporter
  transporter.use('compile', hbs(options));

  var mailOptions = {
    from: 'testemailsendercs5220@gmail.com',
    to: 'testemailreceiver5220@gmail.com',
    subject: 'Sending Email using nodemailer',
    text: 'Hi its demo message!',
    //added template to previous mailOptions object, references file with template
    template: 'testTemplate'
  };

 //transporter.sendMail(mail);

 transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

