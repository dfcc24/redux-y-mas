import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryCard = ({ category, image, path }) => {
  const product = useSelector((state) => state.products[category]);

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={`${category}`} />
      <div className="card-body">
        <h5 className="card-title">{category}</h5>
        <p className="card-text">
          {product.name} - {product.rating} estrellas
        </p>
        <Link to={path} className="btn btn-primary">Comprar</Link>
      </div>
    </div>
  );
};

export default CategoryCard;