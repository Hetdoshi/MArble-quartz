// src/components/QuartzPage.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import Pagination from './Pagination';


const QuartzPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  //Sample data for quartz products
  const products = [
    { id: 1, name: 'Calacatta-Venezia', image: '/quartz/1 Calacatta-Venezia-Full-Slab-View-1-scaled-e1717063089682.jpg', description: 'Description for Quartz Product 1.' },
    { id: 2, name: 'CALACATTA-NERO', image: '/quartz/2 CALACATTA-NERO-scaled.jpg', description: 'Description for Quartz Product 2.' },
    { id: 3, name: 'Calacatta-Rivolo', image: '/quartz/3 Calacatta-Rivolo-Full-Slab-View-1-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 4, name: 'Alluring', image: '/quartz/4 Alluring.jpg', description: 'Description for Quartz Product 3.' },
    { id: 5, name: 'CRYSTAL-SERENE', image: '/quartz/5 CRYSTAL-SERENE-full-slabs-scaled-e1717136515671.jpg', description: 'Description for Quartz Product 3.' },
    { id: 6, name: 'Crystal-Bliss', image: '/quartz/6 Crystal-Bliss-full-slab-scaled-e1717136387485.jpg', description: 'Description for Quartz Product 3.' },
    { id: 7, name: 'Carrara-Marmi', image: '/quartz/7 Carrara-Marmi-.jpg', description: 'Description for Quartz Product 3.' },
    { id: 8, name: 'Manhattan-Grey', image: '/quartz/8 Manhattan-Grey.jpg', description: 'Description for Quartz Product 3.' },
    { id: 9, name: 'Stellar-Grey', image: '/quartz/9 Stellar-Grey-.jpg', description: 'Description for Quartz Product 3.' },
    { id: 10, name: 'Stellar-White-scaled', image: '/quartz/10 Stellar-White-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 11, name: 'Toasted-Almond', image: '/quartz/11 Toasted-Almond--scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 12, name: 'Pearl-Grey', image: '/quartz/12 Pearl-Grey--scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 13, name: 'Peppercorn-White', image: '/quartz/13 Peppercorn-White-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 14, name: ' Smokey-Grey-Ash-Grey', image: '/quartz/14 Smokey-Grey-Ash-Grey-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 15, name: 'Grigio-Londra', image: '/quartz/15 Grigio-Londra-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 16, name: 'Grigio-Scuro-Slab-scaled', image: '/quartz/16 Grigio-Scuro-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 17, name: 'Bianco-Cristallo', image: '/quartz/17 Bianco-Cristallo-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 18, name: 'BIANCO-GIOA-FS', image: '/quartz/18 BIANCO-GIOA-FS-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 19, name: 'Bianco-Oro', image: '/quartz/19 Bianco-Oro-Full-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 20, name: 'Bianco-river', image: '/quartz/20 Bianco-river-slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 21, name: 'Bianco-Venatino', image: '/quartz/21 Bianco-Venatino-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 22, name: 'BIANCO-SUPERIORE', image: '/quartz/22 BIANCO-SUPERIORE-FS-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 23, name: 'Calacatta-Elegante', image: '/quartz/23 Calacatta-Elegante-Full-Slab-View-1-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 24, name: 'CALACATTA-IMPERIAL', image: '/quartz/24 CALACATTA-IMPERIAL-SLAB-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 25, name: 'Calacatta-Pristine', image: '/quartz/25 Calacatta-Pristine-Close-Up-View-2-3-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 26, name: 'Bianco-Thassos', image: '/quartz/26 Bianco-Thassos-Full-slab.jpg', description: 'Description for Quartz Product 3.' },
    { id: 27, name: 'New-Extra-White-FS', image: '/quartz/27 New-Extra-White-FS-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 28, name: 'New-Bianco-Alaska', image: '/quartz/28 New-Bianco-Alaska-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 29, name: 'Crema-Verona', image: '/quartz/29 Crema-Verona-Full-slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 30, name: 'Classic-Pearl', image: '/quartz/30 Classic-Pearl-Full-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 31, name: 'Tundra', image: '/quartz/31 Tundra-Full-slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 32, name: 'Pietra-Grey', image: '/quartz/32 Pietra-Grey-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 33, name: 'Milano', image: '/quartz/33 Milano-Full-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 34, name: 'New-Grey', image: '/quartz/34 New-Grey-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 35, name: 'Jerusalem-Diamante', image: '/quartz/35 Jerusalem-Diamante-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 36, name: 'Gris-Venato', image: '/quartz/36 Gris-Venato-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 37, name: 'Grigio-Oro', image: '/quartz/37 Grigio-Oro-Full-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 38, name: 'Grigio-Diamante', image: '/quartz/38 Grigio-Diamante-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 39, name: 'Grey-Fjord', image: '/quartz/39 Grey-Fjord-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 40, name: 'Cosmopolitan', image: '/quartz/40 Cosmopolitan-Full-sLAB-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 41, name: 'Concrete', image: '/quartz/41 Concrete-Full-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 42, name: 'Ush', image: '/quartz/42 Ush-Full-slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 43, name: 'POETIC-BLACK', image: '/quartz/43 POETIC-BLACK-FULL-SLAB-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 44, name: 'Silver-Grey', image: '/quartz/44 Silver-Grey-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 45, name: 'Wizzard', image: '/quartz/45 Wizzard-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 46, name: 'Beige-Diamante', image: '/quartz/46 Beige-Diamante-Full-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 47, name: 'Crema-Gold', image: '/quartz/47 Crema-Gold-Full-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 48, name: 'Crema-Scuro', image: '/quartz/48 Crema-Scuro-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 49, name: 'CREMA-VENATO', image: '/quartz/49 CREMA-VENATO-EXTRA-FS-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 50, name: ' New-beige', image: '/quartz/50 New-beige-slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 51, name: 'Nisley', image: '/quartz/51 Nisley-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 52, name: 'NOAH', image: '/quartz/52 NOAH-FULL-SLAB-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 53, name: 'Sandy-Diamante', image: '/quartz/53 Sandy-Diamante-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 54, name: 'Sandy-Diamante', image: '/quartz/54 Sandy-Diamante-Slab-scaled.jpg', description: 'Description for Quartz Product 3.' },
    { id: 55, name: 'CHANDAN', image: '/quartz/55 CHANDAN-Full-Slab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 56, name: 'CEMENT', image: '/quartz/56 CEMENT-FULL-SLAB-1-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 57, name: ' Mocca-Diamante', image: '/quartz/57 Mocca-Diamante-Slab.jpg', description: 'Description for Quartz Product 3.' },
    { id: 58, name: 'Mocca-Creme', image: '/quartz/58 Mocca-Creme-Slab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 59, name: 'DESERT-BROWN', image: '/quartz/59 DESERT-BROWN-FULL-SLAB-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 60, name: 'Nero-Diamante', image: '/quartz/60 Nero-Diamante-Slab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 61, name: 'Nero-classic', image: '/quartz/61 Nero-classic-Slab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 62, name: 'Metropolitan', image: '/quartz/62 Metropolitan-SLab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 63, name: 'Classic-Beige', image: '/quartz/63 Classic-Beige-Slab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 64, name: ' BERMINGHAM', image: '/quartz/64 BERMINGHAM-Full-Slab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 65, name: 'Beige-Tuscany', image: '/quartz/65 Beige-Tuscany-Slab-1.jpg', description: 'Description for Quartz Product 3.' },
    { id: 66, name: 'Bianco-Neve', image: '/quartz/66 Bianco-Neve-fs.jpg', description: 'Description for Quartz Product 3.' },
    { id: 67, name: 'REPEN-FS', image: '/quartz/67 REPEN-FS.jpg', description: 'Description for Quartz Product 3.' },
    { id: 68, name: 'BIANCO-DIAMANTE', image: '/quartz/68 BIANCO-DIAMANTE-FULL-SLAB.jpg', description: 'Description for Quartz Product 3.' },
    { id: 69, name: 'BIANCO-CLASSIC-FS', image: '/quartz/69 BIANCO-CLASSIC-FS.jpg', description: 'Description for Quartz Product 3.' },
    { id: 70, name: 'BIANCO-CARRARA-FS', image: '/quartz/70 BIANCO-CARRARA-FS.jpg', description: 'Description for Quartz Product 3.' },
    
    // Add more quartz products as needed
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='q'>
    <div className="quartz-page">
      <h2 className='a1'>Quartz Products</h2>
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

export default QuartzPage;
