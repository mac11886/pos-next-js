import { Menu } from "@/repositories/menu/interface";
import {
  GetAllALaCarteMenuUsecase,
  GetAllALaCarteMenuUsecaseImpl,
} from "@/usecases/menu/getALaCarte.usecase";
import {
  GetAllMenuUsecase,
  GetAllMenuUsecaseImpl,
} from "@/usecases/menu/getAll.usecase";
import {
  GetAllDessertMenuUsecase,
  GetAllDessertMenuUsecaseImpl,
} from "@/usecases/menu/getAllDessert.usecase";
import {
  GetAllDrinkMenuUsecase,
  GetAllDrinkMenuUsecaseImpl,
} from "@/usecases/menu/getAllDrink.usecase";
import { useState } from "react";

export default function MenuViewmodel() {
  const [category, setCategory] = useState<Menu[] | null>(null);
  const getAllMenu = async () => {
    try {
      let getAllMenuUsecase: GetAllMenuUsecase;
      getAllMenuUsecase = new GetAllMenuUsecaseImpl();
      const data: Promise<Menu[]> = getAllMenuUsecase.execute();
      setCategory(await data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getALaCarteMenu = async () => {
    try {
      let getAllALaCarteMenuUsecase: GetAllALaCarteMenuUsecase;
      getAllALaCarteMenuUsecase = new GetAllALaCarteMenuUsecaseImpl();
      const data: Promise<Menu[]> = getAllALaCarteMenuUsecase.execute();
      setCategory(await data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const getDessertMenu = async () => {
    try {
      let getAllDessertMenuUsecase: GetAllDessertMenuUsecase;
      getAllDessertMenuUsecase = new GetAllDessertMenuUsecaseImpl();
      const data: Promise<Menu[]> = getAllDessertMenuUsecase.execute();
      setCategory(await data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const getDrinkMenu = async () => {
    try {
      let getAllDrinkMenuUsecase: GetAllDrinkMenuUsecase;
      getAllDrinkMenuUsecase = new GetAllDrinkMenuUsecaseImpl();
      const data: Promise<Menu[]> = getAllDrinkMenuUsecase.execute();
      setCategory(await data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return {
    category,
    getAllMenu,
    getDrinkMenu,
    getALaCarteMenu,
    getDessertMenu,
  };
}
