import { Table } from "@/repositories/table/interface";
import {
  GetBarPaymentUsecase,
  GetBarPaymentUsecaseImpl,
} from "@/usecases/getBarPayment.usecase";
import {
  GetTablePaymentUsecase,
  GetTablePaymentUsecaseImpl,
} from "@/usecases/getTablePayment.usecase";
import { useState } from "react";

export default function PaymentViewmodel() {
  const [table, setTable] = useState<Table[] | null>(null);
  const [bar, setBar] = useState<Table[] | null>(null);

  const getTablePaymentData = async () => {
    try {
      let getTablePaymentUsecase: GetTablePaymentUsecase;
      getTablePaymentUsecase = new GetTablePaymentUsecaseImpl();
      const data: Promise<Table[]> = getTablePaymentUsecase.execute();
      setTable(await data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const getBarPaymentData = async () => {
    try {
      let getBarPaymentUsecase: GetBarPaymentUsecase;
      getBarPaymentUsecase = new GetBarPaymentUsecaseImpl();
      const data: Promise<Table[]> = getBarPaymentUsecase.execute();
      setBar(await data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return { table, getTablePaymentData, bar, getBarPaymentData };
}
