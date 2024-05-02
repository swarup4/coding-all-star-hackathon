import React from 'react'

export default function TestCase() {
    return (
        <dialog id="test-case" className="modal">
            <div class="modal-box bg-white w-full max-w-7xl p-6 sm:p-10 mx-auto bg-coolGray-50 rounded-lg" style={{ height: '90%' }}>

                <form action="">
                    <div className='inline-block w-1/2'>
                        <h3 className="font-bold text-lg text-coolGray-800">Test Case</h3>
                        <p className="text-xs text-coolGray-500 font-medium">Env Variable</p>
                    </div>
                    <div className='w-1/2 float-right'>
                        <button class="inline-block float-right w-1/6 px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">Cancel</button>
                        <button class="inline-block mr-3 float-right w-1/6 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">Send</button>
                    </div>

                    <div className="py-6">
                        <div className="w-full">
                            <div className="flex flex-wrap -m-3">
                                <div className="w-full md:flex-1 p-3">
                                    <textarea className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none"  style={{ height: '73vh' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </dialog>
    )
}
