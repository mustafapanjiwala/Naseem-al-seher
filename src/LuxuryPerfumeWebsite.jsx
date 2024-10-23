import React, { useState } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Midnight Oud",
    price: "$295",
    description: "A mesmerizing blend of rare agarwood, damascus rose, and amber",
    images: ["/Images/_DSC0299.JPG","/Images/_DSC0300.JPG","/Images/_DSC0301.JPG","/Images/_DSC0302.JPG"]
  },
  {
    id: 2,
    name: "Royal Saffron",
    price: "$320",
    description: "Precious saffron intertwined with vanilla and royal jasmine",
    images: Array(4).fill("/api/placeholder/400/500")
  },
  {
    id: 3,
    name: "Desert Rose",
    price: "$275",
    description: "Rare damascus rose with hints of frankincense and musk",
    images: Array(4).fill("/api/placeholder/400/500")
  },
  {
    id: 4,
    name: "Golden Amber",
    price: "$285",
    description: "Rich amber accords with precious woods and vanilla",
    images: Array(4).fill("/api/placeholder/400/500")
  },
  {
    id: 5,
    name: "Sultan's Musk",
    price: "$310",
    description: "Pure white musk blended with oriental spices",
    images: Array(4).fill("/api/placeholder/400/500")
  },
  {
    id: 6,
    name: "Divine Narcissus",
    price: "$330",
    description: "Narcissus absolute with precious woods and amber",
    images: Array(4).fill("/api/placeholder/400/500")
  }
];

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-96">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">{product.price}</span>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

const LuxuryPerfumeWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          src="/temp.mp4"
          alt="Luxury Perfume"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-6xl font-serif text-white mb-6">
              Arabian Luxury Perfumes
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover our collection of premium Arabic fragrances, 
              crafted with the finest ingredients from the East
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-serif text-center mb-16">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">About Us</h3>
            <p className="text-gray-300">
              Crafting exceptional fragrances that embody the richness and mystique 
              of Arabian perfumery traditions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <p className="text-gray-300">Email: contact@luxuryarabianperfumes.com</p>
            <p className="text-gray-300">Phone: +971 4 123 4567</p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryPerfumeWebsite;