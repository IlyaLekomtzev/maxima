export interface TableColumnType {
    title: string;
    key: string;
}

export interface TableRowType {
    key: string;
    [property: string]: string | number;
}

export interface TableDataType {
    name: string;
    description: string;
    structure: TableColumnType[];
    data: TableRowType[];
}
