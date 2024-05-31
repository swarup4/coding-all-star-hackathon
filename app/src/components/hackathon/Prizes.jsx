import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axiosInstance'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Prizes() {
    const dispatch = useDispatch()
    const [prize, setPrize] = useState([]);
    const [tab, setTab] = useState('first');
    const [prizeDetails, setPrizeDetails] = useState({});

    useEffect(() => {
        const url = `${HOST_URL}prize/getPrize`;
        axios.get(url).then(res => {
            setPrize(res.data)

            const details = prize.filter(x => x.category == tab)
            setPrizeDetails(details[0])
        }).catch(err => {
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])

    function selectTab(name) {
        setTab(name)
        const details = prize.filter(x => x.category == name)
        setPrizeDetails(details[0])
    }

    return (
        <section className="relative pb-24 bg-white theme-background">
            <div className="w-full px-2 py-16 sm:px-0">
                <ul className="flex flex-wrap mb-8 -mx-2 text-center">
                    {prize.map((x, ind) => (
                        <li className="w-full md:w-auto px-2 cursor-pointer" key={ind}><a onClick={() => selectTab(x.category)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == x.category ? 'tab-active' : ''}`}>{x.name}</a></li>
                    ))}
                </ul>

                {Object.keys(prizeDetails).length > 0 ? (
                    <>
                        <div class="flex flex-wrap w-full p-5 mb-8 text-coolGray-300 text-left" href="#">
                            <div class="w-full md:w-auto lg:w-auto lg:pr-10">
                                <h3 class="mb-4 text-xl text-coolGray-900 font-bold">{prizeDetails.description.question}</h3>
                                <p class="text-coolGray-500 font-medium">{prizeDetails.description.answer}</p>
                            </div>
                        </div>
                    </>
                ) : ''}

            </div>
        </section >
    )
}
