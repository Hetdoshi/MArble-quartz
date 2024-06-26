

// src/components/MarblePage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import ProductModal from './ProductModal';


const MarblePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Sample products data
  const products = [
    { id: 1, name: 'Candy-white', image: 'images/Candy-white-1.jpg', description: 'High-quality granite for your kitchen.' },
    { id: 2, name: 'Ottoman', image: 'images/Ottoman-Beige-1.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 3, name: 'Luna', image: 'images/Luna-Full-Slab.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 4, name: 'GARDENIA', image: 'images/GARDENIA.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 5, name: 'CLASSIC-CRYSTAL', image: 'images/CLASSIC-CRYSTAL-FULL-SLAB.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 6, name: 'CLEOPATRA', image: 'images/CLEOPATRA.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 7, name: 'Cristtalo', image: 'images/Cristtalo-slab.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 8, name: 'FRESH-CONCRETE', image: 'images/FRESH-CONCRETE.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 9, name: 'Bianco-Venus', image: 'images/Bianco-Venus-Slab.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 10, name: 'Bianco-Thassos', image: 'images/Bianco-Thassos-Full-slab.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 11, name: 'AMELIA', image: 'images/AMELIA.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 12, name: 'Sleeek-concrete', image: 'images/Sleeek-concrete.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 13, name: 'Palladio-Grey', image: 'images/Palladio-Grey-Full-Slab.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 14, name: 'Melissa', image: 'images/Melissa-full-slab.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 15, name: 'Majestic-Grey', image: 'images/Majestic-Grey.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 16, name: 'GRIGIO-BILLIAME', image: 'images/GRIGIO-BILLIAME.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 17, name: 'VALENTINO', image: 'images/VALENTINO-or-VELANTE 17.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 18, name: 'Romeo', image: 'images/Romeo-slab18.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 19, name: 'MINTA-FLURRY', image: 'images/MINTA-FLURRY 19.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 20, name: 'Ottone', image: 'images/Ottone-Full-Slab 20.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 21, name: 'DANTEA', image: 'images/DANTEA-FULL-SLAB 21.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 22, name: 'Althea', image: 'images/Althea 22.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 23, name: 'GRIGIO-CLASSICO', image: 'images/GRIGIO-CLASSICO23.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 24, name: 'AURELIO-NUOVO', image: 'images/AURELIO-NUOVO-1 23.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 25, name: 'Alyssa', image: 'images/Alyssa-FS-1 24.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 26, name: 'EMPERADOR-SCURO', image: 'images/EMPERADOR-SCURO-1 25.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 27, name: 'EMPERADOR-CHIARA', image: 'images/EMPERADOR-CHIARA-1 26.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 28, name: 'Arcadio', image: 'images/Arcadio-slab-1 27.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 29, name: 'Dallia', image: 'images/Dallia-Full-Slab-1  28.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 30, name: 'Crema-Nova', image: 'images/Crema-Nova-Full-Slab-1 29.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 31, name: 'Camelia', image: 'images/Camelia-1 30.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 32, name: 'Artic-white', image: 'images/Artic-white-FS-2-scaled 31.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 33, name: 'TIBERIO', image: 'images/TIBERIO-FS-scaled 32.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 34, name: 'Romolo', image: 'images/Romolo-Full-Slab-scaled 33.jpg', description: 'Elegant marble for your bathroom.' },
    { id: 35, name: 'RAFFAELE', image: 'images/RAFFAELE-FS-scaled34.jpg', description: 'Elegant marble for your bathroom.' },
    // Add more products here as needed
  ];

  // Handle click on a product card
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    < div className='main'>
    <div className="marble-page">
      <h2 className='a1'>Marble Products</h2>
      <div className="product-list">
        {currentProducts.map((product, index) => (
          <ProductCard 
            key={index} 
            name={product.name} 
            image={product.image} 
            description={product.description} 
            onClick={() => handleCardClick(product)}
          />
        ))}
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <ProductModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          product={selectedProduct}
        />
      </div>
    </div>
    </div>
  );
};

export default MarblePage;
