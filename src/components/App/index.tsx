import { useEffect } from 'react';
import Table from 'components/Table';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
	selectIsLoading,
	selectPage,
	selectTableData,
} from 'store/slices/table/selectors';
import styles from './styles.module.scss';
import { getData } from 'store/slices/table/actions';
import { columns } from 'constants/table';
import { removeItem, setPage } from 'store/slices/table';
import { TableRowType } from 'types/table';

const App = () => {
	const dispatch = useAppDispatch();
	const tableData = useAppSelector(selectTableData);
	const isLoading = useAppSelector(selectIsLoading);
	const currentPage = useAppSelector(selectPage);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	const handleChangePage = (page: number) => {
		dispatch(setPage(page));
	};

	const handleDeleteRow = (row: TableRowType) => {
		if (window.confirm('Delete row?')) {
			dispatch(removeItem(row.key));
		}
	};

	return (
		<div className={styles.app}>
			<Table
				id="table"
				data={{
					name: 'Test table',
					description: 'Click on the row to delete',
					structure: columns,
					data: tableData,
				}}
				isLoading={isLoading}
				pagination={{
					pageIndex: currentPage,
					limit: 15,
					onChangePage: handleChangePage,
				}}
				onDeleteRow={handleDeleteRow}
			/>
		</div>
	);
};

export default App;
