'use client';
import { createSlice } from '@reduxjs/toolkit';
const MessageSlice = createSlice({
    name: "userMessage",
    initialState: {
        form: {
            message: ''
        },
        messages: []
    },
    reducers: {
        onMessageSent(state, action) {
            state['messages'].push(action.payload)
        },
        onFormChange(state, action) {
            // state.form.message = action.payload
            state['form']['message'] = action.payload
        },

        MessageRecived(state, action) {
            state['messages'].push(action.payload)
        },
        setMessages(state, action) {
            state['messages'].push(...action.payload);
        }
    }
})
export const { onMessageSent, onFormChange, MessageRecived, setMessages } = MessageSlice.actions;
export default MessageSlice.reducer;