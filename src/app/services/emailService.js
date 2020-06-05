'use strict';

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const nodemailer = require('nodemailer');

async function emailSender (name, email) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rumbach001@gmail.com',
      pass: 'Mazsola_69'
    }
  });

  const mailOptions = {
    from: 'alex.frenkel92@gmail.com',
    to: `${email}`,
    subject: 'Chargeport',
    text: `Dear ${name}, \n\nThanks for trying out this service!`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  emailSender: emailSender
};
