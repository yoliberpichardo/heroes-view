import React from "react";
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {

  const resultUser =  localStorage.getItem('user')

  if(!resultUser) return {logged: false,user: resultUser};

  return {
    logged: !!resultUser,
    user: JSON.parse(resultUser),
  };
};

export const AuthProvider = ({ children }) => {

  const [AuthState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: "ABC", name: name };
    const actions = { type: types.login, payload: user };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(actions);
  };

  const logout = () =>{
    localStorage.removeItem('user')

    const action = {type: types.logout }

    dispatch(action)

  }

  return (
    <AuthContext.Provider
      value={{
        ...AuthState,
        login: login,
        logout: logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
