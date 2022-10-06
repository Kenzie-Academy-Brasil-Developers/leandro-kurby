import { MainPageContainer } from "./mainPageStyle";
import LogoKenzie from "../../assets/Logo.svg";
import { ApiRequest } from "../../services/api";
import { useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const MainPage = () => {

    const [name, setName] = useState("");
    const [module, setModule] = useState("");

    const navigate = useNavigate();

    ApiRequest.get("/profile", 
    {headers:
         {Authorization: `Bearer ${localStorage.getItem("@token")}`}})

    .then(({data: {name, course_module}}) => {

         setName(name);
         setModule(course_module);
         
    });

    if(!localStorage.getItem("@token")) {
        return <Navigate to={"/login"} />
    }    

    return (
       <MainPageContainer>

        <div className="headerContainer">

            <figure>
                <img src={LogoKenzie} alt="Logo Kenzie Hub" />
            </figure>

            <button onClick={() => (localStorage.clear(), navigate("/login"))}>Sair</button>

        </div>

        <div className="borderContainer">

            <div className="centralizedContainer">

                <h2>Olá, {name}</h2>

                <p>{module}</p>

            </div>

        </div>

        <div className="warningMessage">
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>

       </MainPageContainer>
    );
}