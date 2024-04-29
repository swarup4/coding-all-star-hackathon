import React from 'react'

export default function Panel() {
    return (
        <div>
            <section class="bg-coolGray-50 py-4">
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap -m-3">
                        <div class="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div class="h-full border border-coolGray-100 bg-white rounded-md shadow-dashboard">
                                <div class="p-8 px-6 pb-0">
                                    <div class="flex flex-wrap items-center justify-between -m-2 mb-0">
                                        <div class="w-auto p-2">
                                            <h2 class="text-coolGray-900 text-lg font-semibold">Request</h2>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="px-2 py-1 text-xs text-darkCoolGray-500 font-medium bg-darkCoolGray-100 rounded-full">30 days</p>
                                        </div>
                                    </div>
                                    <div class="chart-chart5-radial-bar-blue" style={{minHeight: '173.7px'}}>
                                        <div id="apexcharts6imqatc9" class="apexcharts-canvas apexcharts6imqatc9 apexcharts-theme-light" style={{width: '182px', height: '173.7px'}}>
                                            <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                                            {/* <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div> */}
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <div class="w-full">
                                            <div class="py-4 border-b border-coolGray-100">
                                                <div class="flex flex-wrap justify-between -m-2">
                                                    <div class="w-auto p-2">
                                                        <div class="flex items-center">
                                                            <div class="mr-2 w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                            <p class="text-xs text-coolGray-500 font-medium">New</p>
                                                        </div>
                                                    </div>
                                                    <div class="w-auto p-2">
                                                        <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                            <span>4,550</span>
                                                            <span class="text-coolGray-300">65%</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4 border-b border-coolGray-100">
                                    <div class="flex flex-wrap justify-between px-6 -m-2">
                                        <div class="w-auto p-2">
                                            <div class="flex items-center">
                                                <div class="mr-2 w-2 h-2 bg-yellow-300 rounded-full"></div>
                                                <p class="text-xs text-coolGray-500 font-medium">Returning</p>
                                            </div>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                <span>1,675</span>
                                                <span class="text-coolGray-300">35%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <a class="flex items-center text-xs text-yellow-500 hover:text-yellow-600 font-medium" href="#">
                                        <p class="mr-1">Learn more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9467 7.74671C11.9149 7.66487 11.8674 7.59011 11.8067 7.52671L8.47333 4.19338C8.41117 4.13122 8.33738 4.08191 8.25617 4.04827C8.17495 4.01463 8.08791 3.99731 8 3.99731C7.82246 3.99731 7.6522 4.06784 7.52667 4.19338C7.46451 4.25553 7.4152 4.32933 7.38156 4.41054C7.34792 4.49176 7.33061 4.5788 7.33061 4.66671C7.33061 4.84424 7.40113 5.01451 7.52667 5.14004L9.72667 7.33338H4.66667C4.48986 7.33338 4.32029 7.40361 4.19526 7.52864C4.07024 7.65366 4 7.82323 4 8.00004C4 8.17685 4.07024 8.34642 4.19526 8.47145C4.32029 8.59647 4.48986 8.66671 4.66667 8.66671H9.72667L7.52667 10.86C7.46418 10.922 7.41458 10.9958 7.38074 11.077C7.34689 11.1582 7.32947 11.2454 7.32947 11.3334C7.32947 11.4214 7.34689 11.5085 7.38074 11.5898C7.41458 11.671 7.46418 11.7447 7.52667 11.8067C7.58864 11.8692 7.66238 11.9188 7.74361 11.9526C7.82485 11.9865 7.91199 12.0039 8 12.0039C8.08801 12.0039 8.17514 11.9865 8.25638 11.9526C8.33762 11.9188 8.41136 11.8692 8.47333 11.8067L11.8067 8.47337C11.8674 8.40997 11.9149 8.33521 11.9467 8.25338C12.0133 8.09107 12.0133 7.90902 11.9467 7.74671Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div class="h-full border border-coolGray-100 bg-white rounded-md shadow-dashboard">
                                <div class="p-8 px-6 pb-0">
                                    <div class="flex flex-wrap items-center justify-between -m-2 mb-0">
                                        <div class="w-auto p-2">
                                            <h2 class="text-coolGray-900 text-lg font-semibold">Pending</h2>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="px-2 py-1 text-xs text-darkCoolGray-500 font-medium bg-darkCoolGray-100 rounded-full">30 days</p>
                                        </div>
                                    </div>
                                    <div class="chart-chart5-radial-bar-green" style={{minHeight: '173.7px'}}>
                                        <div id="apexcharts9zwdtyu2" class="apexcharts-canvas apexcharts9zwdtyu2 apexcharts-theme-light" style={{width: '182px', height: '173.7px'}}>
                                        <div className="radial-progress text-primary" style={{"--value":70}} role="progressbar">70%</div>
                                        {/* <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div> */}
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <div class="w-full">
                                            <div class="py-4 border-b border-coolGray-100">
                                                <div class="flex flex-wrap justify-between -m-2">
                                                    <div class="w-auto p-2">
                                                        <div class="flex items-center">
                                                            <div class="mr-2 w-2 h-2 bg-green-500 rounded-full"></div>
                                                            <p class="text-xs text-coolGray-500 font-medium">Male</p>
                                                        </div>
                                                    </div>
                                                    <div class="w-auto p-2">
                                                        <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                            <span>2,550</span>
                                                            <span class="text-coolGray-300">50%</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4 border-b border-coolGray-100">
                                    <div class="flex flex-wrap justify-between px-6 -m-2">
                                        <div class="w-auto p-2">
                                            <div class="flex items-center">
                                                <div class="mr-2 w-2 h-2 bg-green-300 rounded-full"></div>
                                                <p class="text-xs text-coolGray-500 font-medium">Female</p>
                                            </div>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                <span>2,550</span>
                                                <span class="text-coolGray-300">50%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <a class="flex items-center text-xs text-yellow-500 hover:text-yellow-600 font-medium" href="#">
                                        <p class="mr-1">Learn more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9467 7.74671C11.9149 7.66487 11.8674 7.59011 11.8067 7.52671L8.47333 4.19338C8.41117 4.13122 8.33738 4.08191 8.25617 4.04827C8.17495 4.01463 8.08791 3.99731 8 3.99731C7.82246 3.99731 7.6522 4.06784 7.52667 4.19338C7.46451 4.25553 7.4152 4.32933 7.38156 4.41054C7.34792 4.49176 7.33061 4.5788 7.33061 4.66671C7.33061 4.84424 7.40113 5.01451 7.52667 5.14004L9.72667 7.33338H4.66667C4.48986 7.33338 4.32029 7.40361 4.19526 7.52864C4.07024 7.65366 4 7.82323 4 8.00004C4 8.17685 4.07024 8.34642 4.19526 8.47145C4.32029 8.59647 4.48986 8.66671 4.66667 8.66671H9.72667L7.52667 10.86C7.46418 10.922 7.41458 10.9958 7.38074 11.077C7.34689 11.1582 7.32947 11.2454 7.32947 11.3334C7.32947 11.4214 7.34689 11.5085 7.38074 11.5898C7.41458 11.671 7.46418 11.7447 7.52667 11.8067C7.58864 11.8692 7.66238 11.9188 7.74361 11.9526C7.82485 11.9865 7.91199 12.0039 8 12.0039C8.08801 12.0039 8.17514 11.9865 8.25638 11.9526C8.33762 11.9188 8.41136 11.8692 8.47333 11.8067L11.8067 8.47337C11.8674 8.40997 11.9149 8.33521 11.9467 8.25338C12.0133 8.09107 12.0133 7.90902 11.9467 7.74671Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div class="h-full border border-coolGray-100 bg-white rounded-md shadow-dashboard">
                                <div class="p-8 px-6 pb-0">
                                    <div class="flex flex-wrap items-center justify-between -m-2 mb-0">
                                        <div class="w-auto p-2">
                                            <h2 class="text-coolGray-900 text-lg font-semibold">Approve</h2>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="px-2 py-1 text-xs text-darkCoolGray-500 font-medium bg-darkCoolGray-100 rounded-full">30 days</p>
                                        </div>
                                    </div>
                                    <div class="chart-chart5-radial-bar-yellow" style={{minHeight: '173.7px'}}>
                                        <div id="apexcharts1ccn4a4" class="apexcharts-canvas apexcharts1ccn4a4 apexcharts-theme-light" style={{width: '182px', height: '173.7px'}}>
                                        <div className="radial-progress text-primary" style={{"--value":70}} role="progressbar">70%</div>
                                        {/* <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div> */}
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <div class="w-full">
                                            <div class="py-4 border-b border-coolGray-100">
                                                <div class="flex flex-wrap justify-between -m-2">
                                                    <div class="w-auto p-2">
                                                        <div class="flex items-center">
                                                            <div class="mr-2 w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                            <p class="text-xs text-coolGray-500 font-medium">Over 30</p>
                                                        </div>
                                                    </div>
                                                    <div class="w-auto p-2">
                                                        <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                            <span>4,550</span>
                                                            <span class="text-coolGray-300">25%</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4 border-b border-coolGray-100">
                                    <div class="flex flex-wrap justify-between px-6 -m-2">
                                        <div class="w-auto p-2">
                                            <div class="flex items-center">
                                                <div class="mr-2 w-2 h-2 bg-yellow-300 rounded-full"></div>
                                                <p class="text-xs text-coolGray-500 font-medium">Under 30</p>
                                            </div>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                <span>1,675</span>
                                                <span class="text-coolGray-300">75%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <a class="flex items-center text-xs text-yellow-500 hover:text-yellow-600 font-medium" href="#">
                                        <p class="mr-1">Learn more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9467 7.74671C11.9149 7.66487 11.8674 7.59011 11.8067 7.52671L8.47333 4.19338C8.41117 4.13122 8.33738 4.08191 8.25617 4.04827C8.17495 4.01463 8.08791 3.99731 8 3.99731C7.82246 3.99731 7.6522 4.06784 7.52667 4.19338C7.46451 4.25553 7.4152 4.32933 7.38156 4.41054C7.34792 4.49176 7.33061 4.5788 7.33061 4.66671C7.33061 4.84424 7.40113 5.01451 7.52667 5.14004L9.72667 7.33338H4.66667C4.48986 7.33338 4.32029 7.40361 4.19526 7.52864C4.07024 7.65366 4 7.82323 4 8.00004C4 8.17685 4.07024 8.34642 4.19526 8.47145C4.32029 8.59647 4.48986 8.66671 4.66667 8.66671H9.72667L7.52667 10.86C7.46418 10.922 7.41458 10.9958 7.38074 11.077C7.34689 11.1582 7.32947 11.2454 7.32947 11.3334C7.32947 11.4214 7.34689 11.5085 7.38074 11.5898C7.41458 11.671 7.46418 11.7447 7.52667 11.8067C7.58864 11.8692 7.66238 11.9188 7.74361 11.9526C7.82485 11.9865 7.91199 12.0039 8 12.0039C8.08801 12.0039 8.17514 11.9865 8.25638 11.9526C8.33762 11.9188 8.41136 11.8692 8.47333 11.8067L11.8067 8.47337C11.8674 8.40997 11.9149 8.33521 11.9467 8.25338C12.0133 8.09107 12.0133 7.90902 11.9467 7.74671Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div class="h-full border border-coolGray-100 bg-white rounded-md shadow-dashboard">
                                <div class="p-8 px-6 pb-0">
                                    <div class="flex flex-wrap items-center justify-between -m-2 mb-0">
                                        <div class="w-auto p-2">
                                            <h2 class="text-coolGray-900 text-lg font-semibold">Reject</h2>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="px-2 py-1 text-xs text-darkCoolGray-500 font-medium bg-darkCoolGray-100 rounded-full">30 days</p>
                                        </div>
                                    </div>
                                    <div class="chart-chart5-radial-bar-violet" style={{minHeight: '173.7px'}}>
                                        <div id="apexchartsqjpnf0t3" class="apexcharts-canvas apexchartsqjpnf0t3 apexcharts-theme-light" style={{width: '182px', height: '173.7px'}}>
                                        <div className="radial-progress text-primary" style={{"--value":70}} role="progressbar">70%</div>
                                        {/* <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div> */}
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap">
                                        <div class="w-full">
                                            <div class="py-4 border-b border-coolGray-100">
                                                <div class="flex flex-wrap justify-between -m-2">
                                                    <div class="w-auto p-2">
                                                        <div class="flex items-center">
                                                            <div class="mr-2 w-2 h-2 bg-violet-500 rounded-full"></div>
                                                            <p class="text-xs text-coolGray-500 font-medium">England</p>
                                                        </div>
                                                    </div>
                                                    <div class="w-auto p-2">
                                                        <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                            <span>4,550</span>
                                                            <span class="text-coolGray-300">50%</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4 border-b border-coolGray-100">
                                    <div class="flex flex-wrap justify-between px-6 -m-2">
                                        <div class="w-auto p-2">
                                            <div class="flex items-center">
                                                <div class="mr-2 w-2 h-2 bg-violet-300 rounded-full"></div>
                                                <p class="text-xs text-coolGray-500 font-medium">Other</p>
                                            </div>
                                        </div>
                                        <div class="w-auto p-2">
                                            <p class="text-xs text-coolGray-500 font-medium uppercase">
                                                <span>1,675</span>
                                                <span class="text-coolGray-300">25%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <a class="flex items-center text-xs text-yellow-500 hover:text-yellow-600 font-medium" href="#">
                                        <p class="mr-1">Learn more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9467 7.74671C11.9149 7.66487 11.8674 7.59011 11.8067 7.52671L8.47333 4.19338C8.41117 4.13122 8.33738 4.08191 8.25617 4.04827C8.17495 4.01463 8.08791 3.99731 8 3.99731C7.82246 3.99731 7.6522 4.06784 7.52667 4.19338C7.46451 4.25553 7.4152 4.32933 7.38156 4.41054C7.34792 4.49176 7.33061 4.5788 7.33061 4.66671C7.33061 4.84424 7.40113 5.01451 7.52667 5.14004L9.72667 7.33338H4.66667C4.48986 7.33338 4.32029 7.40361 4.19526 7.52864C4.07024 7.65366 4 7.82323 4 8.00004C4 8.17685 4.07024 8.34642 4.19526 8.47145C4.32029 8.59647 4.48986 8.66671 4.66667 8.66671H9.72667L7.52667 10.86C7.46418 10.922 7.41458 10.9958 7.38074 11.077C7.34689 11.1582 7.32947 11.2454 7.32947 11.3334C7.32947 11.4214 7.34689 11.5085 7.38074 11.5898C7.41458 11.671 7.46418 11.7447 7.52667 11.8067C7.58864 11.8692 7.66238 11.9188 7.74361 11.9526C7.82485 11.9865 7.91199 12.0039 8 12.0039C8.08801 12.0039 8.17514 11.9865 8.25638 11.9526C8.33762 11.9188 8.41136 11.8692 8.47333 11.8067L11.8067 8.47337C11.8674 8.40997 11.9149 8.33521 11.9467 8.25338C12.0133 8.09107 12.0133 7.90902 11.9467 7.74671Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-coolGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="p-6 bg-white rounded-md shadow-lg">
                        <div className="flex flex-wrap items-center justify-between mb-4 -mx-2">
                            <div className="w-auto px-2">
                                <h2 className="text-lg text-coolGray-900 font-semibold">Card heading title</h2>
                            </div>
                            <div className="w-auto px-2">
                                <a href="#">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 10C11.6044 10 11.2178 10.1173 10.8889 10.3371C10.56 10.5568 10.3036 10.8692 10.1522 11.2346C10.0009 11.6001 9.96126 12.0022 10.0384 12.3902C10.1156 12.7781 10.3061 13.1345 10.5858 13.4142C10.8655 13.6939 11.2219 13.8844 11.6098 13.9616C11.9978 14.0387 12.3999 13.9991 12.7654 13.8478C13.1308 13.6964 13.4432 13.44 13.6629 13.1111C13.8827 12.7822 14 12.3956 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM5 10C4.60444 10 4.21776 10.1173 3.88886 10.3371C3.55996 10.5568 3.30362 10.8692 3.15224 11.2346C3.00087 11.6001 2.96126 12.0022 3.03843 12.3902C3.1156 12.7781 3.30608 13.1345 3.58579 13.4142C3.86549 13.6939 4.22186 13.8844 4.60982 13.9616C4.99778 14.0387 5.39992 13.9991 5.76537 13.8478C6.13082 13.6964 6.44318 13.44 6.66294 13.1111C6.8827 12.7822 7 12.3956 7 12C7 11.4696 6.78929 10.9609 6.41421 10.5858C6.03914 10.2107 5.53043 10 5 10ZM19 10C18.6044 10 18.2178 10.1173 17.8889 10.3371C17.56 10.5568 17.3036 10.8692 17.1522 11.2346C17.0009 11.6001 16.9613 12.0022 17.0384 12.3902C17.1156 12.7781 17.3061 13.1345 17.5858 13.4142C17.8655 13.6939 18.2219 13.8844 18.6098 13.9616C18.9978 14.0387 19.3999 13.9991 19.7654 13.8478C20.1308 13.6964 20.4432 13.44 20.6629 13.1111C20.8827 12.7822 21 12.3956 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10Z" fill="#D5DAE1" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <ul className="flex flex-wrap border-b border-coolGray-100 mb-6">
                            <li><a className="block px-4 pb-4 text-sm font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500" href="#">Active</a></li>
                            <li><a className="block px-4 pb-4 text-sm font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500" href="#">Upcoming</a></li>
                            <li><a className="block px-4 pb-4 text-sm font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500" href="#">Saved</a></li>
                            <li><a className="block px-4 pb-4 text-sm font-medium text-coolGray-500 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500" href="#">Archived</a></li>
                        </ul>
                        <div />
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white" style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top' }}><div className="container px-4 mx-auto">
                {/*<div class="mb-8 md:mb-16 md:max-w-5xl"> <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium uppercase rounded-full shadow-sm">Blog</span> <h3 class="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Our mission is to make knowledge and news accessible for everyone.</h3> <p class="text-lg md:text-xl text-coolGray-500 font-medium">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.</p> </div>
    <ul class="flex flex-wrap mb-8 -mx-2 text-center">
      <li class="w-full md:w-auto px-2"><a class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">All Categories</a></li>
      <li class="w-full md:w-auto px-2"><a class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Technology</a></li>
      <li class="w-full md:w-auto px-2"><a class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Development</a></li>
      <li class="w-full md:w-auto px-2"><a class="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Marketing</a></li>
      <li class="w-full md:w-auto px-2"><a class="inline-block w-full py-2 px-4 text-sm text-coolGray-400 hover:text-yellow-500 hover:bg-yellow-200 font-bold rounded-md hover:shadow-sm" href="#">Start-up</a></li>
    </ul>*/}
                <div className="flex flex-wrap items-center -mx-4 mb-12 md:mb-16">
                    <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                        <div className="w-full md:w-auto md:px-4">
                            <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                <img src="flex-ui-assets/images/blog/effect3.jpg" alt="" /></a>
                        </div>
                        <div className="w-full md:flex-1 md:px-4">
                            <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">1st A small business is only as good as its tools and it is totally true.</a>
                            <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                            <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                <span className="mr-3">Read Post</span>
                                <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg></a>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                        <div className="w-full md:w-auto md:px-4">
                            <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                <img src="flex-ui-assets/images/blog/work3.jpg" alt="" /></a>
                        </div>
                        <div className="w-full md:flex-1 md:px-4">
                            <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">2nd A small business is only as good as its tools and it is totally true.</a>
                            <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                            <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                <span className="mr-3">Read Post</span>
                                <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg></a>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                        <div className="w-full md:w-auto md:px-4">
                            <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                <img src="flex-ui-assets/images/blog/work4.jpg" alt="" /></a>
                        </div>
                        <div className="w-full md:flex-1 md:px-4">
                            <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">3rd A small business is only as good as its tools and it is totally true.</a>
                            <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                            <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                <span className="mr-3">Read Post</span>
                                <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg></a>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 md:-mx-4">
                        <div className="w-full md:w-auto md:px-4">
                            <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                <img src="flex-ui-assets/images/blog/effect4.jpg" alt="" /></a>
                        </div>
                        <div className="w-full md:flex-1 md:px-4">
                            <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">4th A small business is only as good as its tools and it is totally true.</a>
                            <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                            <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                <span className="mr-3">Read Post</span>
                                <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg></a>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 mb-8 xl:mb-0 md:-mx-4">
                        <div className="w-full md:w-auto md:px-4">
                            <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                <img src="flex-ui-assets/images/blog/learn2.jpg" alt="" /></a>
                        </div>
                        <div className="w-full md:flex-1 md:px-4">
                            <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                            <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                            <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                <span className="mr-3">Read Post</span>
                                <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg></a>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center w-full xl:w-1/2 px-4 md:-mx-4">
                        <div className="w-full md:w-auto md:px-4">
                            <a className="inline-block mb-6 md:mb-0 overflow-hidden rounded-md" href="#">
                                <img src="flex-ui-assets/images/blog/macbook2.jpg" alt="" /></a>
                        </div>
                        <div className="w-full md:flex-1 md:px-4">
                            <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline" href="#">A small business is only as good as its tools and it is totally true.</a>
                            <p className="mb-7 text-base md:text-lg text-coolGray-400 font-medium">We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                            <a className="inline-flex items-center text-base md:text-lg text-yellow-500 hover:text-yellow-600 font-semibold" href="#">
                                <span className="mr-3">Read Post</span>
                                <svg width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z" fill="currentColor" /></svg></a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg">
                    <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium border-r border-coolGray-100" href="#">
                        <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.28994 5.99995L6.82994 2.45995C7.01619 2.27259 7.12074 2.01913 7.12074 1.75495C7.12074 1.49076 7.01619 1.23731 6.82994 1.04995C6.73698 0.95622 6.62638 0.881826 6.50452 0.831057C6.38266 0.780288 6.25196 0.75415 6.11994 0.75415C5.98793 0.75415 5.85723 0.780288 5.73537 0.831057C5.61351 0.881826 5.50291 0.95622 5.40994 1.04995L1.16994 5.28995C1.07622 5.38291 1.00182 5.49351 0.951053 5.61537C0.900284 5.73723 0.874146 5.86794 0.874146 5.99995C0.874146 6.13196 0.900284 6.26267 0.951053 6.38453C1.00182 6.50638 1.07622 6.61699 1.16994 6.70995L5.40994 10.9999C5.50338 11.0926 5.6142 11.166 5.73604 11.2157C5.85787 11.2655 5.98834 11.2907 6.11994 11.2899C6.25155 11.2907 6.38201 11.2655 6.50385 11.2157C6.62569 11.166 6.7365 11.0926 6.82994 10.9999C7.01619 10.8126 7.12074 10.5591 7.12074 10.2949C7.12074 10.0308 7.01619 9.77731 6.82994 9.58995L3.28994 5.99995Z" fill="currentColor" /></svg></a>
                    <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-yellow-500 font-medium border-r border-coolGray-100" href="#">1</a><a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-yellow-500 font-medium border-r border-coolGray-100" href="#">2</a><a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-yellow-500 font-medium border-r border-coolGray-100" href="#">3</a>
                    <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium" href="#">
                        <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.71006 6.00005L1.17006 9.54005C0.983805 9.72741 0.879264 9.98087 0.879264 10.2451C0.879264 10.5092 0.983805 10.7627 1.17006 10.9501C1.26302 11.0438 1.37362 11.1182 1.49548 11.1689C1.61734 11.2197 1.74804 11.2459 1.88006 11.2459C2.01207 11.2459 2.14277 11.2197 2.26463 11.1689C2.38649 11.1182 2.49709 11.0438 2.59006 10.9501L6.83006 6.71005C6.92378 6.61709 6.99818 6.50649 7.04895 6.38463C7.09972 6.26277 7.12585 6.13206 7.12585 6.00005C7.12585 5.86804 7.09972 5.73733 7.04895 5.61547C6.99818 5.49362 6.92378 5.38301 6.83006 5.29005L2.59006 1.00005C2.49662 0.907371 2.3858 0.834046 2.26396 0.784281C2.14212 0.734517 2.01166 0.70929 1.88006 0.710051C1.74845 0.70929 1.61799 0.734517 1.49615 0.784281C1.37431 0.834046 1.2635 0.907371 1.17006 1.00005C0.983804 1.18741 0.879263 1.44087 0.879263 1.70505C0.879263 1.96924 0.983804 2.22269 1.17006 2.41005L4.71006 6.00005Z" fill="currentColor" /></svg></a>
                </div>
            </div>
            </section>
        </div>
    )
}
