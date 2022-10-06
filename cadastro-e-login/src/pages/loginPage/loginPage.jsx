import LogoKenzie from "../../assets/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContainer } from "./loginPageStyle";
import { ApiRequest } from "../../services/api";
import { notifyError } from "../../toastify/toast";
import { useNavigate, Navigate } from "react-router-dom";

const schema = yup.object().shape({

  email: yup.string().email("Não é um e-mail válido").required("Campo obrigatório"),

  password: yup.string().required("Campo obrigatório"),

});

export const LoginPage = () => {

      const navigate = useNavigate();

      const { 
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
      }); 

      const userLogin = (data) => {

        ApiRequest.post("/sessions", data)
        .then(({data: { user: { name}, token }}) => {

          localStorage.setItem("@token", token);
          localStorage.setItem("@userName", name);
          navigate(`/mainpage/${localStorage.getItem("@userName")}`);
        })
        .catch(({response: {data: {message} } }) => 

        message && notifyError("Senha ou e-mail incorreto")
      )}

      if(localStorage.getItem("@token")) {
        return <Navigate to={`/mainpage/${localStorage.getItem("@userName")}`} />
      }

  return (
    <LoginContainer>

      <div className="centralizedContainer">

       <header> 
          <img src={LogoKenzie} alt="Logo Kenzie Hub" />
       </header>

        <div>

          <h3>Login</h3>

          <form onSubmit={handleSubmit(userLogin)}>

            <label>Email</label>
            <input type="text" placeholder="Digite aqui seu email" {...register("email")} />
            <small>{errors.email?.message}</small>

            <label>Senha</label>
            <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
            <small>{errors.password?.message}</small>

            <button className="submitButton" type="submit" disabled={!isValid}>Entrar</button>

          </form>

          <span>Ainda não possui conta?</span>

          <button type="submit" className="registerButton" onClick={() => { navigate("/register") }}>Cadastre-se</button>

        </div>

      </div>

    </LoginContainer>
  );
};
