import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-center text-coffee-900 mb-4">Contactez-nous</h1>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Une question sur votre commande ? Besoin d'un conseil pour choisir votre café ? Notre équipe est là pour vous.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info Card */}
        <div className="bg-coffee-900 text-white rounded-2xl p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-8">Nos Coordonnées</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-coffee-400 mt-1" />
                <div>
                  <h3 className="font-bold text-coffee-200 mb-1">Téléphone</h3>
                  <p>+212 6 00 00 00 00</p>
                  <p className="text-sm text-coffee-400">Lun-Ven: 9h-18h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-coffee-400 mt-1" />
                <div>
                  <h3 className="font-bold text-coffee-200 mb-1">Email</h3>
                  <p>bonjour@coffeemaroc.com</p>
                  <p className="text-sm text-coffee-400">Réponse sous 24h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-coffee-400 mt-1" />
                <div>
                  <h3 className="font-bold text-coffee-200 mb-1">Siège</h3>
                  <p>123 Boulevard du Café</p>
                  <p>Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-coffee-800">
            <p className="text-coffee-400 text-sm">
              Suivez-nous sur les réseaux sociaux @coffeemaroc
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl border border-coffee-100 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-lg border-coffee-200 bg-coffee-50 px-4 py-3 focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-lg border-coffee-200 bg-coffee-50 px-4 py-3 focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
              <select 
                id="subject" 
                className="w-full rounded-lg border-coffee-200 bg-coffee-50 px-4 py-3 focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all"
              >
                <option>Question sur un produit</option>
                <option>Suivi de commande</option>
                <option>Partenariat</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full rounded-lg border-coffee-200 bg-coffee-50 px-4 py-3 focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all"
                placeholder="Comment pouvons-nous vous aider ?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-coffee-600 hover:bg-coffee-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Send className="h-5 w-5" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;