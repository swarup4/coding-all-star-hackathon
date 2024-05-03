import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Dialog, Transition } from '@headlessui/react'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../../constants'


const initialValues = {
    code: ''
}
const schema = object({
    code: string().required('Enter your API Code')
})

export default function AddCode(props) {

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            console.log(values)
            // signup(values);
        }
    })

    return (
        <Transition appear show={props.dialog} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => props.close(false)}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    API Code
                                </Dialog.Title>
                                <div className="mt-2">
                                    {/* <textarea name='description' value={values.code} onChange={handleChange} onBlur={handleBlur}
                                        className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" style={{ height: 'calc(100vh - 247px)' }} />
                                    {errors.code && touched.code ? (
                                        <p className='mt-1 text-red-500'>{errors.password}</p>
                                    ) : ''} */}




                                    <div className="pt-6 pb-4">
                                        <div className="w-full">
                                            <div className="flex flex-wrap -m-3">
                                                <div className="w-full md:flex-1 p-3">
                                                    <textarea name='description' value={values.code} onChange={handleChange} onBlur={handleBlur}
                                                        className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" style={{ height: 'calc(100vh - 247px)' }} />
                                                    {errors.code && touched.code ? (
                                                        <p className='mt-1 text-red-500'>{errors.password}</p>
                                                    ) : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                </div>

                                <div className="mt-4">
                                    <button type="button" onClick={() => props.close(false)}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
