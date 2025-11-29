import React from 'react';
import { Map, ChevronRight } from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: "Navigation principale",
      description: "Accédez directement aux pages clés du site.",
      links: [
        { name: "Accueil", href: "#home", details: "Découvrir l'univers Coffee Maroc et nos nouveautés." },
        { name: "Boutique", href: "#boutique", details: "Parcourir cafés en grain, mouture et accessoires." },
        { name: "Café de spécialité", href: "#specialite", details: "Comprendre nos approches de torréfaction et d'origine." },
        { name: "Blog", href: "#blog", details: "Lire conseils, recettes et actualités café." },
        { name: "À propos", href: "#apropos", details: "Rencontrer l'équipe et notre vision du café." },
        { name: "Contact", href: "#contact", details: "Nous écrire ou planifier une dégustation." },
      ]
    },
    {
      title: "Expérience café",
      description: "Des raccourcis pour préparer et choisir votre café.",
      links: [
        { name: "Sélection des origines", href: "#boutique", details: "Explorer nos origines phares et packs découverte." },
        { name: "Guide extraction lente", href: "#specialite", details: "Conseils pour Chemex, V60 et French Press." },
        { name: "Inspiration latte art", href: "#blog", details: "Astuces barista et idées créatives." }
      ]
    },
    {
      title: "Support & informations",
      description: "Retrouvez les liens utiles pour rester informé.",
      links: [
        { name: "Plan du site", href: "#plan-du-site", details: "Vue d'ensemble des pages et sections." },
        { name: "Service client", href: "#contact", details: "Besoin d'aide ? Envoyez-nous un message." },
        { name: "Actualités & offres", href: "#home", details: "Consultez les nouveautés et promotions." }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-coffee-100 p-3 rounded-full text-coffee-700">
          <Map className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-coffee-500 font-semibold">Plan du site</p>
          <h1 className="text-4xl font-serif font-bold text-coffee-900">Tout Coffee Maroc, en un clin d'œil</h1>
        </div>
      </div>
      <p className="text-gray-600 max-w-3xl mb-12 text-lg">
        Parcourez les pages clés et les raccourcis pratiques pour naviguer facilement sur le site. Chaque lien vous
        dirige directement vers la section correspondante.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sitemapSections.map((section, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-coffee-100 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-coffee-800 mb-1">{section.title}</h2>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-coffee-50 text-coffee-600 flex items-center justify-center text-sm font-semibold">
                {section.links.length}
              </div>
            </div>
            <ul className="space-y-3 mt-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-start gap-2 p-3 rounded-lg hover:bg-coffee-50 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mt-1 text-coffee-300 group-hover:text-coffee-600 transition-colors" />
                    <div>
                      <p className="font-semibold text-coffee-800 group-hover:text-coffee-900 transition-colors">{link.name}</p>
                      <p className="text-sm text-gray-500 leading-snug">{link.details}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-coffee-50 border border-coffee-100 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-wide text-coffee-500 font-semibold">Besoin d'aide ?</p>
          <h3 className="text-2xl font-serif font-bold text-coffee-900 mt-1">Une question sur nos cafés ou votre commande ?</h3>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Contactez-nous pour un conseil personnalisé ou rejoignez-nous en boutique pour une dégustation. Nous
            répondons sous 24 heures.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="#contact"
            className="bg-coffee-700 hover:bg-coffee-800 text-white px-5 py-3 rounded-lg font-semibold transition-colors"
          >
            Écrire au service client
          </a>
          <a
            href="#boutique"
            className="px-5 py-3 rounded-lg font-semibold text-coffee-800 bg-white border border-coffee-200 hover:border-coffee-400 transition-colors"
          >
            Découvrir la boutique
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;