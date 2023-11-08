import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FaInstagram, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function About() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="about">
          <h1>Equipe PI 6º periodo DSM - fatec franca/SP -  2023</h1>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="imgdoc"
                src="https://avatars.githubusercontent.com/u/67979217?v=4"
                alt="Foto Andre"
              />
              <p>André Luiz de Andrade</p>
              <div className="redes">
                <div className="iconsabout">
                  <Link to="#">
                    <FaInstagram color="#000" />
                  </Link>
                  <Link to="#">
                    <FaGithub color="#000" />
                  </Link>
                  <Link to="#">
                    <FaLinkedin color="#000" />
                  </Link>
                  <Link to="#">
                    <FaBehance color="#000" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.githubusercontent.com/u/79950756?v=4"
                alt="Foto Fabricio"
              />
              <p>Fabricio Rangel de Sousa</p>
              <div className="redes">
                <div className="iconsabout">
                  <Link to="#">
                    <FaInstagram color="#000" />
                  </Link>
                  <Link to="#">
                    <FaGithub color="#000" />
                  </Link>
                  <Link to="#">
                    <FaLinkedin color="#000" />
                  </Link>
                  <Link to="#">
                    <FaBehance color="#000" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.githubusercontent.com/u/79169104?v=4"
                alt="Foto Guilherme"
              />
              <p>Guilherme Herinque Carvaho</p>
              <div className="redes">
                <div className="iconsabout">
                  <Link to="#">
                    <FaInstagram color="#000" />
                  </Link>
                  <Link to="#">
                    <FaGithub color="#000" />
                  </Link>
                  <Link to="#">
                    <FaLinkedin color="#000" />
                  </Link>
                  <Link to="#">
                    <FaBehance color="#000" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.githubusercontent.com/u/19478707?v=4"
                alt="Foto Tatiana"
              />
              <p>Tatiana Hitomi Miyazaki</p>
              <div className="redes">
                <div className="iconsabout">
                  <Link to="#">
                    <FaInstagram color="#000" />
                  </Link>
                  <Link to="#">
                    <FaGithub color="#000" />
                  </Link>
                  <Link to="#">
                    <FaLinkedin color="#000" />
                  </Link>
                  <Link to="#">
                    <FaBehance color="#000" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://avatars.githubusercontent.com/u/86489843?v=4"
                alt="Foto Vinicius"
              />
              <p>Vinicius Roberto Polo</p>
              <div className="redes">
                <div className="iconsabout">
                  <Link to="#">
                    <FaInstagram color="#000" />
                  </Link>
                  <Link to="#">
                    <FaGithub color="#000" />
                  </Link>
                  <Link to="#">
                    <FaLinkedin color="#000" />
                  </Link>
                  <Link to="#">
                    <FaBehance color="#000" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Footer />
      </div>
    </>
  );
}
