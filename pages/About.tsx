import React from 'react';
import { Heart, Users, Coffee } from 'lucide-react';

interface AboutProps {
  image: string;
}

const About: React.FC<AboutProps> = ({ image }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            <img src={image} alt="Notre équipe" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold text-coffee-900 mb-6">Notre Histoire</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Né d'une passion commune pour le café de qualité, **Coffee Maroc** a été fondé en 2023 avec une mission simple : démocratiser le café de spécialité au Maroc.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nous parcourons le monde (virtuellement et physiquement) pour sélectionner les meilleurs grains verts, que nous torréfions localement à Casablanca pour garantir une fraîcheur absolue.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-coffee-50 p-4 rounded-xl">
                <h3 className="font-bold text-coffee-900 text-2xl mb-1">100%</h3>
                <p className="text-sm text-gray-600">Arabica de Spécialité</p>
              </div>
              <div className="bg-coffee-50 p-4 rounded-xl">
                <h3 className="font-bold text-coffee-900 text-2xl mb-1">24h</h3>
                <p className="text-sm text-gray-600">Délai de livraison</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-100 pt-16">
          <h2 className="text-3xl font-serif font-bold text-center text-coffee-900 mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-coffee-100 rounded-full text-coffee-700 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 mb-2">Passion</h3>
              <p className="text-gray-600">Nous aimons le café et nous aimons partager cette passion avec notre communauté.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-coffee-100 rounded-full text-coffee-700 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 mb-2">Communauté</h3>
              <p className="text-gray-600">Nous soutenons les producteurs locaux et créons du lien entre les amateurs de café.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-coffee-100 rounded-full text-coffee-700 mb-4">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-coffee-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Nous ne faisons aucun compromis sur la qualité, de la cerise à la tasse.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;