import { TableData } from "./interface";

export interface TableRepository {
  getTable(): Promise<TableData>;
  getBar(): Promise<TableData>;
  getTablePayment(): Promise<TableData>;
  getBarPayment(): Promise<TableData>;
}
export class TableRepositoryImpl implements TableRepository {
  async getTablePayment(): Promise<TableData> {
    const response = await fetch("http://localhost:4000/api/payment/table");
    if (!response.ok) {
      throw new Error("failed to get table payment");
    }
    return response.json();
  }

  async getBarPayment(): Promise<TableData> {
    const response = await fetch("http://localhost:4000/api/payment/bar");
    if (!response.ok) {
      throw new Error("failed to get bar payment");
    }
    return response.json();
  }
  async getBar(): Promise<TableData> {
    const response = await fetch("http://localhost:4000/api/table/bar");
    if (!response.ok) {
      throw new Error("failed to get bar");
    }
    return response.json();
  }

  async getTable(): Promise<TableData> {
    const response = await fetch("http://localhost:4000/api/table");
    if (!response.ok) {
      throw new Error("failed to get table");
    }
    return response.json();
  }
}
