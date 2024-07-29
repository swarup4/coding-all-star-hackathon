import { Popover, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

export default function PopoverDialog(props) {
    return (
        <Popover>
            <Popover.Button className='group inline-flex items-center px-3 py-2 text-base tooltip tooltip-bottom mx-1 cursor-pointer' data-tip="Reject Reason">
                <InformationCircleIcon className="h-5 w-5 stroke-2 inline" />
            </Popover.Button>

            <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" leaveTo="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                    <div className="overflow-hidden rounded-lg shadow-3xl ring-1 ring-black/5">
                        <div className="relative bg-white p-4 lg:grid-cols-2">
                            {props.comment.map((item, ind) => (
                                <a key={ind} className="cursor-pointer flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-cyan-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                    <p className="text-sm font-medium text-cyan-900">
                                        {item}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}