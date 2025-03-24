
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useArtwork } from '@/hooks/use-artworks';
import { Loader, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { artwork, loading, error } = useArtwork(id || '');

  // Format du prix en euros
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader className="animate-spin" size={32} />
      </div>
    );
  }

  if (error || !artwork) {
    return (
      <div className="text-center py-16">
        <h2 className="font-cormorant text-2xl mb-4">Œuvre non trouvée</h2>
        <p className="text-gray mb-6">{error || "Cette œuvre n'existe pas ou a été retirée."}</p>
        <Button onClick={() => navigate('/aquarelles')}>
          <ArrowLeft size={16} className="mr-2" />
          Retour à la galerie
        </Button>
      </div>
    );
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/aquarelles')}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour à la galerie
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image de l'œuvre */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={artwork.image_url} 
              alt={artwork.title} 
              className="w-full h-auto"
            />
          </div>

          {/* Détails de l'œuvre */}
          <div>
            <h1 className="font-cormorant text-3xl md:text-4xl">{artwork.title}</h1>
            
            <div className="mt-4 border-t border-b border-gray-200 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray">Dimensions</p>
                  <p className="font-medium">{artwork.dimensions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray">Année</p>
                  <p className="font-medium">{artwork.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray">Technique</p>
                  <p className="font-medium">{artwork.technique}</p>
                </div>
                <div>
                  <p className="text-sm text-gray">Catégorie</p>
                  <p className="font-medium capitalize">
                    {artwork.category === 'nature-morte' ? 'Nature morte' : 
                     artwork.category === 'portrait' ? 'Portrait' : 
                     artwork.category === 'paysage' ? 'Paysage' : artwork.category}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-cormorant text-xl mb-2">Description</h2>
              <p className="text-gray">{artwork.description}</p>
            </div>

            <div className="mt-8">
              {artwork.sold ? (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
                  <p className="text-red-700 font-medium">Cette œuvre a été vendue</p>
                  <p className="text-sm text-red-600 mt-1">
                    N'hésitez pas à consulter les autres œuvres disponibles ou à me contacter pour une commande personnalisée.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-2xl font-medium">{formatPrice(artwork.price)}</p>
                  <Button className="w-full py-6">
                    <ShoppingCart size={18} className="mr-2" />
                    Acheter cette œuvre
                  </Button>
                  <p className="text-sm text-center text-gray mt-2">
                    ou <Link to="/contact" className="text-dark underline">contactez-moi</Link> pour plus d'informations
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recommandations - à implémenter plus tard */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="font-cormorant text-2xl mb-6">Vous pourriez aussi aimer</h2>
          <p className="text-gray">Plus d'œuvres similaires seront bientôt disponibles...</p>
        </div>
      </div>
    </main>
  );
};

export default ArtworkDetail;
