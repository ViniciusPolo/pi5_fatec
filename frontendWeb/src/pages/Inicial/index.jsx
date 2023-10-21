import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import "./style.css";

export default function Inicial() {
  const auth = useContext(AuthContext);

  function HandleOut () {
    auth.signout()
  }


  return (
    <>
      <div className="container">
        <h1>PAGINA INICIAL</h1>
        <button onClick={HandleOut}>Sair</button>
      </div>
    </>
  );
}
