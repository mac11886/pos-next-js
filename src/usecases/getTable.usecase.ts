import { ListTable } from "@/repositories/table/interface";
import {
  TableRepository,
  TableRepositoryImpl,
} from "@/repositories/table/table.repository";

export interface GetTableUsecase {
  execute(): ListTable;
}

export class GetTableUsecaseImpl implements GetTableUsecase {
  constructor(
    private tableRepository: TableRepository = new TableRepositoryImpl()
  ) {
    this.tableRepository = tableRepository;
  }
  execute(): ListTable {
    const data = this.tableRepository.getTable();
    console.log("dataRepo", data);
    return data;
  }
}
