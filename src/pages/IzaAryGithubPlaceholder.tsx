import { Lock, Radio, Terminal } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function IzaAryOGithubPlaceholder() {
  const { lang } = useApp();

  // Dictionnaire local pour la gestion bilingue autonome
  const content = {
    fr: {
      subtitle: 'Application Audio Spatiale Anonyme',
      badge: 'Dépôt Privé',
      terminalStatus: 'RESTRUCTURATION_CODE_SOURCE',
      terminalAction: "Nettoyage de l'environnement, refactoring des pipelines audio...",
      terminalProgress: 'Déploiement dans le domaine public : 75% effectué',
      title: 'Merci pour votre intérêt envers le projet',
      p1: "Initié lors du hackathon intensif de l'HIU 2026, ce prototype d'application audio spatiale anonyme fait actuellement l'objet d'une phase active de refactoring technique et d'optimisation architecturale.",
      p2: 'Afin de vous présenter un code source propre, documenté et conforme aux standards professionnels (gestion des flux audio en temps réel, isolation des sockets et nettoyage des configurations), le dépôt GitHub est temporairement restreint en accès privé.',
      note: 'Le code sera rendu public dès que la restructuration de l\'architecture backend et le traitement spatial des flux audios seront finalisés.',
    },
    en: {
      subtitle: 'Spatial Anonymous Audio App',
      badge: 'Private Repository',
      terminalStatus: 'RESTRUCTURING_SOURCE_CODE',
      terminalAction: 'Cleaning environment, refactoring audio pipelines...',
      terminalProgress: 'Deployment to public domain: 75% complete',
      title: 'Thank you for your interest in the project',
      p1: 'Initiated during the intensive HIU 2026 hackathon, this spatial anonymous audio application prototype is currently undergoing an active phase of technical refactoring and architectural optimization.',
      p2: 'In order to present a clean, documented source code that complies with professional standards (real-time audio stream management, socket isolation, and configuration cleanup), the GitHub repository is temporarily restricted to private access.',
      note: 'The code will be made public as soon as the backend architecture restructuring and spatial audio stream processing are finalized.',
    },
  };

  // Sélection sécurisée des textes selon la langue (fallback en français)
  const t = content[lang as 'fr' | 'en'] || content.fr;

  return (
    <div className="min-h-screen bg-cream-light text-ink flex flex-col items-center justify-center p-4 selection:bg-gold selection:text-ink">
      
      {/* Conteneur Principal façon Boîtier de Maintenance Néo-Brutaliste */}
      <main className="w-full max-w-2xl border-4 border-ink bg-cream rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
        
        {/* Ligne d'accent supérieure décorative */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange via-gold to-orange-deep" />

        {/* 1. EN-TÊTE : Statut du Dépôt */}
        <div className="flex flex-wrap items-center justify-between border-b-4 border-ink pb-6 mb-8 gap-4 select-none">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl border-2 border-ink bg-orange/10 text-orange-deep">
              <Radio size={24} className="animate-pulse" />
            </div>
            <div>
              <h1 className="font-display text-2xl tracking-tight">IZA ARY O</h1>
              <p className="font-mono text-xs text-ink-soft">{t.subtitle}</p>
            </div>
          </div>

          {/* Badge Statut */}
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-ink text-gold border-2 border-ink px-3 py-1.5 rounded-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            <Lock size={12} className="text-gold" />
            {t.badge}
          </span>
        </div>

        {/* 2. LE VISUEL / COMPILATION TERMINAL */}
        <div className="border-2 border-ink bg-ink text-cream-light rounded-xl p-4 font-mono text-xs sm:text-sm mb-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 border-b border-cream-light/20 pb-2 mb-3 opacity-60">
            <Terminal size={14} />
            <span>git_status_check.sh</span>
          </div>
          <p className="text-gold font-bold">&gt; status: {t.terminalStatus}</p>
          <p className="text-cream-light/70 mt-1">&gt; action: {t.terminalAction}</p>
          <p className="text-orange-deep font-bold mt-2 animate-pulse">&gt; [PROGRESS] {t.terminalProgress}</p>
        </div>

        {/* 3. MESSAGE COURTOIS ET PROFESSIONNEL */}
        <section className="space-y-4 font-medium text-sm sm:text-base leading-relaxed text-ink-soft">
          <p className="font-display text-xl text-ink">
            {t.title} <span className="underline decoration-orange decoration-4">Iza Ary O</span> !
          </p>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p className="italic text-xs sm:text-sm bg-sand/30 border-l-4 border-gold p-3 rounded-r-lg text-ink font-mono">
             {t.note}
          </p>
        </section>

      </main>

      {/* Petit copyright discret en bas */}
      <footer className="mt-6 font-mono text-[10px] uppercase opacity-40 select-none">
        Landry Andriantsiferana // Systems Architect & Dev
      </footer>
    </div>
  );
}