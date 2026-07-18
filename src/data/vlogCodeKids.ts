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

export const vlogCodeKids: Record<'fr' | 'en', VlogContent> = {
  fr: {
    meta: {
      eyebrow: 'DevHunt 5.0 — ENI Fianarantsoa',
      title: 'CODEKIDS',
      subtitle: 'L’aventure pixel-art pour initier les enfants à la Tech',
      tagline:
        "Relever le défi de l'initiation technologique en concevant une plateforme ludo-éducative immersive, transformant l'apprentissage des bases informatiques en une quête épique inspirée des jeux de rôle rétro.",
      duration: '24 heures',
      team: 'Équipe de 5',
      ranking: 'Équipe Lauréate — ENI Nexta Event',
    },
    ui: {
      back: 'Retour',
      eyebrowNav: 'Coulisses du Hackathon',
      ctaWatch: 'Explorer le projet',
      introTitle: 'La genèse de CodeKids',
      introSub: 'Éveiller la curiosité des futurs innovateurs à travers le jeu.',
      timelineTitle: 'Chronologie du Sprint',
      timelineSub: '24 heures de rush intensif pour bâtir un univers éducatif gamifié complet.',
      galleryTitle: 'L’interface en action',
      gallerySub: 'Découvrez l’univers visuel en pixel-art et les mécaniques d’apprentissage interactives.',
      stackTitle: 'Stack Technique',
      stackSub: 'Une architecture moderne et légère sélectionnée pour garantir une réactivité instantanée.',
      learningsTitle: 'Retours d’expérience',
      learningsSub: 'Ce que ce défi centré sur l’expérience utilisateur nous a enseigné.',
      backToProjects: 'Retour aux projets',
    },
    intro: [
      "Le thème de cette édition de DevHunt 5.0 touchait un enjeu sociétal majeur : l'enfance et la technologie. Le défi consistait à concevoir un outil capable d'initier les plus jeunes aux concepts du numérique sans tomber dans l'austérité des cours traditionnels.",
      "Notre réponse a été CodeKids : une aventure interactive où chaque enfant devient un 'Futur Innovateur'. À travers une carte de progression inspirée des RPG classiques, la plateforme guide l'utilisateur pas à pas pour maîtriser les bases de l'outil informatique — de la gestion des dossiers système jusqu'à l'exploration sécurisée du web — le tout rythmé par un système de récompenses en XP.",
    ],
    phases: [
      {
        id: 'cadrage',
        time: 'H0 — H3',
        title: 'Storyboarding & Cadrage Ludique',
        description:
          "Définition de la trame narrative et de l'univers visuel. Choix fort d'une esthétique pixel-art colorée pour casser la barrière technique et captiver immédiatement l'attention des enfants dès l'arrivée sur la landing page.",
      },
      {
        id: 'integration-ui',
        time: 'H3 — H10',
        title: 'Intégration Graphique & Responsive',
        description:
          "Développement de l'interface utilisateur. Intégration des arrière-plans thématiques, des typographies typées 'arcade' et d'un player audio d'ambiance pour une immersion totale, tout en assurant une flexibilité fluide sur tous les écrans.",
      },
      {
        id: 'systeme-xp',
        time: 'H10 — H16',
        title: 'Moteur de Progression & Niveaux',
        description:
          "Codage du tableau de bord de progression. Structuration des différents modules sous forme d'exercices déblocables (Initiation au bureau, Mots cachés, Attaque du web) associés à des compteurs d'XP dynamiques et des badges d'évolution.",
      },
      {
        id: 'compagnon',
        time: 'H16 — H21',
        title: 'Guide Interactif & Didactiels',
        description:
          "Implémentation du module d'apprentissage assisté. Création d'une interface claire structurée par étapes, animée par un avatar de robot bienveillant pour expliquer simplement des concepts techniques comme la création ou la suppression de dossiers.",
      },
      {
        id: 'validation',
        time: 'H21 — H24',
        title: 'Déploiement Vercel & Pitch',
        description:
          "Finalisation du build frontend, tests de parcours utilisateur pour s'assurer de l'accessibilité ergonomique des exercices, déploiement sur Vercel et préparation de la démo devant le jury d'ENI Nexta Event.",
      },
    ],
    screenshots: [
      {
        id: 'codekids-hero',
        src: '/assets/vlog/devhunt4.06.png',
        alt: 'Landing Page de CodeKids',
        caption: 'Le Royaume des Technologies : Une page d\'accueil immersive en pixel-art incitant l\'enfant à lancer l\'aventure au milieu d\'un décor de jeu de rôle rétro.',
      },
      {
        id: 'codekids-dashboard',
        src: '/assets/vlog/devhunt4.07.png',
        alt: 'Tableau de bord de progression',
        caption: 'Map de Niveaux : Suivi de progression gamifié affichant les exercices complétés, les quêtes en attente et les gains d\'XP accumulés par l\'apprenti.',
      },
      {
        id: 'codekids-guide',
        src: '/assets/vlog/devhunt4.09.png',
        alt: 'Guide interactif guidé par le robot',
        caption: 'Le Compagnon Tech : Une interface didactique découpée en étapes simples pour vulgariser la gestion du bureau d\'ordinateur avec l\'aide d\'un assistant virtuel.',
      },
      {
        id: 'team-warroom',
        src: '/assets/vlog/devhunt-codekids.jpg',
        alt: 'L\'équipe en pleine session de code',
        caption: 'Ambiance War Room : Concentration et sourires au QG de développement. 24 heures connectés pour matérialiser notre vision d\'une tech accessible.',
      },
      {
        id: 'team-focus',
        src: '/assets/vlog/devhunt4.05.jpg',
        alt: 'Développement nocturne intensif',
        caption: 'Le rush de la nuit : Ajustement fin des composants UI et peaufinage de la logique des quêtes pour une expérience utilisateur sans friction.',
      },
      {
        id: 'award-ceremony',
        src: '/assets/vlog/devhunt4.04.jpg',
        alt: 'Remise des prix ENI Nexta Event',
        caption: 'Clôture du hackathon : L\'équipe réunie sur scène lors de la présentation des lauréats, célébrant la concrétisation de CodeKids après un sprint intense.',
      },
    ],
    stack: ['Javascript','React','Tailwind CSS'],
    learnings: [
      "Penser comme un enfant change la donne : Épurer les interfaces complexes pour ne laisser que l'essentiel visuel permet de maximiser la concentration et l'assimilation.",
      "La gamification booste l'engagement : L'ajout de simples indicateurs visuels (+10XP, paliers de niveaux) transforme un exercice technique rébarbatif en un défi stimulant.",
      "Le storytelling visuel est crucial : Associer une charte pixel-art cohérente à une navigation fluide renforce l'identité de l'application et marque l'esprit des utilisateurs et des jurys.",
    ],
    closing:
      "CodeKids est la preuve que le développement d'outils éducatifs gagne à emprunter les codes de l'industrie du jeu vidéo. Ce sprint de 24 heures au DevHunt 5.0 nous a permis de livrer un produit fonctionnel, engageant et prêt à éveiller les passions des innovateurs de demain !",
  },
  en: {
    meta: {
      eyebrow: 'DevHunt 5.0 — ENI Fianarantsoa',
      title: 'CODEKIDS',
      subtitle: 'A pixel-art adventure to introduce children to Tech',
      tagline:
        'Answering the digital literacy challenge by crafting an immersive, game-inspired learning platform that turns core computer science basics into a retro RPG quest.',
      duration: '24 hours',
      team: 'Team of 5',
      ranking: 'Awarded Team — ENI Nexta Event',
    },
    ui: {
      back: 'Back',
      eyebrowNav: 'Behind the Scenes',
      ctaWatch: 'Explore project',
      introTitle: 'The Genesis of CodeKids',
      introSub: 'Inspiring the next generation of innovators through interactive play.',
      timelineTitle: 'Sprint Timeline',
      timelineSub: '24 hours of non-stop coordination to build a complete gamified learning ecosystem.',
      galleryTitle: 'Platform Showcase',
      gallerySub: 'Take a look at the retro pixel-art aesthetic and interactive learning layouts.',
      stackTitle: 'Tech Stack',
      stackSub: 'A lightweight and reliable frontend architecture selected for instantaneous responsiveness.',
      learningsTitle: 'Key Takeaways',
      learningsSub: 'Valuable insights gained while designing user experiences tailored for young minds.',
      backToProjects: 'Back to projects',
    },
    intro: [
      "The core theme of DevHunt 5.0 centered on a crucial modern topic: childhood and technology. The prompt challenged us to build a digital solution capable of teaching foundational tech literacy to children without traditional academic coldness.",
      "Our solution was CodeKids: an interactive journey where every child steps into the shoes of a 'Future Innovateur'. Powered by a progression map inspired by classic RPG screens, the platform guides learners step-by-step through desktop mechanics — from organizing file folders to safe web navigation — all tied to an engaging XP reward loop.",
    ],
    phases: [
      {
        id: 'cadrage',
        time: 'H0 — H3',
        title: 'Storyboarding & Playful Scoping',
        description:
          'Defining our core narrative arc and visual standards. Opted for a vibrant, retro pixel-art style to break technical intimidation and capture kids’ attention right from the landing screen.',
      },
      {
        id: 'integration-ui',
        time: 'H3 — H10',
        title: 'Responsive UI Design & Themes',
        description:
          'Constructing user layouts. Integrated stylized game backdrops, classic arcade typography, and a custom background audio toggle to amplify immersion while maintaining mobile responsiveness.',
      },
      {
        id: 'systeme-xp',
        time: 'H10 — H16',
        title: 'Progression Engine & Leveling',
        description:
          'Coding the user dashboard workflow. Structured lessons as unlockable side-quests (Desktop Basics, Word Search, Web Discovery) linked to live XP counters and milestone rewards.',
      },
      {
        id: 'compagnon',
        time: 'H16 — H21',
        title: 'Interactive Robot Guide Modules',
        description:
          'Building the friendly digital assistant component. Created step-by-step tutorial cards featuring a welcoming robot helper to break down file management concepts like creating or deleting folders.',
      },
      {
        id: 'validation',
        time: 'H21 — H24',
        title: 'Vercel Deployment & Presentation',
        description:
          'Polishing production builds, running accessibility validation checks on gamified tasks, deploying directly onto Vercel, and practicing the final pitch sequence for the ENI Nexta Event committee.',
      },
    ],
    screenshots: [
      {
        id: 'codekids-hero',
        src: '/assets/vlog/devhunt4.06.png',
        alt: 'CodeKids Landing Page',
        caption: 'Tech Realm Landing Screen: An immersive pixel-art welcome board prompting children to begin their quest inside a vintage RPG environment.',
      },
      {
        id: 'codekids-dashboard',
        src: '/assets/vlog/devhunt4.07.png',
        alt: 'User Progression Grid',
        caption: 'Level Questline: A gamified dashboard rendering finished exercises, upcoming tasks, and total XP collected by the young student.',
      },
      {
        id: 'codekids-guide',
        src: '/assets/vlog/devhunt4.09.png',
        alt: 'Interactive Assistant Hub',
        caption: 'The Tech Assistant: A simplified step-by-step guide designed to clarify desktop operations with the support of a friendly chatbot companion.',
      },
      {
        id: 'team-warroom',
        src: '/assets/vlog/devhunt-codekids.jpg',
        alt: 'Team hacking live in the room',
        caption: 'War Room Energy: Great focus and bright smiles at our dev hub. 24 hours online turning inclusive tech ideals into real source code.',
      },
      {
        id: 'team-focus',
        src: '/assets/vlog/devhunt4.05.jpg',
        alt: 'Late night coding operations',
        caption: 'Midnight Grind: Refining interface layouts and tweaking core gamification scripts to secure a seamless user experience.',
      },
      {
        id: 'award-ceremony',
        src: '/assets/vlog/devhunt4.04.jpg',
        alt: 'ENI Nexta Event Award Ceremony',
        caption: 'Hackathon Closing: The team gathered on stage during the award distribution, celebrating the launch of CodeKids after a memorable sprint.',
      },
    ],
    stack: ['Javascript','React','Tailwind CSS'],
    learnings: [
      "Empathy-driven UX is key: Stripping out crowded corporate dashboards in favor of clean visual focal points greatly assists youthful comprehension.",
      "Gamification drives consistency: Injecting basic gameplay indicators (+10XP, level status) effortlessly changes routine tutorials into highly motivating tasks.",
      "Visual narrative sells the product: Pairing a consistent pixel art system with robust navigation elevates platform identity, making it memorable for users and reviewers alike.",
    ],
    closing:
      "CodeKids proves that digital education thrives when infused with gaming mechanics. This 24-hour sprint at DevHunt 5.0 allowed us to deliver a functional, highly engaging product ready to fuel the curiosity of tomorrow's innovators!",
  },
}