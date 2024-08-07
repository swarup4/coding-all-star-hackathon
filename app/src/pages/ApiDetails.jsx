import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../axiosInstance'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HOST_URL } from '../constants'
import SubmissionDetails from '../components/submission/SubmissionDetails'
import CommonDialog from '../components/common/CommonDialog'
import Editor from '../components/submission/Editor'
import { setNotification } from '../store/notification/notificationSlice'
import { setSubmission } from '../store/submission/submissionSlice'


export default function ApiDetails() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [heading, setHeading] = useState('')
    const [type, setType] = useState('')
    const [apiCodes, setApiCodes] = useState('')


    function dialogType(data) {
        setIsOpen(data.isOpen)
        setType(data.type)
        if (data.type === 'code') {
            setHeading("Add API Code")
        } else if (data.type === 'env') {
            setHeading("Add Env Variable")
        } else {
            setHeading("Add API Test Case")
        }
        setApiCodes(data.code ? data.code : '')
    }

    function saveCode() {
        // let body = { status: true }
        let body = { }
        if(type === 'code'){
            body.code = apiCodes
        } else if(type === 'env') {
            body.envVariable = apiCodes
        } else {
            body.unitTest = apiCodes
        }

        axios.put(`${HOST_URL}submission/saveCode/${id}`, body).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: 'Code has submitted'
            }))
            dispatch(setSubmission(res.data.data))
            setApiCodes('')
            setIsOpen(false)
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    
    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                    <SubmissionDetails codeDialog={dialogType} />

                    <CommonDialog heading={heading} dialog='large' open={isOpen} close={setIsOpen} submitText='Submit' submit={saveCode}>
                        <Editor code={apiCodes} setCode={setApiCodes} type={type} />
                    </CommonDialog>
                </div>
            </div>
        </section>
    )
}