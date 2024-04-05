import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    desiredItem: undefined,
    categoryChecked: [],
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        searchItem: (state, action) => {
            state.desiredItem = action.payload;
        },
        categoryChecked:(state, action)=>{
            state.categoryChecked.push(action.payload)
        },
        removeChecked:(state,action)=>{
            state.categoryChecked = state.categoryChecked.filter(item => item !== action.payload)
        }
    }
});

export const { searchItem, categoryChecked, removeChecked } = itemSlice.actions;
export default itemSlice.reducer;
