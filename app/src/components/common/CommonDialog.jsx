import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function CommonDialog(props) {
    const [showTimer, setShowTimer] = useState(false)
    const [timer, setTimer] = useState({
        minute: 3,
        second: 0
    });

    useEffect(() => {
        if (props.timer) {
            setShowTimer(true)
            startTimer()
        }
    }, [props.timer])


    function startTimer() {
        let startTime = (timer.minute * 60) + timer.second
        let time = setInterval(() => {
            startTime = startTime - 1;
            if (startTime < 0) {
                setShowTimer(false)
                clearInterval(time)
            } else {
                timeCalculator(startTime)
            }
        }, 1000)
    }
    function timeCalculator(time) {
        let minute = Math.floor(time / 60);
        let second = time - (minute * 60);

        setTimer({
            minute,
            second
        })
    }


    return (
        <Transition appear show={props.open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => props.close(false)}>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full w-screen items-center justify-center p-4 text-center">

                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className={`w-full ${props.dialog == 'large' ? 'max-w-full' : 'max-w-lg'} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-4xl transition-all`}>
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900" >
                                    {props.heading}
                                </Dialog.Title>

                                <Dialog.Description>
                                    <div className="mt-6">
                                        <div className="w-full">
                                            {props.children}
                                        </div>
                                    </div>
                                </Dialog.Description>

                                <div className='block w-full float-left'>
                                    <div className="mt-4 flex justify-between">
                                        <button type="button" onClick={() => props.close(false)}
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >Close</button>

                                        <div className='flex items-center'>
                                            {showTimer ? (
                                                <span className="countdown font-mono text-2xl">
                                                    <span style={{ "--value": `${timer.minute}` }}></span>m&nbsp;<span style={{ "--value": `${timer.second}` }}></span>s
                                                </span>
                                            ) : (
                                                <>
                                                    {props.rejectText ? (
                                                        <button type="button" onClick={() => props.reject()}
                                                            className="mr-3 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 font-medium text-sm text-white border border-red-500 rounded-md shadow-button">
                                                            {props.rejectText}
                                                        </button>
                                                    ) : ''}

                                                    {props.submitText ? (
                                                        <button type="button" onClick={() => props.submit()}
                                                            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                                            {props.submitText}
                                                        </button>
                                                    ) : ''}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
