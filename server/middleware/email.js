const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "swarup.saha004@hotmail.com",
        pass: "Strange#007",
    },
});

module.exports = (emailId) => {
    return new Promise((resolve, reject) => {
    
        transporter.sendMail({
            from: 'swarup.saha004@hotmail.com', // sender address
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