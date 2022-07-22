import TableCell from 'components/TableCell';
import { FC } from 'react';
import { TableRowType } from 'types/table';
import { getClasses } from 'utils';
import styles from './styles.module.scss';

interface Props {
	row: TableRowType;
	keys: string[];
	index: number;
	onDeleteRow: (row: TableRowType) => void;
}

const TableRow: FC<Props> = ({ row, keys, index, onDeleteRow }) => {
	const classes = getClasses({
		[styles.row]: true,
		[styles.fill]: index % 2 !== 0,
	});

	return (
		<div
			className={classes}
			style={{
				gridTemplateColumns: `repeat(${keys.length}, 1fr)`,
			}}
			onClick={() => onDeleteRow(row)}
		>
			{keys.map((key) => (
				<TableCell key={key}>{row[key] || '-'}</TableCell>
			))}
		</div>
	);
};

export default TableRow;
