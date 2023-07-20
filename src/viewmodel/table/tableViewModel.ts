import { ListTable } from "@/repositories/table/interface";
import { GetBarUsecase, GetBarUsecaseImpl } from "@/usecases/getBar.usecase";
import {
  GetTableUsecase,
  GetTableUsecaseImpl,
} from "@/usecases/getTable.usecase";
import { useState } from "react";

export default function TableViewmodel() {
  const [table, setTable] = useState<ListTable | null>(null);
  const [bar, setBar] = useState<ListTable | null>(null);

  const getTableData = () => {
    try {
      let getTableUsecase: GetTableUsecase;
      getTableUsecase = new GetTableUsecaseImpl();
      const data: ListTable = getTableUsecase.execute();
      setTable(data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const getBarData = () => {
    try {
      let getBarUsecase: GetBarUsecase;
      getBarUsecase = new GetBarUsecaseImpl();
      const data: ListTable = getBarUsecase.execute();
      setBar(data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return { table, getTableData, bar, getBarData };
}
