
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { removeFromCart } from '../store/productsSlice';
import './CartPage.css';

// Importa las imágenes de los productos
import xbox360Image from '../assets/xbox360.jpg';
import xboxSlimImage from '../assets/xboxSlim.jpg';
import xboxLiveImage from '../assets/xboxLive.jpg';

const CartPage = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const cart = useSelector((state) => state.products.cart) || [];
  const dispatch = useDispatch();
  const [openDetails, setOpenDetails] = useState({});

  const productImages = {
    1: xbox360Image,
    2: xboxSlimImage,
    3: xboxLiveImage,
  };

  const productDescriptions = {
    1: "La XBox 360 está gobernada por una CPU basada en PowerPC y diseñada por IBM, Modelo S wireless, 5 puertos USB 2.0, Wi-Fi 802.11a/b/g/n, receptor IR, 100 Mbit Ethernet, Puerto auxiliar. Como principales características técnicas, están su unidad central de procesamiento basado en un IBM PowerPC y su unidad de procesamiento gráfico que soporta la tecnología de Shaders Unificados",
    2: "La Xbox Slim es la primera de las tres consolas de nueva generación en aparecer. Está gobernada por una CPU basada en PowerPC y diseñada por IBM. Esta CPU funciona a 3.2 GHz y consta de tres núcleos simétricos que pueden ejecutar dos hilos por hardware cada uno. Incorpora RAM de tipo GDDR3 a 700 Mhz, que le proporcionan un ancho de banda a memoria de 22.4 Gbps.",
    3: "La Xbox está basada en la arquitectura x86, misma tecnología empleada en las computadoras personales. El equipo cuenta con un Procesador Central de 32 bits, basado en el diseño del Pentium III, tiene una velocidad de reloj de 733 MHz, tiene 64 MiB de RAM, del tipo DDR SDRAM y corre una velocidad de 200 MHz.",
  };

  const handleMouseDown = (id) => {
    setOpenDetails((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseUp = (id) => {
    setOpenDetails((prev) => ({ ...prev, [id]: false }));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="row">
          {cart.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={productImages[product.id]}
                  alt={product.name}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Descripción: {product.description}</Card.Text>
                  <Card.Text>Precio: ${product.price}</Card.Text>
                  <Card.Text>Rating: {product.rating}</Card.Text>
                  <div className="button-group d-flex justify-content-between">
                    <Button
                      variant="secondary"
                      className="details-button"
                      onMouseDown={() => handleMouseDown(product.id)}
                      onMouseUp={() => handleMouseUp(product.id)}
                    >
                      Ver Detalles
                    </Button>
                    <Button variant="danger" onClick={() => handleRemoveProduct(product.id)}>
                      Eliminar
                    </Button>
                    <Link to="/payment">
                      <Button variant="primary" className="buy-button">
                        Comprar
                      </Button>
                    </Link>
                  </div>
                  {openDetails[product.id] && (
                    <div className="product-details mt-3">
                      <p>{productDescriptions[product.id]}</p>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
      {/* Botón de regreso */}
      <div className="text-center mt-4">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Regresar
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
