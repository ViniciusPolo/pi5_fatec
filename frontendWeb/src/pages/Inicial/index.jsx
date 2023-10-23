import "./style.css";
import HeaderText from "../../components/HeaderText";

export default function Inicial() {
  return (
    <>
      <div className="container">
        <HeaderText nomeClass="pedido" />
        <main>
          <div className="pesq">
            <h1>Pedidos</h1>
          </div>
        </main>
      </div>
    </>
  );
}