import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../style.css";

import Fig from "../../../assets/logoLogin.svg";

import { UseApi } from "../../../services/api";

export default function UserCad() {
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [notify, setNotify] = useState("");

  const navigate = useNavigate();
  const api = UseApi();

  async function handleSubmit(e) {
    e.preventDefault();
    

    if (!first_name) {
      setNotify("Campo Nome não pode ser vazio!");
      return false;
    }
    if (!email) {
      setNotify("Campo email não pode ser vazio!");
      return false;
    }
    if (!password) {
      setNotify("Campo senha não pode ser vazio!");
      return false;
    }
    if (password != confPass) {
      setNotify("Senhas não conferem!");
      return false;
    }
    setNotify("");

    const user = await api.creatUser(first_name, email, password);
    if (!user) {
      setNotify("Algo deu errado");
      return false;
    } else {
      navigate("/loginuser");
    }
  }

  return (
    <>
      <div className="user">
        <div className="CadUser">
          <div className="formBx">
            <form onSubmit={handleSubmit}>
              <h2>Cadastre-se e mate sua fome.</h2>
              <input
                type="text"
                placeholder="Nome"
                id="cadastro-nome"
                name="fullname"
                value={first_name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                id="cadastro-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Digite a senha"
                id="cadastro-senha"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="confirme a senha"
                id="cadastro-Confsenha"
                name="passwordConfirm"
                value={confPass}
                onChange={(e) => setConfPass(e.target.value)}
              />
              <input type="submit" placeholder="Login" value="Cadastrar" />
              <p className="signup">
                Já tem conta? <Link to="/loginuser">faça Login</Link>
              </p>
              <p className="signup">
                <Link to="/">Home</Link>
              </p>
              <p>{notify}</p>
            </form>
          </div>
        </div>
        <div className="boxImgC">
          <img src={Fig} alt="" />
        </div>
      </div>
    </>
  );
}
