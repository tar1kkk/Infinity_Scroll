import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchItems = createAsyncThunk('', async (params) => {
	const { limit, setLimit, setFetching } = params;
	try {
		const { data } = await axios.get(`http://localhost:3000/items?_limit=${limit}`);
		return data;
	} catch (e) {
		console.log(e);
	}
	finally {
		setFetching(false);
		setLimit(prevState => prevState + 5)
	}
}
);

const initialState = {
	items: [],
	status: '',
};


const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		createItem(state, action) {
			state.items.push(action.payload);
		},
		setItems(state, action) {
			state.items = [...state.items, ...action.payload];
		}
	},
	extraReducers: {
		[fetchItems.pending]: (state) => {
			state.status = 'loading';
			state.items = [];
		},
		[fetchItems.fulfilled]: (state, action) => {
			state.items = [...state.items, ...action.payload];
			// state.items.push(...state.items, ...action.payload);
			state.status = 'success';
		},
		[fetchItems.rejected]: (state) => {
			state.status = 'error';
			state.items = [];
		}
	}
}
)


export const { addItem, createItem, setItems } = itemSlice.actions;

export default itemSlice.reducer;