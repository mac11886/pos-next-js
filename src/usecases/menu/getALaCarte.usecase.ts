import { Menu } from "@/repositories/menu/interface";
import {
  MenuRepository,
  MenuRepositoryImpl,
} from "@/repositories/menu/menu.repository";

export interface GetAllALaCarteMenuUsecase {
  execute(): Promise<Menu[]>;
}

export class GetAllALaCarteMenuUsecaseImpl
  implements GetAllALaCarteMenuUsecase
{
  constructor(
    private menuRepository: MenuRepository = new MenuRepositoryImpl()
  ) {
    this.menuRepository = menuRepository;
  }
  async execute(): Promise<Menu[]> {
    const data = await this.menuRepository.getALaCarte();
    return data.data;
  }
}
