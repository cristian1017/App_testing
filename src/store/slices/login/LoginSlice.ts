import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../../../models/login";
import { RootState } from "../../store";

const initialState: ILogin = {
  email: "",
  password: "",
  token: "",
  isError: false,
  isLogged: false,
  isLogout: false,
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleChange: (state: ILogin, action: PayloadAction<ILogin>) => {
      localStorage.setItem("login", JSON.stringify(action.payload))
      return {
        ...state,
        ...action.payload,
        isError: false,
        isLogout:false,
        isLogged: true,
      };
    },
    setOnError: (state: ILogin, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setIsLogout: (state: ILogin, action: PayloadAction<boolean>) => {
      state.isLogged = false;
      state.isLogout = action.payload;
    },
  },
});

export const { handleChange, setOnError, setIsLogout } = LoginSlice.actions;

export const isError = (state: RootState) => state.login.isError;
export const isLogged = (state: RootState) => state.login.isLogged;
export const isLogout = (state: RootState) => state.login.isLogout;

