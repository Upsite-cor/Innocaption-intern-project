import {configureStore} from '@reduxjs/toolkit'
import itemSlice from '../Slices/itemSlice';
import cartSlice from '../Slices/cartSlice';

export const store = configureStore({
    reducer:{
        searchedItem: itemSlice,
        myCart: cartSlice,
    }
});

