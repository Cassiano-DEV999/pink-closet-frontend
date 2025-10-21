import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home-page";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão / → HomePage */}
        <Route path="/" element={<HomePage />} />
        {/* Outras rotas podem ser adicionadas aqui */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
