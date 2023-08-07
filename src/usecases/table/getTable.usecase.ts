import { Table } from "@/repositories/table/interface";
import {
  TableRepository,
  TableRepositoryImpl,
} from "@/repositories/table/table.repository";

export interface GetTableUsecase {
  execute(): Promise<Table[]>;
}

export class GetTableUsecaseImpl implements GetTableUsecase {
  constructor(
    private tableRepository: TableRepository = new TableRepositoryImpl()
  ) {
    this.tableRepository = tableRepository;
  }
  async execute(): Promise<Table[]> {
    const data = await this.tableRepository.getTable();

    console.log("dataRepo", data);
    return data.data;
  }
}
