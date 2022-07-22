import TableCell from 'components/TableCell';
import { FC } from 'react';
import { TableColumnType } from 'types/table';
import styles from './styles.module.scss';

interface Props {
	columns: TableColumnType[];
}

const TableHeader: FC<Props> = ({ columns }) => {
	return (
		<div
			className={styles.header}
			style={{
				gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
			}}
		>
			{columns.map(({ key, title }) => (
				<TableCell key={key} title>{title}</TableCell>
			))}
		</div>
	);
};

export default TableHeader;
