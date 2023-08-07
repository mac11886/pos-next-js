import { Menu } from "@/repositories/menu/interface";
import {
  MenuRepository,
  MenuRepositoryImpl,
} from "@/repositories/menu/menu.repository";

export interface GetAllDessertMenuUsecase {
  execute(): Promise<Menu[]>;
}

export class GetAllDessertMenuUsecaseImpl implements GetAllDessertMenuUsecase {
  constructor(
    private menuRepository: MenuRepository = new MenuRepositoryImpl()
  ) {
    this.menuRepository = menuRepository;
  }
  async execute(): Promise<Menu[]> {
    const data = await this.menuRepository.getDessert();
    return data.data;
  }
}
