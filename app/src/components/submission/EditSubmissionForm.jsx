import React, { useEffect } from 'react'
import axios from '../../axiosInstance'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { object, string } from 'yup';
import { HOST_URL } from '../../constants'
import { programmingLanguageList } from '../helper'
import { setNotification } from '../../store/notification/notificationSlice'

const initialValues = {
    name: '',
    apiEndPoint: '',
    apiVersion: '',
    documentationLink: '',
    programmingLanguage: '',
    description: '',
}
const schema = object().shape({
    name: string().required('Enter your API Name').matches(/\S/, 'Field cannot contain only spaces value'),
    apiEndPoint: string().required('Enter API End point').matches(/\S/, 'Field cannot contain only spaces value'),
    apiVersion: string().required('Enter your API End Point Version').matches(/\S/, 'Field cannot contain only spaces value'),
    documentationLink: string().required('Enter your API Documentation Link').matches(/\S/, 'Field cannot contain only spaces value'),
    programmingLanguage: string().required('Select your Programming Language').matches(/\S/, 'Field cannot contain only spaces value'),
    description: string().required('Enter your API description').matches(/\S/, 'Field cannot contain only spaces value')
})

export default function EditSubmissionForm(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { values, errors, handleBlur, handleChange, handleSubmit, touched, setValues } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            updateApiInfo(values)

        }
    })

    function updateApiInfo(data) {
        const url = `${HOST_URL}submission/updateApiDetails/${props.apiId}`
        axios.put(url, data).then(res => {
            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: "API details has updated"
            }))
            navigate(`/dashboard/details/${res.data.data._id}`)
        }).catch(err => {
            console.log(err);
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }

    useEffect(() => {
        getApiDetails(props.apiId)
    }, [])

    function getApiDetails(id){
        const url = `${HOST_URL}submission/getApiDetails/${props.apiId}`

        axios.get(url).then(res => {
            setValues({
                name: res.data?.name,
                apiEndPoint: res.data?.apiEndPoint,
                apiVersion: res.data?.apiVersion,
                documentationLink: res.data?.documentationLink,
                programmingLanguage: res.data?.programmingLanguage,
                description: res.data?.description,
            });
        }).catch(err => {
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="pb-6 border-b border-coolGray-100">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                        <div className="w-full md:w-auto p-2">
                            <h2 className="text-coolGray-900 text-lg font-semibold">Code Submission</h2>
                        </div>
                        <div className="w-full md:w-auto p-2">
                            <div className="flex flex-wrap justify-between -m-1.5">
                                <div className="w-full md:w-auto p-1.5">
                                    <Link to={'/dashboard/hackathon/' + props.apiId} className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                                        <p>Cancel</p>
                                    </Link>
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
                                <p className="text-sm text-coolGray-800 font-semibold">Name <span className='text-red-500'>*</span></p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='name' placeholder="API Name" value={values.name} onChange={handleChange} onBlur={handleBlur}
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
                                <p className="text-sm text-coolGray-800 font-semibold">API End Point <span className='text-red-500'>*</span></p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='apiEndPoint' disabled placeholder="API Endpoint" value={values.apiEndPoint} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.apiEndPoint && touched.apiEndPoint ? (
                                    <p className='mt-1 text-red-500'>{errors.apiEndPoint}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">API Version <span className='text-red-500'>*</span></p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='apiVersion' placeholder="API End Point Version" value={values.apiVersion} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.apiVersion && touched.apiVersion ? (
                                    <p className='mt-1 text-red-500'>{errors.apiVersion}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Documentation Link <span className='text-red-500'>*</span></p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <input type="text" name='documentationLink' placeholder="Documentation Link" value={values.documentationLink} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                {errors.documentationLink && touched.documentationLink ? (
                                    <p className='mt-1 text-red-500'>{errors.documentationLink}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Programming Language <span className='text-red-500'>*</span></p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <select name='programmingLanguage' value={values.programmingLanguage} onChange={handleChange} onBlur={handleBlur}
                                    className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-yellow-500 rounded-lg shadow-input">
                                    <option value=''>Select</option>
                                    {programmingLanguageList.map((x, ind) => (
                                        <option value={x.value} key={ind}>{x.name}</option>
                                    ))}
                                </select>
                                {errors.programmingLanguage && touched.programmingLanguage ? (
                                    <p className='mt-1 text-red-500'>{errors.programmingLanguage}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                    <div className="w-full md:w-9/12">
                        <div className="flex flex-wrap -m-3">
                            <div className="w-full md:w-1/3 p-3">
                                <p className="text-sm text-coolGray-800 font-semibold">Description <span className='text-red-500'>*</span></p>
                                <p className="text-xs text-coolGray-500 font-medium">Integration API code needs to be write</p>
                            </div>
                            <div className="w-full md:flex-1 p-3">
                                <textarea name='description' value={values.description} onChange={handleChange} onBlur={handleBlur}
                                    className="block w-full h-32 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none" defaultValue={""} />
                                {errors.description && touched.description ? (
                                    <p className='mt-1 text-red-500'>{errors.description}</p>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
