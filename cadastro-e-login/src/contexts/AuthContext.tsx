import React, { createContext, useState, useEffect } from "react";
import { ApiRequest } from "../services/api";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../toastify/toast";

interface iContextProps {
  children: React.ReactNode;
}

interface iContext {
  userLogin: (data: iUserLogin) => Promise<void>;
  registerUser: (data: iUserRegister) => Promise<void>;
  user: iLoadUser | boolean;
  loadingPage: boolean;
  setReload: React.Dispatch<React.SetStateAction<number>>;
  isTrue: boolean;
  setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iApiResponse {
  data: iLoadUser;
}

interface iLoadUser {
  name: string;
  course_module: string;
  techs: iTech[];
}

interface iTech {
  title: string;
  status: string;
  id: string;
}

interface iUserRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface iUserLogin {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as iContext);

export const AuthProvider = ({ children }: iContextProps) => {
  const [reload, setReload] = useState<number>(0);
  const [user, setUser] = useState<boolean | iLoadUser>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(true);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@kenzie-hub:token");

      if (token) {
        try {
          ApiRequest.defaults.headers.authorization = `Bearer ${token}`;
          const response: iApiResponse = await ApiRequest.get("/profile");
          setUser(response.data);
          navigate("/mainpage");
        } catch (error) {
          console.error(error);
        }
      }
      setLoadingPage(false);
    };
    loadUser();
  }, [reload]);

  const userLogin = async (data: iUserLogin) => {
    try {
      const response = await ApiRequest.post("/sessions", data);
      const { token } = response.data;
      localStorage.setItem("@kenzie-hub:token", token);
      setReload(Math.random());
      setUser(true);
    } catch (error) {
      notifyError("Senha ou e-mail incorreto");
    }
  };

  const registerUser = async (data: iUserRegister) => {
    try {
      await ApiRequest.post("/users", data);
      notifySuccess("Conta criada com sucesso!");
    } catch (error) {
      notifyError("Ops! Algo deu errado, este endereço de e-mail já existe");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        registerUser,
        user,
        loadingPage,
        setReload,
        isTrue,
        setIsTrue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
