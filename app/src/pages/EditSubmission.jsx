import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EditSubmissionForm from '../components/submission/EditSubmissionForm'

export default function EditSubmission() {
    const { id } = useParams();
    const user = useSelector(store => store.user.data)

    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                    <EditSubmissionForm apiId={id} userId={user.id} />
                </div>
            </div>
        </section>
    )
}
