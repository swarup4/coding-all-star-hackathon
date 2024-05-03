import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../../constants'


const initialValues = {
    code: ''
}
const schema = object({
    code: string().required('Enter your API Code')
})

export default function Code() {

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            console.log(values)
            // signup(values);
        }
    })
    return (
        <dialog id="code" className="modal">
            <div className="modal-box bg-white w-full max-w-7xl p-6 sm:p-10 mx-auto bg-coolGray-50 rounded-lg">

                <div className="inline-block float-right w-1/6 modal-action my-0">
                    <a className=" px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">x</a>
                </div>
                {/* <form>
                    <div className='inline-block w-1/2'>
                        <h3 className="font-bold text-lg text-coolGray-800">API Code</h3>
                        <p className="text-xs text-coolGray-500 font-medium">Enter Your API Code</p>
                    </div>
                    <div className='w-1/2 float-right'>
                        <div className="inline-block float-right w-1/6 modal-action my-0">
                            <button className=" px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">Cancel</button>
                        </div>
                        <button type="submit" className="inline-block mr-3 float-right w-1/6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">Send</button>
                    </div>

                    <div className="pt-6 pb-4">
                        <div className="w-full">
                            <div className="flex flex-wrap -m-3">
                                <div className="w-full md:flex-1 p-3">
                                    <textarea name='description' value={values.code} onChange={handleChange} onBlur={handleBlur}
                                        className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" style={{ height: 'calc(100vh - 247px)' }} />
                                    {errors.code && touched.code ? (
                                        <p className='mt-1 text-red-500'>{errors.password}</p>
                                    ) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
