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
          <p className="text-lg text-gray-500">Order #{orderNumber}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
          
          {/* Order Items */}
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg bg-gray-200"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-900">
                  ${(parseFloat(item.price.replace('$', '').replace(' USD', '')) * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Order Totals */}
          <div className="space-y-2 pt-4 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
              <span>Total</span>
              <span>${total.toFixed(2)} USD</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
              <p>We'll send you an order confirmation email with tracking details</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
              <p>Your order will be processed and shipped within 1-2 business days</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
              <p>You'll receive your Indecisive gear in 3-5 business days</p>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center">
          <button 
            onClick={onBackToHome}
            className="bg-black text-white py-3 px-8 font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Continue Shopping
          </button>
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