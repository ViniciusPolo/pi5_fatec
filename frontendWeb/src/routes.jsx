import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/RequireAuth";

import Initial from "./pages/initial";
import Delivery from "./pages/delivery";
import Mercados from "./pages/delivery/mercados";
import UserCad from "./pages/users/Cadastro";
import UserLogin from "./pages/users/Login";
import Restaurants from "./pages/restaurants";
import Dados from "./pages/dados";
import About from "./pages/about";
import Menu from "./pages/menus";
import Orders from "./pages/pedidos";
import Address from "./pages/dados/address.jsx";
import Cart from "./pages/cart";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Initial />} />
      <Route exact path="/delivery" element={<Delivery />} />
      <Route exact path="/loginuser" element={<UserLogin />} />
      <Route exact path="/restmerc" element={<Mercados />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/caduser" element={<UserCad />} />
      <Route
        exact
        path="/home"
        element={
          <RequireAuth>
            <Restaurants />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/menu"
        element={
          <RequireAuth>
            <Menu />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/orders"
        element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/dados"
        element={
          <RequireAuth>
            <Dados />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/address"
        element={
          <RequireAuth>
            <Address />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/pedidos/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
