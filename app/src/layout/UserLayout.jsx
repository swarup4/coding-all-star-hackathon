import React from 'react'
import UserHeader from '../components/common/UserHeader'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'


export default function UserLayout() {
    return (
        <>
            <UserHeader />
            <Outlet />
            <Footer />
        </>
    )
}
