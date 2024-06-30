import { createSlice } from "@reduxjs/toolkit";
const cartCounter = createSlice({
    name: "cartCounter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
            console.log("counter=", state);
        },
        decrement: state => {
            state.value -= 1;
        }
    }
});
export const { increment, decrement } = cartCounter.actions;
export default cartCounter.reducer;