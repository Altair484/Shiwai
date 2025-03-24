import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Données simulées des œuvres (à remplacer par vos données réelles)
const artworksData = [
    {
        id: 1,
        title: "Femme tibétaine",
        dimensions: "53x38 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "portrait",
        image: "/assets/img/femme_tibetaine.jpg",
    },
    {
        id: 2,
        title: "Petite fille à la dentelle",
        dimensions: "30x40 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "portrait",
        image: "/assets/img/petite_fille_a_la_dentelle.jpg",
    },
    {
        id: 3,
        title: "La foi",
        dimensions: "30x40 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "portrait",
        image: "/assets/img/la-foi.jpg",
    },
    {
        id: 4,
        title: "L'iris de mamie",
        dimensions: "40x30 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "nature-morte",
        image: "/assets/img/l_iris_de_mamie.jpeg",
    },
    {
        id: 5,
        title: "Fraîchement pêché",
        dimensions: "53x38 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "nature-morte",
        image: "/assets/img/fraiche_peche.jpg",
    },
    {
        id: 6,
        title: "Montagnes au crépuscule",
        dimensions: "50x35 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "paysage",
        image: "/assets/img/paysage1.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 7,
        title: "Rivière calme",
        dimensions: "45x30 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "paysage",
        image: "/assets/img/paysage2.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 8,
        title: "Bouquet de pivoines",
        dimensions: "35x25 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "nature-morte",
        image: "/assets/img/pivoine.jpg", // Fichier fictif, à remplacer
    }
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredArtworks, setFilteredArtworks] = useState([]);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: categoriesRef, inView: categoriesInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Effet pour filtrer les œuvres selon la catégorie active
    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredArtworks(artworksData);
        } else {
            setFilteredArtworks(artworksData.filter(artwork => artwork.category === activeCategory));
        }
    }, [activeCategory]);

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

                {/* Grille d'œuvres */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArtworks.map((artwork, index) => {
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
                                <div className="group">
                                    <div className="overflow-hidden">
                                        <img
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="w-full transition-transform duration-800 ease-in-out group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="font-cormorant text-lg font-medium">{artwork.title}</h3>
                                        <p className="font-inter text-sm text-gray mt-1">
                                            {artwork.dimensions} {artwork.year}<br />
                                            {artwork.technique}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Message si aucun résultat */}
                {filteredArtworks.length === 0 && (
                    <div className="text-center py-12">
                        <p className="font-inter text-gray">Aucune œuvre trouvée dans cette catégorie.</p>
                    </div>
                )}

                {/* Contact pour acquisition */}
                <div className="mt-16 text-center border-t border-dark pt-12">
                    <h3 className="font-cormorant font-medium text-2xl mb-4">Intéressé par une œuvre ?</h3>
                    <p className="font-inter mb-6 max-w-2xl mx-auto">
                        Pour toute information concernant les prix, la disponibilité ou pour une commande sur mesure,
                        n'hésitez pas à me contacter.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-dark text-white font-inter py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
                    >
                        Contactez-moi
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Gallery;