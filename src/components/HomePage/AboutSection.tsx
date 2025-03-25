
import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <h2 className="text-h2 mb-8 md:mb-12">
                    À propos
                </h2>
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
            </div>
        </section>
    );
}; 

export default AboutSection;
