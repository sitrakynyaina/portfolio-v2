import React from 'react';
import { Lock, Users, Terminal } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function GeneralGithubPlaceholder() {
  const { lang } = useApp();

  // Dictionnaire local pour la gestion bilingue autonome
  const content = {
    fr: {
      subtitle: 'Projet Collaboratif & Institutionnel',
      badge: 'Approbation Requise',
      terminalStatus: 'EN_ATTENTE_VALIDATION_EQUIPE',
      terminalAction: 'Vérification des licences collaboratives et accords de diffusion...',
      terminalProgress: 'Statut : Restreint jusqu’à validation des contributeurs',
      title: 'Merci pour votre intérêt envers ce projet',
      p1: "Ce projet a été développé dans un cadre collectif ou partenarial. Afin de respecter le travail de chaque contributeur ainsi que les éventuels engagements de confidentialité, l'ouverture du code source au grand public nécessite un accord unanime.",
      p2: "Nous attendons actuellement la confirmation formelle de l'ensemble des membres de l'équipe et des entités organisatrices pour passer le dépôt en mode public. Cette démarche rigoureuse garantit le respect des droits de propriété intellectuelle.",
      note: 'Le code source sera immédiatement accessible dès réception du feu vert collectif de l’équipe.',
    },
    en: {
      subtitle: 'Collaborative & Institutional Project',
      badge: 'Approval Required',
      terminalStatus: 'AWAITING_TEAM_APPROVAL',
      terminalAction: 'Verifying collaborative licensing and distribution agreements...',
      terminalProgress: 'Status: Restricted until contributor validation',
      title: 'Thank you for your interest in this project',
      p1: 'This project was developed within a collective or partnership framework. To respect the work of each contributor and any potential confidentiality commitments, opening the source code to the general public requires unanimous agreement.',
      p2: 'We are currently awaiting formal confirmation from all team members and organizing entities to switch the repository to public mode. This rigorous approach ensures full compliance with intellectual property rights.',
      note: 'The source code will be instantly accessible as soon as collective clearance is received.',
    },
  };

  // Sélection sécurisée des textes selon la langue
  const t = content[lang as 'fr' | 'en'] || content.fr;

  return (
    <div className="min-h-screen bg-cream-light text-ink flex flex-col items-center justify-center p-4 selection:bg-gold selection:text-ink">
      
      {/* Conteneur Principal façon Boîtier de Maintenance Néo-Brutaliste */}
      <main className="w-full max-w-2xl border-4 border-ink bg-cream rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
        
        {/* Ligne d'accent supérieure décorative */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sand via-gold to-orange" />

        {/* 1. EN-TÊTE : Statut du Dépôt */}
        <div className="flex flex-wrap items-center justify-between border-b-4 border-ink pb-6 mb-8 gap-4 select-none">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl border-2 border-ink bg-sand/30 text-ink">
              <Users size={24} />
            </div>
            <div>
              <h1 className="font-display text-2xl tracking-tight uppercase">Project Repository</h1>
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
            <span>repository_governance.sh</span>
          </div>
          <p className="text-gold font-bold">&gt; status: {t.terminalStatus}</p>
          <p className="text-cream-light/70 mt-1">&gt; action: {t.terminalAction}</p>
          <p className="text-orange font-bold mt-2 animate-pulse">&gt; [COMPLIANCE] {t.terminalProgress}</p>
        </div>

        {/* 3. MESSAGE COURTOIS ET PROFESSIONNEL */}
        <section className="space-y-4 font-medium text-sm sm:text-base leading-relaxed text-ink-soft">
          <p className="font-display text-xl text-ink">
            {t.title}!
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
        ANDRIANTSIFERANA Sitrakiniaina Landry // Junior Full-Stack Developer & Systems Architect
      </footer>
    </div>
  );
}