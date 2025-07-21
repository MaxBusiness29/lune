import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface WinnersCirclePageProps {
  onBackToProducts: (product?: Product) => void;
}

function WinnersCirclePage({ onBackToProducts }: WinnersCirclePageProps) {
  const products: Product[] = [
    {
      id: 'indecisive-core-jacket',
      name: 'Indecisive Core Jacket',
      price: '$48.00 USD',
      image: '/IMG_5132.png'
    },
    {
      id: 'indecisive-core-hat',
      name: 'Indecisive Core Hat',
      price: '$35.00 USD',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'winners-circle-tshirt',
      name: 'Winners Circle T-Shirt',
      price: '$35.00 USD',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'tropical-excellence-tshirt',
      name: 'Tropical Excellence T-Shirt',
      price: '$37.00 USD',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

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
          <h1 className="text-4xl font-bold tracking-wider text-black">Indecisive</h1>
          <div className="flex-1 flex justify-end">
            <ShoppingBag className="w-6 h-6 text-black" />
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer" onClick={() => onBackToProducts(product)}>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seen In Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-lg font-medium text-gray-900 mb-12 tracking-wide">SEEN IN</h2>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex items-center space-x-16 animate-scroll">
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">AVNT</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">HYPEBEAST</span>
              <span className="text-4xl font-black tracking-tighter text-black whitespace-nowrap">COMPLEX</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">AVNT</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">HYPEBEAST</span>
              <span className="text-4xl font-black tracking-tighter text-black whitespace-nowrap">COMPLEX</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">AVNT</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">HYPEBEAST</span>
              <span className="text-4xl font-black tracking-tighter text-black whitespace-nowrap">COMPLEX</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">AVNT</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">HYPEBEAST</span>
              <span className="text-4xl font-black tracking-tighter text-black whitespace-nowrap">COMPLEX</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">AVNT</span>
              <span className="text-2xl font-bold tracking-wider text-black whitespace-nowrap">HYPEBEAST</span>
              <span className="text-4xl font-black tracking-tighter text-black whitespace-nowrap">COMPLEX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Waitlist for Monthly Drops</h2>
          <p className="text-lg text-gray-600 mb-4">
            The basics are always online, but once a month we do a new drop only for the Waitlist.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Enter your email to be notified next drop.
          </p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black text-white rounded-r-md hover:bg-gray-800 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story.</h2>
              <p className="text-lg text-gray-700 mb-6">
                Two friends. 300 dollars. Zero backup.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We didn't wait for permission. We built Indecisive from nothing but grit, late nights, and wild ambition.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Now? We've got one of the most loyal crews in the streetwear scene.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're not for everyone and that's the point.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This brand is our fight back. Against boring. Against safe. Against average.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                If the ads pulled you in, the real ones know — the product hits different.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We don't play by the rules.
              </p>
              <p className="text-lg text-gray-700">
                We make our own.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl font-bold text-gray-900 italic">Indecisive.</h3>
            </div>
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
    </div>
  );
}

export default WinnersCirclePage;