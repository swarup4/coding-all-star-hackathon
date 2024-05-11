import React from 'react'

import Status from '../components/leaderboard/Status'
import Rank from '../components/leaderboard/Rank'
import Leaderboards from '../components/hackathon/Leaderboard'

export default function Leaderboard() {
    return (
        <>
            <Status />

            <Rank />

            <Leaderboards />
        </>
    )
}
