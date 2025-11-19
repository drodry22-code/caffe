export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
