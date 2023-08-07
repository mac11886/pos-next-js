import {
  LoginUsecase,
  LoginUsecaseImpl,
} from "@/usecases/auth/login-usecase/login.usecase";
import { _setStorage } from "@/util/local-storage";
import { useRouter } from "next/router";

export default function LoginViewmodel() {
  const route = useRouter();

  const login = async (username: string, password: string) => {
    try {
      let loginUsecase: LoginUsecase;
      loginUsecase = new LoginUsecaseImpl();
      const data = await loginUsecase.execute(username, password);
      _setStorage("token", data);
      route.push("/");
    } catch {
      throw new Error("can't login");
    }
  };
  return {
    login,
  };
}
