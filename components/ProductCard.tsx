import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-coffee-100 group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-coffee-800 uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
          <span className="text-xs text-gray-500 ml-1">(24)</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-coffee-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-coffee-700">{product.price}</span>
          <button className="bg-coffee-600 hover:bg-coffee-700 text-white p-2 rounded-full transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;