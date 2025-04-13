import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
