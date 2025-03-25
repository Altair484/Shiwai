
import React from 'react';

const ContactSection = () => {
    return (
        <section className="py-16 md:py-24 bg-cream">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <h2 className="text-h2 mb-8 md:mb-12">
                    Contact
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-body mb-8 text-center">
                        Pour toute demande d'information ou commande...
                    </p>
                    <form className="space-y-6">
                        {/* Champs du formulaire */}
                        <p className="text-caption mt-4">* Champs obligatoires</p>
                    </form>
                </div>
            </div>
        </section>
    );
}; 

export default ContactSection;
