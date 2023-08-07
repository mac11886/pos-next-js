import {
  LoginRepository,
  LoginRepositoryImpl,
} from "@/repositories/login/login.reposityory";

export interface LoginUsecase {
  execute(username: string, password: string): Promise<string>;
}

export class LoginUsecaseImpl implements LoginUsecase {
  constructor(
    private loginRepository: LoginRepository = new LoginRepositoryImpl()
  ) {
    this.loginRepository = loginRepository;
  }
  async execute(username: string, password: string): Promise<string> {
    const loginData = await this.loginRepository.login(username, password);
    return loginData.access_token;
  }
}
