import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'
import hackathonSlice from './hackathon/hackathonSlice'
import userSlice from './user/userSlice'
import submissionSlice from './submission/submissionSlice'
import reviewSlice from './review/reviewSlice'
import notificationSlice from './notification/notificationSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
        hackathon: hackathonSlice,
        submission: submissionSlice,
        review: reviewSlice,
        notification: notificationSlice
    }
})