import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../axiosInstance';
import SubmissionForm from '../components/submission/SubmissionForm'
import { setNotification } from '../store/notification/notificationSlice'
import { HOST_URL } from '../constants'

export default function Submission() {

    const { id } = useParams();
    const dispatch = useDispatch()
    const user = useSelector(store => store.user.data)
    const project = useSelector(store => store.hackathon.project);
    const navigate = useNavigate()

    useEffect(() => {
        if (project.status == undefined) {
            const url = `${HOST_URL}hackathon/getHackathonInfo/${id}`
            axios.get(url).then(res => {
                if(!res.data.status){
                    dispatch(setNotification({
                        popup: true,
                        status: 'error',
                        message: 'This Hackathon is over'
                    }))
                    navigate('/dashboard');
                }
            }).catch(err => {
                console.log(err)
                dispatch(setNotification({
                    popup: true,
                    status: 'error',
                    message: err.response.data
                }))
            })
        }
    }, [])

    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">

                    <SubmissionForm hackathonId={id} userId={user.id} />

                </div>
            </div>
        </section>
    )
}
