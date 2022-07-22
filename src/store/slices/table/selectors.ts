import { RootState } from 'store/config';

export const selectTableData = (state: RootState) => state.table.data;
export const selectIsLoading = (state: RootState) => state.table.isLoading;
export const selectPage = (state: RootState) => state.table.currentPage;
