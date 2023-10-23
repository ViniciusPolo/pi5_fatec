import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import { AuthContext } from "../contexts/AuthContext";

export default function HeaderText({ nomeClass }) {
  const [dados, setDados] = useState("");
  const [menu, setMenu] = useState("");
  const [restaurante, setRestaurante] = useState("");
  const [pedidos, setPedidos] = useState("");
  const auth = useContext(AuthContext);

  function HandleOut() {
    auth.signout();
  }

  useEffect(() => {
    selecao();
  });

  function selecao() {
    switch (nomeClass) {
      case "dados":
        setDados("conta");
        break;
      case "menu":
        setMenu("conta");
        break;
      case "pedido":
        setPedidos("conta");
        break;

      default:
        setRestaurante("conta");
        break;
    }
  }

  return (
    <>
      <header>
        <div className="logo">
          {/* <Link to="/"> */}
          <img src={Logo} alt="" />
          {/* </Link> */}
        </div>
        <nav className="navigation">
          <ul>
            <li className={dados}>
              <Link to="/dados">Meus dados</Link>
            </li>
            <li className={restaurante}>
              <Link to="/home">Restaurantes</Link>
            </li>
            <li className={menu}>
              <Link to="/menu">Menus</Link>
            </li>
            <li className={pedidos}>
              <Link to="/pedidos">Pedidos</Link>
            </li>
            <li className="login">
              <Link to="#" onClick={HandleOut}>
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
