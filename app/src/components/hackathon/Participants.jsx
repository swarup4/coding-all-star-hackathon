import React from 'react'
import { getInitial } from '../helper'

export default function Participants(props) {
    return (
        <section className="relative pb-24 bg-white theme-background">
            <div className="relative container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    {props.data.map((res, ind) => (
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10" key={ind}>
                            <div className="text-center max-w-xs mx-auto">
                                {res.profilePics ? (
                                    <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Users/${res.profilePics}`} alt="" />
                                ) : (
                                    <div className={`flex items-center justify-center w-24 h-24 mb-6 mx-auto text-3xl font-medium rounded-full text-yellow-600 bg-yellow-200`}>{getInitial(res.name)}</div>
                                )}
                                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">{res.name}</h3>
                                <span className="inline-block mb-6 text-lg font-medium text-yellow-500">{res.role}</span>
                                <div className="flex items-center justify-center">
                                    {res.social ? (
                                        <>
                                            {res.social.socialMedia.map((x, ind) => (
                                                <>
                                                    {x.name == 'facebook' ? (
                                                        <a className="inline-block mx-2 hover:opacity-80" href={x.url} target='_blank'>
                                                            <img src={window.location.origin + "/flex-ui-assets/brands/facebook.svg"} alt="" />
                                                        </a>
                                                    ) : ''}

                                                    {x.name == 'linkedin' ? (
                                                        <a className="inline-block mx-2 hover:opacity-80" href={x.url} target='_blank'>
                                                            <img src={window.location.origin + "/flex-ui-assets/brands/linkedin.svg"} alt="" />
                                                        </a>
                                                    ) : ''}

                                                    {x.name == 'instagram' ? (
                                                        <a className="inline-block mx-2 hover:opacity-80" href={x.url} target='_blank'>
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
    )
}
