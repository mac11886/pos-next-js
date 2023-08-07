export interface MenuData {
  result: boolean;
  status: Number;
  message: String;
  data: Menu[];
}

export interface Menu {
  id: number;
  name: string;
  price: number;
  category: String;
  img_url: String;
}
