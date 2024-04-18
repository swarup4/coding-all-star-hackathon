import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/user/userSlice'

export default function ProtectedRoute(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch()

    function checkUserToken() {
        sessionStorage.url = location.pathname;
        const userToken = sessionStorage.getItem('auth');
        dispatch(setUser(JSON.parse(sessionStorage.user)))

        if (!userToken || userToken === undefined) {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
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
