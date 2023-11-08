// import { useState } from "react";

// import "./style.css";
import Header from "../../components/Header";

export default function Delivery() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <div className="box">
            <div className="circle">
              <h2>
                Pagina<small>%</small>
              </h2>
            </div>
            <h3>Html</h3>
          </div>
          <div className="box">
            <div className="circle">
              <h2>
                20<small>%</small>
              </h2>
            </div>
            <h3>Logomarca</h3>
          </div>
          <div className="box">
            <div className="circle">
              <h2>
                20<small>%</small>
              </h2>
            </div>
            <h3>Pagina </h3>
          </div>
        </div>
      </div>
    </>
  );
}
