import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { Filter } from 'lucide-react';

interface ShopProps {
  products: Product[];
}

const Shop: React.FC<ShopProps> = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-serif font-bold text-coffee-900 mb-4">Notre Boutique</h1>
          <p className="text-gray-600 max-w-2xl">
            Explorez notre collection complète de cafés de spécialité, d'équipements et d'accessoires. 
            Chaque grain est sélectionné avec soin pour vous offrir une expérience unique.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border border-coffee-200 rounded-lg text-coffee-700 hover:bg-coffee-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filtrer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Duplicating products to simulate a larger shop for demo purposes */}
        {products.map(product => (
          <ProductCard key={`${product.id}-dup`} product={{...product, id: product.id + 100}} />
        ))}
      </div>
    </div>
  );
};

export default Shop;