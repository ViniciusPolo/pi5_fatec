import { useState, useEffect } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderText from "../../components/HeaderText";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
// import { restaurantApi } from "../../services/api";

import { Autoplay, Navigation } from "swiper/modules";

// banco fake de restaurantes
import data from "../../services/menuIA";

export default function Restaurants() {
  const [lista, setLista] = useState();
  // const api = restaurantApi();

  // foto fake
  const fotography =
    "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=";
  useEffect(() => {
    recuperaDados();
  });

  async function recuperaDados() {
    // const listaNova = await api.findRestbyLimit();

    setLista(data);
    console.log(lista);
    // console.log(data);
  }

  if (!data) {
    return <p>Loading</p>;
  }

  if (!lista) {
    return <p></p>;
  }

  return (
    <>
      <HeaderText nomeClass="menu" />
      <main>
          <div className="menuheader">
            <h3>Talvez voce goste destes produtos</h3>
          </div>
          <div className="pagescroll">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              loop={true}
              // centeredSlides={true}
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
              {lista.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="boxmenu">
                    <div className="image">
                      <img src={fotography} alt="" />
                    </div>
                    <h3>{item.food_name}</h3>
                    <p>{item.restaurant_name}</p>
                    <p>{item.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </main>
    </>
  );
}
