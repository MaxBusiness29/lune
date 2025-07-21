import React from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: string;
  size: string;
  quantity: number;
  image: string;
}

interface ConfirmationPageProps {
  cartItems: CartItem[];
  onBackToHome: () => void;
}

function ConfirmationPage({ cartItems, onBackToHome }: ConfirmationPageProps) {
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(' USD', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = getSubtotal();
  const shipping = 21.00;
  const total = subtotal + shipping;
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-white">
      {/* Free Shipping Banner */}
      <div className="bg-black text-white text-center py-3 text-sm font-medium">
        FREE SHIPPING ON ORDERS OVER $50
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex-1"></div>
          <button 
            onClick={onBackToHome}
            className="text-4xl font-bold tracking-wider text-black hover:text-gray-700 transition-colors"
          >
            Indecisive
          </button>
          <div className="flex-1 flex justify-end">
            <ShoppingBag className="w-6 h-6 text-black" />
          </div>
        </div>
      </header>

      {/* Confirmation Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-lg text-gray-500">Order #95PNWAWOO</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg font-medium">Only winners wear indecisive.</p>
          </div>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Shipping</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Returns</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms Of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConfirmationPage;