
import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <motion.h2 
                    className="text-h2 mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Galerie
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Gallery items with animation */}
                    <motion.div 
                        className="gallery-item overflow-hidden rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="h-64 bg-gray-200 relative">
                            {/* Image placeholder */}
                        </div>
                        <div className="p-4">
                            <h3 className="text-h4 mt-2">Titre de l'œuvre</h3>
                            <p className="text-caption mt-2">Technique, dimensions</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}; 

export default GallerySection;
