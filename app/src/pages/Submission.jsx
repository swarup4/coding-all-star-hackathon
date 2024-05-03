import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Code from '../components/submission/Code'
import EnvFile from '../components/submission/EnvFile'
import TestCase from '../components/submission/TestCase'
import SubmissionForm from '../components/submission/SubmissionForm'

export default function Submission() {

    const { id } = useParams();
    const user = useSelector(store => store.user.data)

    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                    
                    <SubmissionForm />

                    <div className="pt-6 border-b border-coolGray-100">
                        <div className="w-full md:w-9/12">
                            <div className="flex flex-wrap -m-3">
                                <div className="w-full md:w-1/3 p-3">
                                    <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                    <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                                </div>
                                <div className="w-full md:flex-1 p-3">
                                    <button className='mx-2 px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button' onClick={() => document.getElementById('code').showModal()}>Code</button>
                                    <button className='mx-2 px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button' onClick={() => document.getElementById('env-file').showModal()}>Env File</button>
                                    <button className='mx-2 px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button' onClick={() => document.getElementById('test-case').showModal()}>Test Case</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Code />
                    <EnvFile />
                    <TestCase />

                </div>
            </div>
        </section>
    )
}
