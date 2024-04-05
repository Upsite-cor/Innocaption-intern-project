import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    myCart: [],
    showCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem: (state, action) => {
            console.log('adding to cart')
            state.myCart.push(action.payload)
        },
        deleteCartItem: (state, action) => {
            state.myCart = state.myCart.filter(item => item.id !== action.payload.id);
        },
        showCart: (state) => {
            console.log('show cart');
            state.showCart = true;
        },
        hideCart: (state) => {
            state.showCart = false;
        }

    }
});

export const { addCartItem, deleteCartItem, showCart, hideCart } = cartSlice.actions;
export default cartSlice.reducer;
