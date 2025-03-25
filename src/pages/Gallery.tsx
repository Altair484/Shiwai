
import React, { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useArtworks } from '@/hooks/use-artworks';
import { Category } from '@/types/artwork';
import GalleryItem from '@/components/Gallery/GalleryItem';
import CategoryFilter from '@/components/Gallery/CategoryFilter';
import { Skeleton } from '@/components/ui/skeleton';

// Skeleton component for loading state
const GallerySkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6).fill(0).map((_, index) => (
        <div key={index} className="space-y-3">
          <Skeleton className="w-full h-64" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-1/4 h-4" />
        </div>
      ))}
    </div>
  );
};

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const { artworks, loading, error } = useArtworks(activeCategory);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleCategoryChange = useCallback((category: Category) => {
      setActiveCategory(category);
    }, []);

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Page title */}
                <div
                    ref={titleRef}
                    className={`mb-12 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">GALERIE</h2>
                </div>

                {/* Category filters */}
                <CategoryFilter 
                    activeCategory={activeCategory} 
                    setActiveCategory={handleCategoryChange}
                />

                {/* Loading state */}
                {loading ? (
                    <GallerySkeleton />
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="font-inter text-red-500">{error}</p>
                    </div>
                ) : (
                    <>
                        {/* Artwork grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {artworks.map((artwork, index) => (
                                <GalleryItem 
                                    key={artwork.id} 
                                    artwork={artwork} 
                                    index={index} 
                                />
                            ))}
                        </div>

                        {/* Empty state */}
                        {artworks.length === 0 && (
                            <div className="text-center py-12">
                                <p className="font-inter text-gray">Aucune œuvre trouvée dans cette catégorie.</p>
                            </div>
                        )}
                    </>
                )}

                {/* Contact CTA */}
                <div className="mt-16 text-center border-t border-dark pt-12">
                    <h3 className="font-cormorant font-medium text-2xl mb-4">Intéressé par une œuvre ?</h3>
                    <p className="font-inter mb-6 max-w-2xl mx-auto">
                        Pour toute information concernant les prix, la disponibilité ou pour une commande sur mesure,
                        n'hésitez pas à me contacter.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-dark text-white font-inter py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
                    >
                        Contactez-moi
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Gallery;
