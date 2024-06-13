import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../axiosInstance'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { object, string } from 'yup';
import { HOST_URL } from '../constants'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { setNotification } from '../store/notification/notificationSlice'
import { setUser } from '../store/user/userSlice'
import CommonDialog from '../components/common/CommonDialog'
import { getInitial } from '../components/helper'


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
    role: string().required('Enter your API Name'),
    empId: string().required('Enter your Project Category'),
    manager: string().when("isManager", (isManager, schema) => isManager ? schema : schema.required('Select your Manager')),
    primarySkill: string().required('Enter your API End Point Version'),
    secondarySkill: string().required('Enter your API Documentation Link'),
    city: string().required('Select your Programming Language'),
    state: string().required('Enter your API requirment approach'),
    country: string().required('Enter your API description'),
})


export default function ProfileInfo() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userList, setUserList] = useState([])
    const [userContact, setUserContact] = useState([])
    const [userProfilePics, setUserProfilePics] = useState({})
    const [sociaMedia, setSociaMedia] = useState('');
    const [url, setUrl] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [imageUrl, setImageUrl] = useState('')
    const user = JSON.parse(sessionStorage.user);
    // const [isManager, setIsManager] = useState(user.isManager);
    const [socialMediaList, setSocialMediaList] = useState(['Facebook', 'Instagram', 'Linkedin']);
    const [unmatchSocialMedia, setUnmatchSocialMedia] = useState([]);

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
        const url = `${HOST_URL}user/userList`
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
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);
        setUserProfilePics({ "file": file });

        reader.onloadend = (ev) => {
            setImageUrl(reader.result)
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
        let obj = {
            name: sociaMedia.toLowerCase(),
            url: url,
        }

        const apiurl = `${HOST_URL}user/addSocialMedia/${user.id}`
        axios.put(apiurl, obj).then(res => {
            setIsOpen(false)
            getUserDetails()
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
            setUserContact(data.userContact?.socialMedia ?? []);
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

            if (data.userContact?.socialMedia.length > 0) {
                let contact = data.userContact?.socialMedia
                let unmatched = socialMediaList.filter(item => {
                    let arr = contact.map(x => x.name)
                    return !arr.includes(item.toLowerCase())
                })
                setUnmatchSocialMedia(unmatched)
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
                                            <div className={`flex items-center justify-center w-16 h-16 text-2xl font-medium rounded-full text-yellow-600 bg-yellow-200 `}>{getInitial(user.name)}</div>
                                        )}
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-yellow-500 focus-within:border-yellow-500 border border-dashed border-coolGray-200 rounded-lg">
                                            <svg className="mb-1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.71 7.71L11 5.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V5.41L15.29 7.71C15.383 7.80373 15.4936 7.87813 15.6154 7.92889C15.7373 7.97966 15.868 8.0058 16 8.0058C16.132 8.0058 16.2627 7.97966 16.3846 7.92889C16.5064 7.87813 16.617 7.80373 16.71 7.71C16.8037 7.61704 16.8781 7.50644 16.9289 7.38458C16.9797 7.26272 17.0058 7.13202 17.0058 7C17.0058 6.86799 16.9797 6.73729 16.9289 6.61543C16.8781 6.49357 16.8037 6.38297 16.71 6.29L12.71 2.29C12.6149 2.19896 12.5028 2.1276 12.38 2.08C12.1365 1.97999 11.8635 1.97999 11.62 2.08C11.4972 2.1276 11.3851 2.19896 11.29 2.29L7.29 6.29C7.19676 6.38324 7.1228 6.49393 7.07234 6.61575C7.02188 6.73758 6.99591 6.86814 6.99591 7C6.99591 7.13186 7.02188 7.26243 7.07234 7.38425C7.1228 7.50607 7.19676 7.61677 7.29 7.71C7.38324 7.80324 7.49393 7.8772 7.61575 7.92766C7.73757 7.97812 7.86814 8.00409 8 8.00409C8.13186 8.00409 8.26243 7.97812 8.38425 7.92766C8.50607 7.8772 8.61676 7.80324 8.71 7.71ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 3.89464 12.4804 3.70711 12.2929C3.51957 12.1054 3.26522 12 3 12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" fill="currentColor"></path>
                                            </svg>
                                            <p className="mb-1 text-sm text-coolGray-800 font-medium">
                                                <span className="text-yellow-500">Click to Upload a file</span>
                                                <span> or drag and drop</span>
                                            </p>
                                            <p className="text-xs text-coolGray-500 font-medium">PNG, JPG, GIF or up to 10MB</p>
                                            <p className="text-xs text-coolGray-500 font-medium">{userProfilePics?.file?.name ?? ''}</p>
                                            <input type="file" name='profilePics' onChange={(ev) => selectImage(ev)} className="absolute top-0 left-0 w-full h-full opacity-0" />
                                        </div>
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

                                    {userContact.length > 0 ? (
                                        <div className="flex-1 flex p-3 cursor-pointer">
                                            {userContact.map((x, ind) => (
                                                <div className="w-1/3" key={ind}>
                                                    <Link className="inline-block float-left mr-4" to={x.url}>{x.name}</Link>
                                                    <a className="inline float-left" onClick={() => addSocialMedia(x.name)}>
                                                        <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                    </a>
                                                </div>
                                            ))}

                                            {unmatchSocialMedia.map((x, ind) => (
                                                <div className="w-1/3" key={ind}>
                                                    <span className="inline-block float-left mr-4">Add {x}</span>
                                                    <a className="inline float-left" onClick={() => addSocialMedia(x)}>
                                                        <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex-1 flex p-3 cursor-pointer">
                                            <div className="w-1/3">
                                                <span className="inline-block float-left mr-4">Facebook</span>
                                                <a className="inline float-left" onClick={() => addSocialMedia('Facebook')}>
                                                    <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>

                                            <div className="w-1/3">
                                                <span className="inline-block float-left mr-4">Instagram</span>
                                                <a className="inline float-left" onClick={() => addSocialMedia('Instagram')}>
                                                    <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>

                                            <div className="w-1/3">
                                                <span className="inline-block float-left mr-4">Linkedin</span>
                                                <a className="inline float-left" onClick={() => addSocialMedia('Linkedin')}>
                                                    <PlusCircleIcon className='w-7 text-yellow-500 hover:text-yellow-600' />
                                                </a>
                                            </div>
                                        </div>
                                    )}

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
