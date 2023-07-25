import { Table } from "@/repositories/table/interface";
import {
  TableRepository,
  TableRepositoryImpl,
} from "@/repositories/table/table.repository";

export interface GetBarUsecase {
  execute(): Promise<Table[]>;
}

export class GetBarUsecaseImpl implements GetBarUsecase {
  constructor(
    private tableRepository: TableRepository = new TableRepositoryImpl()
  ) {
    this.tableRepository = tableRepository;
  }
  async execute(): Promise<Table[]> {
    const data = await this.tableRepository.getBar();
    return data.data;
  }
}
