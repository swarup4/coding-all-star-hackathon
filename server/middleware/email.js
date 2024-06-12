require('dotenv').config()
let { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");


const SES_Config = {
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.MAIL_USER,
        secretAccessKey: process.env.MAIL_PASSWORD,
    },
    defaultProvider
}

const sesClient = new SESClient(SES_Config);

module.exports = (user, hackathon) => {
    let firstName = user.name.split(' ')[0]

    let params = {
        Destination: {
            CcAddresses: [],
            ToAddresses: [user.email],
        },
        Source: 'swarup_s@trigent.com',
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                    <p>Hello ${firstName},</p>
                    <p>New Hackathon has coming. Please check "${hackathon}" hackathon</p>
                    <p>Please find the below your credentials for All Star Hackathon platform. All the best !!</p>

                    <p>
                        <div>URL: <a href='http://13.200.85.53:3000'><span>https://hackathon.trigent.com</span></a></div>
                        <div>Username: <span>${user.email}</span></div>
                        <div>Password: <span>${user.password}</span></div>
                    </p>

                    <div>Regards,</div>
                    <div>System</div>
                    `
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: `
                    Hello ${firstName},
                    New Hackathon has coming. Please check "${hackathon}" hackathon
                    Please find the below your credentials for All Star Hackathon platform. All the best !!

                    URL: https://hackathon.trigent.com
                    Username: ${user.email}
                    Password: ${user.password}

                    Regards,
                    System
                    `
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Hackathon Invite`
            }
        }
    }

    return new Promise((resolve, reject) => {
        const sendEmail = new SendEmailCommand(params)
        sesClient.send(sendEmail).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}