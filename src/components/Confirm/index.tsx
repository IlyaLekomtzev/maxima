import { FC } from 'react';
import { getClasses } from 'utils';
import styles from './styles.module.scss';

interface Props {
	title: string;
	isVisible?: boolean;
	onOk?: () => void;
	onCancel?: () => void;
}

const Confirm: FC<Props> = ({
	title,
	isVisible = false,
	onOk = () => {},
	onCancel = () => {},
}) => {
	if (!isVisible) {
		return null;
	}

	return (
		<div className={styles.confirm}>
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.buttons}>
				<button
					type="button"
					className={getClasses({
						[styles.button]: true,
						[styles.fill]: true,
					})}
					onClick={onOk}
				>
					Ok
				</button>
				<button type="button" className={styles.button} onClick={onCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Confirm;
