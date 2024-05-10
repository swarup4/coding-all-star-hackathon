import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import { Link, useNavigate } from 'react-router-dom'

export default function ApiList() {

    const navigate = useNavigate()
    const [workingProject, setWorkingProject] = useState([])
    const user = useSelector(store => store.user.data)

    useEffect(() => {
        const url = `${HOST_URL}submission/getApiList/${user.id}`;
        axios.get(url).then(res => {
            setWorkingProject(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    function submitApi(id) {
        const url = `${HOST_URL}submission/submitApi/${id}`;
        axios.put(url).then(res => {
            alert("Success")
        }).catch(err => {
            console.log(err);
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
                                    <div className='md:w-1/2 float-left'>
                                        <button className="px-4 py-2 w-11/12 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md" onClick={() => submitApi(item._id)}>
                                            <svg className="mr-2 inline-block" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z" fill="#F0FDF4" /></svg>
                                            <p className='inline'>Submit</p>
                                        </button>
                                    </div>
                                    <div className='md:w-1/2 float-left'>
                                        <button className=" float-right w-11/12 px-4 py-2 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md" onClick={() => navigate(`/dashboard/details/${item._id}`)}>
                                            <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.16666 15H7.69999C7.80966 15.0006 7.91838 14.9796 8.01991 14.9381C8.12144 14.8967 8.21379 14.8356 8.29166 14.7583L14.0583 8.98333L16.425 6.66667C16.5031 6.5892 16.5651 6.49703 16.6074 6.39548C16.6497 6.29393 16.6715 6.18501 16.6715 6.075C16.6715 5.96499 16.6497 5.85607 16.6074 5.75452C16.5651 5.65297 16.5031 5.5608 16.425 5.48333L12.8917 1.90833C12.8142 1.83023 12.722 1.76823 12.6205 1.72592C12.5189 1.68362 12.41 1.66183 12.3 1.66183C12.19 1.66183 12.0811 1.68362 11.9795 1.72592C11.878 1.76823 11.7858 1.83023 11.7083 1.90833L9.35832 4.26667L3.57499 10.0417C3.49776 10.1195 3.43665 10.2119 3.39518 10.3134C3.35371 10.4149 3.33269 10.5237 3.33332 10.6333V14.1667C3.33332 14.3877 3.42112 14.5996 3.5774 14.7559C3.73368 14.9122 3.94564 15 4.16666 15ZM12.3 3.675L14.6583 6.03333L13.475 7.21667L11.1167 4.85833L12.3 3.675ZM4.99999 10.975L9.94166 6.03333L12.3 8.39167L7.35832 13.3333H4.99999V10.975ZM17.5 16.6667H2.49999C2.27898 16.6667 2.06701 16.7545 1.91073 16.9107C1.75445 17.067 1.66666 17.279 1.66666 17.5C1.66666 17.721 1.75445 17.933 1.91073 18.0893C2.06701 18.2455 2.27898 18.3333 2.49999 18.3333H17.5C17.721 18.3333 17.933 18.2455 18.0892 18.0893C18.2455 17.933 18.3333 17.721 18.3333 17.5C18.3333 17.279 18.2455 17.067 18.0892 16.9107C17.933 16.7545 17.721 16.6667 17.5 16.6667Z" fill="#D5DAE1" />
                                            </svg>
                                            <span className='inline'>Edit</span>
                                        </button>
                                    </div>
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
                    </div>
                </div>
            ))}
        </div>
    )
}
