import { createSlice } from "@reduxjs/toolkit";
const adminData = createSlice({
    name: "adminData",
    initialState: {
        admin: {
            adminId: null,
            adminName: null,
            adminImage: null
        }
    },
    reducers: {
        setAdmin: (state, action) => {
            const { id, name, image } = action.payload;

            state["admin"]["adminId"] = id;
            state["admin"]["adminName"] = name;
            state["admin"]["adminImage"] = image;

        }
    }
});
export const { setAdmin } = adminData.actions;
export default adminData.reducer;