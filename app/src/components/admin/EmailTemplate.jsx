import React from 'react'

export default function EmailTemplate(props) {
    return (
        <div className="py-6 border-b border-coolGray-100">
            <div className="w-full">
                <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/4 p-3">
                        <p className="text-sm text-coolGray-800 font-semibold">Template</p>
                    </div>
                    <div className="w-full md:w-3/4 p-3">
                        <textarea placeholder="Enter Description" name='description' value={props.template} onChange={(ev) => props.setTemplate(ev.target.value)}
                            className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
