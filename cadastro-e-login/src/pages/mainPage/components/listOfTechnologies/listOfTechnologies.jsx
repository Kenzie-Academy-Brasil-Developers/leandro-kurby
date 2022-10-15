import { useContext, useState } from "react";
import TrashIcon from "../../../../assets/Vector.svg";
import { AuthContext } from "../../../../contexts/AuthContext";
import { ApiRequest } from "../../../../services/api";
import { notifySuccess } from "../../../../toastify/toast";
import { ListContainer } from "./listOfTechnologiesStyle";
import { Modal } from "./modal/modal";

export const ListOfTechnologies = () => {
  const { user, setReload } = useContext(AuthContext);
  const [isTrue, setIsTrue] = useState(false);

  const deleteTechnologies = async (id) => {
    const token = localStorage.getItem("@kenzie-hub:token");

    try {
      ApiRequest.defaults.headers.authorization = `Bearer ${token}`;
      await ApiRequest.delete(`/users/techs/${id}`);
      setReload(Math.random());
      notifySuccess("Tecnologia removida");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal isTrue={isTrue} setIsTrue={setIsTrue} />
      <ListContainer>
        <div>
          <h4>Tecnologias</h4>

          <button onClick={() => setIsTrue(true)}>+</button>
        </div>

        <ul>
          {user.techs.map((el) => (
            <li key={el.id}>
              <h2>{el.title}</h2>

              <div>
                <p>{el.status}</p>
                <button>
                  <img
                    src={TrashIcon}
                    alt="Lixeira"
                    onClick={() => deleteTechnologies(el.id)}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </ListContainer>
    </>
  );
};
