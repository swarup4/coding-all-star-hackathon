import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'

import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'



// const solutions = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//     { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//     { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]



// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function UserHeader() {

    // const [open, setOpen] = useState(true)

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const closeDropdown = () => {
        setIsOpen(false);
    }

    const user = useSelector(store => store.user.data)
    // const navigate = useNavigate();
    const location = useLocation();

    function redirectPage() {
        sessionStorage.url = location.pathname;
    }

    return (
        <section className="overflow-hidden">
            <div>
                <div className="px-8 py-6 xl:py-0 bg-white border-b border-coolGray-100">
                    <div className="flex items-center justify-between -m-2">
                        <div className="flex flex-wrap items-center w-auto p-2">
                            <a className="block max-w-max xl:mr-14" href="#">
                                <img src={window.location.origin + "/flex-ui-assets/logos/dashboard/flex-ui-black-yellow.svg"} alt="" />
                            </a>
                            <ul className="hidden xl:flex flex-wrap">
                                <li className="mr-8">
                                    <Link to='/dashboard' className="flex flex-wrap items-center py-8 text-base font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500">
                                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6ZM7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12ZM17 10C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V11C18 10.7348 17.8946 10.4804 17.7071 10.2929C17.5196 10.1054 17.2652 10 17 10ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        <p className="text-coolGray-800">Dashboard</p>
                                    </Link>
                                </li>
                                <li className="mr-8">
                                    <a className="flex flex-wrap items-center py-8 text-base font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                        href="#">
                                        <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.50003 8.86L11.5 14.06C11.6521 14.1478 11.8245 14.194 12 14.194C12.1756 14.194 12.348 14.1478 12.5 14.06L21.5 8.86C21.6512 8.77275 21.7768 8.64746 21.8646 8.49659C21.9523 8.34572 21.999 8.17452 22 8C22.0007 7.82379 21.9549 7.65053 21.8671 7.49775C21.7792 7.34497 21.6526 7.21811 21.5 7.13L12.5 1.94C12.348 1.85224 12.1756 1.80603 12 1.80603C11.8245 1.80603 11.6521 1.85224 11.5 1.94L2.50003 7.13C2.34743 7.21811 2.22081 7.34497 2.13301 7.49775C2.04521 7.65053 1.99933 7.82379 2.00003 8C2.00108 8.17452 2.04779 8.34572 2.13551 8.49659C2.22322 8.64746 2.34889 8.77275 2.50003 8.86ZM12 4L19 8L12 12L5.00003 8L12 4ZM20.5 11.17L12 16L3.50003 11.13C3.3859 11.0639 3.25981 11.021 3.12903 11.0038C2.99825 10.9866 2.86537 10.9955 2.73803 11.0299C2.61069 11.0643 2.49141 11.1235 2.38706 11.2042C2.28271 11.2849 2.19536 11.3854 2.13003 11.5C1.99966 11.7296 1.96539 12.0015 2.03471 12.2563C2.10403 12.5111 2.2713 12.7281 2.50003 12.86L11.5 18.06C11.6521 18.1478 11.8245 18.194 12 18.194C12.1756 18.194 12.348 18.1478 12.5 18.06L21.5 12.86C21.7288 12.7281 21.896 12.5111 21.9654 12.2563C22.0347 12.0015 22.0004 11.7296 21.87 11.5C21.8047 11.3854 21.7173 11.2849 21.613 11.2042C21.5087 11.1235 21.3894 11.0643 21.262 11.0299C21.1347 10.9955 21.0018 10.9866 20.871 11.0038C20.7402 11.021 20.6142 11.0639 20.5 11.13V11.17ZM20.5 15.17L12 20L3.50003 15.13C3.3859 15.0639 3.25981 15.021 3.12903 15.0038C2.99825 14.9866 2.86537 14.9955 2.73803 15.0299C2.61069 15.0643 2.49141 15.1235 2.38706 15.2042C2.28271 15.2849 2.19536 15.3854 2.13003 15.5C1.99966 15.7296 1.96539 16.0015 2.03471 16.2563C2.10403 16.5111 2.2713 16.7281 2.50003 16.86L11.5 22.06C11.6521 22.1478 11.8245 22.194 12 22.194C12.1756 22.194 12.348 22.1478 12.5 22.06L21.5 16.86C21.7288 16.7281 21.896 16.5111 21.9654 16.2563C22.0347 16.0015 22.0004 15.7296 21.87 15.5C21.8047 15.3854 21.7173 15.2849 21.613 15.2042C21.5087 15.1235 21.3894 15.0643 21.262 15.0299C21.1347 14.9955 21.0018 14.9866 20.871 15.0038C20.7402 15.021 20.6142 15.0639 20.5 15.13V15.17Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        <p className="text-coolGray-800">Projects</p>
                                    </a>
                                </li>
                                <li className="mr-8">
                                    <a className="flex flex-wrap items-center py-8 text-base font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                        href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.21 14.75C10.303 14.8437 10.4136 14.9181 10.5354 14.9689C10.6573 15.0197 10.788 15.0458 10.92 15.0458C11.052 15.0458 11.1827 15.0197 11.3046 14.9689C11.4264 14.9181 11.537 14.8437 11.63 14.75L15.71 10.67C15.8983 10.4817 16.0041 10.2263 16.0041 9.96C16.0041 9.6937 15.8983 9.4383 15.71 9.25C15.5217 9.0617 15.2663 8.95591 15 8.95591C14.7337 8.95591 14.4783 9.0617 14.29 9.25L10.92 12.63L9.71 11.41C9.5217 11.2217 9.2663 11.1159 9 11.1159C8.7337 11.1159 8.4783 11.2217 8.29 11.41C8.1017 11.5983 7.99591 11.8537 7.99591 12.12C7.99591 12.3863 8.1017 12.6417 8.29 12.83L10.21 14.75ZM21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 20H4V4H20V20Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        <p className="text-coolGray-800">Tasks</p>
                                    </a>
                                </li>
                                <li className="mr-8">
                                    <Link to='leaderboard' className="flex flex-wrap items-center py-8 text-base font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                        <p className="text-coolGray-800">Leaderboard</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-auto p-2">
                            <div className="hidden xl:flex flex-wrap items-center -m-3">
                                <div className="w-auto p-3">
                                    <a className="block max-w-max text-coolGray-500 hover:text-coolGray-600" href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="w-auto p-3">
                                    <a className="block max-w-max text-coolGray-500 hover:text-coolGray-600" href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18 13.18V10C17.9986 8.58312 17.4958 7.21247 16.5806 6.13077C15.6655 5.04908 14.3971 4.32615 13 4.09V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4.09C9.60294 4.32615 8.33452 5.04908 7.41939 6.13077C6.50425 7.21247 6.00144 8.58312 6 10V13.18C5.41645 13.3863 4.911 13.7681 4.55294 14.2729C4.19488 14.7778 4.00174 15.3811 4 16V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H8.14C8.37028 19.8474 8.873 20.5954 9.5706 21.1287C10.2682 21.6621 11.1219 21.951 12 21.951C12.8781 21.951 13.7318 21.6621 14.4294 21.1287C15.127 20.5954 15.6297 19.8474 15.86 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V16C19.9983 15.3811 19.8051 14.7778 19.4471 14.2729C19.089 13.7681 18.5835 13.3863 18 13.18ZM8 10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10V13H8V10ZM12 20C11.651 19.9979 11.3086 19.9045 11.0068 19.7291C10.7051 19.5536 10.4545 19.3023 10.28 19H13.72C13.5455 19.3023 13.2949 19.5536 12.9932 19.7291C12.6914 19.9045 12.349 19.9979 12 20ZM18 17H6V16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15H17C17.2652 15 17.5196 15.1054 17.7071 15.2929C17.8946 15.4804 18 15.7348 18 16V17Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="w-auto p-3">
                                    <div className="flex flex-wrap items-center -m-2">
                                        <div className="w-auto p-2">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="w-auto p-2">
                                                    <img src={window.location.origin + "/flex-ui-assets/images/user/" + user.profilePics} alt="" className='rounded-full h-11' />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <h2 className="text-sm font-semibold text-coolGray-800">{user.name}</h2>
                                                    <p className="text-sm font-medium text-coolGray-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-auto p-2">
                                            <a className="block max-w-max text-coolGray-500 hover:text-coolGray-600" href="#">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17 9.17C16.8126 8.98375 16.5592 8.87921 16.295 8.87921C16.0308 8.87921 15.7774 8.98375 15.59 9.17L12 12.71L8.46001 9.17C8.27265 8.98375 8.0192 8.87921 7.75501 8.87921C7.49082 8.87921 7.23737 8.98375 7.05001 9.17C6.95628 9.26297 6.88189 9.37357 6.83112 9.49543C6.78035 9.61729 6.75421 9.74799 6.75421 9.88C6.75421 10.012 6.78035 10.1427 6.83112 10.2646C6.88189 10.3864 6.95628 10.497 7.05001 10.59L11.29 14.83C11.383 14.9237 11.4936 14.9981 11.6154 15.0489C11.7373 15.0997 11.868 15.1258 12 15.1258C12.132 15.1258 12.2627 15.0997 12.3846 15.0489C12.5064 14.9981 12.617 14.9237 12.71 14.83L17 10.59C17.0937 10.497 17.1681 10.3864 17.2189 10.2646C17.2697 10.1427 17.2958 10.012 17.2958 9.88C17.2958 9.74799 17.2697 9.61729 17.2189 9.49543C17.1681 9.37357 17.0937 9.26297 17 9.17Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </a>
                                        </div>


                                        <div className="w-auto p-2">
                                            {/* {user ? (
                                                <Disclosure as="div" className="-mx-3">
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                                User
                                                                <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                                {solutions.map((item) => (
                                                                    <Disclosure.Button key={item.name} as="a" href={item.href}
                                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                    >
                                                                        {item.name}
                                                                    </Disclosure.Button>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ) : (
                                                <>
                                                    <div className="flow-root">
                                                        <Link to='/login' onClick={redirectPage} className="-m-2 block p-2 font-medium text-gray-900">
                                                            Sign in
                                                        </Link>
                                                    </div>
                                                    <div className="flow-root">
                                                        <Link to='/signup' onClick={redirectPage} className="-m-2 block p-2 font-medium text-gray-900">
                                                            Create account
                                                        </Link>
                                                    </div>
                                                </>
                                            )} */}

                                            {/* <div className="relative group" nBlur={closeDropdown}>
                                                <button className="px-4 py-2 text-gray-700" onClick={toggleDropdown}>
                                                    Dropdown
                                                    <svg className="w-4 h-4 inline-block ml-2 fill-current" viewBox="0 0 20 20">
                                                        <path d="M10 12l-7-7h14z" />
                                                    </svg>
                                                </button>

                                                {isOpen && (
                                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Item 1</a>
                                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Item 2</a>
                                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Item 3</a>
                                                        </div>
                                                    </div>
                                                )}
                                            </div> */}

                                            {/* <Popover className="relative">
                                                    <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                                        <span>Solutions</span>
                                                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                    </Popover.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                                            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                                                <div className="p-4">
                                                                    {solutions.map((item) => (
                                                                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                                            </div>
                                                                            <div>
                                                                                <a href={item.href} className="font-semibold text-gray-900">
                                                                                    {item.name}
                                                                                    <span className="absolute inset-0" />
                                                                                </a>
                                                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                                                    {callsToAction.map((item) => (
                                                                        <a
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                                                        >
                                                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                                            {item.name}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </Popover> */}


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button className="navbar-burger self-center ml-auto block xl:hidden">
                                <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="text-coolGray-100" width="32" height="32" rx="6" fill="currentColor"></rect>
                                    <path className="text-coolGray-400"
                                        d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                                        fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="navbar-menu z-50 fixed top-0 hidden flex flex-col justify-between bg-white border-r border-coolGray-100 max-w-xs w-9/12 h-full overflow-y-auto">
                    <div className="navbar-backdrop fixed xl:hidden inset-0 bg-coolGray-900 opacity-60"></div>
                    <div className="relative bg-white flex-1">
                        <div className="fixed -left-4 p-8 pl-12 max-w-xs w-9/12 z-50 bg-white">
                            <a className="block max-w-max" href="#">
                                <img src={window.location.origin + "/flex-ui-assets/logos/dashboard/flex-ui-black-yellow.svg"} alt="" />
                            </a>
                        </div>
                        <div className="mt-28">
                            <p className="px-8 mb-2 text-xs font-medium text-coolGray-500 uppercase">Main menu</p>
                            <ul className="px-4 mb-8">
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6ZM7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12ZM17 10C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V11C18 10.7348 17.8946 10.4804 17.7071 10.2929C17.5196 10.1054 17.2652 10 17 10ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <p className="text-coolGray-800 font-medium text-base">Dashboard</p>
                                        </div>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 1.17C10.8126 0.983753 10.5592 0.879211 10.295 0.879211C10.0308 0.879211 9.77737 0.983753 9.59001 1.17L6.00001 4.71L2.46001 1.17C2.27265 0.983753 2.0192 0.879211 1.75501 0.879211C1.49082 0.879211 1.23737 0.983753 1.05001 1.17C0.956281 1.26297 0.881887 1.37357 0.831118 1.49543C0.780349 1.61729 0.754211 1.74799 0.754211 1.88C0.754211 2.01202 0.780349 2.14272 0.831118 2.26458C0.881887 2.38644 0.956281 2.49704 1.05001 2.59L5.29001 6.83C5.38297 6.92373 5.49357 6.99813 5.61543 7.04889C5.73729 7.09966 5.868 7.1258 6.00001 7.1258C6.13202 7.1258 6.26273 7.09966 6.38459 7.04889C6.50645 6.99813 6.61705 6.92373 6.71001 6.83L11 2.59C11.0937 2.49704 11.1681 2.38644 11.2189 2.26458C11.2697 2.14272 11.2958 2.01202 11.2958 1.88C11.2958 1.74799 11.2697 1.61729 11.2189 1.49543C11.1681 1.37357 11.0937 1.26297 11 1.17Z"
                                                fill="#8896AB"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 pl-11 flex items-center justify-between" href="#">
                                        <div className="flex items-center">
                                            <p className="text-coolGray-800 font-medium text-base">Overview</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 pl-11 flex items-center justify-between" href="#">
                                        <div className="flex items-center">
                                            <p className="text-coolGray-300 font-medium text-base">Notifications</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 pl-11 flex items-center justify-between" href="#">
                                        <div className="flex items-center">
                                            <p className="text-coolGray-300 font-medium text-base">Budget</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.50003 8.86L11.5 14.06C11.6521 14.1478 11.8245 14.194 12 14.194C12.1756 14.194 12.348 14.1478 12.5 14.06L21.5 8.86C21.6512 8.77275 21.7768 8.64746 21.8646 8.49659C21.9523 8.34572 21.999 8.17452 22 8C22.0007 7.82379 21.9549 7.65053 21.8671 7.49775C21.7792 7.34497 21.6526 7.21811 21.5 7.13L12.5 1.94C12.348 1.85224 12.1756 1.80603 12 1.80603C11.8245 1.80603 11.6521 1.85224 11.5 1.94L2.50003 7.13C2.34743 7.21811 2.22081 7.34497 2.13301 7.49775C2.04521 7.65053 1.99933 7.82379 2.00003 8C2.00108 8.17452 2.04779 8.34572 2.13551 8.49659C2.22322 8.64746 2.34889 8.77275 2.50003 8.86ZM12 4L19 8L12 12L5.00003 8L12 4ZM20.5 11.17L12 16L3.50003 11.13C3.3859 11.0639 3.25981 11.021 3.12903 11.0038C2.99825 10.9866 2.86537 10.9955 2.73803 11.0299C2.61069 11.0643 2.49141 11.1235 2.38706 11.2042C2.28271 11.2849 2.19536 11.3854 2.13003 11.5C1.99966 11.7296 1.96539 12.0015 2.03471 12.2563C2.10403 12.5111 2.2713 12.7281 2.50003 12.86L11.5 18.06C11.6521 18.1478 11.8245 18.194 12 18.194C12.1756 18.194 12.348 18.1478 12.5 18.06L21.5 12.86C21.7288 12.7281 21.896 12.5111 21.9654 12.2563C22.0347 12.0015 22.0004 11.7296 21.87 11.5C21.8047 11.3854 21.7173 11.2849 21.613 11.2042C21.5087 11.1235 21.3894 11.0643 21.262 11.0299C21.1347 10.9955 21.0018 10.9866 20.871 11.0038C20.7402 11.021 20.6142 11.0639 20.5 11.13V11.17ZM20.5 15.17L12 20L3.50003 15.13C3.3859 15.0639 3.25981 15.021 3.12903 15.0038C2.99825 14.9866 2.86537 14.9955 2.73803 15.0299C2.61069 15.0643 2.49141 15.1235 2.38706 15.2042C2.28271 15.2849 2.19536 15.3854 2.13003 15.5C1.99966 15.7296 1.96539 16.0015 2.03471 16.2563C2.10403 16.5111 2.2713 16.7281 2.50003 16.86L11.5 22.06C11.6521 22.1478 11.8245 22.194 12 22.194C12.1756 22.194 12.348 22.1478 12.5 22.06L21.5 16.86C21.7288 16.7281 21.896 16.5111 21.9654 16.2563C22.0347 16.0015 22.0004 15.7296 21.87 15.5C21.8047 15.3854 21.7173 15.2849 21.613 15.2042C21.5087 15.1235 21.3894 15.0643 21.262 15.0299C21.1347 14.9955 21.0018 14.9866 20.871 15.0038C20.7402 15.021 20.6142 15.0639 20.5 15.13V15.17Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <p className="text-coolGray-800 font-medium text-base">Projects</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.21 14.75C10.303 14.8437 10.4136 14.9181 10.5354 14.9689C10.6573 15.0197 10.788 15.0458 10.92 15.0458C11.052 15.0458 11.1827 15.0197 11.3046 14.9689C11.4264 14.9181 11.537 14.8437 11.63 14.75L15.71 10.67C15.8983 10.4817 16.0041 10.2263 16.0041 9.96C16.0041 9.6937 15.8983 9.4383 15.71 9.25C15.5217 9.0617 15.2663 8.95591 15 8.95591C14.7337 8.95591 14.4783 9.0617 14.29 9.25L10.92 12.63L9.71 11.41C9.5217 11.2217 9.2663 11.1159 9 11.1159C8.7337 11.1159 8.4783 11.2217 8.29 11.41C8.1017 11.5983 7.99591 11.8537 7.99591 12.12C7.99591 12.3863 8.1017 12.6417 8.29 12.83L10.21 14.75ZM21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 20H4V4H20V20Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <p className="text-coolGray-800 font-medium text-base">Tasks</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="mr-2 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                            <p className="text-coolGray-800">Leaderboards</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <p className="px-8 mb-2 text-xs font-medium text-coolGray-500 uppercase">Workspace</p>
                            <ul className="px-4 pb-8">
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.3 12.22C12.8336 11.7581 13.2616 11.1869 13.5549 10.545C13.8482 9.90316 14 9.20571 14 8.5C14 7.17392 13.4732 5.90215 12.5355 4.96447C11.5979 4.02678 10.3261 3.5 9 3.5C7.67392 3.5 6.40215 4.02678 5.46447 4.96447C4.52678 5.90215 4 7.17392 4 8.5C3.99999 9.20571 4.1518 9.90316 4.44513 10.545C4.73845 11.1869 5.16642 11.7581 5.7 12.22C4.30014 12.8539 3.11247 13.8775 2.27898 15.1685C1.4455 16.4596 1.00147 17.9633 1 19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5C2.26522 20.5 2.51957 20.3946 2.70711 20.2071C2.89464 20.0196 3 19.7652 3 19.5C3 17.9087 3.63214 16.3826 4.75736 15.2574C5.88258 14.1321 7.4087 13.5 9 13.5C10.5913 13.5 12.1174 14.1321 13.2426 15.2574C14.3679 16.3826 15 17.9087 15 19.5C15 19.7652 15.1054 20.0196 15.2929 20.2071C15.4804 20.3946 15.7348 20.5 16 20.5C16.2652 20.5 16.5196 20.3946 16.7071 20.2071C16.8946 20.0196 17 19.7652 17 19.5C16.9985 17.9633 16.5545 16.4596 15.721 15.1685C14.8875 13.8775 13.6999 12.8539 12.3 12.22ZM9 11.5C8.40666 11.5 7.82664 11.3241 7.33329 10.9944C6.83994 10.6648 6.45542 10.1962 6.22836 9.64805C6.0013 9.09987 5.94189 8.49667 6.05764 7.91473C6.1734 7.33279 6.45912 6.79824 6.87868 6.37868C7.29824 5.95912 7.83279 5.6734 8.41473 5.55764C8.99667 5.44189 9.59987 5.5013 10.1481 5.72836C10.6962 5.95542 11.1648 6.33994 11.4944 6.83329C11.8241 7.32664 12 7.90666 12 8.5C12 9.29565 11.6839 10.0587 11.1213 10.6213C10.5587 11.1839 9.79565 11.5 9 11.5ZM18.74 11.82C19.38 11.0993 19.798 10.2091 19.9438 9.25634C20.0896 8.30362 19.9569 7.32907 19.5618 6.45C19.1666 5.57093 18.5258 4.8248 17.7165 4.30142C16.9071 3.77805 15.9638 3.49974 15 3.5C14.7348 3.5 14.4804 3.60536 14.2929 3.79289C14.1054 3.98043 14 4.23478 14 4.5C14 4.76522 14.1054 5.01957 14.2929 5.20711C14.4804 5.39464 14.7348 5.5 15 5.5C15.7956 5.5 16.5587 5.81607 17.1213 6.37868C17.6839 6.94129 18 7.70435 18 8.5C17.9986 9.02524 17.8593 9.5409 17.5961 9.99542C17.3328 10.4499 16.9549 10.8274 16.5 11.09C16.3517 11.1755 16.2279 11.2977 16.1404 11.4447C16.0528 11.5918 16.0045 11.7589 16 11.93C15.9958 12.0998 16.0349 12.2678 16.1137 12.4183C16.1924 12.5687 16.3081 12.6967 16.45 12.79L16.84 13.05L16.97 13.12C18.1754 13.6917 19.1923 14.596 19.901 15.7263C20.6096 16.8566 20.9805 18.1659 20.97 19.5C20.97 19.7652 21.0754 20.0196 21.2629 20.2071C21.4504 20.3946 21.7048 20.5 21.97 20.5C22.2352 20.5 22.4896 20.3946 22.6771 20.2071C22.8646 20.0196 22.97 19.7652 22.97 19.5C22.9782 17.9654 22.5938 16.4543 21.8535 15.1101C21.1131 13.7659 20.0413 12.6333 18.74 11.82Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <p className="text-coolGray-800 font-medium text-base">Community</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <p className="text-coolGray-800 font-medium text-base">Calendar</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20 8.94C19.9896 8.84813 19.9695 8.75763 19.94 8.67V8.58C19.8919 8.47718 19.8278 8.38267 19.75 8.3V8.3L13.75 2.3C13.6673 2.22222 13.5728 2.15808 13.47 2.11H13.38C13.2784 2.05174 13.1662 2.01434 13.05 2H7C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V9C20 9 20 9 20 8.94ZM14 5.41L16.59 8H15C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7V5.41ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H12V7C12 7.79565 12.3161 8.55871 12.8787 9.12132C13.4413 9.68393 14.2044 10 15 10H18V19Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <p className="text-coolGray-800 font-medium text-base">Pages</p>
                                        </div>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 1.17C10.8126 0.983753 10.5592 0.879211 10.295 0.879211C10.0308 0.879211 9.77737 0.983753 9.59001 1.17L6.00001 4.71L2.46001 1.17C2.27265 0.983753 2.0192 0.879211 1.75501 0.879211C1.49082 0.879211 1.23737 0.983753 1.05001 1.17C0.956281 1.26297 0.881887 1.37357 0.831118 1.49543C0.780349 1.61729 0.754211 1.74799 0.754211 1.88C0.754211 2.01202 0.780349 2.14272 0.831118 2.26458C0.881887 2.38644 0.956281 2.49704 1.05001 2.59L5.29001 6.83C5.38297 6.92373 5.49357 6.99813 5.61543 7.04889C5.73729 7.09966 5.868 7.1258 6.00001 7.1258C6.13202 7.1258 6.26273 7.09966 6.38459 7.04889C6.50645 6.99813 6.61705 6.92373 6.71001 6.83L11 2.59C11.0937 2.49704 11.1681 2.38644 11.2189 2.26458C11.2697 2.14272 11.2958 2.01202 11.2958 1.88C11.2958 1.74799 11.2697 1.61729 11.2189 1.49543C11.1681 1.37357 11.0937 1.26297 11 1.17Z"
                                                fill="#8896AB"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                        href="#">
                                        <div className="flex items-center">
                                            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 13H2C1.73478 13 1.48043 13.1054 1.29289 13.2929C1.10536 13.4804 1 13.7348 1 14V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H6C6.26522 23 6.51957 22.8946 6.70711 22.7071C6.89464 22.5196 7 22.2652 7 22V14C7 13.7348 6.89464 13.4804 6.70711 13.2929C6.51957 13.1054 6.26522 13 6 13ZM5 21H3V15H5V21ZM22 9H18C17.7348 9 17.4804 9.10536 17.2929 9.29289C17.1054 9.48043 17 9.73478 17 10V22C17 22.2652 17.1054 22.5196 17.2929 22.7071C17.4804 22.8946 17.7348 23 18 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V10C23 9.73478 22.8946 9.48043 22.7071 9.29289C22.5196 9.10536 22.2652 9 22 9ZM21 21H19V11H21V21ZM14 1H10C9.73478 1 9.48043 1.10536 9.29289 1.29289C9.10536 1.48043 9 1.73478 9 2V22C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1ZM13 21H11V3H13V21Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            <p className="text-coolGray-800 font-medium text-base">Analytics</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <p className="px-8 mb-2 text-xs font-medium text-coolGray-500 uppercase">Settings</p>
                                <ul className="px-4 pb-28">
                                    <li>
                                        <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                            href="#">
                                            <div className="flex items-center">
                                                <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.81 12.28C15.443 11.6002 15.7996 10.7088 15.81 9.78C15.81 8.77748 15.4118 7.81602 14.7029 7.10714C13.994 6.39825 13.0325 6 12.03 6C11.0275 6 10.066 6.39825 9.35714 7.10714C8.64825 7.81602 8.25 8.77748 8.25 9.78C8.26044 10.7088 8.61702 11.6002 9.25 12.28C8.36865 12.7189 7.61022 13.3699 7.04292 14.1746C6.47561 14.9793 6.11723 15.9124 6 16.89C5.97083 17.1552 6.0482 17.4212 6.21511 17.6293C6.38202 17.8375 6.62478 17.9708 6.89 18C7.15522 18.0292 7.42116 17.9518 7.62932 17.7849C7.83749 17.618 7.97083 17.3752 8 17.11C8.11933 16.1411 8.58885 15.2494 9.32009 14.6027C10.0513 13.956 10.9938 13.599 11.97 13.599C12.9462 13.599 13.8887 13.956 14.6199 14.6027C15.3512 15.2494 15.8207 16.1411 15.94 17.11C15.9678 17.3664 16.0936 17.6022 16.2911 17.768C16.4887 17.9339 16.7426 18.017 17 18H17.11C17.3721 17.9698 17.6117 17.8373 17.7766 17.6313C17.9414 17.4252 18.0181 17.1624 17.99 16.9C17.8815 15.9276 17.5344 14.997 16.9796 14.191C16.4248 13.3851 15.6796 12.7286 14.81 12.28ZM12 11.56C11.6479 11.56 11.3038 11.4556 11.0111 11.26C10.7184 11.0644 10.4902 10.7864 10.3555 10.4612C10.2208 10.1359 10.1855 9.77803 10.2542 9.43274C10.3229 9.08745 10.4924 8.77029 10.7414 8.52135C10.9903 8.27241 11.3075 8.10288 11.6527 8.0342C11.998 7.96552 12.3559 8.00077 12.6812 8.13549C13.0064 8.27022 13.2844 8.49837 13.48 8.79109C13.6756 9.0838 13.78 9.42795 13.78 9.78C13.78 10.2521 13.5925 10.7048 13.2586 11.0387C12.9248 11.3725 12.4721 11.56 12 11.56ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <p className="text-coolGray-800 font-medium text-base">Accounts</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-3 py-4 flex items-center justify-between text-coolGray-500 hover:text-yellow-500 hover:bg-coolGray-50 rounded-md"
                                            href="#">
                                            <div className="flex items-center">
                                                <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.32 9.55L19.43 8.92L20.32 7.14C20.4102 6.95369 20.4404 6.74397 20.4064 6.53978C20.3723 6.33558 20.2758 6.14699 20.13 6L18 3.87C17.8522 3.72209 17.6618 3.62421 17.4555 3.59013C17.2493 3.55605 17.0375 3.58748 16.85 3.68L15.07 4.57L14.44 2.68C14.3735 2.483 14.2472 2.31163 14.0787 2.18975C13.9102 2.06787 13.7079 2.00155 13.5 2H10.5C10.2904 1.99946 10.0858 2.06482 9.91537 2.18685C9.7449 2.30887 9.61709 2.48138 9.55 2.68L8.92 4.57L7.14 3.68C6.95369 3.58978 6.74397 3.55961 6.53978 3.59364C6.33558 3.62767 6.14699 3.72423 6 3.87L3.87 6C3.72209 6.14777 3.62421 6.33818 3.59013 6.54446C3.55605 6.75074 3.58748 6.96251 3.68 7.15L4.57 8.93L2.68 9.56C2.483 9.62654 2.31163 9.75283 2.18975 9.92131C2.06787 10.0898 2.00155 10.2921 2 10.5V13.5C1.99946 13.7096 2.06482 13.9142 2.18685 14.0846C2.30887 14.2551 2.48138 14.3829 2.68 14.45L4.57 15.08L3.68 16.86C3.58978 17.0463 3.55961 17.256 3.59364 17.4602C3.62767 17.6644 3.72423 17.853 3.87 18L6 20.13C6.14777 20.2779 6.33818 20.3758 6.54446 20.4099C6.75074 20.444 6.96251 20.4125 7.15 20.32L8.93 19.43L9.56 21.32C9.62709 21.5186 9.7549 21.6911 9.92537 21.8132C10.0958 21.9352 10.3004 22.0005 10.51 22H13.51C13.7196 22.0005 13.9242 21.9352 14.0946 21.8132C14.2651 21.6911 14.3929 21.5186 14.46 21.32L15.09 19.43L16.87 20.32C17.0551 20.4079 17.2628 20.4369 17.4649 20.4029C17.667 20.3689 17.8538 20.2737 18 20.13L20.13 18C20.2779 17.8522 20.3758 17.6618 20.4099 17.4555C20.444 17.2493 20.4125 17.0375 20.32 16.85L19.43 15.07L21.32 14.44C21.517 14.3735 21.6884 14.2472 21.8103 14.0787C21.9321 13.9102 21.9985 13.7079 22 13.5V10.5C22.0005 10.2904 21.9352 10.0858 21.8132 9.91537C21.6911 9.7449 21.5186 9.61709 21.32 9.55ZM20 12.78L18.8 13.18C18.5241 13.2695 18.2709 13.418 18.0581 13.6151C17.8452 13.8122 17.6778 14.0533 17.5675 14.3216C17.4571 14.5899 17.4064 14.879 17.419 15.1688C17.4315 15.4586 17.5069 15.7422 17.64 16L18.21 17.14L17.11 18.24L16 17.64C15.7436 17.5122 15.4627 17.4411 15.1763 17.4313C14.89 17.4215 14.6049 17.4734 14.3403 17.5834C14.0758 17.6934 13.8379 17.8589 13.6429 18.0688C13.4479 18.2787 13.3003 18.5281 13.21 18.8L12.81 20H11.22L10.82 18.8C10.7305 18.5241 10.582 18.2709 10.3849 18.0581C10.1878 17.8452 9.94671 17.6778 9.67842 17.5675C9.41014 17.4571 9.12105 17.4064 8.83123 17.419C8.5414 17.4315 8.25777 17.5069 8 17.64L6.86 18.21L5.76 17.11L6.36 16C6.4931 15.7422 6.56852 15.4586 6.58105 15.1688C6.59358 14.879 6.5429 14.5899 6.43254 14.3216C6.32218 14.0533 6.15478 13.8122 5.94195 13.6151C5.72912 13.418 5.47595 13.2695 5.2 13.18L4 12.78V11.22L5.2 10.82C5.47595 10.7305 5.72912 10.582 5.94195 10.3849C6.15478 10.1878 6.32218 9.94671 6.43254 9.67842C6.5429 9.41014 6.59358 9.12105 6.58105 8.83123C6.56852 8.5414 6.4931 8.25777 6.36 8L5.79 6.89L6.89 5.79L8 6.36C8.25777 6.4931 8.5414 6.56852 8.83123 6.58105C9.12105 6.59358 9.41014 6.5429 9.67842 6.43254C9.94671 6.32218 10.1878 6.15478 10.3849 5.94195C10.582 5.72912 10.7305 5.47595 10.82 5.2L11.22 4H12.78L13.18 5.2C13.2695 5.47595 13.418 5.72912 13.6151 5.94195C13.8122 6.15478 14.0533 6.32218 14.3216 6.43254C14.5899 6.5429 14.879 6.59358 15.1688 6.58105C15.4586 6.56852 15.7422 6.4931 16 6.36L17.14 5.79L18.24 6.89L17.64 8C17.5122 8.25645 17.4411 8.53735 17.4313 8.82369C17.4215 9.11003 17.4734 9.39513 17.5834 9.65969C17.6934 9.92424 17.8589 10.1621 18.0688 10.3571C18.2787 10.5521 18.5281 10.6997 18.8 10.79L20 11.19V12.78ZM12 8C11.2089 8 10.4355 8.2346 9.77772 8.67413C9.11993 9.11365 8.60724 9.73836 8.30448 10.4693C8.00173 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61217 14.269 9.17158 14.8284C9.73099 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17158C14.0783 8.42143 13.0609 8 12 8ZM12 14C11.6044 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3036 13.1308 10.1522 12.7654C10.0009 12.3999 9.96126 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1156 11.6098 10.0384C11.9978 9.96126 12.3999 10.0009 12.7654 10.1522C13.1308 10.3036 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6044 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <p className="text-coolGray-800 font-medium text-base">Settings</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div
                                    className="fixed bottom-0 -left-4 max-w-xs w-full flex flex-wrap items-center p-6 pl-10 justify-between bg-white">
                                    <div className="w-auto">
                                        <div className="flex flex-wrap -mx-2">
                                            <div className="w-auto p-2">
                                                <img src={window.location.origin + "/flex-ui-assets/images/user/" + user.profilePics} alt="" />
                                            </div>
                                            <div className="w-auto p-2">
                                                <h2 className="text-sm font-semibold text-coolGray-800">John Doe</h2>
                                                <p className="text-sm font-medium text-coolGray-500">johndoe@flex.co</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <a className="text-coolGray-500 hover:text-coolGray-600" href="#">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.29 8.71L18.59 11L9.00001 11C8.7348 11 8.48044 11.1054 8.29291 11.2929C8.10537 11.4804 8.00001 11.7348 8.00001 12C8.00001 12.2652 8.10537 12.5196 8.29291 12.7071C8.48044 12.8946 8.7348 13 9.00001 13L18.59 13L16.29 15.29C16.1963 15.383 16.1219 15.4936 16.0711 15.6154C16.0204 15.7373 15.9942 15.868 15.9942 16C15.9942 16.132 16.0204 16.2627 16.0711 16.3846C16.1219 16.5064 16.1963 16.617 16.29 16.71C16.383 16.8037 16.4936 16.8781 16.6154 16.9289C16.7373 16.9797 16.868 17.0058 17 17.0058C17.132 17.0058 17.2627 16.9797 17.3846 16.9289C17.5064 16.8781 17.617 16.8037 17.71 16.71L21.71 12.71C21.8011 12.6149 21.8724 12.5028 21.92 12.38C22.02 12.1365 22.02 11.8635 21.92 11.62C21.8724 11.4972 21.8011 11.3851 21.71 11.29L17.71 7.29C17.6168 7.19676 17.5061 7.1228 17.3843 7.07234C17.2624 7.02188 17.1319 6.99591 17 6.99591C16.8682 6.99591 16.7376 7.02188 16.6158 7.07234C16.4939 7.1228 16.3833 7.19676 16.29 7.29C16.1968 7.38324 16.1228 7.49393 16.0724 7.61575C16.0219 7.73757 15.9959 7.86814 15.9959 8C15.9959 8.13186 16.0219 8.26243 16.0724 8.38425C16.1228 8.50607 16.1968 8.61676 16.29 8.71ZM10 21C10 20.7348 9.89465 20.4804 9.70712 20.2929C9.51958 20.1054 9.26523 20 9.00001 20L5.00001 20C4.73479 20 4.48044 19.8946 4.2929 19.7071C4.10537 19.5196 4.00001 19.2652 4.00001 19L4.00001 5C4.00001 4.73478 4.10537 4.48043 4.2929 4.29289C4.48044 4.10536 4.73479 4 5.00001 4L9.00001 4C9.26523 4 9.51958 3.89464 9.70712 3.70711C9.89466 3.51957 10 3.26522 10 3C10 2.73478 9.89466 2.48043 9.70712 2.29289C9.51958 2.10536 9.26523 2 9.00001 2L5.00001 2C4.20436 2 3.4413 2.31607 2.87869 2.87868C2.31608 3.44129 2.00001 4.20435 2.00001 5L2.00001 19C2.00001 19.7956 2.31608 20.5587 2.87869 21.1213C3.4413 21.6839 4.20436 22 5.00001 22L9.00001 22C9.26523 22 9.51958 21.8946 9.70712 21.7071C9.89465 21.5196 10 21.2652 10 21Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
