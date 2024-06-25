import React, { useEffect, useState } from 'react'
import axios from '../../axiosInstance'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { XMarkIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'


const initialValues = {
    name: '',
    heading: '',
    theme: '',
    description: ''
}
const schema = object({
    name: string().required('Enter hackathon name'),
    heading: string().required('Enter hackathon sub heading'),
    theme: string().required('Enter hackathon theme'),
    description: string().required('Enter hackathon description')
})


export default function Admin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams();
    const user = JSON.parse(sessionStorage.user);
    const [bannerPics, setBannerPics] = useState({})
    const [userList, setUserList] = useState([])
    const [panel, setPanel] = useState([])
    const [selectPanel, setSelectPanel] = useState('')
    const [imageUrl, setImageUrl] = useState('')


    useEffect(() => {
        const url = `${HOST_URL}user/userList/panel`
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

    useEffect(() => {
        if (id) {
            const url = `${HOST_URL}hackathon/getHackathon/true/${id}`
            axios.get(url).then(res => {
                let data = res.data[0]
                initialValues.name = data.name;
                initialValues.heading = data.heading;
                initialValues.theme = data.theme;
                initialValues.description = data.description;

                let image = data?.banner
                if (image) {
                    let url = `https://trigent-hackathon-bucket.s3.ap-south-1.amazonaws.com/Hackathon-Banner/${image}`
                    console.log(url);
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
    }, [])

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            if (id) {
                console.log(values);
                updateHackathon(values).then(res => {
                    navigate('/admin/hackathon');
                    dispatch(setNotification({
                        popup: true,
                        status: 'success',
                        message: 'Hackathon update successfully'
                    }));
                }).catch(err => {
                    dispatch(setNotification({
                        popup: true,
                        status: 'error',
                        message: err.response.data
                    }))
                })
            } else {
                if (panel.length > 0) {
                    let panelList = panel.map(x => x._id)
                    let obj = { ...values, userId: user.id, panels: panelList }
                    addHackathon(obj).then(res => {
                        setBannerPics({});
                        action.resetForm()
                        navigate('/admin/hackathon');
                        dispatch(setNotification({
                            popup: true,
                            status: 'success',
                            message: 'Hackathon added has successfully'
                        }));
                    }).catch(err => {
                        dispatch(setNotification({
                            popup: true,
                            status: 'error',
                            message: err.response.data
                        }))
                    })
                } else {
                    dispatch(setNotification({
                        popup: true,
                        status: 'error',
                        message: "You didn't select any Panelist. You should select one Panelist"
                    }))
                }
            }
        }
    })

    function selectPanelist(id) {
        setSelectPanel(id)
        setPanel([...panel, userList[id]])
        setSelectPanel('')
    }

    function removePanelist(ind) {
        const newPanel = panel.filter((x, index) => index !== ind);
        setPanel(newPanel);
    }

    function selectImage(ev) {
        let file = ev.currentTarget.files[0];
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);
        setBannerPics({ "file": file });

        reader.onloadend = (ev) => {
            setImageUrl(reader.result)
        }
    }

    function uploadImage(id, data) {
        let fd = new FormData();
        fd.append('banner', data, data.name);
        return new Promise((resolve, reject) => {
            const url = `${HOST_URL}hackathon/uploadBanner/${id}`
            axios.put(url, fd).then(res => {
                resolve(res)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }

    function addHackathon(data) {
        const url = `${HOST_URL}hackathon/addHackathon`
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(res => {
                uploadImage(res.data._id, bannerPics.file).then(image => {
                    resolve(image)
                }).catch(err => {
                    reject(err);
                })
            }).catch(err => {
                console.log(err)
                reject(err);
            })
        })
    }

    function updateHackathon(data) {
        const url = `${HOST_URL}hackathon/updateHackathon/${id}`
        return new Promise((resolve, reject) => {
            axios.put(url, data).then(res => {
                if(Object.keys(bannerPics).length > 0){
                    uploadImage(res.data._id, bannerPics.file).then(image => {
                        resolve(image)
                    }).catch(err => {
                        reject(err);
                    })
                } else {
                    resolve(res)
                }
            }).catch(err => {
                console.log(err)
                reject(err);
            })
        })
    }


    return (
        <div>
            <section className="bg-white py-4 admin-page-content overflow-auto">
                <div className="container px-4 mx-auto">
                    <div className="p-6 h-full overflow-hidden bg-white rounded-md">

                        <form onSubmit={handleSubmit} encType='multipart/form-data'>
                            <div className="pb-6 border-b border-coolGray-100">
                                <div className="flex flex-wrap items-center justify-between -m-2">
                                    <div className="w-full md:w-auto p-2">
                                        <h2 className="text-coolGray-900 text-lg font-semibold">{id ? 'Edit' : 'Add'} Hackathon</h2>
                                        <p className="text-xs text-coolGray-500 font-medium">Submit details</p>
                                    </div>
                                    <div className="w-full md:w-auto p-2">
                                        <div className="flex flex-wrap justify-between -m-1.5">
                                            <div className="w-full md:w-auto p-1.5">
                                                <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                                                    <p>Cancel</p>
                                                </button>
                                            </div>
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
                                            <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            <input type="text" placeholder="Enter Hackathon Name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                            {errors.name && touched.name ? (
                                                <p className='mt-1 text-red-500'>{errors.name}</p>
                                            ) : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/3 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Sub Heading</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            <input type="text" placeholder="Enter Hackathon Sub Heading" name='heading' value={values.heading} onChange={handleChange} onBlur={handleBlur}
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                            {errors.heading && touched.heading ? (
                                                <p className='mt-1 text-red-500'>{errors.heading}</p>
                                            ) : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/3 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Category</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            <input type="text" placeholder="Enter Category" name='theme' value={values.theme} onChange={handleChange} onBlur={handleBlur}
                                                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                            {errors.theme && touched.theme ? (
                                                <p className='mt-1 text-red-500'>{errors.theme}</p>
                                            ) : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {!id ? (
                                <div className="py-6 border-b border-coolGray-100">
                                    <div className="w-full md:w-9/12">
                                        <div className="flex flex-wrap -m-3">
                                            <div className="w-full md:w-1/3 p-3">
                                                <p className="text-sm text-coolGray-800 font-semibold">Panelist</p>
                                            </div>
                                            <div className="w-full md:flex-1 p-3">
                                                <select name='panelist' onChange={(ev) => selectPanelist(ev.target.value)} value={selectPanel} className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-yellow-500 rounded-lg shadow-input">
                                                    <option value="">Select</option>
                                                    {userList.map((item, ind) => (
                                                        <option value={ind} key={ind}>{item.name}</option>
                                                    ))}
                                                </select>

                                                {panel.length > 0 ? (
                                                    <div className='mt-4'>
                                                        {panel.map((x, ind) => (
                                                            <div className='flex p-2' key={ind}>
                                                                <p className="items-center flex md:flex-1 text-sm text-coolGray-800 font-semibold">{x.name}</p>
                                                                <div className="w-auto md:w-1/12">
                                                                    <a className='cursor-pointer' onClick={() => removePanelist(ind)}>
                                                                        <XMarkIcon className="h-5 w-5 stroke-2" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ''}

                            <div className="pt-6">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/3 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            <textarea name='description' value={values.description} onChange={handleChange} onBlur={handleBlur}
                                                className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none"></textarea>
                                            {errors.description && touched.description ? (
                                                <p className='mt-1 text-red-500'>{errors.description}</p>
                                            ) : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b border-coolGray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full md:w-1/3 p-3">
                                            <p className="text-sm text-coolGray-800 font-semibold">Photo</p>
                                        </div>
                                        <div className="w-full md:w-auto">
                                            {imageUrl ? (
                                                <img src={imageUrl} className='h-20 rounded-md' alt="" />
                                            ) : ''}
                                        </div>
                                        <div className="w-full md:flex-1 p-3">
                                            <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-yellow-500 focus-within:border-yellow-500 border border-dashed border-coolGray-200 rounded-lg">
                                                <ArrowUpTrayIcon className='h-6 w-6 stroke-2' />
                                                <p className="mb-1 text-sm text-coolGray-800 font-medium">
                                                    <span className="text-yellow-500">Click to Upload a file</span>
                                                    <span>or drag and drop</span>
                                                </p>
                                                <p className="text-xs text-coolGray-500 font-medium">PNG, JPG, GIF or up to 10MB</p>
                                                <p className="text-xs text-coolGray-500 font-medium">{bannerPics?.file?.name ?? ''}</p>
                                                <input type="file" name='bannerPics' onChange={(ev) => selectImage(ev)} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
