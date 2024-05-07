import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import { Link, useNavigate } from 'react-router-dom'

export default function ProjectList() {

    const navigate = useNavigate()
    const [tab, setTab] = useState(0)
    const [project, setProject] = useState([])
    const [projectList, setProjectList] = useState([])
    const [workingProject, setWorkingProject] = useState([])
    const user = useSelector(store => store.user.data)

    function selectTab(id) {
        setTab(id)
        if (id != 0) {
            let list = [];
            if (id == 1) {
                list = projectList.filter(x => x.submitStatus == false);
            } else {
                list = projectList.filter(x => x.submitStatus == true)
            }
            setWorkingProject(list)
        } else {

        }
    }

    useEffect(() => {
        getApplyHackathon()
        getApiDetails()
    }, [])

    function getApplyHackathon() {
        const url = `${HOST_URL}hackathon/getApplyHackathon/${user.id}`;
        const body = { userId: user.id }
        axios.get(url, body).then(res => {
            setProject(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    function getApiDetails() {
        const url = `${HOST_URL}submission/getApiList/${user.id}`;
        axios.get(url).then(res => {
            setProjectList(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    function submitApi(id) {
        const url = `${HOST_URL}submission/submitApi/${id}`;
        axios.put(url).then(res => {
            alert("Success")
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <section className="bg-white p-8 py-6">
                <div className="flex flex-wrap items-center justify-between pb-4 -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">Project List</h2>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <div className="relative md:max-w-max md:ml-auto">
                            <svg className="absolute left-3 transform top-1/2 -translate-y-1/2" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0467 11.22L12.6667 9.80667C12.3699 9.5245 11.9955 9.33754 11.5916 9.26983C11.1876 9.20211 10.7727 9.25673 10.4001 9.42667L9.80008 8.82667C10.5071 7.88194 10.83 6.70445 10.7038 5.53122C10.5775 4.358 10.0115 3.27615 9.1197 2.50347C8.22787 1.73078 7.07643 1.32464 5.89718 1.36679C4.71794 1.40894 3.59844 1.89626 2.76405 2.73065C1.92967 3.56503 1.44235 4.68453 1.4002 5.86378C1.35805 7.04302 1.76419 8.19446 2.53687 9.08629C3.30956 9.97812 4.3914 10.5441 5.56463 10.6704C6.73786 10.7966 7.91535 10.4737 8.86007 9.76667L9.45341 10.36C9.26347 10.7331 9.1954 11.1564 9.25879 11.5702C9.32218 11.984 9.51383 12.3675 9.80674 12.6667L11.2201 14.08C11.5951 14.4545 12.1034 14.6649 12.6334 14.6649C13.1634 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3886 13.6713 14.4919 13.4257C14.5953 13.1802 14.6485 12.9164 14.6485 12.65C14.6485 12.3836 14.5953 12.1198 14.4919 11.8743C14.3886 11.6287 14.2372 11.4063 14.0467 11.22ZM8.39341 8.39333C7.9269 8.85866 7.33294 9.1753 6.68657 9.30323C6.0402 9.43117 5.37041 9.36466 4.76181 9.11212C4.15321 8.85958 3.63312 8.43234 3.26722 7.88436C2.90132 7.33638 2.70603 6.69224 2.70603 6.03333C2.70603 5.37442 2.90132 4.73029 3.26722 4.18231C3.63312 3.63433 4.15321 3.20708 4.76181 2.95454C5.37041 2.702 6.0402 2.6355 6.68657 2.76343C7.33294 2.89137 7.9269 3.208 8.39341 3.67333C8.70383 3.98297 8.95012 4.35081 9.11816 4.75577C9.2862 5.16074 9.3727 5.59488 9.3727 6.03333C9.3727 6.47178 9.2862 6.90592 9.11816 7.31089C8.95012 7.71586 8.70383 8.08369 8.39341 8.39333ZM13.1067 13.1067C13.0448 13.1692 12.971 13.2187 12.8898 13.2526C12.8086 13.2864 12.7214 13.3039 12.6334 13.3039C12.5454 13.3039 12.4583 13.2864 12.377 13.2526C12.2958 13.2187 12.2221 13.1692 12.1601 13.1067L10.7467 11.6933C10.6843 11.6314 10.6347 11.5576 10.6008 11.4764C10.567 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.567 11.0449 10.6008 10.9636C10.6347 10.8824 10.6843 10.8086 10.7467 10.7467C10.8087 10.6842 10.8825 10.6346 10.9637 10.6007C11.0449 10.5669 11.1321 10.5495 11.2201 10.5495C11.3081 10.5495 11.3952 10.5669 11.4765 10.6007C11.5577 10.6346 11.6314 10.6842 11.6934 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2527 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2527 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067Z" fill="#BBC3CF" />
                            </svg>
                            <input className="w-full md:w-64 pl-8 pr-4 py-2 text-sm text-coolGray-400 font-medium outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <ul className="flex flex-wrap border-b border-coolGray-100">
                    <li className='mr-2.5 cursor-pointer'><a onClick={() => selectTab(0)} className={`block px-4 pb-4 text-sm font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 ${tab == 0 ? 'tab2-active' : ''}`}>Participating</a></li>
                    <li className='mr-2.5 cursor-pointer'><a onClick={() => selectTab(1)} className={`block px-4 pb-4 text-sm font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 ${tab == 1 ? 'tab2-active' : ''}`}>In Progress</a></li>
                    <li className='mr-2.5 cursor-pointer'><a onClick={() => selectTab(2)} className={`block px-4 pb-4 text-sm font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 ${tab == 2 ? 'tab2-active' : ''}`}>Submitted</a></li>
                </ul>
            </section>

            <section className="bg-coolGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-3">

                        {tab == 0 ? (
                            <>
                                {project.map((item, ind) => (
                                    <div className="w-full md:w-1/2 xl:w-1/4 p-3" key={ind}>
                                        <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                                            <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                                                <img className="mb-4" style={{ height: '150px' }} src={window.location.origin + "/flex-ui-assets/banner/" + item.banner[0]} alt="" />
                                                <h2 className="text-sm font-medium text-coolGray-900">{item.name}</h2>
                                                <h3 className="mb-3 text-xs font-medium text-coolGray-400">johndoe@flex.co</h3>
                                            </div>
                                            <div className="flex flex-row py-3">
                                                <div className="w-full md:w-1/2 py-2 px-4">
                                                    <button className="flex float-left px-3 py-2 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">
                                                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z" fill="#F0FDF4" /></svg>
                                                        <p>Submit</p>
                                                    </button>
                                                </div>
                                                <div className="w-full md:w-1/2 py-2 px-4">
                                                    <button onClick={() => navigate(`/dashboard/submission/${item._id}`)} className="flex float-right px-3 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button">
                                                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.16666 15H7.69999C7.80966 15.0006 7.91838 14.9796 8.01991 14.9381C8.12144 14.8967 8.21379 14.8356 8.29166 14.7583L14.0583 8.98333L16.425 6.66667C16.5031 6.5892 16.5651 6.49703 16.6074 6.39548C16.6497 6.29393 16.6715 6.18501 16.6715 6.075C16.6715 5.96499 16.6497 5.85607 16.6074 5.75452C16.5651 5.65297 16.5031 5.5608 16.425 5.48333L12.8917 1.90833C12.8142 1.83023 12.722 1.76823 12.6205 1.72592C12.5189 1.68362 12.41 1.66183 12.3 1.66183C12.19 1.66183 12.0811 1.68362 11.9795 1.72592C11.878 1.76823 11.7858 1.83023 11.7083 1.90833L9.35832 4.26667L3.57499 10.0417C3.49776 10.1195 3.43665 10.2119 3.39518 10.3134C3.35371 10.4149 3.33269 10.5237 3.33332 10.6333V14.1667C3.33332 14.3877 3.42112 14.5996 3.5774 14.7559C3.73368 14.9122 3.94564 15 4.16666 15ZM12.3 3.675L14.6583 6.03333L13.475 7.21667L11.1167 4.85833L12.3 3.675ZM4.99999 10.975L9.94166 6.03333L12.3 8.39167L7.35832 13.3333H4.99999V10.975ZM17.5 16.6667H2.49999C2.27898 16.6667 2.06701 16.7545 1.91073 16.9107C1.75445 17.067 1.66666 17.279 1.66666 17.5C1.66666 17.721 1.75445 17.933 1.91073 18.0893C2.06701 18.2455 2.27898 18.3333 2.49999 18.3333H17.5C17.721 18.3333 17.933 18.2455 18.0892 18.0893C18.2455 17.933 18.3333 17.721 18.3333 17.5C18.3333 17.279 18.2455 17.067 18.0892 16.9107C17.933 16.7545 17.721 16.6667 17.5 16.6667Z" fill="#D5DAE1" />
                                                        </svg>
                                                        <p>Add API</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                {workingProject.map((item, ind) => (
                                    <div className="w-full md:w-1/2 xl:w-1/4 p-3" key={ind}>
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
                                            <div className="flex flex-wrap pt-4 pb-6 -m-2">
                                                <div className="w-full md:w-1/3 p-2">
                                                    <div className="text-center">
                                                        <p className="mb-1 text-xs text-coolGray-900 font-semibold">Api Version</p>
                                                        <p className="text-xs text-coolGray-400 font-medium">{item.apiVersion}</p>
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/3 p-2">
                                                    {/* <div className="text-center">
                                                        <p className="mb-1 text-xs text-coolGray-900 font-semibold">420</p>
                                                        <p className="text-xs text-coolGray-400 font-medium">Following</p>
                                                    </div> */}
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
                            </>
                        )}



                        {/* <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                                <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                                    <img className="mb-4" src="flex-ui-assets/images/dashboard/cards/avatar.png" alt="" />
                                    <h2 className="text-sm font-medium text-coolGray-900">John Doe</h2>
                                    <h3 className="mb-3 text-xs font-medium text-coolGray-400">johndoe@flex.co</h3>
                                    <button className="flex items-center px-4 py-2 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">
                                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z" fill="#F0FDF4" /></svg>
                                        <p>Message</p>
                                    </button>
                                </div>
                                <div className="flex flex-wrap pt-4 pb-6 -m-2">
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">24</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Posts</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">420</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Following</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">2.7k</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                                <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                                    <img className="mb-4" src="flex-ui-assets/images/dashboard/cards/avatar.png" alt="" />
                                    <h2 className="text-sm font-medium text-coolGray-900">John Doe</h2>
                                    <h3 className="mb-3 text-xs font-medium text-coolGray-400">johndoe@flex.co</h3>
                                    <button className="flex items-center px-4 py-2 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">
                                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z" fill="#F0FDF4" /></svg>
                                        <p>Message</p>
                                    </button>
                                </div>
                                <div className="flex flex-wrap pt-4 pb-6 -m-2">
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">24</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Posts</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">420</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Following</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">2.7k</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                                <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
                                    <img className="mb-4" src="flex-ui-assets/images/dashboard/cards/avatar.png" alt="" />
                                    <h2 className="text-sm font-medium text-coolGray-900">John Doe</h2>
                                    <h3 className="mb-3 text-xs font-medium text-coolGray-400">johndoe@flex.co</h3>
                                    <button className="flex items-center px-4 py-2 font-medium text-sm text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">
                                        <svg className="mr-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 3.33334H4.16666C3.50362 3.33334 2.86773 3.59673 2.39889 4.06557C1.93005 4.53441 1.66666 5.17029 1.66666 5.83334V14.1667C1.66666 14.8297 1.93005 15.4656 2.39889 15.9344C2.86773 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83334C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59673 16.4964 3.33334 15.8333 3.33334V3.33334ZM4.16666 5H15.8333C16.0543 5 16.2663 5.0878 16.4226 5.24408C16.5789 5.40036 16.6667 5.61232 16.6667 5.83334L9.99999 9.9L3.33332 5.83334C3.33332 5.61232 3.42112 5.40036 3.5774 5.24408C3.73368 5.0878 3.94564 5 4.16666 5V5ZM16.6667 14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H4.16666C3.94564 15 3.73368 14.9122 3.5774 14.7559C3.42112 14.5996 3.33332 14.3877 3.33332 14.1667V7.73334L9.56666 11.5417C9.69334 11.6148 9.83704 11.6533 9.98332 11.6533C10.1296 11.6533 10.2733 11.6148 10.4 11.5417L16.6667 7.73334V14.1667Z" fill="#F0FDF4" /></svg>
                                        <p>Message</p>
                                    </button>
                                </div>
                                <div className="flex flex-wrap pt-4 pb-6 -m-2">
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">24</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Posts</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">420</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Following</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 p-2">
                                        <div className="text-center">
                                            <p className="mb-1 text-xs text-coolGray-900 font-semibold">2.7k</p>
                                            <p className="text-xs text-coolGray-400 font-medium">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
