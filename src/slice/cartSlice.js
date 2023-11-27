import { createSlice } from '@reduxjs/toolkit';

const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        productList: {},
        productCount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            if(state.productList[action.payload.id]){
                state.productList[action.payload.id].quantity += 1
                state.productCount += 1
            }
            else {
                state.productList[action.payload.id] = { ...action.payload, quantity: 1}
                state.productCount += 1
            }
        },
        removeFromCart: (state, action) => {
            state.productList[action.payload.id].quantity -= 1; 
            state.productCount -= 1;
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;