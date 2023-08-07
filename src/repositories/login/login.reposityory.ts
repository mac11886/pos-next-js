import { LoginData } from "./interface";

export interface LoginRepository {
  login(username: string, password: string): Promise<LoginData>;
}

export class LoginRepositoryImpl implements LoginRepository {
  async login(username: string, password: string): Promise<LoginData> {
    const url = "http://localhost:4000/auth/login";
    const requestBody = {
      username: username,
      password: password,
    };

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the request's content type to JSON
      },
      body: JSON.stringify(requestBody), // Convert the request body to JSON string
    };

    const response = await fetch(url, requestOptions);
    const json = await response.json();
    console.log("json", json);
    return json;
  }
}
