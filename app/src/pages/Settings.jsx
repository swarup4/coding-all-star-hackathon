import React, { useState } from 'react'
import axios from '../axiosInstance'
import CommonDialog from '../components/common/CommonDialog'
import EmailTemplate from '../components/admin/EmailTemplate'
import UserUpload from '../components/admin/UserUpload'
import { useDispatch } from 'react-redux'
import { setNotification } from '../store/notification/notificationSlice'
import { HOST_URL } from '../constants'

export default function Settings() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(false)
    const [email, setEmail] = useState(false)
    const [userExcelFile, setUserExcelFile] = useState({})
    const [emailTemplate, setEmailTemplate] = useState('')

    function uploadExcelFile() {
        let file = userExcelFile.file;
        let fd = new FormData();
        fd.append('userFile', file, file.name);

        const url = `${HOST_URL}user/uploadExcel`
        axios.post(url, fd).then(res => {
            setUser(false)
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: "User data has is Uploaded"
            }))
        }).catch(err => {
            console.log(err)
        })
    }

    function updateEmailTemplate() {
        const url = `${HOST_URL}email/addEmailTemplate`
        let obj = {
            template: emailTemplate
        }
        axios.post(url, obj).then(res => {
            setEmail(false)
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: "Email template has updated"
            }))
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <section className='bg-white admin-page-content overflow-auto'>
            <section className="bg-coolGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-3">

                        <div className="w-full md:w-1/3 p-3">
                            <a className='cursor-pointer' onClick={() => setEmail(true)}>
                                <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                                    <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between -m-1">
                                        <div className="w-auto p-1">
                                            <h2 className="font-medium text-2xl text-coolGray-500">Email Template</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="w-full md:w-1/3 p-3">
                            <a className='cursor-pointer' onClick={() => setUser(true)}>
                                <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                                    <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between -m-1">
                                        <div className="w-auto p-1">
                                            <h2 className="font-medium text-2xl text-coolGray-500">Upload User</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CommonDialog heading='Upload' dialog='small' open={user} close={setUser} submitText='Submit' submit={uploadExcelFile}>
                <UserUpload setUserExcelFile={setUserExcelFile} userExcelFile={userExcelFile} />
            </CommonDialog>


            <CommonDialog heading='Email Template' dialog='small' open={email} close={setEmail} submitText='Submit' submit={updateEmailTemplate}>
                <EmailTemplate setTemplate={setEmailTemplate} template={emailTemplate} />
            </CommonDialog>
        </section>
    )
}
