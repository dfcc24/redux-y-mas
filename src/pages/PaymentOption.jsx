
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import creditCardLogo from '../assets/credit-card.png';
import efectyLogo from '../assets/efecty.png';
import cashOnDeliveryLogo from '../assets/cash-on-delivery.png';
import './PaymentOption.css';

const PaymentOption = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    navigate(-2); // Esto te regresa a la página anterior
  };

  const renderForm = () => {
    switch (selectedOption) {
      case 'creditCard':
        return (
          <form className="payment-form">
            <h3>Pago con Tarjeta de Crédito</h3>
            <div>
              <label>Número de Tarjeta</label>
              <input type="text" placeholder="1234 5678 9012 3456" required />
            </div>
            <div>
              <label>Nombre en la Tarjeta</label>
              <input type="text" placeholder="Juan Pérez" required />
            </div>
            <div>
              <label>Fecha de Expiración</label>
              <input type="text" placeholder="MM/AA" required />
            </div>
            <div>
              <label>Código CVV</label>
              <input type="text" placeholder="123" required />
            </div>
            <button type="submit">Pagar</button>
          </form>
        );
      case 'efecty':
        return (
          <form className="payment-form">
            <h3>Pago con Efecty</h3>
            <div>
              <label>Número de Cédula</label>
              <input type="text" placeholder="1234567890" required />
            </div>
            <div>
              <label>Teléfono de Contacto</label>
              <input type="text" placeholder="3101234567" required />
            </div>
            <button type="submit">Generar Orden de Pago</button>
          </form>
        );
      case 'cashOnDelivery':
        return (
          <form className="payment-form">
            <h3>Compra Contra Entrega</h3>
            <div>
              <label>Dirección de Entrega</label>
              <input type="text" placeholder="Calle 123 #45-67" required />
            </div>
            <div>
              <label>Teléfono de Contacto</label>
              <input type="text" placeholder="3101234567" required />
            </div>
            <button type="submit">Confirmar Pedido</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Opciones de Pago</h1>
      <div className="payment-options">
        <div
          className="payment-option"
          onClick={() => handleOptionClick('creditCard')}
        >
          <img src={creditCardLogo} alt="Tarjeta de Crédito" className="payment-logo" />
          <p className="payment-text">Compra con Tarjeta de Crédito</p>
        </div>
        <div className="payment-option" onClick={() => handleOptionClick('efecty')}>
          <img src={efectyLogo} alt="Efecty" className="payment-logo" />
          <p className="payment-text">Compra con Efecty</p>
        </div>
        <div
          className="payment-option"
          onClick={() => handleOptionClick('cashOnDelivery')}
        >
          <img src={cashOnDeliveryLogo} alt="Contra Entrega" className="payment-logo" />
          <p className="payment-text">Compra Contra Entrega</p>
        </div>
      </div>
      <div className="form-container">
        {renderForm()}
      </div>
      <button className="go-back-button" onClick={handleGoBack}>Regresar</button>
    </div>
  );
};

export default PaymentOption;
