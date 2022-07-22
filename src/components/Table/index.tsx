import { FC, useMemo } from 'react';
import TableHeader from 'components/TableHeader';
import { TableDataType, TableRowType } from 'types/table';
import styles from './styles.module.scss';
import TableRow from 'components/TableRow';
import { PaginationType } from 'types/common';
import Pagination from 'components/Pagination';

interface Props {
	id: string;
	data: TableDataType;
	onDeleteRow: (row: TableRowType) => void;
	isPagination?: boolean;
	pagination?: Omit<PaginationType, 'total'>;
	isLoading?: boolean;
}

const Table: FC<Props> = ({ id, data, onDeleteRow, isLoading, pagination }) => {
	const { name, description, structure: columns, data: rows } = data;

	const keys = useMemo(() => {
		return columns.map(({ key }) => key);
	}, [columns]);

	const currentRows = useMemo(() => {
		if (pagination) {
			return rows.slice(
				(pagination.pageIndex - 1) * pagination.limit,
				pagination.pageIndex * pagination.limit
			);
		}

		return rows;
	}, [pagination, rows]);

	return (
		<div className={styles.wrapper}>
			<h2>{name}</h2>
			<p>{description}</p>

			<div id={id} className={styles.table}>
				<TableHeader columns={columns} />

				<div className={styles.body}>
					{isLoading ? (
						<div className={styles.warning}>Loading...</div>
					) : (
						<>
							{currentRows.length === 0 && (
								<div className={styles.warning}>Empty</div>
							)}

							{currentRows.length > 0 &&
								currentRows.map((row, index) => (
									<TableRow
										key={row.key}
										row={row}
										keys={keys}
										index={index}
										onDeleteRow={onDeleteRow}
									/>
								))}
						</>
					)}
				</div>
			</div>

			{!isLoading && pagination && rows.length > 0 && (
				<Pagination
					pageIndex={pagination.pageIndex}
					limit={pagination.limit}
					total={rows.length}
					onChangePage={pagination.onChangePage}
				/>
			)}
		</div>
	);
};

export default Table;
