import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import Code from '../components/submission/Code'
// import EnvFile from '../components/submission/EnvFile'
// import TestCase from '../components/submission/TestCase'
import SubmissionForm from '../components/submission/SubmissionForm'

export default function Submission() {

    const { id } = useParams();
    const user = useSelector(store => store.user.data)

    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">

                    <SubmissionForm hackathonId={id} userId={user.id} />

                    {/* <Code />
                    <EnvFile />
                    <TestCase /> */}

                </div>
            </div>
        </section>
    )
}
