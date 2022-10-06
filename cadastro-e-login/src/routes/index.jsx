import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage/loginPage";
import { MainPage } from "../pages/mainPage/mainPage";
import { RegisterPage } from "../pages/registerPage/registerPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const RoutesMain = () => {

  return (
    <>
       <Routes>
        <Route path="/" element={ <LoginPage />} /> 
        <Route path="/login" element={ <LoginPage />} /> 
        <Route path="/register" element={ <RegisterPage />} />
        <Route path="/mainpage/:name" element={ <MainPage /> } />
      </Routes>
      <ToastContainer/>
    </>
   
  )
};
