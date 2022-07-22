import { FC, useEffect, useMemo } from 'react';
import { PaginationType } from 'types/common';
import { getClasses } from 'utils';
import styles from './styles.module.scss';

const Pagination: FC<PaginationType> = ({
	pageIndex,
	limit,
	total,
	onChangePage = () => {},
}) => {
	const totalPages = useMemo(() => Math.ceil(total / limit), [limit, total]);

	useEffect(() => {
		if (pageIndex > totalPages) {
			onChangePage(totalPages);
		}
	}, [onChangePage, pageIndex, totalPages]);

	if (totalPages < 2) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button}
				onClick={() => onChangePage(pageIndex - 1)}
				disabled={pageIndex <= 1}
			>
				Prev
			</button>

			{Array(totalPages)
				.fill('page')
				.map((_, index) => (
					<button
						key={index}
						className={getClasses({
							[styles.button]: true,
							[styles.selected]: pageIndex === index + 1,
						})}
						onClick={() => onChangePage(index + 1)}
						disabled={pageIndex === index + 1}
					>
						{index + 1}
					</button>
				))}

			<button
				className={styles.button}
				onClick={() => onChangePage(pageIndex + 1)}
				disabled={pageIndex >= totalPages}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
