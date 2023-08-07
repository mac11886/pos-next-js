import { Menu } from "@/repositories/menu/interface";
import {
  MenuRepository,
  MenuRepositoryImpl,
} from "@/repositories/menu/menu.repository";

export interface GetAllMenuUsecase {
  execute(): Promise<Menu[]>;
}

export class GetAllMenuUsecaseImpl implements GetAllMenuUsecase {
  constructor(
    private menuRepository: MenuRepository = new MenuRepositoryImpl()
  ) {
    this.menuRepository = menuRepository;
  }
  async execute(): Promise<Menu[]> {
    const data = await this.menuRepository.getAll();
    return data.data;
  }
}
