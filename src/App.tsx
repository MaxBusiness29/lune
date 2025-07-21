import React, { useState } from 'react';
import ProductPage from './components/ProductPage';
import WinnersCirclePage from './components/WinnersCirclePage';
import CheckoutPage from './components/CheckoutPage';
import ConfirmationPage from './components/ConfirmationPage';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'product' | 'winners-circle' | 'checkout' | 'confirmation'>('product');
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 'indecisive-hoodie',
    name: 'Indecisive Core Jacket',
    price: '$48.00 USD',
    image: '/IMG_5132.png'
  });
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    name: string;
    price: string;
    size: string;
    quantity: number;
    image: string;
  }>>([]);

  const showWinnersCircle = () => setCurrentPage('winners-circle');
  const showProductPage = (product?: Product) => {
    if (product) {
      setSelectedProduct(product);
    }
    setCurrentPage('product');
  };
  const showCheckout = () => setCurrentPage('checkout');
  const showConfirmation = () => setCurrentPage('confirmation');

  if (currentPage === 'winners-circle') {
    return <WinnersCirclePage onBackToProducts={showProductPage} />;
  }

  if (currentPage === 'checkout') {
    return <CheckoutPage cartItems={cartItems} onBackToCart={() => setCurrentPage('product')} onOrderComplete={showConfirmation} />;
  }

  if (currentPage === 'confirmation') {
    return <ConfirmationPage cartItems={cartItems} onBackToHome={showWinnersCircle} />;
  }

  return <ProductPage onLogoClick={showWinnersCircle} product={selectedProduct} onCheckout={showCheckout} cartItems={cartItems} setCartItems={setCartItems} />;
}

export default App;