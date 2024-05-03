import React from 'react'
import Code from '../components/submission/Code'
import EnvFile from '../components/submission/EnvFile'
import TestCase from '../components/submission/TestCase'
import SubmissionDetails from '../components/submission/SubmissionDetails'

export default function ApiDetails() {
    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                    <SubmissionDetails />

                    <Code />
                    <EnvFile />
                    <TestCase />
                </div>
            </div>
        </section>
    )
}
