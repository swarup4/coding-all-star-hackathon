require('dotenv').config()
const fs = require('fs/promises');
const path = require('path');
const xlsx = require('xlsx');
let { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");
let Model = require("../modules/email/models")
const { paticipateEmployee, unparticipateEmployee, submitedUser } = require('../middleware/dashboard')


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


async function createExcelFile(data, filename) {
    const wb = xlsx.utils.book_new();
    const convertedData = data.map(item => {
        return {
            ...item,
            _id: item._id.toString()
        }
    })
    const ws = xlsx.utils.json_to_sheet(convertedData);
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    const filePath = path.join(__dirname, '..', 'dump', filename);
    xlsx.writeFile(wb, filePath);
    return filePath;
}

async function readExcelFIle(data, filename) {
    let filePath = await createExcelFile(data, filename);
    const attachment = (await fs.readFile(filePath)).toString('base64');
    return attachment;
}

async function writeAttachmentFile() {
    const participate = await paticipateEmployee();
    const unparticipate = await unparticipateEmployee('66695b9c51f3718b890f04fe');
    const submited = await submitedUser();

    // Convert files to base64
    const attachment1 = await readExcelFIle(participate, 'participate.xlsx');
    const attachment2 = await readExcelFIle(unparticipate, 'unparticipate.xlsx');
    const attachment3 = await readExcelFIle(submited, 'submited.xlsx');

    return {
        attachment1,
        attachment2,
        attachment3
    }
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
    },

    sendStatusFile: async () => {
        try {
            let data = await writeAttachmentFile();

            let params = {
                Source: 'swarup_s@trigent.com',
                Destination: {
                    CcAddresses: [],
                    ToAddresses: ['strangefriendship3@gmail.com', 'swarup_s@trigent.com'],
                },
                Message: {
                    Body: {
                        Html: {
                            Charset: 'UTF-8',
                            Data: `<p>Hello Andy,</p>
                            <p>This is Today's Report</p>
                            <p>Please Find the Attached</p>
                            <div>Regards,</div>
                            <div>System</div>`
                        },
                        Text: {
                            Charset: 'UTF-8',
                            Data: `
                                Hello Andy,
                                This is Today's Report
                                Please Find the Attached

                                Regards,
                                System
                            `
                        }
                    },
                    Subject: {
                        Charset: 'UTF-8',
                        Data: `Hackathon Daily Report`
                    }
                },
                Attachments: [
                    {
                        Name: 'participate.xslx',
                        Data: data.attachment1,
                        ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        ContentDisposition: 'attachment'
                    },
                    {
                        Name: 'unparticipate.xlsx',
                        Data: data.attachment2,
                        ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        ContentDisposition: 'attachment'
                    },
                    {
                        Name: 'submitedUser.xlsx',
                        Data: data.attachment3,
                        ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        ContentDisposition: 'attachment'
                    }
                ]
            };

            const sendEmail = new SendEmailCommand(params);
            const response = await sesClient.send(sendEmail);
            console.log('Email sent successfully:', response);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}


module.exports = emailObj