import { ApiRequest } from "../../services/api";
import LogoKenzie from "../../assets/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterContainer } from "./registerPageStyle";
import { notifyError, notifySuccess } from "../../toastify/toast";
import { useNavigate, Navigate } from "react-router-dom";

const schema = yup.object({

    email: yup.string().email("Deve ser um e-mail válido").required("Campo obrigatório"),

    password: yup
    .string()
    .min(8, "A senha deve ter no minímo 8 caractéres")
    .required("Campo obrigatório")
    .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*-])/,
     "A senha deve conter pelo menos 1 número e 1 um caractér especial"),

    confirmPassword: yup
    .string()
    .oneOf(
        [yup.ref("password")],
        "As senhas não coincidem"
    ),

    name: yup.string().required("Campo obrigatório"),
    
    bio: yup.string().required("Campo obrigatório"),

    contact: yup.string().required("Campo obrigatório"),

});

export const RegisterPage = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({  
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const registerUser = (data) => {

        ApiRequest.post("/users", data)
        .then(res => 
            res && notifySuccess("Conta criada com sucesso!"))
        .catch(({response: {data: {message}}}) => 
            message && notifyError("Ops! Algo deu errado, este endereço de e-mail já existe")
        )
    }

    if(localStorage.getItem("@token")) {
        return <Navigate to={`/mainpage/${localStorage.getItem("@userName")}`} />
    }

    return (
        <RegisterContainer>

           <div className="centralizedContainer">

              <header>

                <img src={LogoKenzie} alt="Logo Kenzie Hub" />
                <button onClick={() => navigate("/login")}>Voltar</button>

              </header>

                <div>

                    <h3>Crie sua conta</h3>

                    <p>Rápido e grátis, vamos nessa</p>

                    <form onSubmit={handleSubmit(registerUser)}>

                        <label>Nome</label>
                        <input type="text" placeholder="Digite aqui seu nome" {...register("name")} />
                        <small>{errors.name?.message}</small>

                        <label>Email</label>
                        <input type="email" placeholder="Digite aqui seu e-mail" {...register("email")}/>
                        <small>{errors.email?.message}</small>

                        <label>Senha</label>
                        <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                        <small>{errors.password?.message}</small>

                        <label>Confirmar Senha</label>
                        <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
                        <small>{errors.confirmPassword?.message}</small>

                        <label>Bio</label>
                        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
                        <small>{errors.bio?.message}</small>

                        <label>Contato</label>
                        <input type="text" placeholder="Opção de contato" {...register("contact")} />
                        <small>{errors.contact?.message}</small>

                        <label>Selecionar Módulo</label>
                        <select {...register("course_module")}>
                            <option value="Primeiro Módulo">Primeiro Módulo</option>
                            <option value="Segundo Módulo">Segundo Módulo</option>
                            <option value="Terceiro Módulo">Terceiro Módulo</option>
                            <option value="Quarto Módulo">Quarto Módulo</option>
                        </select>

                        <button type="submit" className="submitButton" disabled={!isValid}>Cadastrar</button>

                    </form>  

                </div>

            </div>
        </RegisterContainer>
    );
};