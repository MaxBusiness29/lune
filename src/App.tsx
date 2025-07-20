import React, { useState } from 'react';
import ProductPage from './components/ProductPage';
import WinnersCirclePage from './components/WinnersCirclePage';
import CheckoutPage from './components/CheckoutPage';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'product' | 'winners-circle' | 'checkout'>('product');
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 'indecisive-hoodie',
    name: 'Indecisive Embroidered Core Hoodie',
    price: '$67.00 USD',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
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

  if (currentPage === 'winners-circle') {
    return <WinnersCirclePage onBackToProducts={showProductPage} />;
  }

  if (currentPage === 'checkout') {
    return <CheckoutPage cartItems={cartItems} onBackToCart={() => setCurrentPage('product')} />;
  }

  return <ProductPage onLogoClick={showWinnersCircle} product={selectedProduct} onCheckout={showCheckout} cartItems={cartItems} setCartItems={setCartItems} />;
}

export default App;