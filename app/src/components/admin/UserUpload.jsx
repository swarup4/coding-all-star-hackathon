import React, { useEffect, useState } from 'react'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

export default function UserUpload(props) {

    function selectExcelFile(ev) {
        let file = ev.currentTarget.files[0];
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);
        props.setUserExcelFile({ "file": file });
    }

    return (
        <div className="py-6 border-b border-coolGray-100">
            <div className="w-full">
                <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/4 p-3">
                        <p className="text-sm text-coolGray-800 font-semibold">Excel File</p>
                        <p className="text-xs text-coolGray-500 font-medium"></p>
                    </div>
                    <div className="w-full md:w-3/4 p-3">
                        <div className="relative flex flex-col items-center justify-center p-6 h-44 w-4/5 text-center text-yellow-500 focus-within:border-yellow-500 border border-dashed border-coolGray-200 rounded-lg">
                            <ArrowUpTrayIcon className='h-6 w-6 stroke-2' />
                            <p className="mb-1 text-sm text-coolGray-800 font-medium">
                                <span className="text-yellow-500">Click to Upload a file</span> <br />
                                <span>or</span> <br />
                                <span> drag and drop</span>
                            </p>
                            <p className="text-xs text-coolGray-500 font-medium">XLS, XLSX or up to 10MB</p>
                            <p className="text-xs text-coolGray-500 font-medium">{props.userExcelFile?.file?.name ?? ''}</p>
                            <input type="file" name='profilePics' onChange={(ev) => selectExcelFile(ev)} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
