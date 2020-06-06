'use strict';

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const nodemailer = require('nodemailer');

async function emailSender(name, email) {
  const smtpTransport = require('nodemailer-smtp-transport');
  const transporter = nodemailer.createTransport(smtpTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
  }));

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
