import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../../axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'


export default function Panels() {

    const dispatch = useDispatch()
    const [panels, setPanels] = useState([]);

    useEffect(() => {
        const url = `${HOST_URL}hackathon/getAllPanelist`
        axios.get(url).then(res => {
            setPanels(res.data)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
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
                                    <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/${res.panel.profilePics}`} alt="" />
                                    <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">{res.panel.name}</h3>
                                    <span className="inline-block mb-6 text-lg font-medium text-yellow-500">{res.panel.role}</span>
                                    <div className="flex items-center justify-center">
                                        {res.panel.contact ? (
                                            <>
                                                {res.panel.contact.socialMedia.map((x, ind) => (
                                                    <>
                                                        {x.name == 'facebook' ? (
                                                            <a className="inline-block mr-4 hover:opacity-80" href={x.url}>
                                                                <img src={window.location.origin + "/flex-ui-assets/brands/facebook.svg"} alt="" />
                                                            </a>
                                                        ) : ''}

                                                        {x.name == 'twitter' ? (
                                                            <a className="inline-block mr-4 hover:opacity-80" href={x.url}>
                                                                <img src={window.location.origin + "/flex-ui-assets/brands/twitter.svg"} alt="" />
                                                            </a>
                                                        ) : ''}

                                                        {x.name == 'instagram' ? (
                                                            <a className="inline-block hover:opacity-80" href={x.url}>
                                                                <img src={window.location.origin + "/flex-ui-assets/brands/instagram.svg"} alt="" />
                                                            </a>
                                                        ) : ''}
                                                    </>
                                                ))}
                                            </>
                                        ) : ''}
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
