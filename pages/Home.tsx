import React from 'react';
import { ArrowRight, Truck, ShieldCheck, Leaf } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product, BlogPost } from '../types';

interface HomeProps {
  products: Product[];
  blogPosts: BlogPost[];
  heroImage: string;
}

const Home: React.FC<HomeProps> = ({ products, blogPosts, heroImage }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-coffee-900 h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Coffee background" 
            className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            L'excellence du café<br />chez vous au Maroc
          </h1>
          <p className="text-xl text-coffee-50 mb-8 max-w-2xl drop-shadow-md font-medium">
            Découvrez notre sélection de cafés de spécialité, torréfiés artisanalement pour révéler les meilleurs arômes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#boutique" className="bg-coffee-500 hover:bg-coffee-600 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-center">
              Voir la boutique
            </a>
            <a href="#specialite" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-coffee-900 px-8 py-3 rounded-full font-bold transition-colors shadow-lg text-center">
              Nos guides
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-coffee-100 p-3 rounded-full text-coffee-700">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-coffee-900">Livraison Rapide</h3>
                <p className="text-sm text-gray-600">Partout au Maroc en 24/48h</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-coffee-100 p-3 rounded-full text-coffee-700">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-coffee-900">Café Frais</h3>
                <p className="text-sm text-gray-600">Torréfié localement chaque semaine</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-coffee-100 p-3 rounded-full text-coffee-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-coffee-900">Paiement Sécurisé</h3>
                <p className="text-sm text-gray-600">Par carte ou à la livraison</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-2">Nos Incontournables</h2>
            <p className="text-gray-600">Une sélection de nos meilleurs grains du moment.</p>
          </div>
          <a href="#boutique" className="hidden md:flex items-center text-coffee-600 font-bold hover:text-coffee-800">
            Tout voir <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <a href="#boutique" className="inline-flex items-center text-coffee-600 font-bold hover:text-coffee-800">
            Tout voir <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-10 text-center">Le Journal du Barista</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map(post => (
              <div key={post.id} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="md:w-2/5 h-48 md:h-auto">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <span className="text-xs font-bold text-coffee-500 uppercase tracking-wider mb-2">{post.date}</span>
                  <h3 className="font-bold text-xl text-coffee-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <a href="#blog" className="text-coffee-700 font-bold text-sm hover:underline">Lire l'article</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;