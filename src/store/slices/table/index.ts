import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TableRowType } from 'types/table';

interface TableDataState {
	data: TableRowType[];
	isLoading: boolean;
	currentPage: number;
}

const initialState: TableDataState = {
	data: [],
	isLoading: false,
	currentPage: 1,
};

export const tableDataSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<TableRowType[]>) => {
			state.data = action.payload;
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.data = [...state.data].filter(
				(item) => item.key !== action.payload
			);
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
	},
});

export const { removeItem, setData, setLoading, setPage } =
	tableDataSlice.actions;

export default tableDataSlice.reducer;
