import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import { getInitial } from '../helper'
import { Link, useNavigate } from 'react-router-dom'
import { setReview } from '../../store/review/reviewSlice'
import { setNotification } from '../../store/notification/notificationSlice'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import CommonDialog from '../common/CommonDialog'
import View from '../review/View'

export default function ApiList() {

    const navigate = useNavigate()
    const [workingProject, setWorkingProject] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const reviewPoint = useSelector(store => store.review.data)
    const user = useSelector(store => store.user.data)

    useEffect(() => {
        const url = `${HOST_URL}submission/getApiList/${user.id}`;
        axios.get(url).then(res => {
            setWorkingProject(res.data)
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])

    function submitApi(id) {
        const url = `${HOST_URL}submission/submitApi/${id}`;
        axios.put(url).then(res => {
            let pointInc = (reviewPoint?.totalReviewPoint ?? 0) + 2
            dispatch(setReview({ totalReviewPoint: pointInc }))
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: 'API has submitted'
            }))
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
        <div>
            {workingProject.map((item, ind) => (
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-3" key={ind}>
                    <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                        <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                            <img className="mb-4" src="flex-ui-assets/images/dashboard/cards/avatar.png" alt="" />
                            <h2 className="text-sm font-medium text-coolGray-900">{item.name}</h2>
                            <h3 className="mb-3 text-xs font-medium text-coolGray-400">{item.programmingLanguage}</h3>

                            {item.status ? (
                                <div className='w-full'>

                                    {item.status ? (
                                        <div className='w-full flex justify-center'>
                                            <div className='md:w-1/2'>
                                                <button onClick={() => setIsOpen(true)} className="px-4 py-2 w-11/12 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">
                                                    <span>View</span>
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='md:w-1/2 float-left'>
                                                <button className="px-4 py-2 w-11/12 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md" onClick={() => submitApi(item._id)}>
                                                    <svg className="mr-2 inline-block" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z" fill="#F0FDF4" /></svg>
                                                    <p className='inline'>Submit</p>
                                                </button>
                                            </div>
                                            <div className='md:w-1/2 float-left'>
                                                <button className="float-right w-11/12 px-4 py-2 font-medium text-sm border rounded-md" onClick={() => navigate(`/dashboard/details/${item._id}`)}>
                                                    <PencilSquareIcon className="mr-2 w-5 h-5 inline stroke-2" />
                                                    <span className='inline'>Edit</span>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <button className="flex items-center px-4 py-2 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md" onClick={() => navigate(`/dashboard/details/${item._id}`)}>
                                    <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z" fill="#F0FDF4" /></svg>
                                    <p>Add API Code</p>
                                </button>
                            )}

                        </div>
                        <div className="flex flex-wrap p-2 justify-between">
                            <div className="w-full md:w-1/3 p-2">
                                <div className="text-center">
                                    <p className="mb-1 text-xs text-coolGray-900 font-semibold">Api Version</p>
                                    <p className="text-xs text-coolGray-400 font-medium">{item.apiVersion}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-2">
                                <div className="text-center">
                                    <p className="mb-1 text-xs text-coolGray-900 font-semibold">Status</p>
                                    <p className="text-xs text-coolGray-400 font-medium">{item.status ? 'Submitted' : 'In Progress'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap p-2 justify-between">
                            <div className="w-full md:w-1/3 p-2">
                                <div className="text-center">
                                    <p className="mb-1 text-xs text-coolGray-900 font-semibold">Reviewer</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-2">
                                <div className="text-center">
                                    <p className="flex mb-1 place-content-around text-xs text-coolGray-900 font-semibold items-center">
                                        {item.reviewUser.map((x, i) => (
                                            <div className={`flex items-center justify-center w-7 h-7 font-medium rounded-full text-yellow-600 bg-yellow-200`} key={i}>{getInitial(x.name)}</div>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <CommonDialog heading='Api Details' dialog='large' open={isOpen} close={setIsOpen}>
                {/* <Editor code={apiCodes} setCode={setApiCodes} type={type} /> */}
                <View />
            </CommonDialog>
        </div>
    )
}
