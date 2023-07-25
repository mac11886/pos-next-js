import { Table } from "@/repositories/table/interface";
import {
  TableRepository,
  TableRepositoryImpl,
} from "@/repositories/table/table.repository";

export interface GetTablePaymentUsecase {
  execute(): Promise<Table[]>;
}

export class GetTablePaymentUsecaseImpl implements GetTablePaymentUsecase {
  constructor(
    private tableRepository: TableRepository = new TableRepositoryImpl()
  ) {
    this.tableRepository = tableRepository;
  }
  async execute(): Promise<Table[]> {
    const data = await this.tableRepository.getTablePayment();
    const listTable = [];
    for (var table of data.data) {
      if (table.status) {
        listTable.push(table);
      }
    }
    return listTable;
  }
}
