import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../axiosInstance'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { HOST_URL } from '../constants'
import { getInitial, randomColor } from '../components/helper'
import Leaderboard from '../components/hackathon/Leaderboard'
import Panel from '../components/hackathon/Panel'
import Participants from '../components/hackathon/Participants'
import Prizes from '../components/hackathon/Prizes'
import Schedule from '../components/hackathon/Schedule'
import ApiList from '../components/hackathon/ApiList'
import { setNotification } from '../store/notification/notificationSlice'
import { selectProject } from '../store/hackathon/hackathonSlice'


export default function Hackathon() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const project = useSelector(store => store.hackathon.project);
    const user = useSelector(store => store.user.data)
    const [tab, setTab] = useState('');

    useEffect(() => {
        // if (Object.keys(project).length === 0) {
            const url = `${HOST_URL}hackathon/getHackathon/false/${id}`
            axios.get(url).then(res => {
                dispatch(selectProject(res.data[0]))
            }).catch(err => {
                console.log(err)
                dispatch(setNotification({
                    popup: true,
                    status: 'error',
                    message: err.response.data
                }))
            })
        // }
    }, [])

    function getParticipate(applied) {
        for (let i of applied) {
            if (i._id === user.id) {
                return true;
            }
        }
        return false;
    }

    function participate(id) {
        const url = `${HOST_URL}hackathon/applyHackathon/${id}`;
        const body = { userId: user.id }
        axios.put(url, body).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: res.data.message
            }))
            dispatch(selectProject(res.data.data))
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    return (
        <>
            {Object.keys(project).length > 0 ? (
                <section className="py-16 bg-white" style={{ backgroundImage: 'url("../assets/flex-ui-assets/elements/pattern-white.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:items-center mb-12 -mx-4">
                            <div className="w-full md:w-1/2 2xl:w-5/12 px-4 mb-8 md:mb-0">
                                <div className="mx-auto md:ml-0 max-w-max overflow-hidden rounded-lg">
                                    <img src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Hackathon-Banner/${project.banner}`} alt="" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-yellow-500 font-medium uppercase bg-yellow-100 rounded-full shadow-sm">{project.theme}</div>
                                <div className="flex items-center">
                                    <p className="inline-block text-yellow-500 font-medium">{project.user.name}</p>
                                    <span className="mx-1 text-yellow-500">•</span>
                                    <p className="inline-block text-yellow-500 font-medium">{moment(project.createdAt).format('Do MMMM YYYY')}</p>
                                </div>
                                <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">{project.name}</h2>
                                <p className="mb-8 md:mb-12 text-lg md:text-xl font-medium text-coolGray-500">
                                    {project.heading}
                                </p>
                                <div className="flex items-center justify-between flex-wrap -mx-2">
                                    <div className="w-6/12 flex">
                                        <div className="w-auto px-2">
                                            {project.user.profilePics ? (
                                                <img src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Users/${project.user.profilePics}`} className='rounded-full h-20 w-20' />
                                            ) : (
                                                <div className={`flex items-center justify-center w-20 h-20 text-2xl font-medium rounded-full ${randomColor()}`}>{getInitial(project.user.name)}</div>
                                            )}
                                        </div>
                                        <div className="w-auto px-2 flex items-center">
                                            <h4 className="text-base md:text-lg font-bold text-coolGray-800">{project.user.name}</h4>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        {getParticipate(project.appliedUser) ? (
                                            <button type="button" onClick={() => navigate(`/dashboard/submission/${id}`)} className="float-right inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                                Create Submission
                                            </button>
                                            // <div className="tooltip" data-tip="hello">
                                            //     <button className="btn">Hover me</button>
                                            // </div>
                                        ) : (
                                            <button type="button" onClick={() => participate(id)} className="float-right inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                                Participate
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-3/12 px-4 mb-8">
                                <ul className="pb-6 mb-8 border-b border-coolGray-100">
                                    <li onClick={() => setTab('')} className={`text-coolGray-400 hover:text-coolGray-500 cursor-pointer ${tab === '' ? 'tab-active' : ''}`}><a className="inline-block py-2 px-2 font-semibold">Overview</a></li>
                                    <li onClick={() => setTab('prizes')} className={`text-coolGray-400 hover:text-coolGray-500 cursor-pointer ${tab === 'prizes' ? 'tab-active' : ''}`}><a className="inline-block py-2 px-2 font-semibold">Prizes</a></li>
                                    <li onClick={() => setTab('panel', project.panels)} className={`text-coolGray-400 hover:text-coolGray-500 cursor-pointer ${tab === 'panel' ? 'tab-active' : ''}`}><a className="inline-block py-2 px-2 font-semibold">Panel</a></li>
                                    <li onClick={() => setTab('leaderboard')} className={`text-coolGray-400 hover:text-coolGray-500 cursor-pointer ${tab === 'leaderboard' ? 'tab-active' : ''}`}><a className="inline-block py-2 px-2 font-semibold">Leaderboard</a></li>
                                    <li onClick={() => setTab('participants')} className={`text-coolGray-400 hover:text-coolGray-500 cursor-pointer ${tab === 'participants' ? 'tab-active' : ''}`}><a className="inline-block py-2 px-2 font-semibold">View Participants</a></li>
                                    <li onClick={() => setTab('apilist')} className={`text-coolGray-400 hover:text-coolGray-500 cursor-pointer ${tab === 'apilist' ? 'tab-active' : ''}`}><a className="inline-block py-2 px-2 font-semibold">My Submissions</a></li>
                                    {/* <li onClick={() => setTab('schedule')} className={`text-coolGray-400 hover:text-coolGray-500 cursor-pointer ${tab === 'schedule' ? 'tab-active' : ''}`}><a className="inline-block py-2 px-2 font-semibold">Schedule</a></li> */}
                                </ul>
                            </div>

                            <div className="w-full md:flex-1 px-4">
                                {tab === '' ? (
                                    <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
                                ) : ''}

                                {tab === 'apilist' ? (
                                    <ApiList />
                                ) : ''}

                                {tab === 'leaderboard' ? (
                                    <Leaderboard appliedUser={project.appliedUser} />
                                ) : ''}

                                {tab === 'prizes' ? (
                                    <Prizes />
                                ) : ''}

                                {tab === 'panel' ? (
                                    <Panel data={project.panels} />
                                ) : ''}

                                {/* {tab === 'schedule' ? (
                                    <Schedule />
                                ) : ''} */}

                                {tab === 'participants' ? (
                                    <Participants data={project.appliedUser} />
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </section>
            ) : ''}
        </>
    )
}
