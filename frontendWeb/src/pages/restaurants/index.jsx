import { useState, useEffect } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderText from "../../components/HeaderText";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { UseApi } from "../../services/api";

import { Autoplay, Navigation } from "swiper/modules";

// banco fake de restaurantes
// import data from "../../services/data";

export default function Restaurants() {
  const [lista, setLista] = useState();
  const api = UseApi();

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const listaNova = await api.findRestbyLimit();

    setLista(listaNova.data);
    console.log(lista);
    // console.log(data);
  }

  if (!lista) {
    return <p>Loading</p>;
  }

  if (!lista) {
    return <p></p>;
  }

  return (
    <>
      <HeaderText />
      <main>
        <div className="pesq">
          <h1>Restaurantes</h1>
          <div className="letreiros">
            <p>Restaurantes em destaque</p>
          </div>
          <div className="pagescroll">
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
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
              {lista.length > 0 &&
                lista.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="boxrest">
                      <div className="image">
                        <img src={item.logo} alt="" />
                      </div>
                      <h2>{item.restaurant_name}</h2>
                      <p>{item.cousine_type}</p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
}
