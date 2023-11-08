import { useEffect, useState } from "react";

import "./style.css";
import HeaderText from "../../components/HeaderText";

import Summary from "./components/Summary";
import TableRow from "./components/TableRow";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const productObject = [
    {
      food_name: "Lasanha à Bolonhesa",
      restaurant_name: "Fuego Celeste Parrillada",
      price: randomNumber(30, 120),
      quantity: 1,
    },
  ];
  const fetchData = () => {
    console.log("fetch data");

    // setCart(productObject);

    console.log(cart);
  };

  const handleAddItem = () => {
    // insercao
    console.log("disparou handleAddItem");
    setCart(productObject);
  };

  const handleRemoveItem = (item) => {
    // remocao

    console.log("disparou handleRemoveItem");
    console.log({ item });
  };

  const handleUpdateItem = (item, action) => {
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

    const newData = { ...item, quantity: newQuantity };
    delete newData._id;

    console.log({ newData });
  };

  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.price * item.quantity;
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
            <button
              onClick={handleAddItem}
              style={{ padding: "5px 10px", marginBottom: 15 }}
            >
              add to cart
            </button>
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
            <Summary total={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}
