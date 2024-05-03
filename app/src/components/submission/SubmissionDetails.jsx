import { Fragment, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'

import AddCode from './AddCode'

export default function SubmissionDetails() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        debugger;
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>

            <div className="pb-6 border-b border-coolGray-100">
                <div className="flex flex-wrap items-center justify-between -m-2">
                    <div className="w-full md:w-auto p-2">
                        <h2 className="text-coolGray-900 text-lg font-semibold">Code Submission</h2>
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

            <div className="w-full md:w-full">
                <div className="flex flex-wrap -m-3">

                    <div className="w-full md:w-2/3 p-3">
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        Name
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Category</p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        Category
                                    </div>
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
                                        apiEndPoint
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Version</p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        version
                                    </div>
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
                                        apiVersion
                                    </div>
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
                                        documentationLink
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Programming Language</p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        programmingLanguage
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Requirement Approach</p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        requirementApproach
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        description
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
                                    <a className="flex-1 p-3 cursor-pointer" onClick={() => openModal()}>
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
                                    <a className="flex-1 p-3 cursor-pointer">
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
                                    <a className="flex-1 p-3 cursor-pointer">
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
                                    <a className="flex-1 p-3 cursor-pointer">
                                        <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <p className="text-sm text-coolGray-800 font-semibold">API Version</p>
                        </div>
                        <div className="w-full md:flex-1 p-3">
                            <input type="text" name='apiVersion' placeholder="API End Point Version" value={values.apiVersion} onChange={handleChange} onBlur={handleBlur}
                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                            {errors.apiVersion && touched.apiVersion ? (
                                <p className='mt-1 text-red-500'>{errors.apiVersion}</p>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <p className="text-sm text-coolGray-800 font-semibold">Version</p>
                        </div>
                        <div className="w-full md:flex-1 p-3">
                            <input type="text" name='version' placeholder="API Version" value={values.version} onChange={handleChange} onBlur={handleBlur}
                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                            {errors.version && touched.version ? (
                                <p className='mt-1 text-red-500'>{errors.version}</p>
                            ) : ''}
                        </div>
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
                            <input type="text" name='documentationLink' placeholder="Documentation Link" value={values.documentationLink} onChange={handleChange} onBlur={handleBlur}
                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                            {errors.documentationLink && touched.documentationLink ? (
                                <p className='mt-1 text-red-500'>{errors.documentationLink}</p>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <p className="text-sm text-coolGray-800 font-semibold">Programming Language</p>
                        </div>
                        <div className="w-full md:flex-1 p-3">
                            <select name='programmingLanguage' value={values.programmingLanguage} onChange={handleChange} onBlur={handleBlur}
                                className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-yellow-500 rounded-lg shadow-input">
                                <option value="">Select</option>
                                <option value="nodejs">Node JS</option>
                                <option value="python">Python</option>
                            </select>
                            {errors.programmingLanguage && touched.programmingLanguage ? (
                                <p className='mt-1 text-red-500'>{errors.programmingLanguage}</p>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                            <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                        </div>
                        <div className="w-full md:flex-1 p-3">
                            <textarea name='description' value={values.description} onChange={handleChange} onBlur={handleBlur}
                                className="block w-full h-32 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" defaultValue={""} />
                            {errors.description && touched.description ? (
                                <p className='mt-1 text-red-500'>{errors.description}</p>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div> */}


            <AddCode dialog={isOpen} close={setIsOpen} />

        </div>
    )
}
