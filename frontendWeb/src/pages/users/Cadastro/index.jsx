import { useState } from "react";
import { Link } from "react-router-dom";

import "../style.css";

import Fig from "../../../assets/logoLogin.svg";

export default function UserCad() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  return (
    <>
      <div className="user">
        <div className="CadUser">
          <div className="formBx">
            <form onSubmit={() => {}}>
              <h2>Cadastre-se e mate sua fome.</h2>
              <input
                type="text"
                placeholder="Nome"
                id="cadastro-nome"
                name="fullname"
                value={name}
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
