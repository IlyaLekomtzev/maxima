import { FC, ReactNode } from 'react';
import { getClasses } from 'utils';
import styles from './styles.module.scss';

interface Props {
    children: ReactNode;
    title?: boolean;
}

const TableCell: FC<Props> = ({ children, title }) => {
    const classes = getClasses({
		[styles.cell]: true,
		[styles.title]: !!title,
	});

	return <div className={classes}>{children}</div>;
};

export default TableCell;
