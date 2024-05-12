import React from 'react'

export default function Participants(props) {
    return (
        <section className="relative pb-24 bg-white theme-background">
            <div className="relative container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    {props.data.map((res, ind) => (
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10" key={ind}>
                            <div className="text-center max-w-xs mx-auto">
                                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/user/" + res.profilePics} alt="" />
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">{res.name}</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">{res.role}</span>
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
                    ))}
                </div>
            </div>
        </section>
    )
}
