
import React from 'react';
import IntroSection from '@/components/HomePage/IntroSection';
import AboutSection from '@/components/HomePage/AboutSection';
import GallerySection from '@/components/HomePage/GallerySection';
import ContactSection from '@/components/HomePage/ContactSection';

const HomePage = () => {
    return (
        <main className="w-full">
            {/* Section Intro */}
            <IntroSection />

            {/* Section À propos */}
            <AboutSection />

            {/* Section Galerie */}
            <GallerySection />

            {/* Section Contact */}
            <ContactSection />
        </main>
    );
};

export default HomePage;
