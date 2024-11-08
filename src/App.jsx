import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

import Contato from "./pages/Contatos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./Components/Header";
import "./index.css";
import Contactfoo from "./Components/Footer";


function App() {
  return (
    <Router>
      <Head/>
      <Routes>
       
        <Route path="/" element={<Home />}/>
        <Route path="/Produtos" element={<Produtos/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
      <Contactfoo/>
    </Router>
  );
}

export default App;