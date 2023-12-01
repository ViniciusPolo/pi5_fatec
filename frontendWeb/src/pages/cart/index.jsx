import { useEffect, useState } from "react";

import "./style.css";
import HeaderText from "../../components/HeaderText";
import Footer from "../../components/Footer";

import { UseApi } from "../../services/api";

import Summary from "./components/Summary";
import TableRow from "./components/TableRow";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState();

  const api = UseApi();

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const Iduser = localStorage.getItem("UserId");

    const requestOpen = await api.findRequestByOrderId(Iduser);

    setCart(requestOpen.data.orders);
  }

  const handleupdateOrder = async () => {
    // Fechamento do pedido

    cart.map((item) => setOrder(item.order_id));
    const data = {
      status_payment: 1,
      is_open: 1,
    };
    // Atualiza a ordem
    const resp = await api.updateOrder(order, data);
    console.log(order)
    console.log(resp);
    recuperaDados();
  };

  const handleRemoveItem = async (item) => {
    // remocao
    await api.deleteRequestById(item.id);
    recuperaDados();
  };

  const handleUpdateItem = async (item, action) => {
    // alteracao quantidade

    let newQuantity = item.quantity;
    if (action === "decrease") {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }
    if (action === "increase") {
      newQuantity += 1;
    }

    const total_value = item.menu_owner.price * newQuantity;
    const newData = {
      quantity: newQuantity,
      status_prepare: item.status_prepare,
      total_value: total_value,
      total_delivery: item.total_delivery,
    };
    await api.updateRequestById(item.id, newData);
    recuperaDados();
  };

  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.menu_owner.price * item.quantity;
    }

    return sum;
  };

  const cartTotal = getTotal();

  return (
    <>
      <HeaderText nomeClass="carrinho" />
      <main className="mainCart">
        <div className="page-title">
          <h1>Meu carrinho</h1>
        </div>
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 &&
                  cart.map((item) => (
                    <TableRow
                      key={item._id}
                      data={item}
                      handleRemoveItem={handleRemoveItem}
                      handleUpdateItem={handleUpdateItem}
                    />
                  ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      <b>Carrinho de compras vazio.</b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary 
            total={cartTotal} 
            handleupdateOrder={handleupdateOrder}
            order />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
