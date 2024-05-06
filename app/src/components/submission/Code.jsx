import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../../constants'
import Editor from './Editor'


const initialValues = {
    code: ''
}
const schema = object({
    code: string().required('Enter your API Code')
})

export default function Code() {

    const [apiCodes, setApiCodes] = useState('')

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            console.log(values)
        }
    })

    function saveCode() {
        console.log(apiCodes);
    }

    return (
        <dialog id="code" className="modal">
            <div className="modal-box bg-white w-full max-w-7xl p-6 sm:p-10 mx-auto bg-coolGray-50 rounded-lg">

                <div className="inline-block float-right w-1/6 modal-action my-0">
                    <a className=" px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">x</a>
                </div>
                <Editor code={apiCodes} setCode={setApiCodes} />
                
                <button onClick={() => saveCode()} className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">Submit</button>
            </div>
        </dialog>
    )
}
