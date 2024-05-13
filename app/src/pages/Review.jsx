import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { HOST_URL } from '../constants'
import { EyeIcon, CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import CommonDialog from '../components/common/CommonDialog'
import CodeView from '../components/review/CodeView'
import { setNotification } from '../store/notification/notificationSlice'
import { setReview } from '../store/review/reviewSlice'

export default function Review() {
    const dispatch = useDispatch()
    const [allApiList, setAllApiList] = useState([]);
    const [apiList, setApiList] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [reject, setReject] = useState(false)
    const [apiId, setApiId] = useState('')
    const [apiUserId, setApiUserId] = useState('')
    const [comment, setComment] = useState('')
    const user = useSelector(store => store.user.data)
    const reviewPoint = useSelector(store => store.review.data?.totalReviewPoint)

    function getSubmittedApiList() {
        const url = `${HOST_URL}submission/getAllSubmittedApiList/${user.id}`
        axios.get(url).then(res => {
            setApiList(res.data)
            setAllApiList(res.data)
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
        getSubmittedApiList()
    }, [])

    function viewDialog(id, userId) {
        setApiId(id)
        setApiUserId(userId);
        setIsOpen(true)
    }

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

    function approveCode() {
        let body = {
            apiId: apiId,
            apiUserId: apiUserId,
            reviewerId: user.id,
            codeVerification: 1,
        }
        const url = `${HOST_URL}review/addReview`
        axios.post(url, body).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: 'Code Approve'
            }))
            dispatch(setReview({ totalReviewPoint: (reviewPoint - 1) }))
            getSubmittedApiList()
            setIsOpen(false)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }
    function rejectCode() {
        let body = {
            apiId: apiId,
            apiUserId: apiUserId,
            reviewerId: user.id,
            codeVerification: 2,
            comment: comment
        }
        const url = `${HOST_URL}review/addReview`
        axios.post(url, body).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: 'Code Rejected'
            }))
            setReject(false)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    function rejectDialog() {
        setIsOpen(false)
        setReject(true)
    }

    function reviewEligible(review) {
        if (review.length === 0 || review.length === 1) {
            if (review.length === 1) {
                for (const item of review) {
                    return (item.reviewerId !== user.id) ? true : false
                }
            }
            return true
        } else {
            return false
        }
    }

    function searchText(text) {
        const searchList = allApiList.filter(x => JSON.stringify(x).toLowerCase().includes(text.toLowerCase()));
        setApiList(searchList)
    }

    return (
        <>
            <section className="bg-coolGray-50 py-4 bs-section-dragged">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between -m-2 mb-4">
                        <div className="w-full md:w-1/2 p-2">
                            <p className="font-semibold text-xl text-coolGray-800">Api List</p>
                            <p className="font-medium text-sm text-coolGray-500">Total Count {apiList.length}</p>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <div className="relative md:max-w-max md:ml-auto">
                                <MagnifyingGlassIcon className="absolute left-3 transform top-1/2 -translate-y-1/2 stroke-2" width="16" height="16" />
                                <input type="text" name='search' placeholder="Search" onChange={ev => searchText(ev.target.value)} className="w-full md:w-64 pl-8 pr-4 py-2 text-sm text-coolGray-400 font-medium outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 border border-coolGray-100"></div>
                    <div className="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                                        <th className="px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                            <div className="flex items-center">
                                                <p>User Name</p>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">Manager</th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">API End Point</th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Version</th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">Language</th>
                                        {/* <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">Refunds</th> */}
                                        <th className="whitespace-nowrap font-semibold text-xs text-coolGray-500 uppercase text-center"></th>
                                    </tr>

                                    {apiList.map((item, ind) => (
                                        <tr className="h-18 border-t border-coolGray-100" key={ind}>
                                            <td className="whitespace-nowrap px-4 bg-white text-left">
                                                <div className="flex items-center -m-2">
                                                    <div className="w-auto p-2">
                                                        <div className={`flex items-center justify-center w-10 h-10 text-base font-medium rounded-md ${randomColor()}`}>{getInitial(item.name)}</div>
                                                    </div>
                                                    <div className="w-auto p-2">
                                                        <p className="text-xs font-semibold text-coolGray-800">{item.name}</p>
                                                        <p className="text-xs font-medium text-coolGray-500">{item.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">{item.manager}</td>
                                            <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">{item.apiEndPoint}</td>
                                            <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">{item.apiVersion}</td>
                                            <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">{item.programmingLanguage}</td>
                                            <td className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                                                {reviewPoint > 0 ? (
                                                    <>
                                                        {reviewEligible(item.review) ? (
                                                            <a className='cursor-pointer' onClick={() => viewDialog(item.apiId, item.userId)}>
                                                                <EyeIcon className='ml-auto h-4 w-4 text-coolGray-400 stroke-2' />
                                                            </a>
                                                        ) : (
                                                            <CheckIcon className='text-green-500 stroke-2' />
                                                        )}
                                                    </>
                                                ) : ''}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >

            <CommonDialog heading="Add Code" dialog='large' open={isOpen} close={setIsOpen} submitText='Approve' rejectText='Reject' submit={approveCode} reject={rejectDialog}>
                <CodeView id={apiId} />
            </CommonDialog>

            {reject ? (
                <CommonDialog heading="Comment" open={reject} close={setIsOpen} submitText='Sumbit' submit={rejectCode}>
                    <textarea name='comment' placeholder="Give rejection comment" value={comment} onChange={ev => setComment(ev.target.value)}
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input"></textarea>
                </CommonDialog>
            ) : ''
            }
        </>
    )
}
