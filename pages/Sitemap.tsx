import React from 'react';
import { Map, ChevronRight } from 'lucide-react';

const Sitemap: React.FC = () => {
  const sections = [
    {
      title: "Principal",
      links: [
        { name: "Accueil", href: "#home" },
        { name: "Boutique", href: "#boutique" },
        { name: "Café de spécialité", href: "#specialite" },
        { name: "Blog", href: "#blog" },
        { name: "À propos", href: "#apropos" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Compte Client",
      links: [
        { name: "Mon compte", href: "#" },
        { name: "Panier", href: "#" },
        { name: "Suivi de commande", href: "#" },
      ]
    },
    {
      title: "Informations Légales",
      links: [
        { name: "Conditions Générales de Vente", href: "#" },
        { name: "Politique de Confidentialité", href: "#" },
        { name: "Mentions Légales", href: "#" },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-coffee-100 p-3 rounded-full text-coffee-700">
          <Map className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-coffee-900">Plan du Site</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-coffee-100">
            <h2 className="text-2xl font-bold text-coffee-800 mb-6 border-b border-coffee-100 pb-2">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="flex items-center group text-gray-600 hover:text-coffee-600 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-coffee-300 group-hover:text-coffee-500 mr-2 transition-colors" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;