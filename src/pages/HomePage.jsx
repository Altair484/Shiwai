import React from 'react';
import { useInView } from 'react-intersection-observer';

// Importation des images (à adapter selon votre structure de projet)
const femmeTibetaine = '/img/femme_tibetaine.jpg';
const petiteFilleDentelle = '/img/petite_fille_a_la_dentelle.jpg';
const laFoi = '/img/la-foi.jpg';
const iris = '/img/iris_mamie.jpeg';
const fraichePeche = '/img/fraiche_peche.jpg';

const HomePage = () => {
    // Configuration des observateurs d'intersection
    const { ref: introRef, inView: introInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: portraitsRef, inView: portraitsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: firstLineRef, inView: firstLineInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: quoteSectionRef, inView: quoteSectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: secondLineRef, inView: secondLineInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: natureRef, inView: natureInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: thirdLineRef, inView: thirdLineInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main>
            {/* Introduction Section */}
            <section id="intro-section" className='relative'>
                <div
                    ref={introRef}
                    className={`flex flex-col pb-16 mix-blend-difference sticky top-[95px] ${introInView ? 'fade-in' : ''}`}
                    id="main-title-row"
                >
                    <div className="w-full">
                        <h1 className="text-center font-cormorant-sc text-h1 pb-6 text-white">SHIWAI</h1>
                    </div>
                    <div className="w-full">
                        <h2 className="text-center font-inter uppercase pb-12 text-2xl text-white">AQUARELLES</h2>
                    </div>
                </div>
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex justify-center">
                        <div className="w-full lg:w-7/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={femmeTibetaine} alt="Femme tibétaine" />
                                <p className="font-inter font-normal text-right pt-3 text-gray">
                                    Femme tibétaine<br />53x38 CM 2022<br />AQUARELLE<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portraits Section Title */}
            <section className="overflow-hidden">
                <div
                    ref={portraitsRef}
                    className={`mx-auto max-w-retina px-4 ${portraitsInView ? 'fade-left' : ''}`}
                >
                    <div className="flex">
                        <div className="w-full">
                            <h2 className="font-cormorant text-right py-12 text-h2 font-regular">Portraits</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider Line */}
            <section className="overflow-hidden">
                <div
                    ref={firstLineRef}
                    className={`mx-auto max-w-retina px-4 ${firstLineInView ? 'fade-right' : ''}`}
                >
                    <div className="flex">
                        <div className="w-8/12 border-t border-dark">
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portraits Content Section */}
            <section>
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex flex-wrap justify-end pt-12 gap-4">
                        <div className="w-full lg:w-6/12 lg:ml-1/12">
                            <p className={`font-cormorant font-light py-3 text-body sticky top-[95px] ${firstLineInView ? 'fade-right' : ''}`}>
                                L'aquarelle capture l'essence de l'âme à travers des couleurs douces et des dégradés subtils.
                                Dans mes portraits, j'immortalise l'émotion et la beauté intérieure de mes sujets.
                                Chaque coup de pinceau dévoile une histoire, chaque nuance révèle une personnalité.
                            </p>
                        </div>

                        <div className="w-full lg:w-5/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={petiteFilleDentelle} alt="Petite fille à la dentelle" />
                                <p className={`font-inter font-normal text-right pt-3 text-gray ${firstLineInView ? 'fade-right' : ''}`}>
                                    Petite fille à la dentelle<br />30x40 CM 2022<br />Aquarelle
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section
                ref={quoteSectionRef}
                className={`${quoteSectionInView ? 'fade-in' : ''}`}
            >
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex pt-12 gap-4">
                        <div className="w-full lg:w-5/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={laFoi} alt="La foi" />
                                <p className={`font-inter font-normal text-right pt-3 text-gray ${quoteSectionInView ? 'fade-right' : ''}`}>
                                    La foi<br />30x40 CM 2022<br />Aquarelle
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-7/12">
                            <p className="sticky top-[95px] font-cormorant font-light py-3 text-h3 text-right">
                                L'aquarelle capture le temps, à la fois le moment présent dans le dessin et le moment du dessin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider Line */}
            <section>
                <div
                    ref={secondLineRef}
                    className={`mx-auto max-w-retina px-4 ${secondLineInView ? 'fade-right' : ''}`}
                >
                    <div className="flex pb-12">
                        <div className="w-8/12 border-t border-dark">
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nature Morte Section */}
            <section>
                <div
                    ref={natureRef}
                    className={`mx-auto max-w-retina px-4 ${natureInView ? 'fade-right' : ''}`}
                >
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full lg:w-5/12">
                            <h2 className="font-cormorant text-left py-12 text-h2 font-regular">Nature<br />Morte</h2>
                            <img className="w-full slide-hover" src={iris} alt="L'iris de mamie" />
                        </div>

                        <div className="w-full lg:w-6/12 lg:ml-1/12">
                            <p className={`font-cormorant font-light text-body py-3 sticky top-[95px] ${natureInView ? 'fade-left' : ''}`}>
                                Je célèbre la beauté éphémère de la nature figée dans le temps.
                                Chaque objet inanimé devient un sujet vibrant et captivant, révélant ses textures délicates et ses nuances subtiles.
                                Chaque pétale, chaque feuille, chaque fruit est immortalisé.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Section */}
            <section className="overflow-hidden">
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex justify-end">
                        <div
                            ref={thirdLineRef}
                            className={`w-6/12 border-t border-dark ${thirdLineInView ? 'fade-left' : ''}`}
                        >
                            <span></span>
                        </div>
                    </div>

                    <div className="flex justify-end pt-12">
                        <div className="w-full lg:w-8/12 lg:ml-4/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={fraichePeche} alt="Fraîchement pêché" />
                                <p className={`font-inter font-normal text-right pt-3 text-gray ${thirdLineInView ? 'fade-right' : ''}`}>
                                    Fraîchement pêché<br />53x38 CM 2022<br />Aquarelle
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex pb-12">
                        <div className="w-8/12">
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;