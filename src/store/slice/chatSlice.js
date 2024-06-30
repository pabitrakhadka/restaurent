import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        selectChat: {
            isSelected: null
        },
    },
    reducers: {
        setClick: (state) => {
            state.selectChat.isSelected = !state.selectChat.isSelected;
        }
    }
});
export const { setClick } = chatSlice.actions;
export default chatSlice.reducer;
