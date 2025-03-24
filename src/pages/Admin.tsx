
import React, { useState, useEffect } from 'react';
import { useArtworks } from '@/hooks/use-artworks';
import { Loader, Edit, Trash2, Plus, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import AdminSetup from '@/components/AdminSetup';

const Admin = () => {
  const { artworks, loading, error } = useArtworks('all');
  const { signOut } = useAuth();
  const { toast } = useToast();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [adminExists, setAdminExists] = useState<boolean | null>(null);
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);

  // Vérifier si un admin existe déjà
  useEffect(() => {
    const checkAdminExists = async () => {
      try {
        const { count, error } = await supabase
          .from('admins')
          .select('*', { count: 'exact', head: true });
        
        if (error) {
          console.error('Erreur lors de la vérification des administrateurs:', error);
          return;
        }
        
        setAdminExists(count !== null && count > 0);
      } catch (error) {
        console.error('Erreur inattendue:', error);
      } finally {
        setIsCheckingAdmin(false);
      }
    };
    
    checkAdminExists();
  }, []);

  // Format du prix en euros
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
      .format(price / 100);
  };

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut();
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté avec succès",
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Afficher un loader pendant la vérification
  if (isCheckingAdmin) {
    return (
      <main className="py-12">
        <div className="mx-auto max-w-6xl px-4 flex justify-center py-12">
          <Loader className="animate-spin" size={32} />
        </div>
      </main>
    );
  }

  // Afficher le formulaire de configuration si aucun admin n'existe
  if (adminExists === false) {
    return (
      <main className="py-12">
        <div className="mx-auto max-w-2xl px-4">
          <h1 className="font-cormorant text-3xl mb-6">Configuration de l'administration</h1>
          <AdminSetup />
        </div>
      </main>
    );
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-cormorant text-3xl">Administration des œuvres</h1>
          <div className="flex gap-3">
            <Button>
              <Plus size={16} className="mr-2" />
              Ajouter une œuvre
            </Button>
            <Button variant="outline" onClick={handleSignOut} disabled={isLoggingOut}>
              <LogOut size={16} className="mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader className="animate-spin" size={32} />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {artworks.map((artwork) => (
                    <tr key={artwork.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-16 w-16 rounded overflow-hidden">
                          <img
                            src={artwork.image_url}
                            alt={artwork.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {artwork.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {artwork.dimensions}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 capitalize">
                          {artwork.category === 'nature-morte' ? 'Nature morte' : 
                          artwork.category === 'portrait' ? 'Portrait' : 
                          artwork.category === 'paysage' ? 'Paysage' : artwork.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatPrice(artwork.price)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          artwork.sold
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {artwork.sold ? 'Vendu' : 'Disponible'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit size={14} />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Admin;
