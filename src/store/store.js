import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice/cartSlice';
import orderReducer from './slice/orderSlice';
import messageReducer from "./slice/userMessage";
import setUserReducer from "./slice/setUserSlice";
import chatReducer from './slice/chatSlice';
import adminDataReducer from './slice/adminData';
import cartCounter from "./slice/cartCounter";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: orderReducer,
        userMessage: messageReducer,
        setUserSlice: setUserReducer,
        chatSlice: chatReducer,
        adminData: adminDataReducer,
        cartCounter: cartCounter
    }
})

export default store;