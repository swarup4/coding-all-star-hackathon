import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import EnvFile from '../components/submission/EnvFile'
// import TestCase from '../components/submission/TestCase'
import SubmissionDetails from '../components/submission/SubmissionDetails'
import CommonDialog from '../components/common/CommonDialog'
// import CodePanel from '../components/submission/CodePanel'
import Editor from '../components/submission/Editor'


export default function ApiDetails() {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false)
    const [heading, setHeading] = useState('')
    const [type, setType] = useState('')
    const [apiCodes, setApiCodes] = useState('')


    function dialogType(data) {
        setIsOpen(data.isOpen)
        setType(data.type)
        if (data.type == 'code') {
            setHeading("Add API Code")
        } else if (data.type == 'env') {
            setHeading("Add Env Variable")
        } else {
            setHeading("Add API Test Case")
        }
    }

    function saveCode() {
        let body = { status: true }
        if(type == 'code'){
            body.code = apiCodes
        } else if(type == 'env') {
            body.envVariable = apiCodes
        } else {
            body.unitTest = apiCodes
        }

        axios.put(`http://localhost:3001/submission/saveCode/${id}`, body).then(res => {
            console.log(res.data.data);
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
                    <SubmissionDetails codeDialog={dialogType} />

                    {/* <Code />
                    <EnvFile />
                    <TestCase /> */}

                    <CommonDialog heading={heading} dialog='large' open={isOpen} close={setIsOpen} submitText='Approve' submit={saveCode}>
                        {/* <CodeView id={apiId} /> */}
                        {/* <CodePanel  /> */}
                        <Editor code={apiCodes} setCode={setApiCodes} type={type} />
                    </CommonDialog>
                </div>
            </div>
        </section>
    )
}