import { Menu } from "@/repositories/menu/interface";
import {
  MenuRepository,
  MenuRepositoryImpl,
} from "@/repositories/menu/menu.repository";

export interface GetAllDrinkMenuUsecase {
  execute(): Promise<Menu[]>;
}

export class GetAllDrinkMenuUsecaseImpl implements GetAllDrinkMenuUsecase {
  constructor(
    private menuRepository: MenuRepository = new MenuRepositoryImpl()
  ) {
    this.menuRepository = menuRepository;
  }
  async execute(): Promise<Menu[]> {
    const data = await this.menuRepository.getDrink();
    return data.data;
  }
}
