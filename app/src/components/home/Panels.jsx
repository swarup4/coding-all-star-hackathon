import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HOST_URL } from '../../constants'


export default function Panels() {

    const [panels, setPanels] = useState([]);

    useEffect(() => {
        const url = `${HOST_URL}hackathon/getAllPanelist`
        axios.get(url).then(res => {
            setPanels(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <section className="relative pt-20 pb-12 bg-white theme-background">
                <div className="relative container px-4 mx-auto">
                    <div className="mb-16 text-center">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-9xl">Team</span>
                        <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">Our team is the best in the business.</h3>
                        <p className="text-lg md:text-xl text-coolGray-500 font-medium">Highly professional and capable of running your business across all digital channels.</p>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {panels.map((res, ind) => (
                            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 md:mb-0" key={ind}>
                                <div className="text-center max-w-xs mx-auto">
                                    <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={window.location.origin + "/flex-ui-assets/images/user/" + res.panel.profilePics} alt="" />
                                    <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">{res.panel.name}</h3>
                                    <span className="inline-block mb-6 text-lg font-medium text-yellow-500">{res.panel.role}</span>
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
        </>
    )
}
