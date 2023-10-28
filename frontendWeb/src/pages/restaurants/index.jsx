import { useEffect } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderText from "../../components/HeaderText";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { restaurantApi } from "../../services/api";

import { Autoplay, Navigation } from "swiper/modules";

export default function Restaurants() {
  const api = restaurantApi();

  let lista = [];

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    lista = await api.findRestbyLimit();

    console.log(lista);
  }

  function listaDestaque() {
    lista.map(
      (item, index) =>
        ` 
      <SwiperSlide key=${index}>
      <div className="teste1">
      <img src=${item.logo} alt="" />
      </div>
      <div className="rest">
      <h2>${item.restaurant_name}</h2>
      <p>${item.cousine_type}</p>
      </div>
      </SwiperSlide>
      `
    );
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
              {listaDestaque}

              <SwiperSlide>
                <div className="teste1">
                  <img
                    src="https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/201910292243_94aaf166-84cc-4ebf-a35d-d223be34d01f.png?imwidth=64"
                    alt=""
                  />
                  <div className="rest">
                    <h2>Açougue Vegano</h2>
                    <p>Lanche</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teste1">Slide 2</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teste1">Slide 3</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teste1">Slide 4</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="teste1">Slide 5</div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
}
