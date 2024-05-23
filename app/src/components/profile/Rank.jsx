import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Rank() {
    const navigate = useNavigate()
    const user = useSelector(store => store.user.data)
    const count = useSelector(store => store.submission.data)

    return (
        <section className="bg-coolGray-50 p-8">
            <div className="w-full md:w-1/3 p-3 m-auto">
                <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md overflow-hidden">
                    <div className="flex flex-wrap justify-between items-center p-6 pb-4 -m-2 border-b border-coolGray-100">
                        <div className="w-full lg:w-auto p-2">
                            <div className="flex flex-wrap items-center -m-2">
                                <div className="w-auto p-2">
                                    <img src="flex-ui-assets/images/dashboard/cards/avatar.png" alt="" />
                                </div>
                                <div className="w-auto p-2">
                                    <h2 className="text-sm font-medium text-coolGray-900">{user.name}</h2>
                                    <h3 className="text-xs font-medium text-coolGray-400">{user.role}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-auto p-2">
                            <button onClick={() => navigate('edit')} className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button">
                                <PencilSquareIcon className="mr-2 w-5 h-5 inline stroke-2" />
                                <span>Edit</span>
                            </button>
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
                    <div className="flex flex-wrap justify-between p-6 -m-2">
                        <div className="w-full lg:w-auto p-2">
                            <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button">
                                <p>Message</p>
                            </button>
                        </div>
                        <div className="w-full lg:w-auto p-2">
                            <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
