// @ts-ignore
import LogoKenzie from "../../assets/Logo.svg";
import { MainPageContainer } from "./mainPageStyle";
import { ListOfTechnologies } from "./components/listOfTechnologies/listOfTechnologies";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (typeof user !== "boolean") {
    return (
      <MainPageContainer>
        <div className="headerContainer">
          <figure>
            <img src={LogoKenzie} alt="Logo Kenzie Hub" />
          </figure>

          <button onClick={() => (localStorage.clear(), navigate("/"))}>
            Sair
          </button>
        </div>

        <div className="borderContainer">
          <div className="centralizedContainer">
            <h2>Olá, {user.name}</h2>

            <p>{user.course_module}</p>
          </div>
        </div>

        <ListOfTechnologies />
      </MainPageContainer>
    );
  } else {
    return <></>;
  }
};
