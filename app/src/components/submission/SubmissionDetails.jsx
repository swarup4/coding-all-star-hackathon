import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import { setSubmission } from '../../store/submission/submissionSlice'

import { HOST_URL } from '../../constants'

import AddCode from './AddCode'

export default function SubmissionDetails() {
    let [isOpen, setIsOpen] = useState(false)
    const [api, getApi] = useState({});
    const [videoUrl, setVideoUrl] = useState('')
    const { id } = useParams();
    const dispatch = useDispatch()

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        const url = `${HOST_URL}submission/getApiDetails/${id}`
        axios.get(url).then(res => {
            getApi(res.data)
            dispatch(setSubmission(res.data))
        }).catch(err => {
            console.log(err);
        })
    }, [])

    function addVideoUrl(){
        const url = `${HOST_URL}submission/updateApiDetails/${id}`
        let obj = {
            videoLink: videoUrl
        }
        axios.put(url, obj).then(res => {
            closeModal()
            alert("Video Link has updated")
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>

            <div className="pb-6 border-b border-coolGray-100">
                <div className="flex flex-wrap items-center justify-between -m-2">
                    <div className="w-full md:w-auto p-2">
                        <h2 className="text-coolGray-900 text-lg font-semibold">API Details</h2>
                        <p className="text-xs text-coolGray-500 font-medium">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="w-full md:w-auto p-2">
                        <div className="flex flex-wrap justify-between -m-1.5">
                            <div className="w-full md:w-auto p-1.5">
                                <button type="submit" className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                    <p>Submit API</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                            {/* <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/4 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Requirement Approach</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                        {api.name}
                                        </div>
                                    </div>
                                </div>
                            </div> */}
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
                                        <a className="flex-1 p-3 cursor-pointer" onClick={() => document.getElementById('code').showModal()}>
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
                                        <a className="flex-1 p-3 cursor-pointer" onClick={() => document.getElementById('env-file').showModal()}>
                                            <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full py-3">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-1/5 p-3"></div>
                                        <div className="w-3/5 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">API Test Cases</p>
                                        </div>
                                        <a className="flex-1 p-3 cursor-pointer" onClick={() => document.getElementById('test-case').showModal()}>
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


            {/* <AddCode dialog={isOpen} close={setIsOpen} /> */}

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
                                            {/* {errors.name && touched.name ? (
                                                <p className='mt-1 text-red-500'>{errors.name}</p>
                                            ) : ''} */}
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
