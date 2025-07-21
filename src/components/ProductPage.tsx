import React, { useState } from 'react';
import { ShoppingBag, Minus, Plus, X, Trash2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  time: string;
}

interface ProductPageProps {
  onLogoClick: () => void;
  product: Product;
  onCheckout: () => void;
  cartItems: Array<{
    id: string;
    name: string;
    price: string;
    size: string;
    quantity: number;
    image: string;
  }>;
  setCartItems: React.Dispatch<React.SetStateAction<Array<{
    id: string;
    name: string;
    price: string;
    size: string;
    quantity: number;
    image: string;
  }>>>;
}

function ProductPage({ onLogoClick, product, onCheckout, cartItems, setCartItems }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const addToCart = () => {
    const newItem = {
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      image: product.image
    };
    
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
    
    setShowCart(true);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(' USD', ''));
      return total + (price * item.quantity);
    }, 0);
  };

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
            onClick={onLogoClick}
            className="text-4xl font-bold tracking-wider text-black hover:text-gray-700 transition-colors"
          >
            Indecisive
          </button>
          <div className="flex-1 flex justify-end">
            <ShoppingBag className="w-6 h-6 text-black" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setShowLightbox(true)}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Indecisive</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-gray-900">{product.price}</p>
            </div>

            {/* Shop Pay Info */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-600">Pay in 4 interest-free installments of</span>
              <span className="font-semibold">$16.75</span>
              <span className="text-gray-600">with</span>
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
                Shop Pay
              </span>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Learn more</a>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:border-gray-400'
                    } ${(size === 'XL' || size === 'XXL') ? 'opacity-50 cursor-not-allowed out-of-stock' : ''}`}
                    disabled={size === 'XL' || size === 'XXL'}
                  >
                    <span className={(size === 'XL' || size === 'XXL') ? 'line-through' : ''}>
                      {size}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium">In stock. Shipping next day.</span>
            </div>

            <div className="space-y-4 pt-6">
              <button 
                onClick={addToCart}
                className="w-full bg-white border border-black text-black py-3 px-6 font-medium tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
              >
                Add to cart
              </button>

              <button className="w-full bg-purple-600 text-white py-4 px-6 font-semibold rounded-md hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                Buy with ShopPay
              </button>

              {/* Product Description */}
              <div className="pt-4 space-y-2 text-gray-700">
                <p className="font-medium text-lg text-gray-900">You don't need 5 jackets.</p>
                <p>You need one that hits different.</p>
                <p><strong>This one.</strong></p>
                <p>Clean as f***. No logos screaming for attention.</p>
                <p>Just the right shape, the right weight, and a fit that speaks for itself.</p>
                <p>We made this for the ones who move different.</p>
                <p>Who don't care about hype, they care about quality.</p>
                <p>Once you put it on, you'll get it.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* You May Also Like Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-medium text-gray-900 mb-8">You may also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Indecisive Core T-Shirt */}
          <div className="group">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={product.id === 'indecisive-core-jacket' ? '/IMG_5133.png' : '/IMG_5132.png'} 
                alt="Indecisive Core Jacket"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-gray-900 mb-1">
              {product.id === 'indecisive-core-jacket' ? 'Indecisive Camo Jacket' : 'Indecisive Core Jacket'}
            </h3>
            <p className="text-gray-600">$48.00 USD</p>
          </div>

          {/* Winners Circle Hoodie */}
          <div className="group">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={product.id === 'winners-circle-tshirt' ? '/IMG_5132.png' : '/IMG_5133.png'} 
                alt="Indecisive Jacket"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-gray-900 mb-1">
              {product.id === 'winners-circle-tshirt' ? 'Indecisive Core Jacket' : 'Indecisive Camo Jacket'}
            </h3>
            <p className="text-gray-600">$48.00 USD</p>
          </div>
        </div>
      </section>

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

      {/* Cart Popup */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-6">
              {/* Cart Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Your cart</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm text-gray-500 uppercase tracking-wide">
                    <span>PRODUCT</span>
                    <span>TOTAL</span>
                  </div>
                  
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 py-4 border-b border-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.price}</p>
                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                        
                        <div className="flex items-center space-x-3 mt-2">
                          <button 
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <p className="font-semibold text-gray-900">
                          ${(parseFloat(item.price.replace('$', '').replace(' USD', '')) * item.quantity).toFixed(2)}
                        </p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-900">SUBTOTAL</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${getCartTotal().toFixed(2)} USD
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    Discounts and shipping calculated at checkout.
                  </p>
                  <button 
                    onClick={onCheckout}
                    className="w-full bg-black text-white py-4 px-6 font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span>SECURE CHECK OUT</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {showLightbox && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={product.image} 
              alt="Product detail - expanded view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;