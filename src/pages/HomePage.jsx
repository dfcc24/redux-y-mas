import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/productsSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

// Importa las imágenes de los productos
import xbox360Image from '../assets/xbox360.jpg';
import xboxSlimImage from '../assets/xboxSlim.jpg';
import xboxLiveImage from '../assets/xboxLive.jpg';

const HomePage = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    console.log('Producto seleccionado:', product); // Verifica qué producto se está añadiendo al carrito
    dispatch(addToCart(product));
    navigate('/cart'); // Redirige al carrito de compras
  };

  const handleGoBack = () => {
    navigate(-1); // Navega a la página anterior en el historial
  };

  // Mapeo de IDs de productos a imágenes correspondientes
  const productImages = {
    1: xbox360Image,
    2: xboxSlimImage,
    3: xboxLiveImage,
  };

  // Secuencia de colores de fondo
  const backgroundColors = ['bg-gradient-1', 'bg-gradient-2', 'bg-gradient-3'];

  return (
    <div className="container">
      <h1 className="my-4">Productos</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className={`card h-100 ${backgroundColors[index % backgroundColors.length]} custom-border`}>
              <img src={productImages[product.id]} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <p className="card-text">Rating: {product.rating}</p>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                  Seleccionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary" onClick={handleGoBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HomePage;
