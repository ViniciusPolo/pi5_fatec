import { Link } from "react-router-dom";
import "./style.css";

import Logo from "../../assets/logo.svg";

export default function Home() {
  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="#">Entregador</Link>
              </li>
              <li>
                <Link to="#">Restaurante e Mercado</Link>
              </li>
              <li>
                <Link to="#">quem somos</Link>
              </li>
              <li className="conta">
                <Link to="#">criar conta</Link>
              </li>
              <li className="login">
                <Link to="#">Entrar</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="pesq">
            <h1>Aqui tem um treim procê cumê</h1>
            <p>É só procurar uai. Que nois entrega.</p>
            <div className="proc">
              <input type="text" name="proc" id="" className="inpText" />
              <input type="button" value="Buscar" className="inpButton" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
