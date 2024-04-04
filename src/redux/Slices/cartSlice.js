import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    myCart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCart: (state, action) => {
            state.myCart.push(action.payload)
        },
        deleteCart: (state, action) => {
            state.myCart = state.myCart.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
