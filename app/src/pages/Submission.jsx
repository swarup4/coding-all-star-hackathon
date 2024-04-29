import React from 'react'

export default function Submission() {
    return (
        <section className="bg-coolGray-50 py-4 "><div className="container px-4 mx-auto">
            <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                <div className="pb-6 border-b border-coolGray-100">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                        <div className="w-full md:w-auto p-2">
                            <h2 className="text-coolGray-900 text-lg font-semibold">Code Submission</h2>
                            <p className="text-xs text-coolGray-500 font-medium">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="w-full md:w-auto p-2">
                            <div className="flex flex-wrap justify-between -m-1.5">
                                <div className="w-full md:w-auto p-1.5">
                                    <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                                        <p>Cancel</p>
                                    </button>
                                </div>
                                <div className="w-full md:w-auto p-1.5">
                                    <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                        <p>Save</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="John" /></div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">API End Point</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="API Endpoint" /></div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">API Version</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="API Version" /></div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Documentation Link</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="Frontend Developer" /></div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Env Variable</p>
                                <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                            </div>
                            <div className="w-full md:flex-1 p-3"><textarea className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" defaultValue={""} /></div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Code</p>
                                <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                            </div>
                            <div className="w-full md:flex-1 p-3"><textarea className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" defaultValue={""} /></div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Test Case</p>
                                <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                            </div>
                            <div className="w-full md:flex-1 p-3"><textarea className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" defaultValue={""} /></div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Video Link</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="Frontend Developer" /></div>
                        </div>
                    </div>
                </div>
                <div className="pt-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <textarea className="block w-full h-32 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" defaultValue={""} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
