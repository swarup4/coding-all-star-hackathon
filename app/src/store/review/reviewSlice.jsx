import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        data: {}
    },
    reducers: {
        setReview: (state, action) => {
            // state.data = action.payload;
            state.data = {...state.data, ...action.payload}
        },
        removeReview: (state, action) => {
            state.data = {}
        }
    }
});

export const {setReview, removeReview} = reviewSlice.actions
export default reviewSlice.reducer;