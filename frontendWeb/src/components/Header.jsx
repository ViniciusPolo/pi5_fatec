import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

import "./style.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/delivery">Entregador</Link>
            </li>
            <li>
              <Link to="/restmerc">Restaurante e Mercado</Link>
            </li>
            <li>
              <Link to="/about">quem somos</Link>
            </li>
            <li className="conta">
              <Link to="/caduser">criar conta</Link>
            </li>
            <li className="login">
              <Link to="/loginuser">Entrar</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
