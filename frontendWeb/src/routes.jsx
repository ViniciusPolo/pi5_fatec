import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
