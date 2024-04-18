import { createSlice } from "@reduxjs/toolkit";

const hackathonSlice = createSlice({
    name: 'hackathon',
    initialState: {
        project: {}
    },
    reducers: {
        selectProject: (state, action) => {
            state.project = action.payload;
        },
        removeProject: (state, action) => {
            state.project = []
        }
    }
});

export const {selectProject, removeProject} = hackathonSlice.actions
export default hackathonSlice.reducer;