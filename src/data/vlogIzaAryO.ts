import type { Project } from '@/data/portfolio'

export interface VlogPhase {
  id: string
  time: string
  title: string
  description: string
}

export interface VlogScreenshot {
  id: string
  src: string
  alt: string
  caption: string
}

export interface VlogContent {
  meta: {
    eyebrow: string
    title: string
    subtitle: string
    tagline: string
    duration: string
    team: string
    ranking: string
  }
  ui: {
    back: string
    eyebrowNav: string
    ctaWatch: string
    introTitle: string
    introSub: string
    timelineTitle: string
    timelineSub: string
    galleryTitle: string
    gallerySub: string
    stackTitle: string
    stackSub: string
    learningsTitle: string
    learningsSub: string
    backToProjects: string
  }
  intro: string[]
  phases: VlogPhase[]
  screenshots: VlogScreenshot[]
  stack: string[]
  learnings: string[]
  closing: string
}

export const vlogIzaAryO: Record<'fr' | 'en', VlogContent> = {
  fr: {
    meta: {
      eyebrow: 'Sélection Interne HIU 2026',
      title: "IZA ARY O",
      subtitle: 'Le réseau social spatial et vocal',
      tagline:
        "Démonter les codes des réseaux sociaux traditionnels pour réinventer l'application anonyme en un univers interactif, bienveillant et piloté par la voix.",
      duration: '24 heures',
      team: 'Équipe de 6',
      ranking: '4ème place',
    },
    ui: {
      back: "Retour",
      eyebrowNav: "Coulisses du Hackathon",
      ctaWatch: "Explorer le récit",
      introTitle: "La genèse de Iza Ary O",
      introSub: "24h chrono à l'ENI pour casser le scroll infini.",
      timelineTitle: "Le sprint des 24 heures",
      timelineSub: "Notre parcours, de la feuille blanche à la démo finale.",
      galleryTitle: "L'univers en images",
      gallerySub: "Découvrez l'interface finale et l'ambiance électrique du projet.",
      stackTitle: "Stack Technique",
      stackSub: "L'écosystème d'outils choisi pour tenir la cadence du temps réel.",
      learningsTitle: "Les leçons du hackathon",
      learningsSub: "Une expérience intense qui a repoussé nos limites techniques et humaines.",
      backToProjects: "Retour aux projets",
    },
    intro: [
      "Le constat de départ était clair : les réseaux sociaux actuels sont devenus d'ennuyeuses machines à scroll infini régies par des algorithmes opaques. Le fun spontané et l'authenticité ont totalement disparu.",
      "Avec Iza Ary O, nous avons relevé le défi de la sélection interne du HIU 2026 à l'ENI de Fianarantsoa : réinventer une application existante en changeant radicalement sa manière d'être utilisée. Nous avons transformé le réseau anonyme textuel en un archipel interactif gamifié où chaque message est un vocal secret chargé d'émotion.",
    ],
    phases: [
      {
        id: 'ideation',
        time: 'H0 — H3',
        title: 'Déconstruction & Concept',
        description:
          "Brainstorm intensif sur le thème officiel. Choix de détruire le concept de 'Timeline' pour le remplacer par une carte spatiale. Cadrage des trois piliers fondateurs : anonymat bienveillant, spatialisation et icebreakers permanents.",
        },
      {
        id: 'cartographie',
        time: 'H3 — H11',
        title: 'Design de l\'archipel & Intégration',
        description:
          "Création graphique et intégration du monde interactif pixel-art. Cartographie des salons communautaires sous forme d'îles et développement de la logique de positionnement et de navigation des avatars sur la carte.",
      },
      {
        id: 'moteur-vocal',
        time: 'H11 — H18',
        title: 'Pipeline Audio & Boîte de réception',
        description:
          "Développement du cœur de l'application : l'enregistreur audio de vocaux secrets intégrant la gestion des métadonnées anonymes et conception d'un tableau de bord épuré pour la boîte de réception des différents salons.",
      },
      {
        id: 'gamification',
        time: 'H18 — H21',
        title: 'Système d\'Icebreakers',
        description:
          "Refonte de certains éléments de l'interface et adoption d'un nouveau style d'illustration.",
      },
      {
        id: 'polish',
        time: 'H21 — H24',
        title: 'UI Pop & Répétition du Pitch',
        description:
          "Application de la charte graphique ultra-colorée fuchsia/orange. Chasse aux bugs de dernière minute dans les laboratoires de l'ENI et calage du pitch chronométré pour marquer le jury.",
      },
    ],
    screenshots: [
      {
        id: 'landing',
        src: '/assets/vlog/iza-landing.jpg',
        alt: 'Landing page pop de Iza Ary O',
        caption: 'Une identité visuelle vibrante et acidulée conçue pour rompre radicalement avec la monotonie des interfaces actuelles.',
      },
      {
        id: 'map',
        src: '/assets/vlog/iza-map.jpg',
        alt: 'Carte interactive de l’archipel social',
        caption: 'Spatialisation sociale : Fini les listes de texte. Naviguez à travers un archipel gamifié où chaque île abrite une communauté.',
      },
      {
        id: 'inbox',
        src: '/assets/vlog/iza-inbox.jpg',
        alt: 'Interface épurée de la boîte de réception',
        caption: 'La boîte de réception modulaire permettant d\'explorer les mondes sonores et de basculer instantanément d\'un salon à l\'autre.',
      },
      {
        id: 'sprint',
        src: '/assets/vlog/iza-sprint.jpg',
        alt: 'L’équipe en plein développement à l’ENI',
        caption: 'Concentration maximale au cœur du labo de l’ENI Fianarantsoa pour transformer l’architecture en code fonctionnel.',
      },
      {
        id: 'night',
        src: '/assets/vlog/iza-night.jpg',
        alt: 'Session de code nocturne de l’équipe',
        caption: '3h du matin : Le pic d’adrénaline combiné aux claviers RGB et à une cohésion d’équipe à toute épreuve pour boucler le MVP.',
      },
      {
        id: 'pitch',
        src: '/assets/vlog/iza-pitch.jpg',
        alt: 'Soutenance finale devant le jury',
        caption: 'Le grand oral : Présentation de notre prototype vocal disruptif devant le jury pour décrocher notre ticket pour le HIU 2026.',
      },
    ],
    stack: ['React','Tailwind CSS', 'Node.js', 'Next.js', 'PostgreSQL', 'TypeScript', 'Web Audio API'],
    learnings: [
      "Réinventer ne veut pas dire complexifier : se concentrer sur une seule mécanique forte crée un impact UX immédiat.",
      "À 6 développeurs sur 24h, l'architecture Git et le découpage modulaire des composants (Map, Recorder, UI) doivent être irréprochables dès la première minute.",
      "Le design émotionnel (les animations 3D, les micro-interactions) compte autant que la solidité technique pour emmener le jury dans son univers.",
    ],
    closing:
      "Iza Ary O a prouvé qu'en 24h, on peut bousculer des habitudes établies. Décrocher la première place de cette sélection interne à l'ENI valide notre vision. Prochaine étape : optimiser la compression des flux vocaux et préparer l'arsenal pour la grande finale du HIU 2026 !",
  },
  en: {
    meta: {
      eyebrow: 'HIU 2026 Internal Selection',
      title: "IZA ARY O",
      subtitle: 'The spatial and vocal social network',
      tagline:
        'Deconstructing standard social media rules to reinvent anonymous apps into an interactive, supportive, and voice-driven universe.',
      duration: '24 hours',
      team: 'Team of 6',
      ranking: '4th place',
    },
    ui: {
      back: "Back",
      eyebrowNav: "Hackathon Behind the Scenes",
      ctaWatch: "Explore the story",
      introTitle: "The Genesis of Iza Ary O",
      introSub: "24 hours straight at ENI to break the infinite scroll wheel.",
      timelineTitle: "The 24-Hour Sprint",
      timelineSub: "Our journey from a blank canvas to the final working live demo.",
      galleryTitle: "The Universe in Frames",
      gallerySub: "Take a look at the final interface design and the electrifying coding atmosphere.",
      stackTitle: "Tech Stack",
      stackSub: "The ecosystem of modern tools selected to sustain a fast-paced, real-time cadence.",
      learningsTitle: "Hackathon Lessons",
      learningsSub: "An intense journey that stretched our technical limits and brought us closer as a team.",
      backToProjects: "Back to projects",
    },
    intro: [
      "The starting premise was undeniable: modern social platforms have devolved into tedious infinite-scrolling loops driven by profit-seeking, opaque algorithms. Spontaneous fun and raw authenticity were pushed aside.",
      "With Iza Ary O, we embraced the internal selection challenge for HIU 2026 at ENI Fianarantsoa: completely reinvent an existing application by altering its fundamental user pattern. We transformed anonymous text networks into a gamified, interactive archipelago where every single message is an emotional voice note.",
    ],
    phases: [
      {
        id: 'ideation',
        time: 'H0 — H3',
        title: 'Deconstruction & Concept',
        description:
          "Intense brainstorming around the official prompt. Decided to destroy the concept of a 'Timeline' and replace it with a spatial map. Standardized our three pillars: safe anonymity, spatialization, and permanent icebreakers.",
      },
      {
        id: 'cartographie',
        time: 'H3 — H11',
        title: 'Archipelago Design & Mapping',
        description:
          "Graphic creation and implementation of the interactive pixel-art world. Organized community chat rooms as unique islands and developed the dynamic coordinate layout for avatar tracking and map movement.",
      },
      {
        id: 'moteur-vocal',
        time: 'H11 — H18',
        title: 'Audio Pipeline & Unified Inbox',
        description:
          "Engineered the core engine: an audio recorder for anonymous secret voice snippets utilizing metadata hashing, paired with a clean dashboard for room discovery.",
      },
      {
        id: 'gamification',
        time: 'H18 — H21',
        title: 'Icebreaker Protocols',
        description:
          "Polished the user interface and experimented with a new illustration concept.",
      },
      {
        id: 'polish',
        time: 'H21 — H24',
        title: 'Vibrant UI & Pitch Rehearsals',
        description:
          "Polished the high-energy fuchsia/orange color scheme. Cleared late-night bugs inside the ENI computer labs and fine-tuned our timed pitch to captivate the jury panels.",
      },
    ],
    screenshots: [
      {
        id: 'landing',
        src: '/assets/vlog/iza-landing.jpg',
        alt: 'Pop landing page of Iza Ary O',
        caption: 'A vibrant, high-energy visual identity engineered to completely disrupt the monotony of current standard feeds.',
      },
      {
        id: 'map',
        src: '/assets/vlog/iza-map.jpg',
        alt: 'Interactive social archipelago map',
        caption: 'Social spatialization: No more endless text feeds. Navigate through a gamified ecosystem where every island holds a community.',
      },
      {
        id: 'inbox',
        src: '/assets/vlog/iza-inbox.jpg',
        alt: 'Streamlined inbox interface layout',
        caption: 'The modular inbox system designed to seamlessly explore soundscapes and toggle instantly between various discussion spaces.',
      },
      {
        id: 'sprint',
        src: '/assets/vlog/iza-sprint.jpg',
        alt: 'Team coding at full speed inside ENI',
        caption: 'Maximum focus inside the ENI Fianarantsoa tech labs to successfully compile our structural concepts into live code.',
      },
      {
        id: 'night',
        src: '/assets/vlog/iza-night.jpg',
        alt: 'Late night group development session',
        caption: '3:00 AM: Pure adrenaline combined with mechanical RGB keyboards and robust team chemistry to close out the MVP build.',
      },
      {
        id: 'pitch',
        src: '/assets/vlog/iza-pitch.jpg',
        alt: 'Final presentation in front of the jury',
        caption: 'Showtime: Pitching our disruptive voice prototype before the evaluation panel to lock down our ticket for HIU 2026.',
      },
    ],
    stack: ['React','Tailwind CSS', 'Node.js', 'Next.js', 'PostgreSQL', 'TypeScript', 'Web Audio API'],
    learnings: [
      "Reinventing doesn't mean complicating things: zeroing in on a single core loop maximizes instant UX impact.",
      "With 6 developers moving fast over 24 hours, Git workflows and modular component boundaries (Map, Recorder, UI) must be flawless from minute one.",
      "Emotional design (3D assets, fluid micro-interactions) is just as critical as architectural strength to truly immerse a jury panel.",
    ],
    closing:
      "Iza Ary O proved that in just 24 hours, you can rattle deep-seated product patterns. Capturing 1st place in this competitive ENI internal selection cements our direction. Next up: refine vocal streaming codecs and load up our technical arsenal for the grand HIU 2026 finals!",
  },
}

export type { Project }