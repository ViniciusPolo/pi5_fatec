import { useEffect, useState } from "react";

const TableRow = ({ data, menu }) => {
  const [orders, setOrders] = useState([]);
  const [dataCompra, setDataCompra] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    let request = [];

    // const totalPedido = data.map((element, index) => {
    //   let total = 0;
    //   total += element.pedidos[index].total_value;
    // });

    const list = data.pedidos;

    // Montando um array de apresentação
    list.forEach((element) => {
      request.push({
        id: element.id,
        status_prepare: element.status_prepare,
        food_id: element.food_id,
        item_food: menu.filter((list) => {
          if (list.id === element.food_id) {
            return list;
          }
        }),
        quantity: element.quantity,
        total_value: element.total_value,
      });
    });

    setOrders(request);
    let sumPed = 0;
    // Totalizando a compra
    // const totalpedido = orders.map(
    //   (item) => (total = total + item.total_value)
    // );
    for (let i = 0; i < orders.length; i++) {
      sumPed += orders[i].total_value;
    }

    console.log(orders);
    // const getTotal = () => {
    //   let sum = 0;

    //   for (let item of cart) {
    //     sum += item.menu_owner.price * item.quantity;
    //   }

    //   return sum;
    // };

    // const cartTotal = getTotal();

    setTotalPedido(
      sumPed.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    );
    console.log(totalPedido);
    // personalizando a data
    const newData = new Date(data.date);
    const dtCompra =
      newData.getDate() +
      "/" +
      (newData.getMonth() + 1) +
      "/" +
      newData.getFullYear();

    setDataCompra(dtCompra);
  }
  return (
    <>
      <div className="pedidos">
        <h3>Pedido #{data.id}</h3>
        <p>data da compra: {dataCompra}</p>
        <p>Total R$ {totalPedido}</p>
      </div>
      {orders.length > 0 &&
        orders.map((item) => (
          <ul key={item.id}>
            {
              <div className="listpedido">
                <li>
                  <img src={item.item_food[0].logo} alt="" />
                  <div className="listpedidos1">
                    <h3>{item.item_food[0].food_name}</h3>
                    <p>Quantidade: {item.quantity}</p>
                    <p>
                      Preço:{" "}
                      {item.item_food[0].price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="listpedidos1">
                    <p>
                      Total do item:{" "}
                      {item.total_value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </li>
              </div>
            }
          </ul>
        ))}
    </>
  );
};

export default TableRow;
