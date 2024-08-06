import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage'; // Importa el nuevo componente
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import PaymentOption from './pages/PaymentOption';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} /> {/* Página de bienvenida como inicio */}
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentOption />} />
      </Routes>
    </Router>
  );
}

export default App;
