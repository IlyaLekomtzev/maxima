import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { TableRowType } from 'types/table';
import { Classes } from 'types/common';

export const getClasses = (classes: Classes): string => {
	if (Object.keys(classes).length === 0) {
		return '';
	}

	const result: string[] = [];

	for (let key in classes) {
		if (classes[key]) {
			result.push(key);
		}
	}

	return result.join(' ');
};

export const randomNumber = (min: number, max: number) => {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
};

export const getFakeRows = (): TableRowType[] =>
	Array(90)
		.fill('row')
		.map((_, index) => ({
			key: uuidv4(),
			id: index + 1,
			name: faker.name.findName(),
			age: randomNumber(20, 80),
			email: faker.internet.email(),
			companyName: faker.company.companyName(),
		}));

export const fetchFakeData = (): Promise<TableRowType[]> =>
	new Promise((resolve) =>
		setTimeout(() => {
			const rows = getFakeRows();
			resolve(rows);
		}, 500)
	);
