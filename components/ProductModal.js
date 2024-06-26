import React from 'react';
import PropTypes from 'prop-types';
import './ProductModal.css';

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay" onClick={onRequestClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.name} className="modal-image" />
        <button className="close-button" onClick={onRequestClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductModal;
