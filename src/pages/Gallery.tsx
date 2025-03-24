
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useArtworks } from '@/hooks/use-artworks';
import { Category } from '@/types/artwork';
import { Loader } from 'lucide-react';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const { artworks, loading, error } = useArtworks(activeCategory);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: categoriesRef, inView: categoriesInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Format du prix en euros
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100);
    };

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
                <div
                    ref={categoriesRef}
                    className={`flex justify-center mb-12 ${categoriesInView ? 'fade-in' : ''}`}
                >
                    <div className="inline-flex border-b border-dark">
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'all' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            Toutes
                        </button>
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'portrait' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('portrait')}
                        >
                            Portraits
                        </button>
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'nature-morte' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('nature-morte')}
                        >
                            Nature Morte
                        </button>
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'paysage' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('paysage')}
                        >
                            Paysages
                        </button>
                    </div>
                </div>

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
                            {artworks.map((artwork, index) => {
                                // Utiliser useInView pour chaque œuvre
                                const { ref, inView } = useInView({
                                    triggerOnce: true,
                                    threshold: 0.1,
                                    delay: 100 * index, // Délai progressif pour créer un effet de cascade
                                });

                                return (
                                    <div
                                        key={artwork.id}
                                        ref={ref}
                                        className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                    >
                                        <Link to={`/aquarelles/${artwork.id}`} className="group block">
                                            <div className="overflow-hidden">
                                                <img
                                                    src={artwork.image_url}
                                                    alt={artwork.title}
                                                    className="w-full h-64 object-cover transition-transform duration-800 ease-in-out group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="pt-3">
                                                <h3 className="font-cormorant text-lg font-medium">{artwork.title}</h3>
                                                <p className="font-inter text-sm text-gray mt-1">
                                                    {artwork.dimensions} {artwork.year}<br />
                                                    {artwork.technique}
                                                </p>
                                                <p className="font-inter text-sm font-medium mt-2">
                                                    {artwork.sold ? (
                                                        <span className="text-red-500">Vendu</span>
                                                    ) : (
                                                        <span>{formatPrice(artwork.price)}</span>
                                                    )}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
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
