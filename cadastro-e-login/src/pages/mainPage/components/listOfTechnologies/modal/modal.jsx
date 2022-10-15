import { ModalAdd } from "./modalStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiRequest } from "../../../../../services/api";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { useContext } from "react";
import { notifyError } from "../../../../../toastify/toast";

const schema = yup.object({
  title: yup.string().required("Campo obrigatório"),
});

export const Modal = ({ isTrue, setIsTrue }) => {
  const { setReload } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const createNewTech = async (data) => {
    const token = localStorage.getItem("@kenzie-hub:token");

    try {
      ApiRequest.defaults.headers.authorization = `Bearer ${token}`;
      await ApiRequest.post("/users/techs", data);
      setIsTrue(false);
      setReload(Math.random());
    } catch (error) {
      notifyError("A tecnologia já está cadastrada");
      console.error(error);
    }
  };

  return (
    isTrue && (
      <ModalAdd>
        <div>
          <div>
            <h2>Cadastrar Tecnologia</h2>
            <button onClick={() => setIsTrue(false)}>X</button>
          </div>

          <form onSubmit={handleSubmit(createNewTech)}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite aqui a teclonogia"
              {...register("title")}
            />
            <span>{errors.title?.message}</span>

            <label>Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <span>{errors.status?.message}</span>

            <button className="registerTechnologies" disabled={!isValid}>
              Cadastrar Tecnologia
            </button>
          </form>
        </div>
      </ModalAdd>
    )
  );
};
