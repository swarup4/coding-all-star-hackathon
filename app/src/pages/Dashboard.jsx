import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import axios from '../axiosInstance'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { selectProject } from '../store/hackathon/hackathonSlice'
import { HOST_URL } from '../constants'
import { setNotification } from '../store/notification/notificationSlice'
import { CheckIcon, MagnifyingGlassIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import EmptyContent from '../components/common/EmptyContent'


export default function Dashboard() {

    const [allHackathon, setAllHackathon] = useState([])
    const [hackathon, setHackathon] = useState([]);
    const [tab, setTab] = useState(0);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store => store.user.data)

    function getHackathonList() {
        const url = `${HOST_URL}hackathon/getHackathonList`
        axios.get(url).then(res => {
            setHackathon(res.data);
            setAllHackathon(res.data)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }
    
    useEffect(() => {
        getHackathonList()
    }, [])

    function participate(id) {
        const url = `${HOST_URL}hackathon/applyHackathon/${id}`;
        const body = { userId: user.id }
        axios.put(url, body).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: res.data.message
            }))
            getHackathonList()
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    function selectTab(id) {
        setTab(id)
        if (id != 0) {
            const list = allHackathon.filter(x => x.status == id);
            setHackathon(list)
        } else {
            setHackathon(allHackathon);
        }
    }

    function search(text) {
        setTab(0)
        const searchList = allHackathon.filter(x => x.name.includes(text));
        setHackathon(searchList);
    }

    function select(project) {
        // dispatch(selectProject(project))
        navigate(`hackathon/${project._id}`)
    }

    function getParticipate(applied) {
        for (let i of applied) {
            if (i._id == user.id) {
                return true;
            }
        }
    }

    return (
        <div>
            <section className="relative py-24 bg-white">
                <div className="absolute top-0 left-0 w-full h-full theme-background"></div>
                <div className="container relative z-10 px-4 mx-auto">
                    <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-full shadow-sm">HACKATHONS</span>
                        <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Our mission is to make knowledge and news accessible for everyone.</h3>
                        <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">Unlock Your Inner Innovator: Join the Revolutionary All Stars Hackathon for Simplified Technology and Transparent Innovation!</p>
                        <div className="relative mx-auto md:w-80">
                            <MagnifyingGlassIcon className="absolute left-3 text-coolGray-500 transform top-1/2 -translate-y-1/2 h-5 w-5 stroke-2" />
                            <input type="text" placeholder="Search" onChange={(ev) => search(ev.target.value)} className="w-full py-3 pl-12 pr-4 text-coolGray-500 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" />
                        </div>
                    </div>
                    <ul className="flex flex-wrap mb-8 -mx-2 text-center">
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(0)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 0 && 'tab-active'}`}>All Hackathons</a></li>
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(1)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 1 && 'tab-active'}`}>Open</a></li>
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(2)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 2 && 'tab-active'}`}>Featured</a></li>
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(3)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 3 && 'tab-active'}`}>Past</a></li>
                    </ul>
                    <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
                        {hackathon.length > 0 ? (
                            <>
                                {hackathon.map((item, ind) => (
                                    <div className="w-full md:w-1/2 px-4 mb-8" key={ind}>
                                        <a className="block mb-6 overflow-hidden rounded-md cursor-pointer" onClick={() => select(item)}>
                                            <img className="w-full" src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Hackathon-Banner/${item.banner}`} alt="" style={{ height: '400px' }} />
                                        </a>
                                        <div className="mb-4">
                                            <span className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm">{item.theme}</span>
                                        </div>
                                        <p className="mb-2 text-coolGray-500 font-medium">{item.user.name} • {moment(item.createdAt).format('Do MMMM YYYY')}</p>
                                        <a onClick={() => select(item)} className="block mb-4 cursor-pointer text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">{item.name}</a>

                                        {getParticipate(item.appliedUser) ? (
                                            <div>
                                                <CheckIcon className='relative mr-2 text-green-500 inline h-5 w-5 stroke-2' />
                                                <span>Applied</span>
                                            </div>
                                        ) : (
                                            <a onClick={() => participate(item._id)} className="cursor-pointer inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold po">
                                                <span className="mr-3">Participate</span>
                                                <ArrowRightIcon className='text-yellow-500 h-5 w-5 stroke-2' />
                                            </a>
                                        )}

                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className='flex flex-wrap w-full h-52'>
                                <EmptyContent heading="No hackathon found" content="Please try again later"/>
                            </div>
                        )}
                    </div>
                    {/* <a className="flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-yellow-50 font-medium bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 md:max-w-max rounded-md" href="#">
                        <span className="mr-3">View more</span>
                        <ArrowDownIcon className="w-4 h-4 stroke-2" />
                    </a> */}
                </div>
            </section>
        </div>
    )
}
