import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

import { UseApi } from "../../services/api";

import { FaAngleRight } from "react-icons/fa";

import Rest from "../../assets/rest.svg";
import Market from "../../assets/super.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const [lista, setLista] = useState([]);
  const [lanch, setLanch] = useState([]);

  const api = UseApi();

  useEffect(() => {
    recuperaDados();
  }, []);

  async function recuperaDados() {
    const rest = await api.restaurantsAll();
    const menu = await api.MenusLimited();

    setLista(rest.data);
    setLanch(menu.data);
  }

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <div className="pesq">
            <h2>Procurando algo pra comer?</h2>
            <p>Peça aqui. Receba em casa.</p>
            <div className="proc">
              <input type="text" name="proc" id="" className="inpText" />
              <input type="button" value="Buscar" className="inpButton" />
            </div>
            <div className="labels">
              <Link to="#">
                <div className="label1">
                  <h2>Restaurantes</h2>
                  <div className="merc">
                    <div className="opc1">
                      <p>
                        Opções
                        <span>
                          <FaAngleRight />
                        </span>
                      </p>
                    </div>
                    <img src={Rest} alt="" />
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="label1">
                  <h2>Mercados</h2>
                  <div className="merc">
                    <div className="opc2">
                      <p>
                        Opções
                        <span>
                          <FaAngleRight />
                        </span>
                      </p>
                    </div>
                    <img src={Market} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div id="linha-horizontal"></div>
          <div className="listarest">
            <h2>Fomosos no Treim</h2>
            <div className="pagescroll">
              <Swiper
                slidesPerView={5}
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
                {lanch.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="teste1">
                      <img src={item.logo} alt="" />
                      <div className="rest">
                        <h2>{item.food_name}</h2>
                        <p>{'R$ ' + item.price}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div id="linha-horizontal"></div>
          <div className="listarest">
            <h2>Restaurantes em destaque</h2>
            <div className="pagescroll">
              <Swiper
                slidesPerView={4}
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
                {lista.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="teste1">
                      <img src={item.logo} alt="" />
                      <div className="rest">
                        <h2>{item.restaurant_name}</h2>
                        <p>{item.cousine_type}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
