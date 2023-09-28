import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../style.css";

import Fig from "../../../assets/logoLogin.svg";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setNotify("");
    navigate("/home");
  }

  return (
    <>
      <div className="user">
        <div className="boxImg">
          <img src={Fig} alt="" />
        </div>
        <div className="loginUser">
          <div className="formBx">
            <form onSubmit={handleSubmit}>
              <h2>Mais alguns passos para matar sua fome!</h2>
              <input
                type="text"
                placeholder="email"
                id="login-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                id="login-password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                placeholder="Login"
                value="Login"
                href="/home"
              ></input>
              <h3>{notify}</h3>
              <p className="signup">
                Não tem uma conta? <Link to="/caduser">Cadastre-se</Link>
              </p>
              <p className="signup">
                <Link to="/">Home</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}