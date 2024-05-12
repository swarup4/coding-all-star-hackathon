import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        popup: {
            popup: false,
            status: '',
            message: ''
        }
    },
    reducers: {
        setNotification: (state, action) => {
            state.popup = action.payload;
        },
        removeNotification: (state, action) => {
            state.popup = {
                popup: false,
                status: '',
                message: ''
            }
        }
    }
});

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer;