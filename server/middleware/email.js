require('dotenv').config()
let { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");
let Model = require("../modules/email/models")


const SES_Config = {
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.MAIL_USER,
        secretAccessKey: process.env.MAIL_PASSWORD,
    },
    defaultProvider
}

const sesClient = new SESClient(SES_Config);

function templateFormat(template, user, hackathon) {
    template = template.replace('{hackathon}', hackathon)
    template = template.replace('{email}', user.email)
    template = template.replace('{password}', user.password)
    return template
}

let emailObj = {
    getEmailTemplate: async () => {
        try {
            let template = await Model.findOne({})
            return template.template;
        } catch (error) {
            console.log(error);
        }
    },

    sendEmail: (user, hackathon, template) => {
        try {
            let firstName = user.name.split(' ')[0]
            template = templateFormat(template, user, hackathon)

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
                            Data: `<p>Hello ${firstName},</p>
                            ${template}
        
                            <div>Regards,</div>
                            <div>System</div>`
                        },
                        Text: {
                            Charset: 'UTF-8',
                            Data: `
                                Hello ${firstName},
                                ${template}
            
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
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = emailObj