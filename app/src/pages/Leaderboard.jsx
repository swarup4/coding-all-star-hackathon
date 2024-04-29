import React from 'react'

export default function Leaderboard() {
    return (
        <section class="bg-coolGray-50 py-4">
            <div class="container px-4 mx-auto">
                <div class="bg-white overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
                    <div class="flex flex-wrap divide-y divide-x xl:divide-y-0 divide-coolGray-100">
                        <div class="w-full md:w-1/2 xl:w-1/4">
                            <div class="p-8 bg-white">
                                <div class="flex flex-wrap items-center justify-between -m-2">
                                    <div class="w-auto p-2">
                                        <h3 class="text-sm text-coolGray-500 font-medium">Active users</h3>
                                    </div>
                                    <div class="w-auto p-2">
                                        <div class="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-transparent rounded-full">
                                            <svg class="mr-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z" fill="#22C55E"></path>
                                            </svg>
                                            <p>23%</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="font-semibold text-2xl text-coolGray-900 tracking-tighter">12,450</h2>
                                <div class="chart-stats5-area-blue"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4">
                            <div class="p-8 bg-white">
                                <div class="flex flex-wrap items-center justify-between -m-2">
                                    <div class="w-auto p-2">
                                        <h3 class="text-sm text-coolGray-500 font-medium">Returning users</h3>
                                    </div>
                                    <div class="w-auto p-2">
                                        <div class="flex items-center px-2 py-1 text-yellow-500 font-medium text-xs bg-transparent rounded-full">
                                            <svg class="mr-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.14503 6.35499L5.64503 8.85499C5.69258 8.90051 5.74865 8.93619 5.81003 8.95999C5.93176 9.01 6.0683 9.01 6.19003 8.95999C6.2514 8.93619 6.30748 8.90051 6.35503 8.85499L8.85503 6.35499C8.90165 6.30837 8.93863 6.25303 8.96386 6.19212C8.98909 6.1312 9.00207 6.06592 9.00207 5.99999C9.00207 5.86684 8.94918 5.73914 8.85503 5.64499C8.76088 5.55084 8.63318 5.49795 8.50003 5.49795C8.36688 5.49795 8.23918 5.55084 8.14503 5.64499L6.50003 7.29499L6.50003 3.49999C6.50003 3.36738 6.44735 3.24021 6.35358 3.14644C6.25981 3.05267 6.13264 2.99999 6.00003 2.99999C5.86742 2.99999 5.74024 3.05267 5.64648 3.14644C5.55271 3.24021 5.50003 3.36738 5.50003 3.49999L5.50003 7.29499L3.85503 5.64499C3.80855 5.59813 3.75325 5.56093 3.69232 5.53555C3.63139 5.51016 3.56603 5.49709 3.50003 5.49709C3.43402 5.49709 3.36867 5.51016 3.30774 5.53555C3.24681 5.56093 3.19151 5.59813 3.14503 5.64499C3.09817 5.69147 3.06097 5.74677 3.03558 5.8077C3.0102 5.86863 2.99713 5.93399 2.99713 5.99999C2.99713 6.066 3.0102 6.13135 3.03558 6.19228C3.06097 6.25321 3.09817 6.30851 3.14503 6.35499Z" fill="#F59E0B"></path>
                                            </svg>
                                            <p>13%</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="font-semibold text-2xl text-coolGray-900 tracking-tighter">12,450</h2>
                                <div class="chart-stats5-area-green"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4">
                            <div class="p-8 bg-white">
                                <div class="flex flex-wrap items-center justify-between -m-2">
                                    <div class="w-auto p-2">
                                        <h3 class="text-sm text-coolGray-500 font-medium">Today’s sale</h3>
                                    </div>
                                    <div class="w-auto p-2">
                                        <div class="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-transparent rounded-full">
                                            <svg class="mr-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z" fill="#22C55E"></path>
                                            </svg>
                                            <p>23%</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="font-semibold text-2xl text-coolGray-900 tracking-tighter">$6,540</h2>
                                <div class="chart-stats5-area-violet"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4">
                            <div class="p-8 bg-white">
                                <div class="flex flex-wrap items-center justify-between -m-2">
                                    <div class="w-auto p-2">
                                        <h3 class="text-sm text-coolGray-500 font-medium">Today’s revenue</h3>
                                    </div>
                                    <div class="w-auto p-2">
                                        <div class="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-transparent rounded-full">
                                            <svg class="mr-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z" fill="#22C55E"></path>
                                            </svg>
                                            <p>23%</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="font-semibold text-2xl text-coolGray-900 tracking-tighter">$6,540</h2>
                                <div class="chart-stats5-area-yellow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
