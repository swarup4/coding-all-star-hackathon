import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function CommonDialog(props) {
    return (
        <Transition appear show={props.open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => props.close(false)}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full w-screen items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className={`w-full ${props.dialog == 'large' ? 'max-w-full' : 'max-w-lg'} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-4xl transition-all`}>
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900" >
                                    {props.heading}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className="w-full">
                                        {props.children}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    {props.submitText ? (
                                        <button type="button" onClick={() => props.submit()}
                                            className="float-right inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                            {props.submitText}
                                        </button>
                                    ) : ''}

                                    {props.rejectText ? (
                                        <button type="button" onClick={() => props.reject()}
                                            className="mr-3 float-right inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 font-medium text-sm text-white border border-red-500 rounded-md shadow-button">
                                            {props.rejectText}
                                        </button>
                                    ) : ''}

                                    <button type="button" onClick={() => props.close(false)}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >Close</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
