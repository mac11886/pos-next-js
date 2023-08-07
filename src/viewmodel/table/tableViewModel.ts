import { Table } from "@/repositories/table/interface";
import {
  GetBarUsecase,
  GetBarUsecaseImpl,
} from "@/usecases/table/getBar.usecase";
import {
  GetTableUsecase,
  GetTableUsecaseImpl,
} from "@/usecases/table/getTable.usecase";
import { useState } from "react";

export default function TableViewmodel() {
  const [table, setTable] = useState<Table[] | null>(null);
  const [bar, setBar] = useState<Table[] | null>(null);

  const getTableData = async () => {
    try {
      let getTableUsecase: GetTableUsecase;
      getTableUsecase = new GetTableUsecaseImpl();
      const data: Promise<Table[]> = getTableUsecase.execute();
      setTable(await data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const getBarData = async () => {
    try {
      let getBarUsecase: GetBarUsecase;
      getBarUsecase = new GetBarUsecaseImpl();
      const data: Promise<Table[]> = getBarUsecase.execute();
      setBar(await data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return { table, getTableData, bar, getBarData };
}
