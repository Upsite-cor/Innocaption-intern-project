import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    desiredItem: '',
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        searchItem: (state, action) => {
            state.desiredItem = action.payload;
        }
    }
});

export const { searchItem } = itemSlice.actions;
export default itemSlice.reducer;
