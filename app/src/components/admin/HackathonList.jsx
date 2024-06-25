import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import axios from '../../axiosInstance'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'
import { ArrowRightIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function HackathonList() {
    const dispatch = useDispatch()
    const [hackathon, setHackathon] = useState([]);
    const [deleteHackathon, setDeleteHackathon] = useState({});

    useEffect(() => {
        const url = `${HOST_URL}hackathon/getHackathonList`
        axios.get(url).then(res => {
            setHackathon(res.data);
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [deleteHackathon])

    function removeHackathon(id) {
        const url = `${HOST_URL}hackathon/deleteHackathon/${id}`
        axios.delete(url).then(res => {
            setDeleteHackathon(res.data.data);
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }


    return (
        <section className="bg-white py-4 overflow-auto admin-page-content">
            <div className="container px-4 mx-auto">

                <div className="flex flex-wrap items-center -mx-4 mb-12 md:mb-16">

                    {hackathon.map((item, ind) => (
                        <div className="flex flex-wrap items-center w-full px-4 mb-8 md:-mx-4" key={ind}>
                            <div className="w-full md:w-auto md:px-4">
                                <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                    <img className="w-full" src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Hackathon-Banner/${item.banner}`} alt="" style={{ height: '200px' }} />
                                </a>
                            </div>
                            <div className="w-full md:flex-1 md:px-4">
                                <div className="block mb-2 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold">
                                    <span>{item.name}</span>

                                    <div className='float-right'>
                                        <Link to={`/admin/editHackathon/${item._id}`} style={{ lineHeight: '30px' }} className="inline-flex mr-5 items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold">
                                            <span className="mr-2">Edit</span>
                                            <PencilSquareIcon className='h-5 w-5 stroke-2' />
                                        </Link>

                                        <a onClick={() => removeHackathon(item._id)} style={{ lineHeight: '30px' }} className="inline-flex cursor-pointer items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold">
                                            <span className="mr-2">Delete</span>
                                            <TrashIcon className='h-5 w-5 stroke-2' />
                                        </a>
                                    </div>
                                </div>
                                <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">{item.heading}</p>
                                <div className="mb-4">
                                    <a className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm" href="#">{item.theme}</a>
                                </div>
                                <p className="mb-2 text-coolGray-500 font-medium">{item.user.name} • {moment(item.createdAt).format('Do MMMM YYYY')}</p>
                                <Link to={`/dashboard/hackathon/${item._id}`} className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold">
                                    <span className="mr-2">View Hackathon</span>
                                    <ArrowRightIcon className='h-5 w-5 stroke-2' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
