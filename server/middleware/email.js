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

module.exports = (emailId, name) => {
    let params = {
        Destination: {
            CcAddresses: ["mir_a@trigent.com"],
            ToAddresses: emailId,
        },
        Source: 'swarup_s@trigent.com',
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: '<b>Hello world?</b>'
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: 'Hello world?'
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Hello ${name}`
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