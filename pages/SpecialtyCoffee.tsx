import React from 'react';
import { Award, Globe, Thermometer } from 'lucide-react';

interface SpecialtyCoffeeProps {
  image: string;
}

const SpecialtyCoffee: React.FC<SpecialtyCoffeeProps> = ({ image }) => {
  return (
    <div>
      {/* Header */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={image} 
            alt="Cupping café" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-coffee-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Le Café de Spécialité</h1>
          <p className="text-xl text-coffee-100 max-w-2xl mx-auto">Plus qu'une boisson, une expérience sensorielle unique.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-600 mx-auto mb-16">
          <p className="lead text-2xl text-coffee-800 font-serif mb-8">
            Le terme "café de spécialité" désigne des cafés d'élite, notés au-dessus de 80/100 par des dégustateurs certifiés (Q-Graders).
          </p>
          <p className="mb-6">
            Contrairement au café industriel, le café de spécialité est traçable de la ferme à la tasse. Il pousse dans des terroirs spécifiques, est récolté à la main à maturité parfaite, et torréfié avec une précision scientifique pour révéler son profil aromatique unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-coffee-700">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-coffee-900 mb-3">Score &gt; 80</h3>
            <p className="text-sm text-gray-600">
              Selon l'échelle de la SCA (Specialty Coffee Association), seuls les meilleurs grains atteignent ce standard.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-coffee-700">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-coffee-900 mb-3">Terroir & Traçabilité</h3>
            <p className="text-sm text-gray-600">
              Nous connaissons le nom du fermier, l'altitude de la plantation et la méthode de traitement.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-coffee-700">
              <Thermometer className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-coffee-900 mb-3">Torréfaction Artisanale</h3>
            <p className="text-sm text-gray-600">
              Une cuisson douce qui respecte le grain pour ne pas brûler ses arômes délicats (floral, fruité, épicé).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCoffee;