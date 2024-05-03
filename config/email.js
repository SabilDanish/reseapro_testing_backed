const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'sabil.danish1997@gmail.com',
        pass: 'pudj tlpl wtfk pfln',
    },
});

module.exports = transporter;