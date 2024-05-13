import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SubmissionDetails from '../components/submission/SubmissionDetails'
import CommonDialog from '../components/common/CommonDialog'
import Editor from '../components/submission/Editor'
import { setNotification } from '../store/notification/notificationSlice'


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
    }

    function saveCode() {
        let body = { status: true }
        if(type === 'code'){
            body.code = apiCodes
        } else if(type === 'env') {
            body.envVariable = apiCodes
        } else {
            body.unitTest = apiCodes
        }

        axios.put(`http://localhost:3001/submission/saveCode/${id}`, body).then(res => {
            console.log(res.data.data);
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: 'Code has submitted'
            }))
            setApiCodes('')
            setIsOpen(false)
        }).catch(err => {
            console.log(err);
        })
    }

    
    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                    <SubmissionDetails codeDialogs={dialogType} />

                    <CommonDialog heading={heading} dialog='large' open={isOpen} close={setIsOpen} submitText='Submit' submit={saveCode}>
                        {/* <CodePanel  /> */}
                        <Editor code={apiCodes} setCode={setApiCodes} type={type} />
                    </CommonDialog>
                </div>
            </div>
        </section>
    )
}