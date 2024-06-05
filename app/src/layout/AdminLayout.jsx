import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {

    const user = useSelector(store => store.user.data)

    return (
        <section className="overflow-hidden min-h-full">
            <div className="navbar-menu z-50 fixed top-0 hidden flex xl:flex flex-col justify-between bg-coolGray-900 max-w-xs w-9/12 h-full overflow-y-auto">
                <div className="navbar-backdrop fixed xl:hidden inset-0 bg-coolGray-900 opacity-60" />
                <div className="relative bg-coolGray-900">
                    <div className="fixed -left-4 p-8 pl-12 max-w-xs w-9/12 z-50 bg-coolGray-900">
                        <Link to='/' className="block max-w-max xl:mr-14" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width={112} viewBox="0 0 84 30" height={40} version={1.0} className="text-yellow-500"><defs><clipPath id="a"><path d="M24.969 4.004h3.11v1.941h-3.11zm0 0" /></clipPath><clipPath id="b"><path d="M14.621 3.453h2.77v2.492h-2.77zm0 0" /></clipPath><clipPath id="c"><path d="M10.355 3.453h3.012v2.492h-3.012zm0 0" /></clipPath><clipPath id="d"><path d="M25.336 4.004h1.996V6h-1.996zm0 0" /></clipPath><clipPath id="e"><path d="M14.621 4.004h1.996V6h-1.996zm0 0" /></clipPath><clipPath id="f"><path d="M10.906 4.004h1.992V6h-1.992zm0 0" /></clipPath><clipPath id="g"><path d="M5.578 20.777h11.496v4.535H5.578zm0 0" /></clipPath><clipPath id="h"><path d="M58.316 20.777h11.496v4.535H58.316zm0 0" /></clipPath><clipPath id="i"><path d="M59.164 19.805h6.738v5.992h-6.738zm0 0" /></clipPath><clipPath id="j"><path d="M6.133 19.805h6.742v5.992H6.133zm0 0" /></clipPath></defs><path d="M8.109 7.05c-.438 0-.836-.086-1.188-.266a2.027 2.027 0 0 1-.812-.734 2.018 2.018 0 0 1-.281-1.063c0-.394.093-.75.28-1.062.196-.313.47-.555.813-.734.352-.176.75-.266 1.188-.266.457 0 .847.102 1.172.297.332.2.566.469.703.812l-1.078.547c-.188-.351-.453-.531-.797-.531-.25 0-.461.086-.625.25-.168.168-.25.398-.25.687 0 .305.082.54.25.704.164.168.375.25.625.25.344 0 .61-.176.797-.532l1.078.547a1.618 1.618 0 0 1-.703.813c-.325.187-.715.281-1.172.281zm0 0" fill="#f5af32" /><path d="M11.825 7.05c-.43 0-.813-.086-1.157-.266a2.027 2.027 0 0 1-.812-.734 2.018 2.018 0 0 1-.281-1.063c0-.394.093-.75.28-1.062.196-.313.462-.555.798-.734a2.538 2.538 0 0 1 1.172-.266c.425 0 .812.09 1.156.266.344.18.61.421.797.734.195.312.297.668.297 1.062 0 .399-.102.75-.297 1.063a1.935 1.935 0 0 1-.797.734 2.46 2.46 0 0 1-1.156.266zm0-1.11a.776.776 0 0 0 .593-.25c.164-.163.25-.398.25-.703 0-.289-.086-.519-.25-.687a.79.79 0 0 0-.593-.25.806.806 0 0 0-.61.25c-.156.168-.234.398-.234.687 0 .305.078.54.234.704.156.168.36.25.61.25zm0 0" fill="#f5af32" /><path d="M18.27 1.534v5.453h-1.328v-.39c-.262.305-.653.453-1.172.453-.367 0-.7-.082-1-.25a1.831 1.831 0 0 1-.703-.719 2.202 2.202 0 0 1-.266-1.094c0-.414.086-.773.266-1.078.175-.312.41-.55.703-.718.3-.176.633-.266 1-.266.476 0 .847.14 1.11.422V1.534zm-2.203 4.407a.776.776 0 0 0 .593-.25c.157-.164.235-.399.235-.704 0-.289-.078-.519-.235-.687a.79.79 0 0 0-.593-.25.806.806 0 0 0-.61.25c-.156.168-.234.398-.234.687 0 .305.078.54.234.704.156.168.36.25.61.25zM18.482 3.003h1.39v3.984h-1.39zm.703-.453c-.262 0-.469-.066-.625-.203a.694.694 0 0 1-.235-.531c0-.207.079-.383.235-.532.156-.144.363-.218.625-.218.25 0 .453.07.61.203a.656.656 0 0 1 .234.515c0 .23-.079.418-.235.563-.156.137-.36.203-.61.203zM22.688 2.925c.5 0 .894.152 1.187.453.3.293.453.734.453 1.328v2.281h-1.39V4.941c0-.551-.22-.829-.657-.829a.748.748 0 0 0-.578.235c-.148.156-.219.398-.219.719v1.921h-1.39V3.003h1.328v.438c.156-.164.336-.29.547-.375.219-.094.457-.141.719-.141zm0 0" fill="#f5af32" /><path d="M28.807 3.003v3.25c0 .738-.203 1.297-.61 1.672-.398.375-.968.562-1.718.562-.399 0-.766-.046-1.11-.14a2.466 2.466 0 0 1-.875-.39l.5-.97c.164.125.367.223.61.297.25.082.5.125.75.125.363 0 .628-.086.796-.25.176-.156.266-.394.266-.718v-.125c-.273.312-.668.468-1.187.468-.356 0-.684-.078-.985-.234a1.884 1.884 0 0 1-.703-.688c-.18-.289-.266-.628-.266-1.015 0-.375.086-.707.266-1 .176-.29.41-.516.703-.672.301-.164.63-.25.985-.25.57 0 .988.187 1.25.562v-.484zm-2.25 2.672a.88.88 0 0 0 .625-.234.784.784 0 0 0 .25-.594.745.745 0 0 0-.25-.578c-.157-.145-.367-.219-.625-.219-.25 0-.461.074-.625.219a.732.732 0 0 0-.25.578.77.77 0 0 0 .25.594.874.874 0 0 0 .625.234zm0 0" fill="#f5af32" /><g clipPath="url(#a)"><path fill="#f5af32" d="M24.969 4.004h3.113v1.941h-3.113zm0 0" /></g><g clipPath="url(#b)"><path fill="#f5af32" d="M14.621 3.453h2.77v2.492h-2.77zm0 0" /></g><g clipPath="url(#c)"><path fill="#f5af32" d="M10.355 3.453h3.012v2.492h-3.012zm0 0" /></g><g clipPath="url(#d)" fill="#202020"><path d="m26.336 4.012.305.652.687.106-.496.511.117.719-.613-.34-.617.34.117-.719-.496-.511.687-.106zm0 0" /><path d="m26.332 4.004.305.656.687.106-.496.507.117.72-.613-.34-.617.34.117-.72-.496-.507.687-.106zm0 0" /><path d="m26.332 4.004.305.656.687.106-.496.507.117.72-.613-.34-.617.34.117-.72-.496-.507.687-.106zm0 0" /><path d="m26.332 4.004.305.656.687.106-.496.507.117.72-.613-.34-.617.34.117-.72-.496-.507.687-.106zm0 0" /></g><g clipPath="url(#e)" fill="#202020"><path d="m15.621 4.012.309.652.687.106-.5.511.121.719-.617-.34-.613.34.117-.719-.496-.511.687-.106zm0 0" /><path d="m15.617 4.004.309.656.687.106-.5.507.117.72-.613-.34-.613.34.117-.72-.5-.507.688-.106zm0 0" /><path d="m15.617 4.004.309.656.687.106-.5.507.117.72-.613-.34-.613.34.117-.72-.5-.507.688-.106zm0 0" /><path d="m15.617 4.004.309.656.687.106-.5.507.117.72-.613-.34-.613.34.117-.72-.5-.507.688-.106zm0 0" /></g><g clipPath="url(#f)" fill="#202020"><path d="m11.906 4.012.305.652.687.106-.496.511.118.719-.614-.34-.617.34.117-.719-.496-.511.688-.106zm0 0" /><path d="m11.898 4.004.309.656.688.106-.497.507.118.72-.618-.34-.613.34.117-.72-.496-.507.688-.106zm0 0" /><path d="m11.898 4.004.309.656.688.106-.497.507.118.72-.618-.34-.613.34.117-.72-.496-.507.688-.106zm0 0" /><path d="m11.898 4.004.309.656.688.106-.497.507.118.72-.618-.34-.613.34.117-.72-.496-.507.688-.106zm0 0" /></g><g clipPath="url(#g)"><path fill="#ffffff" d="M5.578 20.777h11.5v4.535h-11.5zm0 0" /></g><g clipPath="url(#h)"><path fill="#ffffff" d="M58.316 20.777h11.5v4.535h-11.5zm0 0" /></g><path d="M9.79 12.434c2.446 0 4.313.559 5.595 1.672 1.289 1.117 1.937 2.828 1.937 5.14v8.188H12.51v-1.906c-.75 1.437-2.203 2.156-4.36 2.156-1.148 0-2.136-.2-2.968-.594-.836-.406-1.465-.945-1.891-1.625-.43-.687-.64-1.46-.64-2.328 0-1.394.534-2.476 1.609-3.25 1.07-.77 2.722-1.156 4.953-1.156h2.937c-.086-1.563-1.125-2.344-3.125-2.344-.71 0-1.43.117-2.156.344-.719.219-1.336.531-1.844.937l-1.75-3.515c.82-.54 1.817-.961 2.985-1.266 1.164-.3 2.343-.453 3.53-.453zm-.202 11.984c.601 0 1.129-.144 1.578-.437.457-.29.785-.719.984-1.281v-1.282H9.916c-1.5 0-2.25.5-2.25 1.5 0 .45.172.813.516 1.094.343.274.812.406 1.406.406zM18.023 7.23h5.172v20.204h-5.172zM23.981 7.23h5.172v20.204h-5.172zM40.658 27.684c-1.23 0-2.445-.14-3.64-.422-1.2-.281-2.164-.648-2.891-1.11l1.563-3.53c.664.417 1.46.75 2.39 1 .926.242 1.844.359 2.75.359.832 0 1.426-.082 1.781-.25.352-.176.532-.43.532-.766 0-.32-.215-.55-.641-.687-.43-.133-1.105-.266-2.031-.39-1.18-.145-2.184-.337-3.016-.579a4.606 4.606 0 0 1-2.125-1.313c-.594-.632-.89-1.52-.89-2.656 0-.945.28-1.785.843-2.515.563-.739 1.38-1.32 2.453-1.75 1.082-.426 2.375-.641 3.875-.641 1.07 0 2.133.11 3.188.328 1.05.219 1.93.527 2.64.922L45.894 17.2a8.642 8.642 0 0 0-4.25-1.094c-.813 0-1.414.101-1.797.297-.375.187-.563.437-.563.75 0 .343.207.586.625.718.414.137 1.102.278 2.063.422 1.219.18 2.222.387 3.015.625.801.23 1.493.664 2.079 1.297.593.625.89 1.5.89 2.625 0 .918-.281 1.746-.844 2.485-.562.742-1.39 1.32-2.484 1.734-1.094.414-2.418.625-3.969.625zm0 0" fill="#ffffff" /><path d="M57.811 26.84c-.437.274-.968.48-1.593.625a8.866 8.866 0 0 1-2 .219c-1.93 0-3.407-.469-4.438-1.406-1.031-.946-1.547-2.36-1.547-4.235V17.09h-2.156v-3.86h2.156V9.388h5.172v3.844h3.375v3.86h-3.375v4.905c0 .524.14.934.422 1.235.281.305.656.453 1.125.453a2.74 2.74 0 0 0 1.578-.469zm0 0" fill="#ffffff" /><path d="M63.525 12.434c2.445 0 4.312.559 5.594 1.672 1.289 1.117 1.937 2.828 1.937 5.14v8.188h-4.812v-1.906c-.75 1.437-2.203 2.156-4.36 2.156-1.148 0-2.136-.2-2.968-.594-.836-.406-1.465-.945-1.891-1.625-.43-.687-.64-1.46-.64-2.328 0-1.394.534-2.476 1.609-3.25 1.07-.77 2.722-1.156 4.953-1.156h2.937c-.086-1.563-1.125-2.344-3.125-2.344-.71 0-1.43.117-2.156.344-.719.219-1.336.531-1.844.937l-1.75-3.515c.82-.54 1.817-.961 2.985-1.266 1.164-.3 2.343-.453 3.53-.453zm-.203 11.984c.601 0 1.129-.144 1.578-.437.457-.29.785-.719.984-1.281v-1.282H63.65c-1.5 0-2.25.5-2.25 1.5 0 .45.172.813.516 1.094.343.274.812.406 1.406.406zM76.694 14.45c.52-.664 1.204-1.164 2.047-1.5.844-.344 1.813-.516 2.907-.516v4.656c-.48-.05-.872-.078-1.172-.078-1.118 0-1.985.305-2.61.906-.625.594-.937 1.508-.937 2.735v6.781h-5.172v-14.75h4.937zm0 0" fill="#ffffff" /><g clipPath="url(#i)" fill="#f5af32"><path d="m62.36 19.824.98 1.992 2.2.32-1.59 1.552.374 2.19-1.965-1.034-1.968 1.035.375-2.192-1.59-1.55 2.199-.32zm0 0" /><path d="m62.344 19.809.984 1.988 2.195.32-1.59 1.551.376 2.191-1.965-1.035-1.965 1.035.375-2.191-1.59-1.55 2.195-.321zm0 0" /><path d="m62.344 19.809.984 1.988 2.195.32-1.59 1.551.376 2.191-1.965-1.035-1.965 1.035.375-2.191-1.59-1.55 2.195-.321zm0 0" /><path d="m62.344 19.809.984 1.988 2.195.32-1.59 1.551.376 2.191-1.965-1.035-1.965 1.035.375-2.191-1.59-1.55 2.195-.321zm0 0" /></g><g clipPath="url(#j)" fill="#f5af32"><path d="m9.332 19.824.98 1.992 2.2.32-1.59 1.552.375 2.19-1.965-1.034-1.969 1.035.375-2.192-1.59-1.55 2.2-.32zm0 0" /><path d="m9.316 19.809.985 1.988 2.195.32-1.59 1.551.375 2.191-1.965-1.035-1.968 1.035.379-2.191-1.594-1.55 2.199-.321zm0 0" /><path d="m9.316 19.809.985 1.988 2.195.32-1.59 1.551.375 2.191-1.965-1.035-1.968 1.035.379-2.191-1.594-1.55 2.199-.321zm0 0" /><path d="m9.316 19.809.985 1.988 2.195.32-1.59 1.551.375 2.191-1.965-1.035-1.968 1.035.379-2.191-1.594-1.55 2.199-.321zm0 0" /></g></svg>
                        </Link>
                    </div>
                    <div className="mt-28">
                        <p className="px-8 mb-2 text-xs font-medium text-coolGray-500 uppercase">Main menu</p>
                        <ul className="px-4 mb-8">
                            <li>
                                <Link to='' className="p-3 pl-11 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <p className="text-white font-medium text-base">Add Hackathon</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='sendEmail' className="p-3 pl-11 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <p className="text-white font-medium text-base">Send Invite</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative bg-coolGray-900 flex-1" />
                <div className="relative bg-coolGray-900">
                    <p className="px-8 mb-2 text-xs font-medium text-coolGray-500 uppercase">Settings</p>
                    <ul className="p-4">
                        <li>
                            <a className="p-3 py-4 flex items-center justify-between text-coolGray-600 hover:text-yellow-500 hover:bg-coolGray-800 rounded-md" href="#">
                                <div className="flex items-center">
                                    <svg className="mr-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.81 12.28C15.443 11.6002 15.7996 10.7088 15.81 9.78C15.81 8.77748 15.4118 7.81602 14.7029 7.10714C13.994 6.39825 13.0325 6 12.03 6C11.0275 6 10.066 6.39825 9.35714 7.10714C8.64825 7.81602 8.25 8.77748 8.25 9.78C8.26044 10.7088 8.61702 11.6002 9.25 12.28C8.36865 12.7189 7.61022 13.3699 7.04292 14.1746C6.47561 14.9793 6.11723 15.9124 6 16.89C5.97083 17.1552 6.0482 17.4212 6.21511 17.6293C6.38202 17.8375 6.62478 17.9708 6.89 18C7.15522 18.0292 7.42116 17.9518 7.62932 17.7849C7.83749 17.618 7.97083 17.3752 8 17.11C8.11933 16.1411 8.58885 15.2494 9.32009 14.6027C10.0513 13.956 10.9938 13.599 11.97 13.599C12.9462 13.599 13.8887 13.956 14.6199 14.6027C15.3512 15.2494 15.8207 16.1411 15.94 17.11C15.9678 17.3664 16.0936 17.6022 16.2911 17.768C16.4887 17.9339 16.7426 18.017 17 18H17.11C17.3721 17.9698 17.6117 17.8373 17.7766 17.6313C17.9414 17.4252 18.0181 17.1624 17.99 16.9C17.8815 15.9276 17.5344 14.997 16.9796 14.191C16.4248 13.3851 15.6796 12.7286 14.81 12.28ZM12 11.56C11.6479 11.56 11.3038 11.4556 11.0111 11.26C10.7184 11.0644 10.4902 10.7864 10.3555 10.4612C10.2208 10.1359 10.1855 9.77803 10.2542 9.43274C10.3229 9.08745 10.4924 8.77029 10.7414 8.52135C10.9903 8.27241 11.3075 8.10288 11.6527 8.0342C11.998 7.96552 12.3559 8.00077 12.6812 8.13549C13.0064 8.27022 13.2844 8.49837 13.48 8.79109C13.6756 9.0838 13.78 9.42795 13.78 9.78C13.78 10.2521 13.5925 10.7048 13.2586 11.0387C12.9248 11.3725 12.4721 11.56 12 11.56ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19Z" fill="currentColor" />
                                    </svg>
                                    <p className="text-white font-medium text-base">Accounts</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="p-3 py-4 flex items-center justify-between text-coolGray-600 hover:text-yellow-500 hover:bg-coolGray-800 rounded-md" href="#">
                                <div className="flex items-center">
                                    <svg className="mr-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.32 9.55L19.43 8.92L20.32 7.14C20.4102 6.95369 20.4404 6.74397 20.4064 6.53978C20.3723 6.33558 20.2758 6.14699 20.13 6L18 3.87C17.8522 3.72209 17.6618 3.62421 17.4555 3.59013C17.2493 3.55605 17.0375 3.58748 16.85 3.68L15.07 4.57L14.44 2.68C14.3735 2.483 14.2472 2.31163 14.0787 2.18975C13.9102 2.06787 13.7079 2.00155 13.5 2H10.5C10.2904 1.99946 10.0858 2.06482 9.91537 2.18685C9.7449 2.30887 9.61709 2.48138 9.55 2.68L8.92 4.57L7.14 3.68C6.95369 3.58978 6.74397 3.55961 6.53978 3.59364C6.33558 3.62767 6.14699 3.72423 6 3.87L3.87 6C3.72209 6.14777 3.62421 6.33818 3.59013 6.54446C3.55605 6.75074 3.58748 6.96251 3.68 7.15L4.57 8.93L2.68 9.56C2.483 9.62654 2.31163 9.75283 2.18975 9.92131C2.06787 10.0898 2.00155 10.2921 2 10.5V13.5C1.99946 13.7096 2.06482 13.9142 2.18685 14.0846C2.30887 14.2551 2.48138 14.3829 2.68 14.45L4.57 15.08L3.68 16.86C3.58978 17.0463 3.55961 17.256 3.59364 17.4602C3.62767 17.6644 3.72423 17.853 3.87 18L6 20.13C6.14777 20.2779 6.33818 20.3758 6.54446 20.4099C6.75074 20.444 6.96251 20.4125 7.15 20.32L8.93 19.43L9.56 21.32C9.62709 21.5186 9.7549 21.6911 9.92537 21.8132C10.0958 21.9352 10.3004 22.0005 10.51 22H13.51C13.7196 22.0005 13.9242 21.9352 14.0946 21.8132C14.2651 21.6911 14.3929 21.5186 14.46 21.32L15.09 19.43L16.87 20.32C17.0551 20.4079 17.2628 20.4369 17.4649 20.4029C17.667 20.3689 17.8538 20.2737 18 20.13L20.13 18C20.2779 17.8522 20.3758 17.6618 20.4099 17.4555C20.444 17.2493 20.4125 17.0375 20.32 16.85L19.43 15.07L21.32 14.44C21.517 14.3735 21.6884 14.2472 21.8103 14.0787C21.9321 13.9102 21.9985 13.7079 22 13.5V10.5C22.0005 10.2904 21.9352 10.0858 21.8132 9.91537C21.6911 9.7449 21.5186 9.61709 21.32 9.55ZM20 12.78L18.8 13.18C18.5241 13.2695 18.2709 13.418 18.0581 13.6151C17.8452 13.8122 17.6778 14.0533 17.5675 14.3216C17.4571 14.5899 17.4064 14.879 17.419 15.1688C17.4315 15.4586 17.5069 15.7422 17.64 16L18.21 17.14L17.11 18.24L16 17.64C15.7436 17.5122 15.4627 17.4411 15.1763 17.4313C14.89 17.4215 14.6049 17.4734 14.3403 17.5834C14.0758 17.6934 13.8379 17.8589 13.6429 18.0688C13.4479 18.2787 13.3003 18.5281 13.21 18.8L12.81 20H11.22L10.82 18.8C10.7305 18.5241 10.582 18.2709 10.3849 18.0581C10.1878 17.8452 9.94671 17.6778 9.67842 17.5675C9.41014 17.4571 9.12105 17.4064 8.83123 17.419C8.5414 17.4315 8.25777 17.5069 8 17.64L6.86 18.21L5.76 17.11L6.36 16C6.4931 15.7422 6.56852 15.4586 6.58105 15.1688C6.59358 14.879 6.5429 14.5899 6.43254 14.3216C6.32218 14.0533 6.15478 13.8122 5.94195 13.6151C5.72912 13.418 5.47595 13.2695 5.2 13.18L4 12.78V11.22L5.2 10.82C5.47595 10.7305 5.72912 10.582 5.94195 10.3849C6.15478 10.1878 6.32218 9.94671 6.43254 9.67842C6.5429 9.41014 6.59358 9.12105 6.58105 8.83123C6.56852 8.5414 6.4931 8.25777 6.36 8L5.79 6.89L6.89 5.79L8 6.36C8.25777 6.4931 8.5414 6.56852 8.83123 6.58105C9.12105 6.59358 9.41014 6.5429 9.67842 6.43254C9.94671 6.32218 10.1878 6.15478 10.3849 5.94195C10.582 5.72912 10.7305 5.47595 10.82 5.2L11.22 4H12.78L13.18 5.2C13.2695 5.47595 13.418 5.72912 13.6151 5.94195C13.8122 6.15478 14.0533 6.32218 14.3216 6.43254C14.5899 6.5429 14.879 6.59358 15.1688 6.58105C15.4586 6.56852 15.7422 6.4931 16 6.36L17.14 5.79L18.24 6.89L17.64 8C17.5122 8.25645 17.4411 8.53735 17.4313 8.82369C17.4215 9.11003 17.4734 9.39513 17.5834 9.65969C17.6934 9.92424 17.8589 10.1621 18.0688 10.3571C18.2787 10.5521 18.5281 10.6997 18.8 10.79L20 11.19V12.78ZM12 8C11.2089 8 10.4355 8.2346 9.77772 8.67413C9.11993 9.11365 8.60724 9.73836 8.30448 10.4693C8.00173 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61217 14.269 9.17158 14.8284C9.73099 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17158C14.0783 8.42143 13.0609 8 12 8ZM12 14C11.6044 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3036 13.1308 10.1522 12.7654C10.0009 12.3999 9.96126 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1156 11.6098 10.0384C11.9978 9.96126 12.3999 10.0009 12.7654 10.1522C13.1308 10.3036 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6044 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z" fill="currentColor" />
                                    </svg>
                                    <p className="text-white font-medium text-base">Settings</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="p-3 py-4 flex items-center justify-between text-coolGray-600 hover:text-yellow-500 hover:bg-coolGray-800 rounded-md" href="#">
                                <div className="flex items-center">
                                    <svg className="mr-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.29 8.71L18.59 11L9.00004 11C8.73483 11 8.48047 11.1054 8.29294 11.2929C8.1054 11.4804 8.00004 11.7348 8.00004 12C8.00004 12.2652 8.1054 12.5196 8.29294 12.7071C8.48047 12.8946 8.73483 13 9.00004 13L18.59 13L16.29 15.29C16.1963 15.383 16.1219 15.4936 16.0712 15.6154C16.0204 15.7373 15.9942 15.868 15.9942 16C15.9942 16.132 16.0204 16.2627 16.0712 16.3846C16.1219 16.5064 16.1963 16.617 16.29 16.71C16.383 16.8037 16.4936 16.8781 16.6155 16.9289C16.7373 16.9797 16.868 17.0058 17 17.0058C17.1321 17.0058 17.2628 16.9797 17.3846 16.9289C17.5065 16.8781 17.6171 16.8037 17.71 16.71L21.71 12.71C21.8011 12.6149 21.8724 12.5028 21.92 12.38C22.0201 12.1365 22.0201 11.8635 21.92 11.62C21.8724 11.4972 21.8011 11.3851 21.71 11.29L17.71 7.29C17.6168 7.19676 17.5061 7.1228 17.3843 7.07234C17.2625 7.02188 17.1319 6.99591 17 6.99591C16.8682 6.99591 16.7376 7.02188 16.6158 7.07234C16.494 7.1228 16.3833 7.19676 16.29 7.29C16.1968 7.38324 16.1228 7.49393 16.0724 7.61575C16.0219 7.73757 15.996 7.86814 15.996 8C15.996 8.13186 16.0219 8.26243 16.0724 8.38425C16.1228 8.50607 16.1968 8.61676 16.29 8.71ZM12 21C12 20.7348 11.8947 20.4804 11.7071 20.2929C11.5196 20.1054 11.2653 20 11 20L5.00004 20C4.73482 20 4.48047 19.8946 4.29293 19.7071C4.1054 19.5196 4.00004 19.2652 4.00004 19L4.00004 5C4.00004 4.73478 4.1054 4.48043 4.29293 4.29289C4.48047 4.10536 4.73483 4 5.00004 4L11 4C11.2653 4 11.5196 3.89464 11.7071 3.70711C11.8947 3.51957 12 3.26522 12 3C12 2.73478 11.8947 2.48043 11.7071 2.29289C11.5196 2.10536 11.2653 2 11 2L5.00004 2C4.20439 2 3.44133 2.31607 2.87872 2.87868C2.31611 3.44129 2.00004 4.20435 2.00004 5L2.00004 19C2.00004 19.7956 2.31611 20.5587 2.87872 21.1213C3.44133 21.6839 4.20439 22 5.00004 22L11 22C11.2653 22 11.5196 21.8946 11.7071 21.7071C11.8947 21.5196 12 21.2652 12 21Z" fill="currentColor" />
                                    </svg>
                                    <p className="text-white font-medium text-base">Sign out</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="xl:ml-80">
                <div className="py-5 px-8 bg-white border-b border-coolGray-100">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                        <div className="w-auto p-2">
                            <a className="block max-w-max text-coolGray-500 hover:text-coolGray-600" href="#">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 8H19C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7C20 6.73478 19.8946 6.48043 19.7071 6.29289C19.5196 6.10536 19.2652 6 19 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM19 16H5C4.73478 16 4.48043 16.1054 4.29289 16.2929C4.10536 16.4804 4 16.7348 4 17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-auto p-2">
                            <div className="flex flex-wrap items-center -m-3">
                                <div className="w-auto p-3">
                                    <a className="block max-w-max text-coolGray-500 hover:text-coolGray-600" href="#">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="w-auto p-3">
                                    <a className="block max-w-max text-coolGray-500 hover:text-coolGray-600" href="#">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 13.18V10C17.9986 8.58312 17.4958 7.21247 16.5806 6.13077C15.6655 5.04908 14.3971 4.32615 13 4.09V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4.09C9.60294 4.32615 8.33452 5.04908 7.41939 6.13077C6.50425 7.21247 6.00144 8.58312 6 10V13.18C5.41645 13.3863 4.911 13.7681 4.55294 14.2729C4.19488 14.7778 4.00174 15.3811 4 16V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H8.14C8.37028 19.8474 8.873 20.5954 9.5706 21.1287C10.2682 21.6621 11.1219 21.951 12 21.951C12.8781 21.951 13.7318 21.6621 14.4294 21.1287C15.127 20.5954 15.6297 19.8474 15.86 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V16C19.9983 15.3811 19.8051 14.7778 19.4471 14.2729C19.089 13.7681 18.5835 13.3863 18 13.18ZM8 10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10V13H8V10ZM12 20C11.651 19.9979 11.3086 19.9045 11.0068 19.7291C10.7051 19.5536 10.4545 19.3023 10.28 19H13.72C13.5455 19.3023 13.2949 19.5536 12.9932 19.7291C12.6914 19.9045 12.349 19.9979 12 20ZM18 17H6V16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15H17C17.2652 15 17.5196 15.1054 17.7071 15.2929C17.8946 15.4804 18 15.7348 18 16V17Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="w-auto p-3">
                                    <div className="flex flex-wrap items-center -m-2">
                                        <div className="w-auto p-2">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="w-auto p-2">
                                                    <img src={`https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/${user.profilePics}`} alt="" className='rounded-full h-11 w-11' />
                                                </div>
                                                <div className="w-auto p-2">
                                                    <h2 className="text-sm font-semibold text-coolGray-800">{user.name}</h2>
                                                    <p className="text-sm font-medium text-coolGray-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown dropdown-end">
                                            <a className="block max-w-max my-4 text-coolGray-500 hover:text-coolGray-600" href="#">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 9.17C16.8126 8.98375 16.5592 8.87921 16.295 8.87921C16.0308 8.87921 15.7774 8.98375 15.59 9.17L12 12.71L8.46001 9.17C8.27265 8.98375 8.0192 8.87921 7.75501 8.87921C7.49082 8.87921 7.23737 8.98375 7.05001 9.17C6.95628 9.26297 6.88189 9.37357 6.83112 9.49543C6.78035 9.61729 6.75421 9.74799 6.75421 9.88C6.75421 10.012 6.78035 10.1427 6.83112 10.2646C6.88189 10.3864 6.95628 10.497 7.05001 10.59L11.29 14.83C11.383 14.9237 11.4936 14.9981 11.6154 15.0489C11.7373 15.0997 11.868 15.1258 12 15.1258C12.132 15.1258 12.2627 15.0997 12.3846 15.0489C12.5064 14.9981 12.617 14.9237 12.71 14.83L17 10.59C17.0937 10.497 17.1681 10.3864 17.2189 10.2646C17.2697 10.1427 17.2958 10.012 17.2958 9.88C17.2958 9.74799 17.2697 9.61729 17.2189 9.49543C17.1681 9.37357 17.0937 9.26297 17 9.17Z" fill="currentColor"></path>
                                                </svg>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Outlet />

            </div>
        </section>
    )
}
