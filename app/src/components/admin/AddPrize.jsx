import React, { useEffect, useState } from 'react'
import axios from '../../axiosInstance'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'


const initialValues = {
    category: '',
    name: '',
    amount: '',
    description: ''
}

const schema = object({
    category: string().required('Enter Prize category').matches(/\S/, 'Field cannot contain only spaces value'),
    name: string().required('Enter Prize Name').matches(/\S/, 'Field cannot contain only spaces value'),
    amount: string().required('Enter Prize amount').matches(/\S/, 'Field cannot contain only spaces value'),
    description: string().required('Enter description').matches(/\S/, 'Field cannot contain only spaces value')
})

export default function AddPrize() {
    const dispatch = useDispatch()
    const [hackathonList, setHackathonList] = useState([])


    useEffect(() => {
        const url = `${HOST_URL}hackathon/getHackathonList`
        axios.get(url).then(res => {
            setHackathonList(res.data)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, []);

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            values.amount = Number(values.amount)
            addPrize(values).then(res => {
                dispatch(setNotification({
                    popup: true,
                    status: 'success',
                    message: 'Prize added'
                }))
                action.resetForm()
            }).catch(err => {
                dispatch(setNotification({
                    popup: true,
                    status: 'error',
                    message: err.response.data
                }))
            })
        }
    })

    function addPrize(data) {
        const url = `${HOST_URL}prize/addPrize`
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
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
                                        <h2 className="text-coolGray-900 text-lg font-semibold">Add Prize</h2>
                                        <p className="text-xs text-coolGray-500 font-medium">Configure Prizes</p>
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


                            <div>

                                <div className="py-6 border-b border-coolGray-100">
                                    <div className="w-full md:w-9/12">
                                        <div className="flex flex-wrap -m-3">
                                            <div className="w-full md:w-1/3 p-3">
                                                <p className="text-sm text-coolGray-800 font-semibold">Category</p>
                                            </div>
                                            <div className="w-full md:flex-1 p-3">
                                                <input type="text" placeholder="Enter Category" name='category' value={values.category} onChange={handleChange} onBlur={handleBlur}
                                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                                {errors.category && touched.category ? (
                                                    <p className='mt-1 text-red-500'>{errors.category}</p>
                                                ) : ''}
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
                                                <input type="text" placeholder="Enter Prize Category Name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
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
                                                <p className="text-sm text-coolGray-800 font-semibold">Amount</p>
                                            </div>
                                            <div className="w-full md:flex-1 p-3">
                                                <input type="text" placeholder="Enter Prize Amount" name='amount' value={values.amount} onChange={handleChange} onBlur={handleBlur}
                                                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input" />
                                                {errors.amount && touched.amount ? (
                                                    <p className='mt-1 text-red-500'>{errors.amount}</p>
                                                ) : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-6 border-b border-coolGray-100">
                                    <div className="w-full md:w-9/12">
                                        <div className="flex flex-wrap -m-3">
                                            <div className="w-full md:w-1/3 p-3">
                                                <p className="text-sm text-coolGray-800 font-semibold">Description</p>
                                            </div>
                                            <div className="w-full md:flex-1 p-3">
                                                <textarea placeholder="Enter Description" name='description' value={values.description} onChange={handleChange} onBlur={handleBlur}
                                                    className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-yellow-500 border border-coolGray-200 rounded-lg shadow-input resize-none"></textarea>
                                                {errors.description && touched.description ? (
                                                    <p className='mt-1 text-red-500'>{errors.description}</p>
                                                ) : ''}
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
