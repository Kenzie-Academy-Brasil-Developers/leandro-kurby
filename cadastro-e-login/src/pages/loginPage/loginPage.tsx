// @ts-ignore
import LogoKenzie from "../../assets/Logo.svg";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContainer } from "./loginPageStyle";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

interface iFormLogin {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Não é um e-mail válido")
    .required("Campo obrigatório"),

  password: yup.string().required("Campo obrigatório"),
});

export const LoginPage = () => {
  const { userLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <small>{errors.email?.message}</small>

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <small>{errors.password?.message}</small>

            <button className="submitButton" type="submit" disabled={!isValid}>
              Entrar
            </button>
          </form>

          <span>Ainda não possui conta?</span>

          <Link className="registerButton" to={"/register"}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </LoginContainer>
  );
};