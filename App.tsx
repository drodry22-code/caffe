import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatWidget from './components/ChatWidget';
import { Product, BlogPost } from './types';
import { Coffee, AlertTriangle } from 'lucide-react';

// Import Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import SpecialtyCoffee from './pages/SpecialtyCoffee';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';

const PIXABAY_API_KEY = '53310284-63c238865d80b3807c992f2a1';

// Initial data
const initialProducts: Product[] = [
  {
    id: 1,
    name: "Ethiopia Yirgacheffe",
    price: "145.00 DH",
    image: "https://cdn.pixabay.com/photo/2019/11/11/15/32/coffee-4618705_1280.jpg",
    category: "Café en grain",
    description: "Notes florales de jasmin et d'agrumes. Une acidité brillante parfaite pour le filtre."
  },
  {
    id: 2,
    name: "Colombia Huila",
    price: "130.00 DH",
    image: "https://cdn.pixabay.com/photo/2016/01/02/01/57/coffee-1117933_1280.jpg",
    category: "Café en grain",
    description: "Un corps rond avec des notes de caramel et de noix. Idéal pour l'espresso."
  },
  {
    id: 3,
    name: "Pack Découverte",
    price: "350.00 DH",
    image: "https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg",
    category: "Coffret",
    description: "3 cafés d'origines différentes pour explorer le monde du café de spécialité."
  },
  {
    id: 4,
    name: "Chemex 6 Tasses",
    price: "550.00 DH",
    image: "https://cdn.pixabay.com/photo/2015/07/02/10/26/coffee-828793_1280.jpg",
    category: "Accessoires",
    description: "L'iconique cafetière pour une extraction pure et élégante."
  }
];

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 erreurs à éviter lors de la préparation de votre café",
    excerpt: "Une mouture inadaptée ou une eau trop chaude peuvent ruiner votre tasse...",
    date: "12 Oct 2023",
    image: "https://cdn.pixabay.com/photo/2017/11/04/17/44/drink-2918397_1280.jpg"
  },
  {
    id: 2,
    title: "Comprendre le café de spécialité",
    excerpt: "Qu'est-ce qui différencie un café de commodité d'un grand cru ?",
    date: "28 Sep 2023",
    image: "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_1280.jpg"
  }
];

// 404 Fallback Component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center py-24 bg-coffee-50">
    <div className="bg-coffee-100 p-6 rounded-full mb-6">
      <AlertTriangle className="h-12 w-12 text-coffee-600" />
    </div>
    <h1 className="text-4xl font-bold text-coffee-900 mb-4">Page Introuvable</h1>
    <p className="text-gray-600 mb-8 text-lg">Oups ! La page que vous cherchez semble avoir disparu.</p>
    <a href="#home" className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
      Retour à l'accueil
    </a>
  </div>
);

function App() {
  // Routing State
  const [currentPage, setCurrentPage] = useState('home');
  
  // Data State
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [heroImage, setHeroImage] = useState<string>("https://cdn.pixabay.com/photo/2017/08/06/12/56/people-2591874_1280.jpg");
  const [aboutImage, setAboutImage] = useState<string>("https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_1280.jpg");
  const [specialtyImage, setSpecialtyImage] = useState<string>("https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg");

  // Handle Routing
  useEffect(() => {
    const handleHashChange = () => {
      // Get hash without '#'
      const hash = window.location.hash.slice(1);
      // Logic: If hash is empty or 'home', go to home. Otherwise use the hash.
      const page = (!hash || hash === 'home') ? 'home' : hash;
      
      console.log("Navigating to:", page); // Debug log
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    // Initial check
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle Images
  useEffect(() => {
    const fetchPixabayImage = async (query: string): Promise<string | null> => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&per_page=3`
        );
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
          return data.hits[0].largeImageURL || data.hits[0].webformatURL;
        }
      } catch (error) {
        console.error(`Error fetching image for ${query}:`, error);
      }
      return null;
    };

    const loadImages = async () => {
      // Fetch images in parallel
      const [hero, p1, p2, p3, p4, b1, b2, about, spec] = await Promise.all([
        fetchPixabayImage('coffee shop aesthetic'),
        fetchPixabayImage('roasted coffee beans bag'),
        fetchPixabayImage('specialty coffee beans'),
        fetchPixabayImage('coffee gift set'),
        fetchPixabayImage('pour over coffee brewing'),
        fetchPixabayImage('barista latte art'),
        fetchPixabayImage('coffee plant berries'),
        fetchPixabayImage('coffee team'),
        fetchPixabayImage('coffee tasting')
      ]);

      if (hero) setHeroImage(hero);
      if (about) setAboutImage(about);
      if (spec) setSpecialtyImage(spec);

      setProducts(prev => {
        const next = [...prev];
        if (p1) next[0].image = p1;
        if (p2) next[1].image = p2;
        if (p3) next[2].image = p3;
        if (p4) next[3].image = p4;
        return next;
      });

      setBlogPosts(prev => {
        const next = [...prev];
        if (b1) next[0].image = b1;
        if (b2) next[1].image = b2;
        return next;
      });
    };

    loadImages();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home products={products} blogPosts={blogPosts} heroImage={heroImage} />;
      case 'boutique':
        return <Shop products={products} />;
      case 'specialite':
        return <SpecialtyCoffee image={specialtyImage} />;
      case 'blog':
        return <Blog posts={blogPosts} />;
      case 'apropos':
        return <About image={aboutImage} />;
      case 'contact':
        return <Contact />;
      case 'plan-du-site':
        return <Sitemap />;
      default:
        // If the page doesn't exist in the switch, show Not Found instead of Home
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-coffee-950 text-coffee-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-coffee-400" />
                <span className="font-serif font-bold text-xl text-white">Coffee Maroc</span>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Votre destination pour le café de spécialité au Maroc. Qualité, passion et partage.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Boutique</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#boutique" className="hover:text-white transition-colors">Café en grain</a></li>
                <li><a href="#boutique" className="hover:text-white transition-colors">Café moulu</a></li>
                <li><a href="#boutique" className="hover:text-white transition-colors">Accessoires</a></li>
                <li><a href="#boutique" className="hover:text-white transition-colors">Cartes cadeaux</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Aide</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#apropos" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#plan-du-site" className="hover:text-white transition-colors">Plan du site</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Newsletter</h4>
              <p className="text-sm opacity-80 mb-4">Recevez nos conseils et offres exclusives.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-coffee-900 border-none text-white text-sm rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-coffee-500"
                />
                <button className="bg-coffee-600 hover:bg-coffee-500 text-white px-4 py-2 rounded-r-md text-sm font-bold">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-coffee-800 mt-12 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2023 Coffee Maroc. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;