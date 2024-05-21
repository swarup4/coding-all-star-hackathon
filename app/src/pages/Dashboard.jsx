import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import axios from '../axiosInstance'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { selectProject } from '../store/hackathon/hackathonSlice'
import { HOST_URL } from '../constants'
import { setNotification } from '../store/notification/notificationSlice'


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
        dispatch(selectProject(project))
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
                            <img className="absolute top-1/2 left-4 transform -translate-y-1/2" src={"/flex-ui-assets/elements/blog/search.svg"} alt="" />
                            <input type="text" placeholder="Search" onChange={(ev) => search(ev.target.value)} className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" />
                        </div>
                    </div>
                    <ul className="flex flex-wrap mb-8 -mx-2 text-center">
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(0)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 0 ? 'tab-active' : ''}`}>All Hackathons</a></li>
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(1)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 1 ? 'tab-active' : ''}`}>Open</a></li>
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(2)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 2 ? 'tab-active' : ''}`}>Featured</a></li>
                        <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(3)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 3 ? 'tab-active' : ''}`}>Past</a></li>
                    </ul>
                    <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
                        {hackathon.map((item, ind) => (
                            <div className="w-full md:w-1/2 px-4 mb-8" key={ind}>
                                <a className="block mb-6 overflow-hidden rounded-md" onClick={() => select(item)}>
                                    <img className="w-full" src={window.location.origin + "/flex-ui-assets/banner/" + item.banner[0]} alt="" style={{ height: '400px' }} />
                                </a>
                                <div className="mb-4">
                                    <a className="inline-block py-1 px-3 text-xs leading-5 text-yellow-500 hover:text-yellow-600 font-medium uppercase bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-sm" href="#">{item.theme}</a>
                                </div>
                                <p className="mb-2 text-coolGray-500 font-medium">{item.user.name} • {moment(item.createdAt).format('Do MMMM YYYY')}</p>
                                <a className="block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">{item.name}</a>

                                {getParticipate(item.appliedUser) ? (
                                    <div>
                                        <svg className="relative mr-2 inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.4732 4.80667C12.4112 4.74418 12.3375 4.69458 12.2563 4.66074C12.175 4.62689 12.0879 4.60947 11.9999 4.60947C11.9119 4.60947 11.8247 4.62689 11.7435 4.66074C11.6623 4.69458 11.5885 4.74418 11.5266 4.80667L6.55989 9.78L4.47322 7.68667C4.40887 7.62451 4.33291 7.57563 4.24967 7.54283C4.16644 7.51003 4.07755 7.49394 3.9881 7.49549C3.89865 7.49703 3.81037 7.51619 3.72832 7.55185C3.64627 7.58751 3.57204 7.63898 3.50989 7.70333C3.44773 7.76768 3.39885 7.84364 3.36605 7.92688C3.33324 8.01011 3.31716 8.099 3.31871 8.18845C3.32025 8.2779 3.3394 8.36618 3.37507 8.44823C3.41073 8.53028 3.4622 8.60451 3.52655 8.66667L6.08655 11.2267C6.14853 11.2892 6.22226 11.3387 6.3035 11.3726C6.38474 11.4064 6.47188 11.4239 6.55989 11.4239C6.64789 11.4239 6.73503 11.4064 6.81627 11.3726C6.89751 11.3387 6.97124 11.2892 7.03322 11.2267L12.4732 5.78667C12.5409 5.72424 12.5949 5.64847 12.6318 5.56414C12.6688 5.4798 12.6878 5.38873 12.6878 5.29667C12.6878 5.2046 12.6688 5.11353 12.6318 5.02919C12.5949 4.94486 12.5409 4.86909 12.4732 4.80667Z" fill="#2AD168"></path>
                                        </svg>
                                        <span>Applied</span>
                                    </div>
                                ) : (
                                    <a onClick={() => participate(item._id)} className="cursor-pointer inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold po">
                                        <span className="mr-3">Participate</span>
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                )}

                            </div>
                        ))}
                    </div>
                    <a className="flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-yellow-50 font-medium bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 md:max-w-max rounded-md" href="#">
                        <span className="mr-3">View more</span>
                        <svg className="text-yellow-50" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7583 4.40833C10.6809 4.33023 10.5887 4.26823 10.4871 4.22592C10.3856 4.18362 10.2767 4.16183 10.1667 4.16183C10.0567 4.16183 9.94773 4.18362 9.84619 4.22592C9.74464 4.26823 9.65247 4.33023 9.575 4.40833L6.83333 7.15833V0.833333C6.83333 0.61232 6.74554 0.400358 6.58926 0.244078C6.43297 0.0877975 6.22101 0 6 0C5.77899 0 5.56702 0.0877975 5.41074 0.244078C5.25446 0.400358 5.16667 0.61232 5.16667 0.833333V7.15833L2.425 4.40833C2.26808 4.25141 2.05525 4.16326 1.83333 4.16326C1.61141 4.16326 1.39859 4.25141 1.24167 4.40833C1.08475 4.56525 0.99659 4.77808 0.99659 5C0.99659 5.22192 1.08475 5.43475 1.24167 5.59167L5.40833 9.75833C5.48759 9.8342 5.58104 9.89367 5.68333 9.93333C5.78308 9.97742 5.89094 10.0002 6 10.0002C6.10906 10.0002 6.21692 9.97742 6.31667 9.93333C6.41896 9.89367 6.51241 9.8342 6.59167 9.75833L10.7583 5.59167C10.8364 5.5142 10.8984 5.42203 10.9407 5.32048C10.9831 5.21893 11.0048 5.11001 11.0048 5C11.0048 4.88999 10.9831 4.78107 10.9407 4.67952C10.8984 4.57797 10.8364 4.4858 10.7583 4.40833Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    )
}
