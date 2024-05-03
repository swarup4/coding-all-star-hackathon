import React from 'react'

export default function EnvFile() {
    return (
        <dialog id="env-file" className="modal">
            <div className="modal-box bg-white w-full max-w-7xl p-6 sm:p-10 mx-auto bg-coolGray-50 rounded-lg">

                <form>
                    <div className='inline-block w-1/2'>
                        <h3 className="font-bold text-lg text-coolGray-800">Env Variable</h3>
                        <p className="text-xs text-coolGray-500 font-medium">Env Variable</p>
                    </div>
                    <div className='w-1/2 float-right'>
                        <div className="inline-block float-right w-1/6 modal-action my-0">
                            <button className=" px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">Cancel</button>
                        </div>
                        <button className="inline-block mr-3 float-right w-1/6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">Send</button>
                    </div>

                    <div className="pt-6 pb-4">
                        <div className="w-full">
                            <div className="flex flex-wrap -m-3">
                                <div className="w-full md:flex-1 p-3">
                                    <textarea className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
