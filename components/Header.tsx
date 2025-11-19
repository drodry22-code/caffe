import React, { useState } from 'react';
import { Menu, ShoppingBag, User, Coffee, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Utilisation de #home pour l'accueil au lieu de # tout court pour éviter les confusions
  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Boutique', href: '#boutique' },
    { name: 'Café de spécialité', href: '#specialite' },
    { name: 'Blog', href: '#blog' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Coffee className="h-8 w-8 text-coffee-700" />
            <span className="font-serif font-bold text-xl text-coffee-900 tracking-tight">Coffee Maroc</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-coffee-700 hover:text-coffee-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4 text-coffee-700">
            <button className="p-2 hover:bg-coffee-100 rounded-full transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-coffee-100 rounded-full transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-0.5 bg-coffee-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-coffee-700 hover:text-coffee-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-coffee-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-coffee-700 hover:bg-coffee-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-coffee-100 mt-4 pt-4 flex space-x-4 px-3">
              <a href="#" className="flex items-center gap-2 text-coffee-700">
                <User className="h-5 w-5" /> Mon compte
              </a>
              <a href="#" className="flex items-center gap-2 text-coffee-700">
                <ShoppingBag className="h-5 w-5" /> Panier (2)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;