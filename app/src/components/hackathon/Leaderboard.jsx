import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../../axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { setNotification } from '../../store/notification/notificationSlice'

export default function Leaderboard(props) {

    const dispatch = useDispatch()
    const [point, setPoint] = useState([])
    const [allPoint, setAllPoint] = useState([]);

    useEffect(() => {
        const url = `${HOST_URL}point/getLeaderboard`;
        axios.get(url).then(res => {
            setPoint(res.data)
            setAllPoint(res.data)
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])

    function randomColor() {
        let colors = [
            'text-violet-600 bg-violet-200',
            'text-green-600 bg-green-200',
            'text-red-600 bg-red-200',
            'text-yellow-600 bg-yellow-200',
            'text-orange-600 bg-orange-200',
            'text-teal-600 bg-teal-200',
            'text-cyan-600 bg-cyan-200',
            'text-blue-600 bg-blue-200',
            'text-rose-600 bg-rose-200',
        ]
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    }

    function getInitial(name) {
        let arr = name.split(' ')
        let initial = arr[0][0] + arr[1][0]
        return initial;
    }

    function searchText(text) {
        const searchList = allPoint.filter(x => JSON.stringify(x).toLowerCase().includes(text.toLowerCase()));
        setPoint(searchList)
    }


    return (
        <section className="bg-coolGray-50 py-4 bs-section-dragged">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between -m-2 mb-4">
                    <div className="w-full md:w-1/2 p-2">
                        <p className="font-semibold text-xl text-coolGray-800">Leaderboard</p>
                        <p className="font-medium text-sm text-coolGray-500">{props.appliedUser.length} Participants</p>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <div className="relative md:max-w-max md:ml-auto">
                            <MagnifyingGlassIcon className="absolute left-3 transform top-1/2 -translate-y-1/2 stroke-2" width="16" height="16" />
                            <input type="text" placeholder="Search" name="search" onChange={ev => searchText(ev.target.value)} className="w-full md:w-64 pl-8 pr-4 py-2 text-sm text-coolGray-400 font-medium outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                        </div>
                    </div>
                </div>
                <div className="mb-6 border border-coolGray-100" />
                <div className="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
                    <div className="overflow-y-auto" style={{ maxHeight: '437px' }}>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 sticky top-0">
                                <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                                    <th className="px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                        <div className="flex items-center pl-2">
                                            <p>USER</p>
                                        </div>
                                    </th>
                                    <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Rank</th>
                                    <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Points</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {point.map((item, ind) => (
                                    <tr className="h-14 border-b border-coolGray-100" key={ind}>
                                        <td className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <div className={`flex items-center justify-center w-10 h-10 text-base font-medium rounded-md  ${randomColor()}`}>{getInitial(item.name)}</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">{item.name}</p>
                                                    <p className="text-xs font-medium text-coolGray-500">{item.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center">{item.rank}</td>
                                        <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">{item.point}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
