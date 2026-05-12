import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Homepage";
import { SobrePage } from "./pages/SobrePage";
import { ConteudoPage } from "./pages/ConteudoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/conteudo" element={<ConteudoPage />} />
    </Routes>
  );
}

export default App;
