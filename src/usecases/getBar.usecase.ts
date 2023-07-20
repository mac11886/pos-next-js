import { ListTable } from "@/repositories/table/interface";
import {
  TableRepository,
  TableRepositoryImpl,
} from "@/repositories/table/table.repository";

export interface GetBarUsecase {
  execute(): ListTable;
}

export class GetBarUsecaseImpl implements GetBarUsecase {
  constructor(
    private tableRepository: TableRepository = new TableRepositoryImpl()
  ) {
    this.tableRepository = tableRepository;
  }
  execute(): ListTable {
    const data = this.tableRepository.getBar();
    return data;
  }
}
