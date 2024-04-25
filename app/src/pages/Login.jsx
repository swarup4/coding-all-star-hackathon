import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { HOST_URL } from '../constants'

const initialValues = {
    organization: 'Trigent Software',
    email: '',
    password: ''
}
const schema = object({
    organization: string().required('Enter your Organization name'),
    email: string().email('Email should be valid').required('Enter your email'),
    password: string().required('Enter your password')
})

export default function Login() {

    const navigate = useNavigate()

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            console.log(values)
            login(values);
        }
    })

    function login(data) {
        const url = `${HOST_URL}user/login`
        axios.post(url, data).then(res => {
            console.log(res.data);
            sessionStorage.auth = res.data.token;
            sessionStorage.user = JSON.stringify({
                email: res.data.email,
                id: res.data.id,
                name: res.data.name,
                profilePics: res.data.profilePics
            })
            // const location = sessionStorage.url;
            navigate("/dashboard");
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <section className="relative pt-16 pb-0 md:py-32 bg-white theme-background">
            <div className="container px-4 mx-auto mb-16">
                <div className="w-full md:w-3/5 lg:w-1/2">
                    <div className="max-w-sm mx-auto">
                        <div className="mb-6 text-center">
                            <a className="inline-block mb-6" href="#">
                                <img className="h-16" src={window.location.origin + "/flex-ui-assets/logos/flex-circle-yellow.svg"} alt="" /></a>
                            <h3 className="mb-4 text-2xl md:text-3xl font-bold">Sign in to your account</h3>
                            <p className="text-lg text-coolGray-500 font-medium">Start your Hackathon Journey !</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="">Organization</label>
                                <input type="text" name="organization" placeholder="TRIGENT" autoComplete="organization" value={values.organization} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs" />
                                {errors.organization && touched.organization ? (
                                    <p className='mt-1 text-red-500'>{errors.organization}</p>
                                ) : ''}
                            </div>

                            <div className="mb-6">
                                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="">Email</label>
                                <input type="email" placeholder="dev@shuffle.dev" name="email" autoComplete="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" />
                                {errors.email && touched.email ? (
                                    <p className='mt-1 text-red-500'>{errors.email}</p>
                                ) : ''}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-coolGray-800 font-medium" htmlFor="">Password</label>
                                <input type="password" placeholder="************" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}
                                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" />
                                {errors.password && touched.password ? (
                                    <p className='mt-1 text-red-500'>{errors.password}</p>
                                ) : ''}
                            </div>

                            <div className="flex flex-wrap items-center justify-between mb-6">
                                <div className="w-full md:w-1/2">
                                    <label className="relative inline-flex items-center">
                                        <input className="form-checkbox appearance-none" type="checkbox" />
                                        <img className="absolute top-1/2 transform -translate-y-1/2 left-0" src={window.location.origin + "/flex-ui-assets/elements/sign-up/checkbox-icon.svg"} alt="" />
                                        <span className="ml-7 text-xs text-coolGray-800 font-medium">Remember me</span>
                                    </label>
                                </div>
                                <div className="w-full md:w-auto mt-1">
                                    <a className="inline-block text-xs font-medium text-yellow-500 hover:text-yellow-600" href="#">Forgot your password?</a>
                                </div>
                            </div>

                            <button type="submit" className="inline-block py-3 px-7 mb-6 w-full text-base text-yellow-50 font-medium text-center leading-6 bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md shadow-sm">
                                Sign in
                            </button>

                            <a className="inline-flex items-center justify-center py-3 px-7 mb-6 w-full text-base text-coolGray-500 font-medium text-center leading-6 bg-white border border-coolGray-100 hover:border-coolGray-200 rounded-md shadow-sm" href="#">
                                <img className="mr-2" src={window.location.origin + "/flex-ui-assets/elements/sign-up/google-icon-sign-up.svg"} alt="" />
                                <span>Sign in with Google</span>
                            </a>
                            <p className="text-center">
                                <span className="text-xs font-medium">Don’t have an account?</span>
                                <Link to='/signup' className="inline-block text-xs font-medium text-yellow-500 hover:text-yellow-600 hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <img className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover" src={window.location.origin + "/flex-ui-assets/images/sign-up/photo-sign-up-side.png"} alt="" />
        </section>
    )
}
