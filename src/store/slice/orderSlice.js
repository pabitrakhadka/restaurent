'use client';

import {createSlice} from '@reduxjs/toolkit';
const OrderSlice=createSlice({
    name:"order",
    initialState:[],
    reducers:{
        addOrder(state,action){
             state.push(action.payload)
        },
        removeOrder(state,action){
            
            return state.filter((order)=>order.id!==action.payload);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.find(item => item.id === id);
            if (itemToUpdate) {
              itemToUpdate.quantity = quantity;
            }
          }
    }
})
export const {addOrder,removeOrder}=OrderSlice.actions;
export default OrderSlice.reducer;