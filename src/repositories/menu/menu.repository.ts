import { _getStorage } from "@/util/local-storage";
import { MenuData } from "./interface";

export interface MenuRepository {
  getAll(): Promise<MenuData>;
  getALaCarte(): Promise<MenuData>;
  getDrink(): Promise<MenuData>;
  getDessert(): Promise<MenuData>;
}

export class MenuRepositoryImpl implements MenuRepository {
  async getALaCarte(): Promise<MenuData> {
    const getToken = await _getStorage("token");
    if (!getToken) {
      throw new Error("No token found");
    }
    console.log("getToken: " + getToken);
    const headers = {
      Authorization: `Bearer ${getToken}`,
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:4000/api/menu/a-la-carte-menu",
      { headers: headers }
    );
    if (!response.ok) {
      throw new Error("failed to get all menu");
    }
    return response.json();
  }
  async getDrink(): Promise<MenuData> {
    const getToken = await _getStorage("token");
    if (!getToken) {
      throw new Error("No token found");
    }
    console.log("getToken: " + getToken);
    const headers = {
      Authorization: `Bearer ${getToken}`,
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:4000/api/menu/drink-menu", {
      headers: headers,
    });
    if (!response.ok) {
      throw new Error("failed to get all menu");
    }
    return response.json();
  }
  async getDessert(): Promise<MenuData> {
    const getToken = await _getStorage("token");
    if (!getToken) {
      throw new Error("No token found");
    }
    console.log("getToken: " + getToken);
    const headers = {
      Authorization: `Bearer ${getToken}`,
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:4000/api/menu/dessert-menu",
      { headers: headers }
    );
    if (!response.ok) {
      throw new Error("failed to get all menu");
    }
    return response.json();
  }
  async getAll(): Promise<MenuData> {
    const getToken = await _getStorage("token");
    if (!getToken) {
      throw new Error("No token found");
    }
    console.log("getToken: " + getToken);
    const headers = {
      Authorization: `Bearer ${getToken}`,
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:4000/api/menu/all", {
      headers: headers,
    });
    if (!response.ok) {
      throw new Error("failed to get all menu");
    }
    return response.json();
  }
}
