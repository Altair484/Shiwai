import React from 'react';
import { useInView } from 'react-intersection-observer';

// Données simulées des croquis (à remplacer par vos données réelles)
const sketchesData = [
    {
        id: 1,
        title: "Étude de visage",
        year: "2023",
        technique: "CRAYON GRAPHITE",
        image: "/assets/img/croquis1.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 2,
        title: "Main en mouvement",
        year: "2023",
        technique: "FUSAIN",
        image: "/assets/img/croquis2.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 3,
        title: "Carnet de voyage - Paris",
        year: "2022",
        technique: "ENCRE",
        image: "/assets/img/croquis3.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 4,
        title: "Étude de drapé",
        year: "2022",
        technique: "CRAYON GRAPHITE",
        image: "/assets/img/croquis4.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 5,
        title: "Figure assise",
        year: "2023",
        technique: "SANGUINE",
        image: "/assets/img/croquis5.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 6,
        title: "Exploration anatomique",
        year: "2022",
        technique: "FUSAIN ET CRAIE BLANCHE",
        image: "/assets/img/croquis6.jpg", // Fichier fictif, à remplacer
    },
];

const Sketches = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: introRef, inView: introInView } = useInView({
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
                    <h2 className="font-inter uppercase text-center responsive-subtitle">CROQUIS</h2>
                </div>
            </div>
        </main>
    );
};

export default Sketches;