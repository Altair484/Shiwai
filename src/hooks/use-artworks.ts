
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Artwork, Category } from '@/types/artwork';

export const useArtworks = (category: Category = 'all') => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        
        let query = supabase.from('artworks').select('*');
        
        if (category !== 'all') {
          query = query.eq('category', category);
        }
        
        const { data, error } = await query.order('created_at', { ascending: false });
        
        if (error) {
          throw new Error(error.message);
        }
        
        setArtworks(data as Artwork[]);
      } catch (err) {
        console.error('Error fetching artworks:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [category]);

  return { artworks, loading, error };
};

export const useArtwork = (id: string) => {
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('artworks')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) {
          throw new Error(error.message);
        }
        
        setArtwork(data as Artwork);
      } catch (err) {
        console.error('Error fetching artwork:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArtwork();
    }
  }, [id]);

  return { artwork, loading, error };
};
