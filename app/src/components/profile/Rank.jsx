import React, { useEffect, useState } from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from '../../axiosInstance'
import { HOST_URL } from '../../constants'
import { getInitial, randomColor } from '../helper'
import { setNotification } from '../../store/notification/notificationSlice'

export default function Rank() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ranks, setRanks] = useState()
    const user = useSelector(store => store.user.data)
    const count = useSelector(store => store.submission.data)

    useEffect(() => {
        const url = `${HOST_URL}point/getRank/${user.id}`
        axios.get(url).then(res => {
            setRanks(res?.data[0]?.rank)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])


    return (
        <section className="bg-coolGray-50 p-8">
            <div className="w-full md:w-1/3 p-3 m-auto">
                <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md overflow-hidden">
                    <div className="flex flex-wrap justify-between items-center p-6 pb-4 -m-2 border-b border-coolGray-100">
                        <div className="w-full lg:w-auto p-2">
                            <div className="flex flex-wrap items-center -m-2">
                                <div className="w-auto p-2">
                                    {user.profilePics ? (
                                        <>
                                            <img src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Users/${user.profilePics}`} className='rounded-full h-20 w-20' />
                                        </>
                                    ) : (
                                        <>
                                            <div className={`flex items-center justify-center w-20 h-20 text-3xl font-medium rounded-full ${randomColor()}`}>{getInitial(user.name)}</div>
                                        </>
                                    )}
                                </div>
                                <div className="w-auto p-2">
                                    <h2 className="text-sm font-medium text-coolGray-900">{user.name}</h2>
                                    <h3 className="text-xs font-medium text-coolGray-400">{user.role}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center lg:w-auto p-2">
                            <span className="text-base flex font-medium text-coolGray-400 mr-3">Rank</span> 
                            <div className='h-10 w-10 items-center flex justify-center text-green-600 bg-green-200 rounded-full'>{ranks}</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-4 py-6 border-b border-coolGray-100 -m-2">
                        <div className="w-full md:w-1/3 lg:w-1/3 p-2">
                            <div className="text-center">
                                <p className="mb-1 text-xs text-coolGray-900 font-semibold">{count.submission}</p>
                                <p className="text-xs text-coolGray-400 font-medium">Submission</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/3 p-2">
                            <div className="text-center">
                                <p className="mb-1 text-xs text-coolGray-900 font-semibold">{count.approve}</p>
                                <p className="text-xs text-coolGray-400 font-medium">Approve</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/3 p-2">
                            <div className="text-center">
                                <p className="mb-1 text-xs text-coolGray-900 font-semibold">{count.reject}</p>
                                <p className="text-xs text-coolGray-400 font-medium">Reject</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-end py-4 px-6 -m-2">
                        <div className="w-full lg:w-auto p-2">
                            <button onClick={() => navigate('edit')} className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-white border border-yellow-500 bg-yellow-500 hover:bg-yellow-600 border border-coolGray-200 rounded-md shadow-button">
                                <PencilSquareIcon className="mr-2 h-5 w-5 stroke-2 inline" />
                                <span>Edit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
