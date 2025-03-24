
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useArtworks } from '@/hooks/use-artworks';
import { Category } from '@/types/artwork';
import { Loader } from 'lucide-react';
import GalleryItem from '@/components/Gallery/GalleryItem';
import CategoryFilter from '@/components/Gallery/CategoryFilter';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const { artworks, loading, error } = useArtworks(activeCategory);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Titre de la page */}
                <div
                    ref={titleRef}
                    className={`mb-12 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">GALLERIE</h2>
                </div>

                {/* Filtres par catégorie */}
                <CategoryFilter 
                    activeCategory={activeCategory} 
                    setActiveCategory={setActiveCategory} 
                />

                {/* État de chargement */}
                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader className="animate-spin" size={32} />
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="font-inter text-red-500">{error}</p>
                    </div>
                ) : (
                    <>
                        {/* Grille d'œuvres */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {artworks.map((artwork, index) => (
                                <GalleryItem 
                                    key={artwork.id} 
                                    artwork={artwork} 
                                    index={index} 
                                />
                            ))}
                        </div>

                        {/* Message si aucun résultat */}
                        {artworks.length === 0 && (
                            <div className="text-center py-12">
                                <p className="font-inter text-gray">Aucune œuvre trouvée dans cette catégorie.</p>
                            </div>
                        )}
                    </>
                )}

                {/* Contact pour acquisition */}
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
