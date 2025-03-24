import React from 'react';
import { useInView } from 'react-intersection-observer';

// Importation d'une image (à adapter selon votre structure de projet)
const artistPhoto = '/assets/img/yi_expo.jpg';

const About = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: bioRef, inView: bioInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Titre de la page */}
                <div
                    ref={titleRef}
                    className={`mb-16 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">À PROPOS</h2>
                </div>

                <div className="flex flex-wrap">
                    {/* Biographie de l'artiste */}
                    <div className="w-full lg:w-1/2 lg:pr-12">
                        <div
                            ref={bioRef}
                            className={`${bioInView ? 'fade-right' : ''}`}
                        >
                            <h3 className="font-cormorant font-semibold text-3xl mb-8">Biographie</h3>

                            <div className="font-cormorant font-light responsive-h5 space-y-6">
                                <p>
                                    Née en Chine, j'ai développé très tôt une passion pour l'art, en particulier l'aquarelle.
                                    Après des études d'art à l'université, j'ai décidé de m'installer en France pour poursuivre
                                    ma carrière artistique et m'imprégner de nouvelles influences.
                                </p>

                                <p>
                                    Mon travail se concentre principalement sur trois thèmes : les portraits qui capturent l'essence
                                    des personnes, les natures mortes qui célèbrent la beauté des objets quotidiens, et les paysages
                                    qui traduisent l'atmosphère unique de lieux qui m'inspirent.
                                </p>

                                <p>
                                    L'aquarelle est pour moi le médium idéal pour exprimer la délicatesse et la profondeur
                                    des émotions. Sa transparence et sa fluidité me permettent de jouer avec la lumière et
                                    de créer des œuvres à la fois vibrantes et subtiles.
                                </p>

                                <p>
                                    Depuis quatre ans, j'expose régulièrement mon travail en France et à l'international,
                                    et j'ai eu l'honneur de recevoir plusieurs prix pour mes créations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Photo de l'artiste */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                        <div
                            ref={imageRef}
                            className={`${imageInView ? 'fade-left' : ''}`}
                        >
                            <img
                                src={artistPhoto}
                                alt="Shiwai lors d'une exposition"
                                className="w-full slide-hover mb-4"
                            />
                            <p className="font-inter text-right text-gray">
                                Exposition à la Galerie d'Art Moderne, Paris, 2022
                            </p>
                        </div>
                    </div>
                </div>

                {/* Citation de l'artiste */}
                <div className="mt-16 border-t border-dark pt-12">
                    <blockquote className="font-cormorant responsive-h4 text-center italic max-w-3xl mx-auto">
                        "L'aquarelle est comme la vie elle-même : imprévisible, fluide, et d'une beauté qui se révèle pleinement
                        dans l'acceptation de l'imperfection."
                    </blockquote>
                    <p className="text-right font-inter text-gray mt-6">— Shiwai</p>
                </div>

                {/* Parcours et expositions */}
                <div className="mt-16">
                    <h3 className="font-cormorant font-semibold text-3xl mb-8">Expositions et prix</h3>

                    <div className="space-y-6 font-inter">
                        <div className="flex flex-wrap border-b border-gray pb-4">
                            <div className="w-full md:w-1/4 font-medium">2024</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Galerie des Beaux-Arts, Lyon — <span className="italic">Exposition collective "Résonances Aquatiques"</span></p>
                                <p className="text-gray">Prix du public pour "Femme tibétaine"</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap border-b border-gray pb-4">
                            <div className="w-full md:w-1/4 font-medium">2023</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Maison de la Culture, Grenoble — <span className="italic">Exposition personnelle "Reflets et Transparences"</span></p>
                                <p className="text-gray">15 œuvres exposées, 3 mois</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap border-b border-gray pb-4">
                            <div className="w-full md:w-1/4 font-medium">2022</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Salon International de l'Aquarelle, Paris — <span className="italic">Participation</span></p>
                                <p className="text-gray">Mention spéciale du jury pour la série "Natures mortes"</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap pb-4">
                            <div className="w-full md:w-1/4 font-medium">2021</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Centre d'Art Contemporain, Marseille — <span className="italic">Exposition collective "Nouveaux Talents"</span></p>
                                <p className="text-gray">Première exposition en France</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formation */}
                <div className="mt-16 border-t border-dark pt-12">
                    <h3 className="font-cormorant font-semibold text-3xl mb-8">Formation</h3>

                    <div className="space-y-6 font-inter">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 font-medium">2018-2020</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">École des Beaux-Arts de Paris</p>
                                <p className="text-gray">Master en Arts Plastiques, spécialisation Techniques de l'Eau</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 font-medium">2014-2018</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Académie des Beaux-Arts de Shanghai</p>
                                <p className="text-gray">Licence en Peinture Traditionnelle</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact rapide */}
                <div className="mt-16 text-center">
                    <h3 className="font-cormorant font-semibold text-2xl mb-6">Pour toute demande d'information ou acquisition d'œuvre</h3>
                    <a href="mailto:shiwai1991@gmail.com" className="font-inter custom-underline">shiwai1991@gmail.com</a>
                </div>
            </div>
        </main>
    );
};

export default About;