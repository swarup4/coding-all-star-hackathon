import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Error() {
    return (
        <>
            <Header />
            
            <section className="relative bg-white theme-background">
                <img className="md:hidden w-full" src={window.location.origin + "/flex-ui-assets/images/http-codes/dog-error-side.png"} alt="" />
                <img className="absolute top-0 left-0 hidden md:block h-full w-2/5 md:object-cover" src={window.location.origin + "/flex-ui-assets/images/http-codes/dog-error-side.png"} alt="" />
                <div className="relative z-10 container px-4 mx-auto">
                    <div className="flex flex-wrap py-16 md:py-40 lg:py-72">
                        <div className="w-full md:w-1/2 ml-auto text-center md:text-left">
                            <div className="md:max-w-xl">
                                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium rounded-full shadow-sm">Error 404</span>
                                <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">Oh no! Error 404</h2>
                                <p className="mb-6 text-lg md:text-xl text-coolGray-500">Something went wrong, so this page is broken.</p>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-auto py-1 lg:py-0 lg:mr-6">
                                        <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-yellow-50 font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-yellow-500 rounded-md shadow-sm" href="#">Go back to Homepage</a>
                                    </div>
                                    <div className="w-full lg:w-auto py-1 lg:py-0">
                                        <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#">Try Again</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="absolute right-6 top-6 hidden md:block w-24 md:w-auto" src={window.location.origin + "/flex-ui-assets/elements/dots3-green.svg"} alt="" />
                <img className="absolute right-0 bottom-0 w-24 md:w-auto" src={window.location.origin + "/flex-ui-assets/elements/wave3-red.svg"} alt="" />
            </section>
            
            <Footer />
        </>
    )
}
