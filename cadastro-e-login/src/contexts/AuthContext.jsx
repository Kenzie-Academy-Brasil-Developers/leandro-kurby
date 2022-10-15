import { createContext, useState, useEffect } from "react";
import { ApiRequest } from "../services/api";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../toastify/toast";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [reload, setReload] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingPage, setLoadingPage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@kenzie-hub:token");

      if (token) {
        try {
          ApiRequest.defaults.headers.authorization = `Bearer ${token}`;
          const response = await ApiRequest.get("/profile");
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

  const userLogin = async (data) => {
    try {
      const response = await ApiRequest.post("/sessions", data);
      const { token } = response.data;
      localStorage.setItem("@kenzie-hub:token", token);
      setReload(true);
      setUser(true);
    } catch (error) {
      notifyError("Senha ou e-mail incorreto");
    }
  };

  return (
    <AuthContext.Provider value={{ userLogin, user, loadingPage, setReload }}>
      {children}
    </AuthContext.Provider>
  );
};
