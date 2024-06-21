import React from 'react'

export default function EmptyContent() {
    return (
        <section className="z-50 w-full flex items-center">
            <div className="container px-4 mx-auto w-7/12">
                <div className="p-6 bg-cyan-100 border border-cyan-200 rounded-md">
                    <div className="flex flex-wrap justify-between items-center -m-2">
                        <div className="flex-1 p-2">
                            <div className="flex flex-wrap -m-1">
                                <div className="flex-1 p-1">
                                    <h3 className="mb-0.5 font-medium text-md text-cyan-900">Info!&nbsp; You don't have any submission.</h3>
                                    <p className="font-medium text-sm text-cyan-700">Create a submission using click <b>Create Submission</b> button</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
