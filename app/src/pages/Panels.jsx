import React from 'react'

export default function Panels() {
    return (
        <>
            <section className="relative py-24 bg-white theme-background">
                <div className="relative container px-4 mx-auto">
                    <div className="mb-16 text-center">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-9xl">Team</span>
                        <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">Our team is the best in the business.</h3>
                        <p className="text-lg md:text-xl text-coolGray-500 font-medium">Highly professional and capable of running your business across all digital channels.</p>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar1.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Macauley Herring</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">CEO &amp; Founder</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar2.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Ivan Mathews</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">CTO</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar3.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Elen Benitez</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">CPO</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar4.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Kacy Wade</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">Customer Success</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 xl:mb-0">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar5.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Alya Levine</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">Backend Developer</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 xl:mb-0">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar6.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Rosemary Hernandez</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">IOS Developer</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="#">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 md:mb-0">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar7.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Theo Morales</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">Frontend Developer</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-4 hover:opacity-80" href="#">
                                        <img src={window.location.origin + "/flex-ui-assets/brands/facebook.svg"} alt="" />
                                    </a>
                                    <a className="inline-block mr-4 hover:opacity-80" href="#">
                                        <img src={window.location.origin + "/flex-ui-assets/brands/twitter.svg"} alt="" />
                                    </a>
                                    <a className="inline-block hover:opacity-80" href="#">
                                        <img src={window.location.origin + "/flex-ui-assets/brands/instagram.svg"} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/teams/avatar8.png"} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Ishmael Dunlop</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">Product Designer</span>
                                <div className="flex items-center justify-center">
                                    <a className="inline-block mr-4 hover:opacity-80" href="#">
                                        <img src={window.location.origin + "/flex-ui-assets/brands/facebook.svg"} alt="" />
                                    </a>
                                    <a className="inline-block mr-4 hover:opacity-80" href="#">
                                        <img src={window.location.origin + "/flex-ui-assets/brands/twitter.svg"} alt="" />
                                    </a>
                                    <a className="inline-block hover:opacity-80" href="#">
                                        <img src={window.location.origin + "/flex-ui-assets/brands/instagram.svg"} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-24 bg-white" style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top' }}>
                <div className="container px-4 mx-auto">
                    <div className="mb-8 md:mb-16 md:max-w-5xl">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-full shadow-sm">RESOURCES</span>
                        <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Our mission is to make knowledge and news accessible for everyone.</h3>
                        <p className="text-lg md:text-xl text-coolGray-500 font-medium">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.</p>
                    </div>
                    <ul className="flex flex-wrap mb-8 -mx-2 text-center">
                        <li className="w-full md:w-auto px-2"><a className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">All Categories</a></li>
                        <li className="w-full md:w-auto px-2"><a className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Technology</a></li>
                        <li className="w-full md:w-auto px-2"><a className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Development</a></li>
                        <li className="w-full md:w-auto px-2"><a className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Marketing</a></li>
                        <li className="w-full md:w-auto px-2"><a className="inline-block w-full py-2 px-4 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Start-up</a></li>
                    </ul>
                    <div className="flex flex-wrap items-center -mx-4 mb-12 md:mb-16">
                        <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                            <div className="w-full md:w-auto md:px-4">
                                <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                    <img src={window.location.origin + "/flex-ui-assets/images/blog/effect3.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="w-full md:flex-1 md:px-4">
                                <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                                <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                                <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                    <span className="mr-3">Read Post</span>
                                    <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                            <div className="w-full md:w-auto md:px-4">
                                <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                    <img src={window.location.origin + "/flex-ui-assets/images/blog/work3.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="w-full md:flex-1 md:px-4">
                                <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                                <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                                <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                    <span className="mr-3">Read Post</span>
                                    <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                            <div className="w-full md:w-auto md:px-4">
                                <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                    <img src={window.location.origin + "/flex-ui-assets/images/blog/work4.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="w-full md:flex-1 md:px-4">
                                <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                                <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                                <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                    <span className="mr-3">Read Post</span>
                                    <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                            <div className="w-full md:w-auto md:px-4">
                                <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                    <img src={window.location.origin + "/flex-ui-assets/images/blog/effect4.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="w-full md:flex-1 md:px-4">
                                <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                                <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                                <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                    <span className="mr-3">Read Post</span>
                                    <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 xl:mb-0 md:-mx-4">
                            <div className="w-full md:w-auto md:px-4">
                                <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                    <img src={window.location.origin + "/flex-ui-assets/images/blog/learn2.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="w-full md:flex-1 md:px-4">
                                <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                                <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                                <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                    <span className="mr-3">Read Post</span>
                                    <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 md:-mx-4">
                            <div className="w-full md:w-auto md:px-4">
                                <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                    <img src={window.location.origin + "/flex-ui-assets/images/blog/macbook2.jpg"} alt="" />
                                </a>
                            </div>
                            <div className="w-full md:flex-1 md:px-4">
                                <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                                <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                                <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                    <span className="mr-3">Read Post</span>
                                    <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg">
                        <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium border-r border-coolGray-100" href="#">
                            <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.28994 5.99995L6.82994 2.45995C7.01619 2.27259 7.12074 2.01913 7.12074 1.75495C7.12074 1.49076 7.01619 1.23731 6.82994 1.04995C6.73698 0.95622 6.62638 0.881826 6.50452 0.831057C6.38266 0.780288 6.25196 0.75415 6.11994 0.75415C5.98793 0.75415 5.85723 0.780288 5.73537 0.831057C5.61351 0.881826 5.50291 0.95622 5.40994 1.04995L1.16994 5.28995C1.07622 5.38291 1.00182 5.49351 0.951053 5.61537C0.900284 5.73723 0.874146 5.86794 0.874146 5.99995C0.874146 6.13196 0.900284 6.26267 0.951053 6.38453C1.00182 6.50638 1.07622 6.61699 1.16994 6.70995L5.40994 10.9999C5.50338 11.0926 5.6142 11.166 5.73604 11.2157C5.85787 11.2655 5.98834 11.2907 6.11994 11.2899C6.25155 11.2907 6.38201 11.2655 6.50385 11.2157C6.62569 11.166 6.7365 11.0926 6.82994 10.9999C7.01619 10.8126 7.12074 10.5591 7.12074 10.2949C7.12074 10.0308 7.01619 9.77731 6.82994 9.58995L3.28994 5.99995Z" fill="currentColor" />
                            </svg>
                        </a>
                        <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-yellow-500 font-medium border-r border-coolGray-100" href="#">1</a><a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-yellow-500 font-medium border-r border-coolGray-100" href="#">2</a><a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-yellow-500 font-medium border-r border-coolGray-100" href="#">3</a>
                        <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium" href="#">
                            <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.71006 6.00005L1.17006 9.54005C0.983805 9.72741 0.879264 9.98087 0.879264 10.2451C0.879264 10.5092 0.983805 10.7627 1.17006 10.9501C1.26302 11.0438 1.37362 11.1182 1.49548 11.1689C1.61734 11.2197 1.74804 11.2459 1.88006 11.2459C2.01207 11.2459 2.14277 11.2197 2.26463 11.1689C2.38649 11.1182 2.49709 11.0438 2.59006 10.9501L6.83006 6.71005C6.92378 6.61709 6.99818 6.50649 7.04895 6.38463C7.09972 6.26277 7.12585 6.13206 7.12585 6.00005C7.12585 5.86804 7.09972 5.73733 7.04895 5.61547C6.99818 5.49362 6.92378 5.38301 6.83006 5.29005L2.59006 1.00005C2.49662 0.907371 2.3858 0.834046 2.26396 0.784281C2.14212 0.734517 2.01166 0.70929 1.88006 0.710051C1.74845 0.70929 1.61799 0.734517 1.49615 0.784281C1.37431 0.834046 1.2635 0.907371 1.17006 1.00005C0.983804 1.18741 0.879263 1.44087 0.879263 1.70505C0.879263 1.96924 0.983804 2.22269 1.17006 2.41005L4.71006 6.00005Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>




            <section className="py-24 bg-coolGray-900">
                <div className="container px-4 mx-auto">
                    <div className="relative py-16 md:py-32 px-6 text-center bg-white overflow-hidden rounded-7xl theme-background">
                        <div className="relative z-10 mx-auto md:max-w-2xl">
                            <h3 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Join the change !!!</h3>
                            <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Stay in the loop with everything you need to know.</p>
                            <div className="mx-auto md:max-w-md text-left">
                                <div className="flex flex-wrap mb-1">
                                    <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm" type="text" placeholder="Enter your email" />
                                    </div>
                                    <div className="w-full md:w-auto"><a className="inline-block py-3 px-5 w-full leading-5 text-white bg-yellow-500 hover:bg-yellow-600 font-medium text-center focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm" href="#">Register</a></div>
                                </div>
                                <span className="text-xs text-coolGray-500 font-medium">
                                    <span>We care about your data in our</span>
                                    <a className="text-yellow-500 hover:text-yellow-600" href="#">privacy policy</a>
                                </span>
                            </div>
                        </div>
                        <img className="absolute top-0 left-0 w-28 md:w-auto" src={window.location.origin + "/flex-ui-assets/elements/wave2-yellow.svg"} alt="" />
                        <img className="absolute right-6 top-6 w-28 md:w-auto" src={window.location.origin + "/flex-ui-assets/elements/dots3-green.svg"} alt="" />
                        <img className="absolute right-0 bottom-0 w-28 md:w-auto" src={window.location.origin + "/flex-ui-assets/elements/wave3-red.svg"} alt="" />
                        <img className="absolute left-6 bottom-6 w-28 md:w-auto" src={window.location.origin + "/flex-ui-assets/elements/dots3-violet.svg"} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
