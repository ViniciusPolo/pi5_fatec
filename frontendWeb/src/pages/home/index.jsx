import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

import { FaAngleRight } from "react-icons/fa";

import Rest from "../../assets/rest.svg";
import Market from "../../assets/super.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
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
            <h2>Restaurantes em destaque</h2>
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
                <SwiperSlide>
                  <div className="teste1">Slide 6</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teste1">Slide 7</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teste1">Slide 8</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teste1">Slide 9</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teste1">Slide 10</div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
