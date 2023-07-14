import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashoboard/dashboard";
import Negocio from "./pages/negocio/negocio";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/negocios" element={<Negocio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
