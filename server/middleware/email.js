require('dotenv').config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
});

module.exports = (emailId) => {
    return new Promise((resolve, reject) => {
    
        transporter.sendMail({
            from: 'swarup_s@trigent.com', // sender address
            to: emailId, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}