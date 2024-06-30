import { createSlice } from '@reduxjs/toolkit';

const setUserSlice = createSlice({
    name: "setUserSlice",
    initialState: {
        selectedUser: {
            user_id: '',
            name: '',
        },
    },
    reducers: {
        setUserId: (state, action) => {
            const { user_id, name } = action.payload;
            state['selectedUser']['user_id'] = user_id;
            state['selectedUser']['name'] = name;
        },
    }
})

export const { setUserId } = setUserSlice.actions;
export default setUserSlice.reducer;
