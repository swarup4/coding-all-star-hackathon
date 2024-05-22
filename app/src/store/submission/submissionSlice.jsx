import { createSlice } from "@reduxjs/toolkit";

const submissionSlice = createSlice({
    name: 'submission',
    initialState: {
        data: {}
    },
    reducers: {
        setSubmission: (state, action) => {
            state.data = {...state.data, ...action.payload}
        },
        removeSubmission: (state, action) => {
            state.data = {}
        }
    }
});

export const {setSubmission, removeSubmission} = submissionSlice.actions
export default submissionSlice.reducer;