const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "swarup_s@trigent.com",
        pass: "Swarup@007",
    },
});

module.exports = (emailId) => {
    return new Promise((resolve, reject) => {
        console.log("Call Function");
        
        transporter.sendMail({
            from: '"Swarup Saha" <swarup_s@trigent.com>', // sender address
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