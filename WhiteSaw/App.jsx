import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioAdmin from "./src/components/inicioadmin/inicioadmin";
import LoginAdmin from "./src/components/loginadmin/loginadmin";
import TurnosAgendados from "./src/components/turnosagendados/turnosagendados";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<InicioAdmin />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/turnosagendados" element={<TurnosAgendados />} />
        </Routes>
    </Router>
  );
}

export default App;
