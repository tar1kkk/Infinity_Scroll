import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	items: [],
};


const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem(state, action) {
			state.items.push(action.payload);
		}
	}
})


export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;