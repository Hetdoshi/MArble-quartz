// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, image, description, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default ProductCard;
