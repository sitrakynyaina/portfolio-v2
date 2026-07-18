import { useEffect } from 'react';
import { supabase } from '@/lib/supabase'; // Ajuste le chemin selon ton projet

export function useVisitTracker() {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Bloque le double-comptage si l'utilisateur rafraîchit la page
        const hasVisitedThisSession = sessionStorage.getItem('portfolio_tracked');

        if (!hasVisitedThisSession) {
          // Insère une ligne anonyme dans ta table Supabase
          const { error } = await supabase
            .from('page_visits')
            .insert([{}]);

          // Si l'insertion réussit, on marque la session comme enregistrée
          if (!error) {
            sessionStorage.setItem('portfolio_tracked', 'true');
          }
        }
      } catch (err) {
        // Reste silencieux en production pour ne pas impacter l'expérience
        console.error('Erreur tracking:', err);
      }
    };

    trackVisit();
  }, []);
}