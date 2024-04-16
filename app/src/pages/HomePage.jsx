import React from 'react'
import Header from '../components/common/Header'
import Faq from '../components/home/Faq'
import Footer from '../components/common/Footer'

export default function HomePage() {
    return (
        <>
            <Header />

            <section className="py-24 bg-white overflow-hidden theme-background">
                <div className="container px-4 mx-auto">
                    <div className="md:max-w-4xl mb-16 md:mb-20">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium rounded-full shadow-sm">How all stars works</span>
                        <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Eat, Sleep, Code &amp; Repeat</h1>
                        <p className="text-lg md:text-xl text-coolGray-500 font-medium">We are a team of 5+ who are passionate about making the development better.</p>
                    </div>
                    <div className="flex flex-wrap lg:items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="relative mx-auto md:ml-0 max-w-max">
                                <img className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400" src="flex-ui-assets/elements/circle3-red.svg" alt="" />
                                <img className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500" src="flex-ui-assets/elements/dots3-green.svg" alt="" />
                                <img src="../flex-ui-assets/images/features/stock2.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                                    <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-yellow-500 rounded-lg">
                                        <svg width={21} height={21} viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full md:flex-1 md:pt-3">
                                    <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">Simple &amp; Uniuqe</h3>
                                    <p className="text-coolGray-500 font-medium">Clear Instructions &amp; Rules</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                                    <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-yellow-500 rounded-lg">
                                        <svg width={21} height={21} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 18H9.24C9.37161 18.0008 9.50207 17.9755 9.62391 17.9258C9.74574 17.876 9.85656 17.8027 9.95 17.71L16.87 10.78L19.71 8C19.8037 7.90704 19.8781 7.79644 19.9289 7.67458C19.9797 7.55272 20.0058 7.42201 20.0058 7.29C20.0058 7.15799 19.9797 7.02728 19.9289 6.90542C19.8781 6.78356 19.8037 6.67296 19.71 6.58L15.47 2.29C15.377 2.19627 15.2664 2.12188 15.1446 2.07111C15.0227 2.02034 14.892 1.9942 14.76 1.9942C14.628 1.9942 14.4973 2.02034 14.3754 2.07111C14.2536 2.12188 14.143 2.19627 14.05 2.29L11.23 5.12L4.29 12.05C4.19732 12.1434 4.12399 12.2543 4.07423 12.3761C4.02446 12.4979 3.99924 12.6284 4 12.76V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18ZM14.76 4.41L17.59 7.24L16.17 8.66L13.34 5.83L14.76 4.41ZM6 13.17L11.93 7.24L14.76 10.07L8.83 16H6V13.17ZM21 20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full md:flex-1 md:pt-3">
                                    <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">Your digital portfolio</h3>
                                    <p className="text-coolGray-500 font-medium">Showcase and get noticed</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                                    <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-yellow-500 rounded-lg">
                                        <svg width={21} height={21} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full md:flex-1 md:pt-3">
                                    <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">World Class</h3>
                                    <p className="text-coolGray-500 font-medium">Your connection to best hackathons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white overflow-hidden theme-background">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-20 lg:mb-0">
                            <div className="max-w-md mx-auto">
                                <h2 className="mb-8 text-4xl md:text-5xl font-heading font-bold text-coolGray-900 md:leading-15">Join fast growing 2K+ community of developers&nbsp;
                                </h2>
                                <ul className="mb-8">
                                    <li className="flex items-center mb-4">
                                        <img className="mr-3" src="flex-ui-assets/elements/cta/checkbox-yellow.svg" alt="" />
                                        <span className="text-lg md:text-xl font-heading text-coolGray-500">Simple &amp; Fast Hackathons</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <img className="mr-3" src="flex-ui-assets/elements/cta/checkbox-yellow.svg" alt="" />
                                        <span className="text-lg md:text-xl font-heading text-coolGray-500">Transparent with Cash Prices</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="mr-3" src="flex-ui-assets/elements/cta/checkbox-yellow.svg" alt="" />
                                        <span className="text-lg md:text-xl font-heading text-coolGray-500">Portfolio &amp; Community Support</span>
                                    </li>
                                </ul>
                                <div className="flex flex-wrap items-center">
                                    <a className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 md:w-auto text-lg leading-7 text-coolGray-800 bg-white hover:bg-coolGray-100 font-medium focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 border border-coolGray-100 rounded-md shadow-sm" href="#">Participate</a><a className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-yellow-50 bg-yellow-500 hover:bg-yellow-600 font-medium focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm" href="#">Organize</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="relative max-w-max mx-auto">
                                <img className="absolute top-0 right-0 -mt-6 lg:-mt-12 -mr-6 lg:-mr-12 w-20 lg:w-auto z-10" src="flex-ui-assets/elements/circle3-red.svg" alt="" />
                                <img className="absolute bottom-0 left-0 -mb-6 lg:-mb-10-ml-6 lg:-ml-12 w-20 lg:w-auto" src="flex-ui-assets/elements/dots3-green.svg" alt="" />
                                <img className="relative" src="flex-ui-assets/elements/cta/photo-laptop-ph.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 xl:py-24 bg-white theme-background">
                <div className="container px-4 mx-auto">
                    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium rounded-9xl">ALL STAR AT A GLANCE</span>
                    <h3 className="mb-4 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">We help our cusotmers overcome the limits of Time, Technology, and Budget</h3>
                    <p className="mb-16 xl:mb-24 text-lg md:text-xl text-coolGray-500 font-medium max-w-3xl">We differentiate ourselves with our solutions approach to business problems, and the attention, care, and flexibility that we provide to our employees and customers</p>
                    <div className="flex flex-wrap items-center -mx-4 text-center">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <div className="flex flex-wrap justify-center -mx-4">
                                <div className="w-full md:w-1/2 px-4 mb-8">
                                    <h2 className="mb-4 text-4xl lg:text-5xl text-yellow-600 font-bold tracking-tighter">600+</h2>
                                    <h3 className="mb-2 text-lg md:text-xl text-coolGray-800 font-bold">Client</h3>
                                    <p className="text-coolGray-500 font-medium">No need to hire specialists for each channel.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mb-8">
                                    <h2 className="mb-4 text-4xl lg:text-5xl text-yellow-600 font-bold tracking-tighter">97%</h2>
                                    <h3 className="mb-2 text-lg md:text-xl text-coolGray-800 font-bold">NPS</h3>
                                    <p className="text-coolGray-500 font-medium">Track how much money a company just in case</p>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                                    <h2 className="mb-4 text-4xl lg:text-5xl text-yellow-600 font-bold tracking-tighter">88%</h2>
                                    <h3 className="mb-2 text-lg lg:text-xl text-coolGray-800 font-bold">Client Retention</h3>
                                    <p className="text-coolGray-500 font-medium">Manage many companies, even with different languages.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <h2 className="mb-4 text-4xl lg:text-5xl text-yellow-600 font-bold tracking-tighter">2800+</h2>
                                    <h3 className="mb-2 text-lg md:text-xl text-coolGray-800 font-bold">Members</h3>
                                    <p className="text-coolGray-500 font-medium">Everyone works the way they want to, on their own schedule.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <img className="mx-auto md:mr-0" src="flex-ui-assets/images/numbers/work.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-coolGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="relative py-11 px-16 bg-coolGray-900 rounded-md overflow-hidden">
                        <img className="absolute z-10 left-4 top-4" src="flex-ui-assets/elements/dashboard/banners/dots-red.svg" alt="" />
                        <img className="absolute z-10 right-4 bottom-4" src="flex-ui-assets/elements/dashboard/banners/dots-green.svg" alt="" />
                        <img className="absolute h-64 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover" src="flex-ui-assets/elements/dashboard/banners/wave.svg" alt="" />
                        <div className="relative z-20 flex flex-wrap items-center -m-3">
                            <div className="w-full md:w-1/2 p-3">
                                <h2 className="mb-6 text-4xl font-bold text-white tracking-tighter">Hackathon's for Developers by Developers</h2>
                                <ul className="flex flex-wrap">
                                    <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold">
                                        <img className="relative top-px mr-2" src="flex-ui-assets/elements/dashboard/banners/checkbox-green.svg" />
                                        <span>Leader Board</span>
                                    </li>
                                    <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold">
                                        <img className="relative top-px mr-2" src="flex-ui-assets/elements/dashboard/banners/checkbox-green.svg" />
                                        <span>Merit Based</span>
                                    </li>
                                    <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold">
                                        <img className="relative top-px mr-2" src="flex-ui-assets/elements/dashboard/banners/checkbox-green.svg" />
                                        <span>Transparent</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 p-3">
                                <button className="block md:ml-auto px-7 py-4 font-medium text-lg text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Faq />


            <section className="py-20 xl:pt-24 bg-white theme-background">
                <div className="container px-4 mx-auto">
                    <div className="mb-8 text-center">
                        <h3 className="mb-4 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter" contentEditable="false">Builth with love for &amp; by</h3>
                    </div>
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                            <img className="mx-auto" src="https://static.shuffle.dev/uploads/files/a4/a4fc302b23b342fd2989f185f7507831a1d74ff0/Trigent-Axlr8-Labs.png" alt="" contentEditable="false" />
                        </div>
                        <div className="mb-8 text-center">
                            <p className="text-lg md:text-xl text-coolGray-500 font-medium" contentEditable="false">Managed Hackathon platform that combines Industry Experience, Artificial Inteligence &amp; Community Engagement.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-coolGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="relative py-11 px-16 bg-yellow-500 rounded-md overflow-hidden">
                        <img className="absolute z-10 left-4 top-4" src="flex-ui-assets/elements/dashboard/banners/dots-green.svg" alt="" />
                        <img className="absolute z-10 right-4 bottom-4" src="flex-ui-assets/elements/dashboard/banners/dots-green.svg" alt="" />
                        <img className="absolute h-64 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover" src="flex-ui-assets/elements/dashboard/banners/wave-basic.svg" alt="" />
                        <div className="relative z-20 flex flex-wrap items-center -m-3">
                            <div className="w-full md:w-1/2 p-3">
                                <h2 className="mb-6 text-4xl font-bold text-white tracking-tighter">Be part of Global Community of Developers</h2>
                                <p className="font-semibold text-coolGray-200">Get Noticed &amp; Validated by your Peers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}
