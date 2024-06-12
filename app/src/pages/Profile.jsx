import React from 'react'
import Rank from '../components/profile/Rank'

export default function Profile() {
    return (
        <>
            {/* Component 1 */}
            <section className="bg-white p-8">
                <div className="flex flex-wrap items-center">
                    <div className="w-full">
                        <h2 className="mb-2 font-semibold text-black text-3xl">Profile</h2>
                        {/* <p className="text-coolGray-500 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>
            </section>

            <Rank />
        </>
    )
}
