import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage/loginPage";
import { MainPage } from "../pages/mainPage/mainPage";
import { RegisterPage } from "../pages/registerPage/registerPage";
import { ProtectedRoutes } from "../components/protectedRoutes/protectedRoutes";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/mainpage" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};
