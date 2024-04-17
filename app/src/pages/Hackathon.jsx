
import React from 'react'
import UserHeader from '../components/common/UserHeader'

export default function Hackathon() {

    return (
        <>
            <section className="py-16 md:py-24 bg-white"
                style={{backgroundImage: 'url("../assets/flex-ui-assets/elements/pattern-white.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:items-center mb-12 -mx-4">
                        <div className="w-full md:w-1/2 2xl:w-5/12 px-4 mb-8 md:mb-0">
                            <div className="mx-auto md:ml-0 max-w-max overflow-hidden rounded-lg">
                                <img src={window.location.origin + "/flex-ui-assets/images/blog-content/content-photo4.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-yellow-500 font-medium uppercase bg-yellow-100 rounded-full shadow-sm">GENAI</div>
                            <div className="flex items-center">
                                <p className="inline-block text-yellow-500 font-medium">Sunil Kumar</p>
                                <span className="mx-1 text-yellow-500">•</span>
                                <p className="inline-block text-yellow-500 font-medium">4th May 2024</p>
                            </div>
                            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Hackathon Title</h2>
                            <p className="mb-8 md:mb-12 text-lg md:text-xl font-medium text-coolGray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className="flex items-center -mx-2">
                                <div className="w-auto px-2">
                                    <img src={window.location.origin + "/flex-ui-assets/images/blog/avatar.png"} alt="" />
                                </div>
                                <div className="w-auto px-2">
                                    <h4 className="text-base md:text-lg font-bold text-coolGray-800">Sunil Kumar</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-5/12 lg:w-4/12 xl:w-3/12 px-4 mb-8">
                            <ul className="pb-6 mb-8 border-b border-coolGray-100">
                                <li><a className="inline-block py-3 text-coolGray-400 hover:text-coolGray-500 font-semibold" href="#"
                                    contenteditable="false" autocomplete="off">Leaderboard</a></li>
                                <li className="mb-2"><a className="inline-block py-2 text-coolGray-400 hover:text-coolGray-500 font-semibold"
                                    href="#" contenteditable="false">Overview</a></li>
                                <li className="mb-2"><a className="inline-block py-2 text-coolGray-400 hover:text-coolGray-500 font-semibold"
                                    href="#" contenteditable="false">Prices</a></li>
                                <li className="mb-2"><a className="inline-block py-2 text-coolGray-400 hover:text-coolGray-500 font-semibold"
                                    href="#" contenteditable="false">Panel</a></li>
                                <li><a className="inline-block py-3 text-coolGray-400 hover:text-coolGray-500 font-semibold" href="#"
                                    contenteditable="false" autocomplete="off">Schedule</a></li>
                                <li><a className="inline-block py-3 text-coolGray-400 hover:text-coolGray-500 font-semibold" href="#"
                                    contenteditable="false" autocomplete="off">Participants</a></li>
                                <li><a className="inline-block py-3 text-coolGray-400 hover:text-coolGray-500 font-semibold" href="#"
                                    contenteditable="false" autocomplete="off">Reviews</a></li>


                            </ul>
                            <div className="flex items-center">
                                <a className="inline-flex mr-4 items-center justify-center py-2 px-4 text-coolGray-300 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-md transition duration-200"
                                    href="#">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 13.8333H5C4.33696 13.8333 3.70108 13.5699 3.23224 13.1011C2.76339 12.6323 2.5 11.9964 2.5 11.3333V4.66667C2.5 4.44565 2.41221 4.23369 2.25592 4.07741C2.09964 3.92113 1.88768 3.83333 1.66667 3.83333C1.44566 3.83333 1.23369 3.92113 1.07741 4.07741C0.921133 4.23369 0.833336 4.44565 0.833336 4.66667V11.3333C0.833336 12.4384 1.27232 13.4982 2.05372 14.2796C2.44063 14.6665 2.89996 14.9734 3.40549 15.1828C3.91101 15.3922 4.45283 15.5 5 15.5H15C15.221 15.5 15.433 15.4122 15.5893 15.2559C15.7455 15.0996 15.8333 14.8877 15.8333 14.6667C15.8333 14.4457 15.7455 14.2337 15.5893 14.0774C15.433 13.9211 15.221 13.8333 15 13.8333ZM19.1667 6.28333C19.158 6.20678 19.1412 6.13136 19.1167 6.05833V5.98333C19.0766 5.89765 19.0232 5.81889 18.9583 5.75V5.75L13.9583 0.75C13.8894 0.68518 13.8107 0.631734 13.725 0.591667H13.65L13.3833 0.5H6.66667C6.00363 0.5 5.36774 0.763392 4.8989 1.23223C4.43006 1.70107 4.16667 2.33696 4.16667 3V9.66667C4.16667 10.3297 4.43006 10.9656 4.8989 11.4344C5.36774 11.9033 6.00363 12.1667 6.66667 12.1667H16.6667C17.3297 12.1667 17.9656 11.9033 18.4344 11.4344C18.9033 10.9656 19.1667 10.3297 19.1667 9.66667V6.33333C19.1667 6.33333 19.1667 6.33333 19.1667 6.28333ZM14.1667 3.34167L16.325 5.5H15C14.779 5.5 14.567 5.4122 14.4107 5.25592C14.2545 5.09964 14.1667 4.88768 14.1667 4.66667V3.34167ZM17.5 9.66667C17.5 9.88768 17.4122 10.0996 17.2559 10.2559C17.0996 10.4122 16.8877 10.5 16.6667 10.5H6.66667C6.44565 10.5 6.23369 10.4122 6.07741 10.2559C5.92113 10.0996 5.83334 9.88768 5.83334 9.66667V3C5.83334 2.77899 5.92113 2.56702 6.07741 2.41074C6.23369 2.25446 6.44565 2.16667 6.66667 2.16667H12.5V4.66667C12.5 5.32971 12.7634 5.96559 13.2322 6.43443C13.7011 6.90327 14.337 7.16667 15 7.16667H17.5V9.66667Z"
                                            fill="currentColor"></path>
                                    </svg><span className="ml-2 text-sm text-coolGray-500 font-medium">Copy Link</span>
                                </a>
                                <a className="inline-flex mr-2 h-9 w-9 items-center justify-center text-coolGray-500 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-md transition duration-200"
                                    href="#">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.6 3.43332H9.16667V0.783318C8.40813 0.70444 7.64596 0.665497 6.88333 0.666651C4.61667 0.666651 3.06667 2.04998 3.06667 4.58332V6.76665H0.508333V9.73332H3.06667V17.3333H6.13333V9.73332H8.68333L9.06667 6.76665H6.13333V4.87498C6.13333 3.99998 6.36667 3.43332 7.6 3.43332Z"
                                            fill="currentColor"></path>
                                    </svg></a>
                                <a className="inline-flex mr-2 h-9 w-9 items-center justify-center text-coolGray-500 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-md transition duration-200"
                                    href="#">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.3333 1.83339C16.7069 2.10513 16.0445 2.28477 15.3667 2.36672C16.0818 1.93949 16.6177 1.26737 16.875 0.475053C16.203 0.875105 15.4673 1.15697 14.7 1.30839C14.1871 0.752196 13.5041 0.381966 12.7582 0.255762C12.0122 0.129558 11.2455 0.254518 10.5782 0.611044C9.91087 0.96757 9.38078 1.5355 9.07104 2.22575C8.76129 2.916 8.68941 3.68954 8.86667 4.42505C7.50786 4.35632 6.1787 4.00251 4.96555 3.3866C3.75239 2.77069 2.68237 1.90646 1.825 0.850052C1.52428 1.37519 1.36627 1.9699 1.36667 2.57505C1.3656 3.13704 1.50352 3.69057 1.76813 4.18636C2.03275 4.68215 2.41585 5.10481 2.88333 5.41672C2.33998 5.40194 1.80824 5.25613 1.33333 4.99172V5.03339C1.33741 5.82079 1.61333 6.58263 2.11443 7.19002C2.61553 7.79742 3.31105 8.21309 4.08333 8.36672C3.78605 8.45719 3.4774 8.50489 3.16667 8.50839C2.95158 8.50587 2.73702 8.48637 2.525 8.45005C2.74493 9.1274 3.17052 9.71934 3.74256 10.1435C4.31461 10.5677 5.00465 10.803 5.71667 10.8167C4.51434 11.7628 3.0299 12.2791 1.5 12.2834C1.22145 12.2843 0.943114 12.2676 0.666668 12.2334C2.22869 13.2419 4.04901 13.7773 5.90833 13.7751C7.19141 13.7884 8.46428 13.5459 9.6526 13.0618C10.8409 12.5777 11.9209 11.8616 12.8293 10.9555C13.7378 10.0493 14.4566 8.97121 14.9438 7.78414C15.431 6.59707 15.6767 5.32483 15.6667 4.04172C15.6667 3.90005 15.6667 3.75005 15.6667 3.60005C16.3206 3.11239 16.8846 2.51457 17.3333 1.83339V1.83339Z"
                                            fill="currentColor"></path>
                                    </svg></a>
                                <a className="inline-flex h-9 w-9 items-center justify-center text-coolGray-500 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-md transition duration-200"
                                    href="#">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.45 3.54996C13.2522 3.54996 13.0589 3.60861 12.8944 3.71849C12.73 3.82837 12.6018 3.98455 12.5261 4.16728C12.4504 4.35 12.4306 4.55107 12.4692 4.74505C12.5078 4.93903 12.603 5.11721 12.7429 5.25707C12.8827 5.39692 13.0609 5.49216 13.2549 5.53074C13.4489 5.56933 13.65 5.54953 13.8327 5.47384C14.0154 5.39815 14.1716 5.26998 14.2815 5.10553C14.3913 4.94108 14.45 4.74774 14.45 4.54996C14.45 4.28474 14.3446 4.03039 14.1571 3.84285C13.9696 3.65532 13.7152 3.54996 13.45 3.54996V3.54996ZM17.2833 5.56663C17.2671 4.87521 17.1376 4.19113 16.9 3.54163C16.6881 2.9859 16.3583 2.48269 15.9333 2.06663C15.5207 1.63948 15.0163 1.31177 14.4583 1.10829C13.8105 0.863427 13.1257 0.730968 12.4333 0.716626C11.55 0.666626 11.2667 0.666626 9 0.666626C6.73333 0.666626 6.45 0.666626 5.56666 0.716626C4.87429 0.730968 4.18945 0.863427 3.54166 1.10829C2.98473 1.31383 2.48078 1.64126 2.06666 2.06663C1.63952 2.47927 1.31181 2.98366 1.10833 3.54163C0.863465 4.18941 0.731006 4.87425 0.716664 5.56663C0.666664 6.44996 0.666664 6.73329 0.666664 8.99996C0.666664 11.2666 0.666664 11.55 0.716664 12.4333C0.731006 13.1257 0.863465 13.8105 1.10833 14.4583C1.31181 15.0163 1.63952 15.5206 2.06666 15.9333C2.48078 16.3587 2.98473 16.6861 3.54166 16.8916C4.18945 17.1365 4.87429 17.269 5.56666 17.2833C6.45 17.3333 6.73333 17.3333 9 17.3333C11.2667 17.3333 11.55 17.3333 12.4333 17.2833C13.1257 17.269 13.8105 17.1365 14.4583 16.8916C15.0163 16.6881 15.5207 16.3604 15.9333 15.9333C16.3602 15.5188 16.6903 15.0151 16.9 14.4583C17.1376 13.8088 17.2671 13.1247 17.2833 12.4333C17.2833 11.55 17.3333 11.2666 17.3333 8.99996C17.3333 6.73329 17.3333 6.44996 17.2833 5.56663V5.56663ZM15.7833 12.3333C15.7773 12.8623 15.6815 13.3864 15.5 13.8833C15.3669 14.246 15.1532 14.5736 14.875 14.8416C14.6047 15.117 14.2777 15.3303 13.9167 15.4666C13.4197 15.6481 12.8956 15.7439 12.3667 15.75C11.5333 15.7916 11.225 15.8 9.03333 15.8C6.84166 15.8 6.53333 15.8 5.7 15.75C5.15074 15.7602 4.60383 15.6757 4.08333 15.5C3.73815 15.3567 3.42613 15.1439 3.16666 14.875C2.89007 14.6072 2.67903 14.2793 2.55 13.9166C2.34654 13.4126 2.2337 12.8766 2.21666 12.3333C2.21666 11.5 2.16666 11.1916 2.16666 8.99996C2.16666 6.80829 2.16666 6.49996 2.21666 5.66663C2.2204 5.12584 2.31912 4.58991 2.50833 4.08329C2.65504 3.73155 2.88022 3.41801 3.16666 3.16663C3.41984 2.8801 3.73274 2.65254 4.08333 2.49996C4.59129 2.31666 5.12666 2.22086 5.66666 2.21663C6.5 2.21663 6.80833 2.16663 9 2.16663C11.1917 2.16663 11.5 2.16663 12.3333 2.21663C12.8623 2.22269 13.3864 2.3185 13.8833 2.49996C14.262 2.6405 14.6019 2.869 14.875 3.16663C15.1481 3.42261 15.3615 3.73557 15.5 4.08329C15.6852 4.59074 15.7811 5.12644 15.7833 5.66663C15.825 6.49996 15.8333 6.80829 15.8333 8.99996C15.8333 11.1916 15.825 11.5 15.7833 12.3333ZM9 4.72496C8.15484 4.72661 7.32913 4.97873 6.62721 5.44947C5.92529 5.92022 5.37865 6.58846 5.05636 7.36975C4.73407 8.15105 4.6506 9.01035 4.81649 9.83907C4.98238 10.6678 5.39019 11.4287 5.98839 12.0258C6.58659 12.6228 7.34834 13.0291 8.17738 13.1934C9.00642 13.3577 9.86555 13.2725 10.6462 12.9487C11.4269 12.6249 12.0941 12.077 12.5634 11.3742C13.0328 10.6713 13.2833 9.84512 13.2833 8.99996C13.2844 8.43755 13.1743 7.88047 12.9594 7.36076C12.7444 6.84105 12.4288 6.36897 12.0307 5.97167C11.6326 5.57437 11.16 5.25969 10.6398 5.04573C10.1197 4.83178 9.56241 4.72276 9 4.72496V4.72496ZM9 11.775C8.45115 11.775 7.91464 11.6122 7.45829 11.3073C7.00194 11.0024 6.64627 10.569 6.43623 10.0619C6.2262 9.55484 6.17124 8.99688 6.27832 8.45858C6.38539 7.92029 6.64969 7.42583 7.03778 7.03774C7.42587 6.64965 7.92033 6.38535 8.45862 6.27828C8.99692 6.17121 9.55488 6.22616 10.0619 6.43619C10.569 6.64623 11.0024 7.00191 11.3073 7.45825C11.6122 7.9146 11.775 8.45112 11.775 8.99996C11.775 9.36438 11.7032 9.72523 11.5638 10.0619C11.4243 10.3986 11.2199 10.7045 10.9622 10.9622C10.7045 11.2199 10.3986 11.4243 10.0619 11.5637C9.72527 11.7032 9.36442 11.775 9 11.775V11.775Z"
                                            fill="currentColor"></path>
                                    </svg></a>
                            </div>
                        </div>
                        <div className="w-full md:flex-1 px-4">
                            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100"
                                contenteditable="false" autocomplete="off">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida
                                nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
                            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">Header 1</h3>
                            <p className="mb-4 text-base md:text-lg text-coolGray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus
                                gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                            </p>
                            <div className="mb-6 p-6 border-l-2 border-yellow-500">
                                <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">Lorem ipsum dolor sit
                                    amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum
                                    justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.</p>
                                <span className="text-base md:text-lg text-coolGray-400 font-medium">— John Doe, CEO &amp; Founder</span>
                            </div>
                            <p className="mb-6 text-base md:text-lg text-coolGray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus
                                gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                            </p>
                            <div className="mb-4 max-w-max overflow-hidden rounded-md">
                                <img src={window.location.origin + "/flex-ui-assets/images/blog-content/content-photo2.jpg"} alt="" />
                            </div>
                            <p className="mb-8 text-base md:text-lg text-coolGray-400 font-medium">
                                <span>Non massa enim vitae duis mattis. Vel in</span>
                                <a className="hover:text-coolGray-600 underline" href="#">ultricies</a>
                                <span>vel fringilla.</span>
                            </p>
                            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">Header 1</h3>
                            <p className="mb-14 text-base md:text-lg text-coolGray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus
                                gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                            </p>
                            <p className="mb-4 text-base md:text-lg text-coolGray-500">Sagittis et eu at elementum, quis in. Proin praesent
                                volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada
                                massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit
                                dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus
                                dis.</p>
                            <ol className="list-decimal list-inside md:px-5 text-base md:text-lg text-coolGray-500">
                                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
                                </li>
                                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-coolGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full md:w-1/3 p-3">
                            <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                                <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                                    <div className="w-auto p-2">
                                        <h3 className="text-sm text-coolGray-500 font-medium">Submissions</h3>
                                    </div>
                                    <div className="w-auto p-2">
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66666C7.73629 6.66666 7.47851 6.74486 7.25924 6.89137C7.03998 7.03788 6.86908 7.24612 6.76816 7.48975C6.66724 7.73339 6.64084 8.00148 6.69229 8.26012C6.74373 8.51876 6.87072 8.75634 7.05719 8.94281C7.24366 9.12928 7.48124 9.25626 7.73988 9.30771C7.99852 9.35916 8.26661 9.33275 8.51025 9.23184C8.75388 9.13092 8.96212 8.96002 9.10863 8.74076C9.25514 8.52149 9.33333 8.26371 9.33333 8C9.33333 7.64638 9.19286 7.30724 8.94281 7.05719C8.69276 6.80714 8.35362 6.66666 8 6.66666ZM3.33333 6.66666C3.06963 6.66666 2.81184 6.74486 2.59257 6.89137C2.37331 7.03788 2.20241 7.24612 2.10149 7.48975C2.00058 7.73339 1.97417 8.00148 2.02562 8.26012C2.07707 8.51876 2.20405 8.75634 2.39052 8.94281C2.57699 9.12928 2.81457 9.25626 3.07321 9.30771C3.33185 9.35916 3.59994 9.33275 3.84358 9.23184C4.08721 9.13092 4.29545 8.96002 4.44196 8.74076C4.58847 8.52149 4.66667 8.26371 4.66667 8C4.66667 7.64638 4.52619 7.30724 4.27614 7.05719C4.02609 6.80714 3.68696 6.66666 3.33333 6.66666ZM12.6667 6.66666C12.403 6.66666 12.1452 6.74486 11.9259 6.89137C11.7066 7.03788 11.5357 7.24612 11.4348 7.48975C11.3339 7.73339 11.3075 8.00148 11.359 8.26012C11.4104 8.51876 11.5374 8.75634 11.7239 8.94281C11.9103 9.12928 12.1479 9.25626 12.4065 9.30771C12.6652 9.35916 12.9333 9.33275 13.1769 9.23184C13.4205 9.13092 13.6288 8.96002 13.7753 8.74076C13.9218 8.52149 14 8.26371 14 8C14 7.64638 13.8595 7.30724 13.6095 7.05719C13.3594 6.80714 13.0203 6.66666 12.6667 6.66666Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-between -m-1">
                                    <div className="w-auto p-1">
                                        <h2 className="font-medium text-3xl text-black tracking-tighter">62</h2>
                                    </div>
                                    <div className="w-auto p-1">
                                        <div
                                            className="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z"
                                                    fill="#22C55E"></path>
                                            </svg>
                                            <p>23%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                                <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                                    <div className="w-auto p-2">
                                        <h3 className="text-sm text-coolGray-500 font-medium">Reviews</h3>
                                    </div>
                                    <div className="w-auto p-2">
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66666C7.73629 6.66666 7.47851 6.74486 7.25924 6.89137C7.03998 7.03788 6.86908 7.24612 6.76816 7.48975C6.66724 7.73339 6.64084 8.00148 6.69229 8.26012C6.74373 8.51876 6.87072 8.75634 7.05719 8.94281C7.24366 9.12928 7.48124 9.25626 7.73988 9.30771C7.99852 9.35916 8.26661 9.33275 8.51025 9.23184C8.75388 9.13092 8.96212 8.96002 9.10863 8.74076C9.25514 8.52149 9.33333 8.26371 9.33333 8C9.33333 7.64638 9.19286 7.30724 8.94281 7.05719C8.69276 6.80714 8.35362 6.66666 8 6.66666ZM3.33333 6.66666C3.06963 6.66666 2.81184 6.74486 2.59257 6.89137C2.37331 7.03788 2.20241 7.24612 2.10149 7.48975C2.00058 7.73339 1.97417 8.00148 2.02562 8.26012C2.07707 8.51876 2.20405 8.75634 2.39052 8.94281C2.57699 9.12928 2.81457 9.25626 3.07321 9.30771C3.33185 9.35916 3.59994 9.33275 3.84358 9.23184C4.08721 9.13092 4.29545 8.96002 4.44196 8.74076C4.58847 8.52149 4.66667 8.26371 4.66667 8C4.66667 7.64638 4.52619 7.30724 4.27614 7.05719C4.02609 6.80714 3.68696 6.66666 3.33333 6.66666ZM12.6667 6.66666C12.403 6.66666 12.1452 6.74486 11.9259 6.89137C11.7066 7.03788 11.5357 7.24612 11.4348 7.48975C11.3339 7.73339 11.3075 8.00148 11.359 8.26012C11.4104 8.51876 11.5374 8.75634 11.7239 8.94281C11.9103 9.12928 12.1479 9.25626 12.4065 9.30771C12.6652 9.35916 12.9333 9.33275 13.1769 9.23184C13.4205 9.13092 13.6288 8.96002 13.7753 8.74076C13.9218 8.52149 14 8.26371 14 8C14 7.64638 13.8595 7.30724 13.6095 7.05719C13.3594 6.80714 13.0203 6.66666 12.6667 6.66666Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-between -m-1">
                                    <div className="w-auto p-1">
                                        <h2 className="font-medium text-3xl text-black tracking-tighter">14</h2>
                                    </div>
                                    <div className="w-auto p-1">
                                        <div
                                            className="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z"
                                                    fill="#22C55E"></path>
                                            </svg>
                                            <p>8%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-3">
                            <div className="p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard">
                                <div className="flex flex-wrap items-end justify-between -m-2 mb-2">
                                    <div className="w-auto p-2">
                                        <h3 className="text-sm text-coolGray-500 font-medium">Rejections</h3>
                                    </div>
                                    <div className="w-auto p-2">
                                        <a href="#">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66666C7.73629 6.66666 7.47851 6.74486 7.25924 6.89137C7.03998 7.03788 6.86908 7.24612 6.76816 7.48975C6.66724 7.73339 6.64084 8.00148 6.69229 8.26012C6.74373 8.51876 6.87072 8.75634 7.05719 8.94281C7.24366 9.12928 7.48124 9.25626 7.73988 9.30771C7.99852 9.35916 8.26661 9.33275 8.51025 9.23184C8.75388 9.13092 8.96212 8.96002 9.10863 8.74076C9.25514 8.52149 9.33333 8.26371 9.33333 8C9.33333 7.64638 9.19286 7.30724 8.94281 7.05719C8.69276 6.80714 8.35362 6.66666 8 6.66666ZM3.33333 6.66666C3.06963 6.66666 2.81184 6.74486 2.59257 6.89137C2.37331 7.03788 2.20241 7.24612 2.10149 7.48975C2.00058 7.73339 1.97417 8.00148 2.02562 8.26012C2.07707 8.51876 2.20405 8.75634 2.39052 8.94281C2.57699 9.12928 2.81457 9.25626 3.07321 9.30771C3.33185 9.35916 3.59994 9.33275 3.84358 9.23184C4.08721 9.13092 4.29545 8.96002 4.44196 8.74076C4.58847 8.52149 4.66667 8.26371 4.66667 8C4.66667 7.64638 4.52619 7.30724 4.27614 7.05719C4.02609 6.80714 3.68696 6.66666 3.33333 6.66666ZM12.6667 6.66666C12.403 6.66666 12.1452 6.74486 11.9259 6.89137C11.7066 7.03788 11.5357 7.24612 11.4348 7.48975C11.3339 7.73339 11.3075 8.00148 11.359 8.26012C11.4104 8.51876 11.5374 8.75634 11.7239 8.94281C11.9103 9.12928 12.1479 9.25626 12.4065 9.30771C12.6652 9.35916 12.9333 9.33275 13.1769 9.23184C13.4205 9.13092 13.6288 8.96002 13.7753 8.74076C13.9218 8.52149 14 8.26371 14 8C14 7.64638 13.8595 7.30724 13.6095 7.05719C13.3594 6.80714 13.0203 6.66666 12.6667 6.66666Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-between -m-1">
                                    <div className="w-auto p-1">
                                        <h2 className="font-medium text-3xl text-black tracking-tighter">$91.42</h2>
                                    </div>
                                    <div className="w-auto p-1">
                                        <div
                                            className="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z"
                                                    fill="#22C55E"></path>
                                            </svg>
                                            <p>23%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-coolGray-50 py-4">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between -m-2 mb-4">
                        <div className="w-full md:w-1/2 p-2">
                            <p className="font-semibold text-xl text-coolGray-800">Leaderboard</p>
                            <p className="font-medium text-sm text-coolGray-500">245 Participants</p>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <div className="relative md:max-w-max md:ml-auto">
                                <svg className="absolute left-3 transform top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.0467 11.22L12.6667 9.80667C12.3699 9.5245 11.9955 9.33754 11.5916 9.26983C11.1876 9.20211 10.7727 9.25673 10.4001 9.42667L9.80008 8.82667C10.5071 7.88194 10.83 6.70445 10.7038 5.53122C10.5775 4.358 10.0115 3.27615 9.1197 2.50347C8.22787 1.73078 7.07643 1.32464 5.89718 1.36679C4.71794 1.40894 3.59844 1.89626 2.76405 2.73065C1.92967 3.56503 1.44235 4.68453 1.4002 5.86378C1.35805 7.04302 1.76419 8.19446 2.53687 9.08629C3.30956 9.97812 4.3914 10.5441 5.56463 10.6704C6.73786 10.7966 7.91535 10.4737 8.86007 9.76667L9.45341 10.36C9.26347 10.7331 9.1954 11.1564 9.25879 11.5702C9.32218 11.984 9.51383 12.3675 9.80674 12.6667L11.2201 14.08C11.5951 14.4545 12.1034 14.6649 12.6334 14.6649C13.1634 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3886 13.6713 14.4919 13.4257C14.5953 13.1802 14.6485 12.9164 14.6485 12.65C14.6485 12.3836 14.5953 12.1198 14.4919 11.8743C14.3886 11.6287 14.2372 11.4063 14.0467 11.22ZM8.39341 8.39333C7.9269 8.85866 7.33294 9.1753 6.68657 9.30323C6.0402 9.43117 5.37041 9.36466 4.76181 9.11212C4.15321 8.85958 3.63312 8.43234 3.26722 7.88436C2.90132 7.33638 2.70603 6.69224 2.70603 6.03333C2.70603 5.37442 2.90132 4.73029 3.26722 4.18231C3.63312 3.63433 4.15321 3.20708 4.76181 2.95454C5.37041 2.702 6.0402 2.6355 6.68657 2.76343C7.33294 2.89137 7.9269 3.208 8.39341 3.67333C8.70383 3.98297 8.95012 4.35081 9.11816 4.75577C9.2862 5.16074 9.3727 5.59488 9.3727 6.03333C9.3727 6.47178 9.2862 6.90592 9.11816 7.31089C8.95012 7.71586 8.70383 8.08369 8.39341 8.39333ZM13.1067 13.1067C13.0448 13.1692 12.971 13.2187 12.8898 13.2526C12.8086 13.2864 12.7214 13.3039 12.6334 13.3039C12.5454 13.3039 12.4583 13.2864 12.377 13.2526C12.2958 13.2187 12.2221 13.1692 12.1601 13.1067L10.7467 11.6933C10.6843 11.6314 10.6347 11.5576 10.6008 11.4764C10.567 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.567 11.0449 10.6008 10.9636C10.6347 10.8824 10.6843 10.8086 10.7467 10.7467C10.8087 10.6842 10.8825 10.6346 10.9637 10.6007C11.0449 10.5669 11.1321 10.5495 11.2201 10.5495C11.3081 10.5495 11.3952 10.5669 11.4765 10.6007C11.5577 10.6346 11.6314 10.6842 11.6934 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2527 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2527 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067Z"
                                        fill="#BBC3CF"></path>
                                </svg>
                                <input type="text" placeholder="Search"
                                    className="w-full md:w-64 pl-8 pr-4 py-2 text-sm text-coolGray-400 font-medium outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 border border-coolGray-100"></div>
                    <div className="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                                        <th className="px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                            <div className="flex items-center">

                                                <p>Order</p>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">
                                            Location</th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                                            Orders</th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">Last
                                            order</th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left">Total
                                            spent</th>
                                        <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                                            Refunds</th>
                                        <th className="whitespace-nowrap font-semibold text-xs text-coolGray-500 uppercase text-center"></th>
                                    </tr>
                                    <tr className="h-18 border-b border-coolGray-100">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">United
                                            Kingdom</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">24</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#432512</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$2,855.00
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">5</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                    <tr className="h-18 border-b border-coolGray-100">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-violet-600 bg-violet-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">United
                                            States</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">6</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#5435532
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$14,650.00
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">12</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                    <tr className="h-18 border-b border-coolGray-100">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-green-600 bg-green-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Germany
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">14</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#1242456
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$5,145.00
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">9</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                    <tr className="h-18 border-b border-coolGray-100">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-red-600 bg-red-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">France
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">145</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#4321114
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$1,055.00
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">2</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                    <tr className="h-18 border-b border-coolGray-100">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Italy</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">55</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#6543321
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$525.00</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">4</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                    <tr className="h-18 border-b border-coolGray-100">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-violet-600 bg-violet-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Croatia
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">43</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#664234</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$1,650.00
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">12</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                    <tr className="h-18 border-b border-coolGray-100">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-green-600 bg-green-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Spain</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">16</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#776541</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$2,145.00
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">45</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                    <tr className="h-18">
                                        <th className="whitespace-nowrap px-4 bg-white text-left">
                                            <div className="flex items-center -m-2">
                                                <div className="w-auto p-2">
                                                    <input className="w-4 h-4 bg-white rounded" type="checkbox" />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div
                                                        className="flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md">
                                                        PS</div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <p className="text-xs font-semibold text-coolGray-800">Patricia Semklo</p>
                                                    <p className="text-xs font-medium text-coolGray-500">patricia.semklo@app.com</p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">Denmark
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">6</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-yellow-500 text-left">#904300</th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">$3,455.00
                                        </th>
                                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">12</th>
                                        <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                                            <svg className="ml-auto" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                                                    fill="#D5DAE1"></path>
                                            </svg>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
