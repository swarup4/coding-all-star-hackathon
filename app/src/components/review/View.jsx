import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'


export default function View(props) {

    // const [allHackathon, setAllHackathon] = useState([])
    // const [hackathon, setHackathon] = useState([]);
    const [tab, setTab] = useState(0);
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const user = useSelector(store => store.user.data)


    useEffect(() => {
        const url = `${HOST_URL}submission/getApiDetails/${id}`
        axios.get(url).then(res => {
            setApi(res.data)
            // dispatch(setSubmission(res.data))
        }).catch(err => {
            console.log(err);
            // dispatch(setNotification({
            //     popup: true,
            //     status: 'error',
            //     message: err.response.data
            // }))
        })
    }, [])

    function selectTab(id) {
        setTab(id)
        // if (id != 0) {
        //     const list = allHackathon.filter(x => x.status == id);
        //     setHackathon(list)
        // } else {
        //     setHackathon(allHackathon);
        // }
    }


    return (
        <section className="relative py-24 bg-white">
            <div className="absolute top-0 left-0 w-full h-full theme-background"></div>
            <div className="container relative z-10 px-4 mx-auto">
                <ul className="flex flex-wrap mb-8 -mx-2 text-center">
                    <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(0)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 0 ? 'tab-active' : ''}`}>Details</a></li>
                    <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => selectTab(1)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 1 ? 'tab-active' : ''}`}>Code</a></li>
                </ul>
                <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
                    {Object.keys(api).length > 0 ? (
                        <div className="w-full md:w-full">
                            <div className="flex flex-wrap -m-3">

                                <div className="w-full md:w-2/3 p-3">
                                    <div className="py-6 border-b border-coolGray-100">
                                        <div className="w-full md:w-9/12">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:w-1/4 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                                                </div>
                                                <div className="w-full md:flex-1 p-3">
                                                    {api.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6 border-b border-coolGray-100">
                                        <div className="w-full md:w-9/12">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:w-1/4 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">Category</p>
                                                </div>
                                                <div className="w-full md:flex-1 p-3">
                                                    {api.category}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6 border-b border-coolGray-100">
                                        <div className="w-full md:w-9/12">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:w-1/4 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">API End Point</p>
                                                </div>
                                                <div className="w-full md:flex-1 p-3">
                                                    {api.apiEndPoint}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6 border-b border-coolGray-100">
                                        <div className="w-full md:w-9/12">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:w-1/4 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">API Version</p>
                                                </div>
                                                <div className="w-full md:flex-1 p-3">
                                                    {api.apiVersion}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6 border-b border-coolGray-100">
                                        <div className="w-full md:w-9/12">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:w-1/4 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">Documentation Link</p>
                                                </div>
                                                <div className="w-full md:flex-1 p-3">
                                                    {api.documentationLink}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6 border-b border-coolGray-100">
                                        <div className="w-full md:w-9/12">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:w-1/4 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">Programming Language</p>
                                                </div>
                                                <div className="w-full md:flex-1 p-3">
                                                    {api.programmingLanguage}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-6 border-b border-coolGray-100">
                                        <div className="w-full md:w-9/12">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:w-1/4 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                                </div>
                                                <div className="w-full md:flex-1 p-3">
                                                    {api.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full md:flex-1 p-3">
                                    <div className="py-6">
                                        <div className="w-full py-3">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-1/5 p-3"></div>
                                                <div className="w-3/5 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">API Code</p>
                                                </div>
                                                <a className="flex-1 p-3 cursor-pointer" onClick={() => codeDialogs('code')}>
                                                    <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="w-full py-3">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-1/5 p-3"></div>
                                                <div className="w-3/5 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">API Env Variable</p>
                                                </div>
                                                <a className="flex-1 p-3 cursor-pointer" onClick={() => codeDialogs('env')}>
                                                    <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="w-full py-3">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-1/5 p-3"></div>
                                                <div className="w-3/5 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">API Unit Test Cases</p>
                                                </div>
                                                <a className="flex-1 p-3 cursor-pointer" onClick={() => codeDialogs('test')}>
                                                    <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="w-full py-3">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-1/5 p-3"></div>
                                                <div className="w-3/5 p-3">
                                                    <p className="text-sm text-coolGray-800 font-semibold">Video Link</p>
                                                </div>
                                                <a className="flex-1 p-3 cursor-pointer" onClick={() => openModal()}>
                                                    <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''}
                </div>
            </div>
        </section>
    )
}
