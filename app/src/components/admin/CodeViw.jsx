import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import EditorView from '../review/EditorView'

export default function CodeViw() {
    const { id } = useParams();
    const [tab, setTab] = useState(0);
    const [api, setApi] = useState({});


    useEffect(() => {
        const url = `${HOST_URL}submission/getApiDetails/${id}`
        axios.get(url).then(res => {
            setApi(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <section className="p-10 bg-white">
            <div className="container relative z-10 mx-auto">
                <ul className="flex flex-wrap mb-8 -mx-2 text-center">
                    <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => setTab(0)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 0 && 'tab-active'}`}>Details</a></li>
                    <li className="w-full md:w-auto px-2 cursor-pointer"><a onClick={() => setTab(1)} className={`inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm ${tab == 1 && 'tab-active'}`}>Code</a></li>
                </ul>
                <div className="flex flex-wrap overflow-y-auto" style={{height: 'calc(100vh - 150px)'}}>
                    {Object.keys(api).length > 0 && (
                        <>
                            {tab == 0 ? (
                                <div className="w-full md:w-full">
                                    <div className="flex flex-wrap">

                                        <div className="w-full md:w-full px-3">
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
                                                            <p className="text-sm text-coolGray-800 font-semibold">API End Point</p>
                                                        </div>
                                                        <div className="w-full md:flex-1 p-3">
                                                            <a className='cursor-pointer text-solidBlue underline' href={api.apiEndPoint} target='_blank'>{api.apiEndPoint}</a>
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
                                                            <a className='cursor-pointer text-solidBlue underline' href={api.documentationLink} target='_blank'>{api.documentationLink}</a>
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
                                                            <p className="text-sm text-coolGray-800 font-semibold">Video Link</p>
                                                        </div>
                                                        <div className="w-full md:flex-1 p-3">
                                                            <a className='cursor-pointer text-solidBlue underline' href={api.videoLink} target='_blank'>{api.videoLink}</a>
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

                                    </div>
                                </div>
                            ) : (
                                <div className="w-full md:w-full">
                                    <div className='mb-3'>
                                        <p className='font-semibold text-xl text-coolGray-800'>Environment Variable</p>
                                        <EditorView code={api.envVariable} type='code' language={api.programmingLanguage} />
                                    </div>
                                    <div className='my-3'>
                                        <p className='font-semibold text-xl text-coolGray-800'>Api Code</p>
                                        <EditorView code={api.code} type='code' language={api.programmingLanguage} />
                                    </div>
                                    <div>
                                        <p className='font-semibold text-xl text-coolGray-800'>Api Test Case</p>
                                        <EditorView code={api.unitTest} type='code' language={api.programmingLanguage} />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
