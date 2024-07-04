import React from 'react'
import { useDispatch } from 'react-redux'
import axios from '../axiosInstance'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import { HOST_URL } from '../constants'
import { setNotification } from '../store/notification/notificationSlice'

const initialValues = {
    oldpassword: '',
    password: '',
    passwordConfirmation: '',
}
const schema = object({
    oldpassword: string().required('Enter your Old Password'),
    password: string().required('Enter your New Password'),
    passwordConfirmation: string().oneOf([ref('password'), undefined], 'Passwords must match')
})

export default function ChangePassword() {
    const { id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            let obj = { password: values.password, oldpassword: values.oldpassword }
            changePassword(obj);
        }
    })

    function changePassword(data) {
        const url = `${HOST_URL}user/changePassword/${id}`
        axios.put(url, data).then(res => {
            sessionStorage.auth = res.data.token;
            sessionStorage.user = JSON.stringify({
                email: res.data.email,
                id: res.data.id,
                name: res.data.name
            })

            dispatch(setNotification({
                popup: true,
                status: 'success',
                message: "Password has updated"
            }))

            navigate("/dashboard");
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
        <>
            <section className="relative pt-16 pb-0 md:py-32 bg-white theme-background">
                <div className="container px-4 mx-auto mb-16">
                    <div className="w-full md:w-3/5 lg:w-1/2">
                        <div className="max-w-sm mx-auto">
                            <div className="mb-6 text-center">
                                <a className="inline-block mb-6" href="#">
                                    <img className="h-16" src={window.location.origin + "/flex-ui-assets/logos/flex-circle-yellow.svg"} alt="" /></a>
                                <h3 className="mb-4 text-2xl md:text-3xl font-bold">Join our community</h3>
                                <p className="text-lg text-coolGray-500 font-medium">Become the next Hackathon Ninja !!!</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="">Old Password<span className='text-red-500'>*</span></label>
                                    <input type="password" name="oldpassword" placeholder="************" value={values.oldpassword} onChange={handleChange} onBlur={handleBlur}
                                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" />
                                    {errors.oldpassword && touched.oldpassword ? (
                                        <p className='mt-1 text-red-500'>{errors.oldpassword}</p>
                                    ) : ''}
                                </div>

                                <div className="mb-6">
                                    <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="">New Password<span className='text-red-500'>*</span></label>
                                    <input type="password" name="password" placeholder="************" value={values.password} onChange={handleChange} onBlur={handleBlur}
                                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" />
                                    {errors.password && touched.password ? (
                                        <p className='mt-1 text-red-500'>{errors.password}</p>
                                    ) : ''}
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="">Confirm Password <span className='text-red-500'>*</span></label>
                                    <input type="password" name="passwordConfirmation" placeholder="************" value={values.passwordConfirmation} onChange={handleChange} onBlur={handleBlur}
                                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" />
                                    {errors.passwordConfirmation && touched.passwordConfirmation ? (
                                        <p className='mt-1 text-red-500'>{errors.passwordConfirmation}</p>
                                    ) : ''}
                                </div>

                                <button type="submit" className="inline-block py-3 px-7 mb-4 w-full text-base text-yellow-50 font-medium text-center leading-6 bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md shadow-sm">
                                    Change Password
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
                <img className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover" src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyNHx8d29ya3NwYWNlfGVufDB8fHx8MTcxMjkwMTg2Nnww&ixlib=rb-4.0.3&q=85&w=1920" alt="" />
            </section>
        </>
    )
}
