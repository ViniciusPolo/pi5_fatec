import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Delivery from "./pages/delivery";
import UserLogin from "./pages/users/Login";
import UserCad from "./pages/users/Cadastro";
import About from "./pages/about";


export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/delivery" element={<Delivery />} />
      <Route exact path="/loginuser" element={<UserLogin />} />
      <Route exact path="/caduser" element={<UserCad />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}
