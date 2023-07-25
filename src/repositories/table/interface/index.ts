export interface ListTable {
  table: Table[];
}

export interface Table {
  id: number;
  status: boolean;
  size: String;
  type: String;
}

export interface TableData {
  result: boolean;
  status: Number;
  message: String;
  data: Table[];
}
