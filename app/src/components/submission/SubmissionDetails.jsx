import { Fragment, useState, useEffect } from 'react'
// import axios from 'axios'
import axios from '../../axiosInstance'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { setSubmission } from '../../store/submission/submissionSlice'
import { setReview } from '../../store/review/reviewSlice'
import { setNotification } from '../../store/notification/notificationSlice'

import { HOST_URL } from '../../constants'

export default function SubmissionDetails(props) {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [videoUrl, setVideoUrl] = useState('')
    const { id } = useParams();
    const dispatch = useDispatch()
    const reviewPoint = useSelector(store => store.review.data)
    const submission = useSelector(store => store.submission.data)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function codeDialogs(type, code){
        let obj = {
            isOpen: true,
            type: type,
            code: code
        }
        props.codeDialog(obj)
    }

    useEffect(() => {
        const url = `${HOST_URL}submission/getApiDetails/${id}`
        axios.get(url).then(res => {
            dispatch(setSubmission(res.data))
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])

    function addVideoUrl(){
        const url = `${HOST_URL}submission/updateApiDetails/${id}`
        let obj = {
            videoLink: videoUrl
        }
        axios.put(url, obj).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: "Video Link has updated"
            }))
            closeModal()
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    function submitApi () {
        const url = `${HOST_URL}submission/submitApi/${id}`;
        axios.put(url).then(res => {
            let pointInc = (reviewPoint?.totalReviewPoint ?? 0) + 2
            dispatch(setReview({totalReviewPoint: pointInc}))
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: "API has submitted"
            }))
            navigate(`/dashboard/hackathon/${submission.hackathonId}`)
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

            <div className="pb-6 border-b border-coolGray-100">
                <div className="flex flex-wrap items-center justify-between -m-2">
                    <div className="w-full md:w-auto p-2">
                        <h2 className="text-coolGray-900 text-lg font-semibold">API Details</h2>
                        {/* <p className="text-xs text-coolGray-500 font-medium">Lorem ipsum dolor sit amet</p> */}
                    </div>
                    <div className="w-full md:w-auto p-2">
                        <div className="flex flex-wrap justify-between -m-1.5">
                            <div className="w-full md:w-auto p-1.5">
                                <button type="submit" onClick={() => submitApi()} className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                    <p>Submit API</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {Object.keys(submission).length > 0 ? (
                <div className="w-full md:w-full">
                    <div className="flex flex-wrap -m-3">

                        <div className="w-full md:w-2/3 p-3">
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {submission.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Category</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {submission.category}
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-full">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">API End Point</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {submission.apiEndPoint}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-full">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">API Version</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {submission.apiVersion}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-full">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Documentation Link</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {submission.documentationLink}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-full">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Programming Language</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {submission.programmingLanguage}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-full">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            {submission.description}
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
                                        <a className="flex-1 p-3 cursor-pointer" onClick={() => codeDialogs('code', submission.code)}>
                                            <PlusCircleIcon className='h-5 w-5 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full py-3">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-1/5 p-3"></div>
                                        <div className="w-3/5 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">API Env Variable</p>
                                        </div>
                                        <a className="flex-1 p-3 cursor-pointer" onClick={() => codeDialogs('env', submission.envVariable)}>
                                            <PlusCircleIcon className='h-5 w-5 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full py-3">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-1/5 p-3"></div>
                                        <div className="w-3/5 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">API Unit Test Cases</p>
                                        </div>
                                        <a className="flex-1 p-3 cursor-pointer" onClick={() => codeDialogs('test', submission.unitTest)}>
                                            <PlusCircleIcon className='h-5 w-5 stroke-2 text-yellow-500 hover:text-yellow-600' />
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
                                            <PlusCircleIcon className='h-5 w-5 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ''}


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full w-screen items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900" >
                                        Add Video URL
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="w-full">
                                            <input type="text" name='video' placeholder="Add Video URL" value={videoUrl} onChange={ev => setVideoUrl(ev.target.value)}
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button type="button" onClick={() => addVideoUrl()}
                                            className="float-right inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button"
                                        >Submit</button>

                                        <button type="button" onClick={closeModal}
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >Close</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    )
}
