
export interface IFormLogin {
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
  token: string;
  isError: boolean;
  isLogged: boolean;
  isLogout: boolean;
}
