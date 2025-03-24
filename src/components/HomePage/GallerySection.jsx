const GallerySection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <h2 className="text-h2 mb-8 md:mb-12">
                    Galerie
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Vos items de galerie */}
                    <div className="gallery-item">
                        <h3 className="text-h4 mt-4">Titre de l'œuvre</h3>
                        <p className="text-caption mt-2">Technique, dimensions</p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 