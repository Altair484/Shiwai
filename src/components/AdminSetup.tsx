
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle } from 'lucide-react';

const AdminSetup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const handleSetupAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }
    
    if (password.length < 8) {
      toast({
        title: "Mot de passe trop court",
        description: "Le mot de passe doit comporter au moins 8 caractères",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-admin', {
        body: { email, password }
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      setIsComplete(true);
      toast({
        title: "Configuration réussie",
        description: "Le compte administrateur a été configuré avec succès",
      });
    } catch (error: any) {
      console.error('Erreur lors de la configuration:', error);
      toast({
        title: "Erreur de configuration",
        description: error.message || "Une erreur est survenue lors de la configuration",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Configuration du compte administrateur</h2>
      
      {isComplete ? (
        <div className="p-4 bg-green-50 rounded-md flex items-start">
          <CheckCircle className="text-green-500 mr-2 mt-0.5" size={18} />
          <div>
            <h3 className="font-medium text-green-800">Configuration terminée</h3>
            <p className="text-green-700 text-sm mt-1">
              Le compte administrateur a été configuré avec succès. Vous pouvez maintenant vous connecter avec les identifiants que vous avez fournis.
            </p>
            <Button className="mt-3" onClick={() => window.location.href = '/login'}>
              Aller à la page de connexion
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 p-4 bg-blue-50 rounded-md flex items-start">
            <AlertCircle className="text-blue-500 mr-2 mt-0.5" size={18} />
            <div>
              <h3 className="font-medium text-blue-800">Configuration initiale</h3>
              <p className="text-blue-700 text-sm mt-1">
                Ce formulaire vous permet de créer le compte administrateur unique pour gérer les œuvres. 
                Cette étape n'est nécessaire qu'une seule fois.
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSetupAdmin} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="block text-sm font-medium mb-1">
                Email administrateur
              </label>
              <Input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium mb-1">
                Mot de passe administrateur
              </label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe sécurisé"
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 mt-1">
                Le mot de passe doit comporter au moins 8 caractères.
              </p>
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Configuration en cours...' : 'Configurer le compte administrateur'}
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default AdminSetup;
