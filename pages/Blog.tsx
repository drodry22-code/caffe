import React from 'react';
import { BlogPost } from '../types';
import { Calendar, User } from 'lucide-react';

interface BlogProps {
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-coffee-900 mb-4">Le Journal du Barista</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Astuces, guides de préparation et actualités du monde du café.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-coffee-100 flex flex-col">
            <div className="h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  Par Coffee Maroc
                </div>
              </div>
              <h2 className="text-xl font-bold text-coffee-900 mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
              <button className="text-coffee-600 font-bold text-sm hover:text-coffee-800 text-left mt-auto">
                Lire la suite &rarr;
              </button>
            </div>
          </article>
        ))}
        {/* Duplicate for demo */}
        {posts.map(post => (
          <article key={`${post.id}-dup`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-coffee-100 flex flex-col">
            <div className="h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  Par Coffee Maroc
                </div>
              </div>
              <h2 className="text-xl font-bold text-coffee-900 mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
              <button className="text-coffee-600 font-bold text-sm hover:text-coffee-800 text-left mt-auto">
                Lire la suite &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;