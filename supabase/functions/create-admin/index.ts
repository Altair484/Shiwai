
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Gérer la requête OPTIONS pour CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Créer un client Supabase avec la clé d'administration
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    const { email, password } = await req.json()

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email et mot de passe requis' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Vérifier si l'utilisateur existe déjà
    const { data: existingUsers, error: searchError } = await supabaseAdmin.auth.admin.listUsers()
    
    if (searchError) {
      console.error('Erreur lors de la recherche d\'utilisateurs:', searchError)
      return new Response(
        JSON.stringify({ error: 'Erreur lors de la recherche d\'utilisateurs' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    let userId
    const existingUser = existingUsers.users.find(user => user.email === email)
    
    if (existingUser) {
      userId = existingUser.id
      
      // Mettre à jour le mot de passe si l'utilisateur existe déjà
      const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
        userId,
        { password }
      )
      
      if (updateError) {
        console.error('Erreur lors de la mise à jour du mot de passe:', updateError)
        return new Response(
          JSON.stringify({ error: 'Erreur lors de la mise à jour du mot de passe' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
      }
    } else {
      // Créer un nouvel utilisateur
      const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true
      })
      
      if (createError) {
        console.error('Erreur lors de la création de l\'utilisateur:', createError)
        return new Response(
          JSON.stringify({ error: 'Erreur lors de la création de l\'utilisateur' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
      }
      
      userId = newUser.user.id
    }

    // Vérifier si l'utilisateur est déjà admin
    const { data: existingAdmin, error: checkError } = await supabaseAdmin
      .from('admins')
      .select('*')
      .eq('user_id', userId)
      .single()
    
    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = "Aucun résultat"
      console.error('Erreur lors de la vérification du statut d\'admin:', checkError)
      return new Response(
        JSON.stringify({ error: 'Erreur lors de la vérification du statut d\'admin' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    // Si l'utilisateur n'est pas encore admin, l'ajouter à la table admins
    if (!existingAdmin) {
      const { error: insertError } = await supabaseAdmin
        .from('admins')
        .insert([{ user_id: userId }])
      
      if (insertError) {
        console.error('Erreur lors de l\'ajout de l\'administrateur:', insertError)
        return new Response(
          JSON.stringify({ error: 'Erreur lors de l\'ajout de l\'administrateur' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Administrateur créé ou mis à jour avec succès',
        isNewUser: !existingUser
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Erreur inattendue:', error)
    return new Response(
      JSON.stringify({ error: 'Une erreur inattendue s\'est produite' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
