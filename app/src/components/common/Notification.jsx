import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { XMarkIcon, CheckIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { removeNotification } from '../../store/notification/notificationSlice'

export default function Notification(props) {
    const dispatch = useDispatch()

    function close() {
        dispatch(removeNotification())
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(removeNotification())
        }, 6000)
    }, [props.notification.popup])

    return (
        <>
            {props.notification.popup &&
                <section className="fixed mt-3 z-50 w-full animate-top bg-transparent">
                    <div className="container px-4 mx-auto w-4/12">

                        {props.notification.status === 'error' ? (
                            <div className="p-6 bg-red-100 border border-red-200 rounded-md">
                                <div className="flex flex-wrap justify-between -m-2">
                                    <div className="flex-1 p-2">
                                        <div className="flex flex-wrap -m-1">
                                            <div className="w-auto p-1">
                                                <XCircleIcon className="relative top-0.5 text-red-500 h-5 w-5 stroke-2" />
                                            </div>
                                            <div className="flex-1 p-1">
                                                <h3 className="font-medium text-sm text-red-900">Error!&nbsp; {props.notification.message}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto p-2">
                                        <a className='cursor-pointer' onClick={() => close()}>
                                            <XMarkIcon className="h-5 w-5 stroke-2 text-red-500" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="p-6 bg-green-100 border border-green-200 rounded-md">
                                <div className="flex flex-wrap justify-between items-center -m-2">
                                    <div className="flex-1 p-2">
                                        <div className="flex flex-wrap -m-1">
                                            <div className="w-auto p-1">
                                                <CheckIcon className="relative top-0.5 h-5 w-5 stroke-2 text-green-500" />
                                            </div>
                                            <div className="flex-1 p-1">
                                                <h3 className="font-medium text-sm text-green-900">Success!&nbsp; {props.notification.message}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto p-2">
                                        <a className='cursor-pointer' onClick={() => close()}>
                                            <XMarkIcon className="h-5 w-5 stroke-2 text-green-500" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </section>
            }
        </>
    )
}
