import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderText from "../../components/HeaderText";
import Footer from "../../components/Footer";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { UseApi } from "../../services/api";

import { Autoplay, Navigation } from "swiper/modules";

export default function Menus() {
  const [food, setFood] = useState();
  const [desert, setDesert] = useState();
  const [drink, setDrink] = useState();
  const [Alcoolic, setAlcoolic] = useState();
  const [order, setOrder] = useState("");

  const navigate = useNavigate();

  const api = UseApi();
  let orderOpen = [];

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const Iduser = localStorage.getItem("UserId");
    const listAll = await api.Menu_Type_product();

    //  buscando alguma ordem aberta ou abrindo uma
    orderOpen = await api.findOrderIsOpenById(Iduser);

    if (!orderOpen) {
      console.log("Não Existem ordens abertas");
    } else {
      orderOpen.orders.map((item) => setOrder(item.id));
    }

    // Separar as listas em tipo
    const listFood = listAll.data.filter((list) => {
      return list.type_of_product == "food";
    });
    const listDesert = listAll.data.filter((list) => {
      return list.type_of_product == "desert";
    });

    const listDrink = listAll.data.filter((list) => {
      return list.type_of_product == "drink";
    });
    const listAlcool = listAll.data.filter((list) => {
      return list.type_of_product == "alcoholicDrink";
    });

    setFood(listFood);
    setDesert(listDesert);
    setDrink(listDrink);
    setAlcoolic(listAlcool);
  }

  if (!food) {
    return <p>Loading</p>;
  }

  async function handleClick(id) {
    const Iduser = localStorage.getItem("UserId");
    // Trabalhando a data
    const newData = new Date();

    const date_of_buy =
      newData.getFullYear() +
      "-" +
      (newData.getMonth() + 1) +
      "-" +
      newData.getDate();

    // Dia da semana
    let day_of_week = "";

    switch (newData.getDay()) {
      case (5, 6, 0):
        day_of_week = "weekend";
        break;
      default:
        day_of_week = "weekday";
        break;
    }

    if (!order) {
      console.log("Cria uma ordem");

      const data = {
        date_of_buy: date_of_buy,
        user_owner: parseInt(Iduser),
        status_payment: 0,
        is_open: 0,
        day_of_week: day_of_week,
      };
      const response = await api.creatOrder(data);
      const newIdOrder = response.data.orders.id;

      // *** insere uma request
      const requestOrder = {
        order_id: newIdOrder,
        food_id: id,
        quantity: 1,
        status_prepare: 1,
        total_value: 0,
        total_delivery: 0,
      };

      const newRequest = await api.createRequest(requestOrder);
      console.log(newRequest);
    } else {
      console.log("Altera uma ordem");
      const data = {
        date_of_buy: date_of_buy,
        status_payment: 0,
        is_open: 0,
        day_of_week: day_of_week,
      };
      // Atualiza a ordem
      await api.updateOrder(order, data);

      // verificar se existe esse produto nessa request
      const findRequest = await api.findrequestOrder(order, id);

      if (findRequest.orders.length === 0) {
        const newrequestorder = {
          order_id: order,
          food_id: id,
          quantity: 1,
          status_prepare: 1,
          total_value: 0,
          total_delivery: 0,
        };
        await api.createRequest(newrequestorder);
      }
    }
    recuperaDados();
    navigate("/pedidos/cart");
  }

  return (
    <>
      <HeaderText nomeClass="menu" />
      <main>
        <div className="headerMenu">
          <h2>Menu por categoria</h2>
          <p>Comidas</p>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {food.map((item, index) => (
              <SwiperSlide key={index}>
                <a onClick={() => handleClick(item.id)}>
                  <div className="menu1">
                    <img src={item.logo} alt="" />
                    <div className="menu">
                      <h2>{item.food_name}</h2>
                      <p>
                        {item.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <p>{item.rest_owner.restaurant_name}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="linha-horizontal"></div>
          <p>Sobremesas</p>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {desert.map((item, index) => (
              <SwiperSlide key={index}>
                <a onClick={() => handleClick(item.id)}>
                  <div className="menu1">
                    <img src={item.logo} alt="" />
                    <div className="menu">
                      <h2>{item.food_name}</h2>
                      <p>
                        {item.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <p>{item.rest_owner.restaurant_name}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="linha-horizontal"></div>
          <p>Bebidas alcoolicas</p>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {Alcoolic.map((item, index) => (
              <SwiperSlide key={index}>
                <a onClick={() => handleClick(item.id)}>
                  <div className="menu1" onClick={() => handleClick(item.id)}>
                    <img src={item.logo} alt="" />
                    <div className="menu">
                      <h2>{item.food_name}</h2>
                      <p>
                        {item.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <p>{item.rest_owner.restaurant_name}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="linha-horizontal"></div>
          <p>Sucos e refrigerantes</p>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {drink.map((item, index) => (
              <SwiperSlide key={index}>
                <a onClick={() => handleClick(item.id)}>
                  <div className="menu1">
                    <img src={item.logo} alt="" />
                    <div className="menu">
                      <h2>{item.food_name}</h2>
                      <p>
                        {item.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <p>{item.rest_owner.restaurant_name}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="linha-horizontal"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
