import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/user/userSlice'
import { setNotification } from '../store/notification/notificationSlice'

export default function ProtectedRoute(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch()

    function checkUserToken() {
        sessionStorage.url = location.pathname;
        const userToken = sessionStorage.getItem('auth')

        if (!userToken || userToken === undefined) {
            setIsLoggedIn(false);
            return navigate('/login');
        } else {
            let hostName = location.pathname.split('/')[1]
            let user = JSON.parse(sessionStorage.user)
            dispatch(setUser(user))

            if(!user.isAdmin){
                if(hostName != 'admin'){
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    dispatch(setNotification({
                        popup: true,
                        status: 'error',
                        message: "You don't have access of Admin Panel"
                    }))
                    return navigate('/dashboard');
                }
            } else {
                setIsLoggedIn(true);
            }
        }
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <>
            {isLoggedIn ? props.children : null}
        </>
    )
}
