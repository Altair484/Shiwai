import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: infoRef, inView: infoInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous mettriez la logique d'envoi du formulaire à votre backend
        console.log('Formulaire soumis:', formData);
        // Simuler une soumission réussie
        setFormSubmitted(true);
        // Réinitialiser le formulaire
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Titre de la page */}
                <div
                    ref={titleRef}
                    className={`mb-16 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">CONTACT</h2>
                </div>

                <div className="flex flex-wrap">
                    {/* Formulaire de contact */}
                    <div
                        ref={formRef}
                        className={`w-full lg:w-7/12 lg:pr-12 ${formInView ? 'fade-right' : ''}`}
                    >
                        <h3 className="font-cormorant font-semibold text-3xl mb-8">Envoyez-moi un message</h3>

                        {formSubmitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-8">
                                <p className="font-inter">Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</p>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-inter text-sm font-medium mb-1">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-inter text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block font-inter text-sm font-medium mb-1">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-inter text-sm font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-dark text-white font-inter py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>

                    {/* Informations de contact */}
                    <div
                        ref={infoRef}
                        className={`w-full lg:w-5/12 mt-12 lg:mt-0 ${infoInView ? 'fade-left' : ''}`}
                    >
                        <h3 className="font-cormorant font-semibold text-3xl mb-8">Informations de contact</h3>

                        <div className="space-y-8 font-inter">
                            <div>
                                <h4 className="font-medium text-lg mb-2">Email</h4>
                                <a href="mailto:shiwai1991@gmail.com" className="text-gray custom-underline">
                                    shiwai1991@gmail.com
                                </a>
                            </div>

                            <div>
                                <h4 className="font-medium text-lg mb-2">Atelier</h4>
                                <p className="text-gray">
                                    15 rue des Artistes<br />
                                    75014 Paris<br />
                                    France
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium text-lg mb-2">Réseaux sociaux</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray hover:text-dark transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray hover:text-dark transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray hover:text-dark transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium text-lg mb-2">Horaires de visite</h4>
                                <p className="text-gray">
                                    Sur rendez-vous uniquement<br />
                                    Du mardi au samedi, 10h-18h
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <h4 className="font-cormorant font-semibold text-2xl mb-4">Intéressé par mes œuvres ?</h4>
                            <p className="font-inter text-gray mb-4">
                                Pour toute demande d'acquisition ou de commande spéciale, contactez-moi directement
                                par email ou utilisez le formulaire de contact ci-contre.
                            </p>
                            <p className="font-inter text-gray">
                                Je vous répondrai dans un délai de 48 heures avec toutes les informations nécessaires.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;