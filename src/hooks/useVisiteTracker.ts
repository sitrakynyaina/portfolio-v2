import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function useVisitTracker() {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const hasVisitedThisSession = sessionStorage.getItem('portfolio_tracked');

        if (!hasVisitedThisSession) {
          // Récupère la date locale du visiteur au format YYYY-MM-DD
          const today = new Date().toISOString().split('T')[0];

          // Appel de la fonction SQL stockée sur Supabase
          const { error } = await supabase.rpc('increment_daily_visit', {
            target_date: today
          });

          if (!error) {
            sessionStorage.setItem('portfolio_tracked', 'true');
          }
        }
      } catch (err) {
        console.error('Erreur tracking:', err);
      }
    };

    trackVisit();
  }, []);
}