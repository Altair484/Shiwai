
export type Artwork = {
  id: string;
  title: string;
  description: string;
  price: number;
  dimensions: string;
  technique: string;
  year: string;
  category: string;
  image_url: string;
  sold: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export type Category = 'all' | 'portrait' | 'nature-morte' | 'paysage';
