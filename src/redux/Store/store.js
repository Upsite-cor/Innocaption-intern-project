import {configureStore} from '@reduxjs/toolkit'
import itemSlice from '../Slices/itemSlice';

export const store = configureStore({
    reducer:{
        searchedItem: itemSlice,
    }
});

