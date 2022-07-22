export interface Classes {
	[className: string]: boolean;
}

export interface PaginationType {
	pageIndex: number;
	limit: number;
	total: number;
	onChangePage?: (page: number) => void;
}
