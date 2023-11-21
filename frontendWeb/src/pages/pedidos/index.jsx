import { useEffect, useState } from "react";

import "./style.css";
import HeaderText from "../../components/HeaderText";

import "./style.css";
import { UseApi } from "../../services/api";

import ListRow from "./listRow";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);

  const api = UseApi();

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const user = localStorage.getItem("UserId");

    const listOrders = await api.orderbyuser(user);
    const listMenu = await api.MenusAll();

    let newList = [];

    const list = listOrders.data.orders;
    // Montando um array de apresentação
    list.forEach((element) => {
      newList.push({
        id: element.id,
        date: element.date_of_buy,
        is_open: element.is_open,
        pedidos: element.req_owner,
        situacao: element.status_payment,
      });
    });
    // Filtrando a lista com pedidos is_open = 1
    const listaFiltrada = newList.filter((list) => {
      return list.is_open === 1;
    });

    setMenu(listMenu.data);
    setOrders(listaFiltrada);
    console.log(orders);
  }

  return (
    <>
      <HeaderText nomeClass="pedido" />
      <main>
        <div className="orders">
          <h1>Meus Pedidos</h1>
        </div>
        <div className="scroll">
          {orders.length > 0 &&
            orders.map((item) => (
              <ListRow data={item} menu={menu} key={item.id} />
            ))}
        </div>
        {orders.length === 0 && (
          <ul>
            <li colSpan="5" style={{ textAlign: "center" }}>
              <b>Voce não possui pedidos.</b>
            </li>
          </ul>
        )}
      </main>
    </>
  );
}
