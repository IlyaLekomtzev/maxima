import { FC, useState } from 'react';
import Confirm from 'components/Confirm';
import TableCell from 'components/TableCell';
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
	const [confirmVisible, setConfirmVisible] = useState(false);
	const classes = getClasses({
		[styles.row]: true,
		[styles.fill]: index % 2 !== 0,
		[styles.selected]: confirmVisible,
	});

	return (
		<div className={styles.wrapper}>
			<div
				className={classes}
				style={{
					gridTemplateColumns: `repeat(${keys.length}, 1fr)`,
				}}
				onClick={() => setConfirmVisible(!confirmVisible)}
			>
				{keys.map((key) => (
					<TableCell key={key}>{row[key] || '-'}</TableCell>
				))}
			</div>

			<Confirm
				title='Delete row?'
				isVisible={confirmVisible}
				onOk={() => onDeleteRow(row)}
				onCancel={() => setConfirmVisible(false)}
			/>
		</div>
	);
};

export default TableRow;
