import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { QuemSomos } from "./pages/QuemSomos";
import { Comunidade } from "./pages/Comunidade";
import { Doacoes } from "./pages/Doacoes";
import { Oficinas } from "./pages/Oficinas";
import { Empreendedorismo } from "./pages/Empreendedorismo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<QuemSomos />} />
        <Route path="comunidade" element={<Comunidade />} />
        <Route path="doacoes" element={<Doacoes />} />
        <Route path="oficinas" element={<Oficinas />} />
        <Route path="empreendedorismo" element={<Empreendedorismo />} />
      </Route>
    </Routes>
  );
}

export default App;
