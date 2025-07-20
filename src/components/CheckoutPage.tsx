import React, { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: string;
  size: string;
  quantity: number;
  image: string;
}

interface CheckoutPageProps {
  cartItems: CartItem[];
  onBackToCart: () => void;
}

function CheckoutPage({ cartItems, onBackToCart }: CheckoutPageProps) {
  const [email, setEmail] = useState('');
  const [emailOffers, setEmailOffers] = useState(false);
  const [country, setCountry] = useState('United States');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('New York');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [textOffers, setTextOffers] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [useShippingAddress, setUseShippingAddress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [rememberMe, setRememberMe] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('standard');

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(' USD', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = getSubtotal();

  // Check if shipping address is complete
  const isShippingAddressComplete = firstName && lastName && address && city && zipCode;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Checkout Form */}
          <div className="px-8 py-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-wider text-black mb-4">Indecisive</h1>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <span className="text-gray-600">Excellent</span>
                <span className="font-semibold">4.6</span>
                <span className="text-gray-600">out of</span>
                <span className="font-semibold">5</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <span className="text-green-600 font-semibold">Trustpilot</span>
              </div>
            </div>

            {/* Express Checkout */}
            <div className="mb-8">
              <p className="text-center text-gray-600 mb-4">Express checkout</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <button className="bg-purple-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-purple-700 transition-colors">
                  Shop Pay
                </button>
                <button className="bg-yellow-400 text-black py-3 px-4 rounded-md font-semibold hover:bg-yellow-500 transition-colors">
                  PayPal
                </button>
                <button className="bg-black text-white py-3 px-4 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                  G Pay
                </button>
              </div>
              <div className="text-center text-gray-500 text-sm">OR</div>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
                <a href="#" className="text-blue-600 hover:underline text-sm">Log in</a>
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent mb-4"
              />
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={emailOffers}
                  onChange={(e) => setEmailOffers(e.target.checked)}
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="text-gray-700">Email me with news and offers</span>
              </label>
            </div>

            {/* Delivery Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Country/Region</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />

                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />

                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option>New York</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>Florida</option>
                  </select>
                  <input
                    type="text"
                    placeholder="ZIP code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={textOffers}
                    onChange={(e) => setTextOffers(e.target.checked)}
                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                  />
                  <span className="text-gray-700">Text me with news and offers</span>
                </label>
              </div>
            </div>

            {/* Shipping Method Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping method</h2>
              <div className="space-y-4">
                <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedShippingMethod === 'standard' 
                    ? 'border-black bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={selectedShippingMethod === 'standard'}
                        onChange={(e) => setSelectedShippingMethod(e.target.value)}
                        className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="font-medium text-gray-900">UPS STANDARD SHIPPING</span>
                    </div>
                    <span className="font-bold text-gray-900">$21.00</span>
                  </label>
                </div>
                
                <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedShippingMethod === 'express' 
                    ? 'border-black bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={selectedShippingMethod === 'express'}
                        onChange={(e) => setSelectedShippingMethod(e.target.value)}
                        className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="font-medium text-gray-900">UPS EXPRESS SHIPPING</span>
                    </div>
                    <span className="font-bold text-gray-900">$30.00</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Payment</h2>
              <p className="text-gray-600 text-sm mb-6">All transactions are secure and encrypted.</p>
              
              <div className="space-y-4">
                {/* Credit Card Option */}
                <div className="border border-gray-300 rounded-md">
                  <label className="flex items-center justify-between p-4 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="font-medium text-gray-900">Credit card</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                      <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                      <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                      <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">AE</div>
                      <span className="text-gray-500 text-sm">+1</span>
                    </div>
                  </label>
                  
                  {paymentMethod === 'credit-card' && (
                    <div className="px-4 pb-4 space-y-4 bg-gray-50">
                      <input
                        type="text"
                        placeholder="Card number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Expiration date (MM / YY)"
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Security code"
                          value={securityCode}
                          onChange={(e) => setSecurityCode(e.target.value)}
                          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Name on card"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={useShippingAddress}
                          onChange={(e) => setUseShippingAddress(e.target.checked)}
                          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <span className="text-gray-700">Use shipping address as billing address</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* PayPal Option */}
                <div className="border border-gray-300 rounded-md">
                  <label className="flex items-center justify-between p-4 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="font-medium text-gray-900">PayPal</span>
                    </div>
                    <div className="text-blue-600 font-bold text-lg">PayPal</div>
                  </label>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className="mt-6">
                <button className="w-full bg-black text-white py-4 px-6 font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200">
                  Pay Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="bg-gray-50 px-8 py-12">
            <div className="sticky top-8">
              {/* Cart Items */}
              <div className="mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg bg-gray-200"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ${(parseFloat(item.price.replace('$', '').replace(' USD', '')) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {!isShippingAddressComplete ? (
                    <span className="text-gray-500">Enter shipping address</span>
                  ) : (
                    <span className="font-semibold">
                      ${selectedShippingMethod === 'standard' ? '21.00' : '30.00'}
                    </span>
                  )}
                </div>
                <div className="border-t border-gray-300 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <div className="text-right">
                      <span className="text-xs text-gray-500">USD</span>
                      <span className="text-lg font-semibold ml-1">
                        ${(subtotal + (isShippingAddressComplete ? (selectedShippingMethod === 'standard' ? 21 : 30) : 0)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;