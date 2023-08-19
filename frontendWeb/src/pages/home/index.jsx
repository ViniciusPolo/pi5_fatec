import { Link } from "react-router-dom";
import "./style.css";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Logo from "../../assets/logo.svg";
import Rest from "../../assets/rest.svg";
import Market from "../../assets/super.svg";

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
            <h2>Procurando algo pra comer?</h2>
            <p>Peça aqui. Receba em casa.</p>
            <div className="proc">
              <input type="text" name="proc" id="" className="inpText" />
              <input type="button" value="Buscar" className="inpButton" />
            </div>
            <div className="labels">
              <div className="label1">
                <h2>Restaurantes</h2>
                <div className="merc">
                  <p>
                    Opções <span></span>
                  </p>
                  <img src={Rest} alt="" />
                </div>
              </div>
              <div className="label1">
                <h2>Mercados</h2>
                <div className="merc">
                  <p>
                    Opções <span></span>
                  </p>
                  <img src={Market} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="linha-horizontal"></div>
          <div className="listarest">
            <h2>Restaurantes em destaque</h2>
          </div>
        </main>
        <footer>
          <ul>
            <li>
              <Link to="#">Fale conosco</Link>
            </li>
            <li>
              <Link to="#">Privacidade</Link>
            </li>
            <li>
              <Link to="#">Help-Desk</Link>
            </li>
          </ul>
          <div className="redes">
            <h2>Redes Sociais</h2>
            <div className="icons">
              <Link to="#">
                <FaFacebook color="#fff" />
              </Link>
              <Link to="#">
                <FaTwitter color="#fff" />
              </Link>
              <Link to="#">
                <FaInstagram color="#fff" />
              </Link>
              <Link to="#">
                <FaYoutube color="#fff" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
