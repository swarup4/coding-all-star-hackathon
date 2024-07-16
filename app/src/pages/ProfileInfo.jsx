import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../axiosInstance'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { object, string } from 'yup';
import { HOST_URL } from '../constants'
import { ArrowUpTrayIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { setNotification } from '../store/notification/notificationSlice'
import { setUser } from '../store/user/userSlice'
import CommonDialog from '../components/common/CommonDialog'
import { getInitial, randomColor } from '../components/helper'


const initialValues = {
    role: '',
    empId: '',
    manager: '',
    primarySkill: '',
    secondarySkill: '',
    city: '',
    state: '',
    country: '',
}
const schema = object().shape({
    role: string().required('Enter your Role Name').matches(/\S/, 'Field cannot contain only spaces value'),
    empId: string().required('Enter your Employee ID').matches(/^\d+$/, 'Employee ID must be a number').matches(/\S/, 'Field cannot contain only spaces value'),
    manager: string().when("isManager", (isManager, schema) => isManager ? schema : schema.required('Select your Manager')),
    primarySkill: string().required('Enter your Primary skill').matches(/\S/, 'Field cannot contain only spaces value'),
    secondarySkill: string().required('Enter your Secondary skill').matches(/\S/, 'Field cannot contain only spaces value'),
    city: string().required('Select your City').matches(/\S/, 'Field cannot contain only spaces value'),
    state: string().required('Enter your State').matches(/\S/, 'Field cannot contain only spaces value'),
    country: string().required('Enter your Country').matches(/\S/, 'Field cannot contain only spaces value'),
})


export default function ProfileInfo() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userList, setUserList] = useState([])
    const [userContact, setUserContact] = useState({})
    const [userProfilePics, setUserProfilePics] = useState({})
    const [profilePicsErrorMsg, setProfilePicsErrorMsg] = useState('')
    const [sociaMedia, setSociaMedia] = useState('');
    const [url, setUrl] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [imageUrl, setImageUrl] = useState('')
    const user = JSON.parse(sessionStorage.user);
    
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            let obj = { ...values, profile: userProfilePics }
            addUserDetails(obj);
        }
    })


    useEffect(() => {
        let url = window.location.pathname
        if (url == '/dashboard/profile/edit') {
            setIsEdit(true);
            getUserDetails();
        }
    }, [])

    useEffect(() => {
        const url = `${HOST_URL}user/userList/manager`
        axios.get(url).then(res => {
            setUserList(res.data)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])

    function selectImage(ev) {
        let file = ev.currentTarget.files[0];
        if(file.size < (10 * 1024 * 1024)) { 
            let reader = new FileReader();
            let url = reader.readAsDataURL(file);
            setUserProfilePics({ "file": file });
    
            reader.onloadend = (ev) => {
                setImageUrl(reader.result)
            }
        } else {
            setProfilePicsErrorMsg('Your image size is more then 10MB')
        }
    }

    function uploadImage(data) {
        let fd = new FormData();
        fd.append('profile', data, data.name);
        return new Promise((resolve, reject) => {
            const url = `${HOST_URL}user/uploadProfilePics/${user.id}`
            axios.put(url, fd).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }

    function notification() {
        dispatch(setNotification({
            popup: true,
            status: 'success',
            message: 'User Details has Added'
        }));

        if (isEdit) {
            navigate('/dashboard/profile')
        } else {
            navigate("/dashboard");
        }
    }

    function addUserDetails(data) {
        const url = `${HOST_URL}user/updateUserDetails/${user.id}`

        axios.put(url, data).then(res => {
            let userData = JSON.parse(sessionStorage.user)

            if (data.profile?.file) {
                uploadImage(data.profile.file).then(image => {
                    sessionStorage.user = JSON.stringify({
                        ...userData,
                        role: res.data.data.role,
                        profilePics: image.data.data
                    });

                    dispatch(setUser({
                        ...userData,
                        role: res.data.data.role,
                        profilePics: image.data.data
                    }))

                    notification()

                }).catch(err => {
                    dispatch(setNotification({
                        popup: true,
                        status: 'error',
                        message: err.response.data
                    }))
                })
            } else {
                dispatch(setUser({
                    ...userData,
                    role: res.data.data.role,
                    profilePics: res.data.data?.profilePics
                }))

                notification()
            }
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    function addSocialMedia(name) {
        setSociaMedia(name)
        setIsOpen(true)
    }

    function submitSocialMedia() {
        let obj = {};
        obj[sociaMedia.toLowerCase()] = url

        const apiurl = `${HOST_URL}user/addSocialMedia/${user.id}`
        axios.put(apiurl, obj).then(res => {
            setUserContact(prevState => ({ ...prevState, ...obj }));
            setIsOpen(false)
            setUrl('')
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: res.data.message
            }))
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    function getUserDetails() {
        const url = `${HOST_URL}user/info/${user.id}`
        axios.get(url).then(res => {
            let data = res.data.data
            setUserContact(data?.userContact);
            initialValues.role = data.user.role ? data.user.role : '';
            initialValues.empId = data.user.empId ? data.user.empId : '';
            initialValues.manager = data.user.manager ? data.user.manager : '';
            initialValues.primarySkill = data.userDetails?.primarySkill ?? '';
            initialValues.secondarySkill = data.userDetails?.secondarySkill ?? '';
            initialValues.city = data.userDetails?.city ?? '';
            initialValues.state = data.userDetails?.state ?? '';
            initialValues.country = data.userDetails?.country ?? '';
            let image = res.data.data.user?.profilePics
            if (image) {
                let url = `https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Users/${image}`
                setImageUrl(url)
            }
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }


    return (
        <section className="bg-coolGray-50 py-4 ">
            <div className="container px-4 mx-auto">
                <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">


                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div className="pb-6 border-b border-coolGray-100">
                            <div className="flex flex-wrap items-center justify-between -m-2">
                                <div className="w-full md:w-auto p-2">
                                    <h2 className="text-coolGray-900 text-lg font-semibold">User Information</h2>
                                    <p className="text-xs text-coolGray-500 font-medium">Enter your details</p>
                                </div>
                                <div className="w-full md:w-auto p-2">
                                    <div className="flex flex-wrap justify-between -m-1.5">
                                        <div className="w-full md:w-auto p-1.5">
                                            <button type="submit" className="flex flex-wrap justify-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 font-medium text-sm text-white border border-yellow-500 rounded-md shadow-button">
                                                <p>Save</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Role <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input type="text" name='role' placeholder="Enter Role" value={values.role} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        {errors.role && touched.role ? (
                                            <p className='mt-1 text-red-500'>{errors.role}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Employee ID <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input type="text" name='empId' placeholder="Enter Employee ID" value={values.empId} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        {errors.empId && touched.empId ? (
                                            <p className='mt-1 text-red-500'>{errors.empId}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Manager <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <select name='manager' value={values.manager} onChange={handleChange} onBlur={handleBlur} disabled={isEdit}
                                            className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-yellow-500 rounded-lg shadow-input">
                                            <option value="">Select</option>
                                            {userList.map((item, ind) => (
                                                <option value={item._id} key={ind}>{item.name}</option>
                                            ))}
                                        </select>
                                        {errors.manager && touched.manager ? (
                                            <p className='mt-1 text-red-500'>{errors.manager}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Pics */}
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Profile Pics</p>
                                        <p className="text-xs text-coolGray-500 font-medium"></p>
                                    </div>
                                    <div className="w-full md:w-auto">
                                        {imageUrl ? (
                                            <img src={imageUrl} className='h-20 w-20 rounded-full' alt="" />
                                        ) : (
                                            <div className={`flex items-center justify-center w-16 h-16 text-2xl font-medium rounded-full ${randomColor()}`}>{getInitial(user.name)}</div>
                                        )}
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-yellow-500 focus-within:border-yellow-500 border border-dashed border-coolGray-200 rounded-lg">
                                            <ArrowUpTrayIcon className='h-6 w-6 stroke-2' />
                                            <p className="mb-1 text-sm text-coolGray-800 font-medium">
                                                <span className="text-yellow-500">Click to Upload a file</span>
                                                <span> or drag and drop</span>
                                            </p>
                                            <p className="text-xs text-coolGray-500 font-medium">PNG, JPG or up to 10MB</p>
                                            <p className="text-xs text-coolGray-500 font-medium">{userProfilePics?.file?.name ?? ''}</p>
                                            <input type="file" name='profilePics' accept="image/png, image/jpeg" onChange={(ev) => selectImage(ev)} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                                        </div>
                                        <p className='mt-1 text-red-500'>{profilePicsErrorMsg}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Profile Pics */}

                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Primary Skill <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input type="text" name='primarySkill' placeholder="Enter Primary Skill" value={values.primarySkill} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        {errors.primarySkill && touched.primarySkill ? (
                                            <p className='mt-1 text-red-500'>{errors.primarySkill}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Secondary Skill <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input type="text" name='secondarySkill' placeholder="Enter Secondary Skill" value={values.secondarySkill} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        {errors.secondarySkill && touched.secondarySkill ? (
                                            <p className='mt-1 text-red-500'>{errors.secondarySkill}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">City <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input type="text" name='city' placeholder="Enter City" value={values.city} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        {errors.city && touched.city ? (
                                            <p className='mt-1 text-red-500'>{errors.city}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">State <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input type="text" name='state' placeholder="Enter State" value={values.state} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        {errors.state && touched.state ? (
                                            <p className='mt-1 text-red-500'>{errors.state}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Country <span className='text-red-500'>*</span></p>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input type="text" name='country' placeholder="Enter Country" value={values.country} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                        {errors.country && touched.country ? (
                                            <p className='mt-1 text-red-500'>{errors.country}</p>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <p className="text-sm text-coolGray-800 font-semibold">Social Media</p>
                                    </div>

                                    <div className="flex-1 flex p-3">
                                        {userContact?.facebook ? (
                                            <div className="w-1/3">
                                                <Link className="inline-block float-left mr-4 cursor-pointer" to={userContact.facebook}>Facebook</Link>
                                                <a className="inline float-left cursor-pointer" onClick={() => addSocialMedia('Facebook')}>
                                                    <PlusCircleIcon className='w-7 h-7 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        ) : (
                                            <div className="w-1/3">
                                                <span className="inline-block float-left mr-4">Add Facebook</span>
                                                <a className="inline float-left cursor-pointer" onClick={() => addSocialMedia('Facebook')}>
                                                    <PlusCircleIcon className='w-7 h-7 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        )}

                                        {userContact?.linkedin ? (
                                            <div className="w-1/3">
                                                <Link className="inline-block float-left mr-4" to={userContact.linkedin}>Linkedin</Link>
                                                <a className="inline float-left cursor-pointer" onClick={() => addSocialMedia('Linkedin')}>
                                                    <PlusCircleIcon className='w-7 h-7 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        ) : (
                                            <div className="w-1/3">
                                                <span className="inline-block float-left mr-4">Add Linkedin</span>
                                                <a className="inline float-left cursor-pointer" onClick={() => addSocialMedia('Linkedin')}>
                                                    <PlusCircleIcon className='w-7 h-7 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        )}

                                        {userContact?.instagram ? (
                                            <div className="w-1/3">
                                                <Link className="inline-block float-left mr-4" to={userContact.instagram}>Instagram</Link>
                                                <a className="inline float-left cursor-pointer" onClick={() => addSocialMedia('Instagram')}>
                                                    <PlusCircleIcon className='w-7 h-7 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        ) : (
                                            <div className="w-1/3">
                                                <span className="inline-block float-left mr-4">Add Instagram</span>
                                                <a className="inline float-left cursor-pointer" onClick={() => addSocialMedia('Instagram')}>
                                                    <PlusCircleIcon className='w-7 h-7 stroke-2 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <CommonDialog heading={`Add ${sociaMedia} URL`} open={isOpen} close={setIsOpen} submitText='Sumbit' submit={submitSocialMedia}>
                            <input type="text" name='social' placeholder={`Add ${sociaMedia} URL`} value={url} onChange={ev => setUrl(ev.target.value)}
                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                        </CommonDialog>

                    </form>
                </div>
            </div>
        </section>
    )
}
