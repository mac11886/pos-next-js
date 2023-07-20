import { ListTable, Table } from "./interface";

export interface TableRepository {
  getTable(): ListTable;
  getBar(): ListTable;
}
export class TableRepositoryImpl implements TableRepository {
  getBar(): ListTable {
    const list: Table[] = [
      { id: 1, status: true, size: "1-2 Person" },
      { id: 2, status: false, size: "1-2 Person" },
      { id: 4, status: false, size: "1-2 Person" },
      { id: 5, status: true, size: "1-2 Person" },
      { id: 6, status: true, size: "1-2 Person" },
      { id: 7, status: false, size: "1-2 Person" },
    ];
    const listBar: ListTable = {
      table: list,
    };
    return listBar;
  }

  getTable(): ListTable {
    const list: Table[] = [
      { id: 1, status: true, size: "3-5 Person" },
      { id: 2, status: false, size: "3-5 Person" },
      { id: 4, status: false, size: "3-5 Person" },
      { id: 5, status: true, size: "3-5 Person" },
      { id: 6, status: true, size: "3-5 Person" },
      { id: 7, status: false, size: "3-5 Person" },
      { id: 8, status: true, size: "3-5 Person" },
      { id: 9, status: false, size: "3-5 Person" },
      { id: 10, status: false, size: "3-5 Person" },
      { id: 11, status: true, size: "3-5 Person" },
      { id: 12, status: true, size: "3-5 Person" },
      { id: 13, status: true, size: "3-5 Person" },
      { id: 14, status: true, size: "3-5 Person" },
      { id: 15, status: true, size: "3-5 Person" },
      { id: 16, status: true, size: "3-5 Person" },
    ];
    const listTable: ListTable = {
      table: list,
    };
    return listTable;
  }
}
