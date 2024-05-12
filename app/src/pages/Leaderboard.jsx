import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import Status from '../components/leaderboard/Status'
import Rank from '../components/leaderboard/Rank'
// import { setNotification } from '../store/notification/notificationSlice'

export default function Leaderboard() {
    // const dispatch = useDispatch()

    // function showNotification() {
    //     dispatch(setNotification({
    //         popup: true,
    //         status: 'error',
    //         message: "Show Message"
    //     }))
    // }
    return (
        <>
            <Status />

            <Rank />
        </>
    )
}
