import React, { useEffect, useState } from 'react'
import axios from '../../axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import { EyeIcon, CheckIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { setNotification } from '../../store/notification/notificationSlice'
import { randomColor, getInitial } from '../helper'
import CommonDialog from '../common/CommonDialog'
import View from '../review/View'
// import { setReview } from '../../store/review/reviewSlice'

export default function UserApiList() {

    const dispatch = useDispatch()
    const [api, setApi] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [reject, setReject] = useState(false)
    const [apiUserId, setApiUserId] = useState('')
    const [apiId, setApiId] = useState('')
    const [comment, setComment] = useState('')
    const user = useSelector(store => store.user.data)

    function getSubmittedApiList() {
        const url = `${HOST_URL}submission/getAllUserSubmittedApiList`
        axios.get(url).then(res => {
            setApi(res.data)
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    useEffect(() => {
        getSubmittedApiList();
    }, [])

    function viewDialog(id) {
        setApiId(id);
        setIsOpen(true)
    }

    function apiStatus(code) {
        if (code == 0) {
            return <span className="text-cyan-500">Pending Approval</span>
        } else if (code == 1) {
            return <span className="text-green-500">Accepted</span>
        } else {
            return <span className="text-red-500">Rejected</span>
        }
    }

    async function updateReview(body, status){
        try {
            const url = `${HOST_URL}review/addReview`
            await axios.post(url, body)
    
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: `Code ${status}`
            }))
            // dispatch(setReview({ totalReviewPoint: (reviewPoint - 1) }))
            getSubmittedApiList()
        } catch (err) {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        }
    }


    async function approveCode() {
        let body = {
            apiId: apiId,
            reviewerId: user.id,
            codeVerification: 1,
        }
        // await updateReview(body, 'Approve')
        setIsOpen(false)
    }

    async function rejectCode() {
        let body = {
            apiId: apiId,
            apiUserId: apiUserId,
            reviewerId: user.id,
            codeVerification: 2,
            comment: comment
        }
        // await updateReview(body, 'Reject')
        // setComment('')
        setReject(false)
    }

    function rejectDialog() {
        setIsOpen(false)
        setReject(true)
    }

    return (
        <div>
            <section className="bg-white py-4 admin-page-content overflow-auto">
                <div className="container px-4 mx-auto">
                    <div className="p-6 h-full overflow-hidden bg-white rounded-md">
                        <div className="pb-6 border-b border-coolGray-100">
                            <div className="flex flex-wrap items-center justify-between -m-2">
                                <div className="w-full md:w-auto p-2">
                                    <h2 className="text-coolGray-900 text-lg font-semibold">Add Prize</h2>
                                    <p className="text-xs text-coolGray-500 font-medium">Configure Prizes</p>
                                </div>
                            </div>
                        </div>


                        <div className="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
                            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 246px)' }}>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50 sticky top-0 z-10">
                                        <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                                            {/* <th className="px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                                <div className="flex items-center pl-2">
                                                    <p>USER</p>
                                                </div>
                                            </th> */}
                                            <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">Creator Name</th>
                                            <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">API Name</th>
                                            {/* <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">End Point</th> */}
                                            <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Programing Language</th>
                                            <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Status</th>
                                            <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Reviewer</th>
                                            <th className="whitespace-nowrap font-semibold text-xs text-coolGray-500 uppercase text-center">View</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {api.map((item, ind) => (
                                            <tr className="h-14 border-b border-coolGray-100" key={ind}>
                                                <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">{item.userName}</td>
                                                <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">{item.name}</td>
                                                {/* <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center">{item.apiEndPoint}</td> */}
                                                <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">{item.programmingLanguage}</td>
                                                <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-center">
                                                    {/* {item.apiStatus == 1 ? <span className="text-green-500">Accepted</span> : <span className="text-red-500">Rejected</span>} */}
                                                    {apiStatus(item.apiStatus)}
                                                </td>
                                                <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                                                    <p className="mb-1 text-xs text-coolGray-900 font-semibold">
                                                        {item.review.map((x, i) => (
                                                            <div className="tooltip tooltip-bottom mx-1 cursor-pointer" data-tip={x.name} key={i}>
                                                                <div className={`py-1 px-2 w-14 float-left font-medium rounded-3xl bg-coolGray-100`}>
                                                                    <span className='float-left text-coolGray-800 text-sm w-5'>
                                                                        {getInitial(x.name)}
                                                                    </span>
                                                                    <span className='float-left w-5'>
                                                                        {x.codeVerification == 1 ? <CheckIcon className='text-green-600 text-xs' /> : <XCircleIcon className='text-red-600 text-xs' />}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </p>
                                                </td>

                                                <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                                                    <a className='cursor-pointer' onClick={() => viewDialog(item._id)}>
                                                        <EyeIcon className='h-5 w-5 text-coolGray-400 stroke-2' />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <CommonDialog heading='Api Review' dialog='large' open={isOpen} close={setIsOpen}>
                <View apiId={apiId} />
            </CommonDialog> */}

            {isOpen && 
                <CommonDialog heading="Review Code" dialog='large' open={isOpen} close={setIsOpen} submitText='Approve' rejectText='Reject' submit={approveCode} reject={rejectDialog}>
                    <View apiId={apiId} />
                </CommonDialog>
            }

            {reject &&
                <CommonDialog heading="Comment" open={reject} close={setReject} submitText='Sumbit' submit={rejectCode}>
                    <textarea name='comment' placeholder="Give rejection comment" value={comment} onChange={ev => setComment(ev.target.value)}
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input"></textarea>
                </CommonDialog>
            }

        </div>
    )
}
