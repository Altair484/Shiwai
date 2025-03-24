import React from 'react';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import GallerySection from './GallerySection';
import ContactSection from './ContactSection';

const HomePage = () => {
    return (
        <main className="w-full">
            {/* Section Intro */}
            <IntroSection>
                <h1 className="text-h1 text-white mb-4 sm:mb-6">SHIWAI</h1>
                <h2 className="text-h4 text-white">aquarelles</h2>
            </IntroSection>

            {/* Section À propos */}
            <AboutSection>
                <h2 className="text-h2 mb-8 md:mb-12">À propos</h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <p className="text-body mb-6">
                            L'art de l'aquarelle est un voyage constant entre contrôle et lâcher-prise...
                        </p>
                    </div>
                    <div>
                        <h3 className="text-h3 mb-6">Parcours</h3>
                        <p className="text-body mb-4">
                            Passionnée par l'art depuis mon plus jeune âge...
                        </p>
                    </div>
                </div>
            </AboutSection>

            {/* Section Galerie */}
            <GallerySection>
                <h2 className="text-h2 mb-8 md:mb-12">Galerie</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="gallery-item">
                        <h3 className="text-h4 mt-4">Titre de l'œuvre</h3>
                        <p className="text-caption mt-2">Aquarelle, 30x40cm</p>
                    </div>
                    {/* Autres items de galerie... */}
                </div>
            </GallerySection>

            {/* Section Contact */}
            <ContactSection>
                <h2 className="text-h2 mb-8 md:mb-12">Contact</h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-body mb-8 text-center">
                        Pour toute demande d'information ou commande...
                    </p>
                    <form className="space-y-6">
                        {/* Champs du formulaire */}
                        <p className="text-caption mt-4">* Champs obligatoires</p>
                    </form>
                </div>
            </ContactSection>
        </main>
    );
};

export default HomePage; 