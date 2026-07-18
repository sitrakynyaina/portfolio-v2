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

export const vlogFayze: Record<'fr' | 'en', VlogContent> = {
  fr: {
    meta: {
      eyebrow: 'IVO-EGNANA 2026',
      title: 'FAYZE',
      subtitle: "L'IA au cœur de la ville",
      tagline:
        "Un week-end pour imaginer Fianarantsoa comme une smart city : itinéraires intelligents, énergie, activités locales, le tout piloté par l'IA.",
      duration: '48 heures',
      team: 'Équipe de 5',
      ranking: 'Top finaliste',
    },
    ui: {
      back: "Retour",
      eyebrowNav: "Coulisses du projet",
      ctaWatch: "Découvrir le récit",
      introTitle: "L'aventure derrière le projet",
      introSub: "Comment nous avons relevé le défi en 48h chrono.",
      timelineTitle: "La course contre la montre",
      timelineSub: "Notre chronologie heure par heure durant le Hackathon.",
      galleryTitle: "L'aventure en images",
      gallerySub: "Instants choisis et aperçus de notre prototype fonctionnel.",
      stackTitle: "Stack Technique",
      stackSub: "Les outils choisis pour relever ce défi de rapidité.",
      learningsTitle: "Ce que nous avons appris",
      learningsSub: "Une aventure humaine et technique extrêmement enrichissante.",
      backToProjects: "Retour aux projets",
    },
    intro: [
      "Fayze est né d'une contrainte simple posée par le hackathon : rendre une ville moyenne malagasy plus lisible et plus efficace grâce à l'IA, sans infrastructure lourde ni budget illimité.",
      "On a choisi Fianarantsoa (« Fianara ») comme terrain de jeu : itinéraires, énergie, activités locales. Trois problèmes du quotidien, une seule plateforme de données.",
    ],
    phases: [
      {
        id: 'idee',
        time: 'H0 — H4',
        title: 'Cadrage & idéation',
        description:
          "Brainstorm autour d'une roue de modules (Éco-system, Logement, Loisir, Route intelligente, Home) pour prioriser ce qui aurait le plus d'impact en 48h. On garde le routage intelligent et le centre d'activités comme cœur du MVP.",
      },
      {
        id: 'routage',
        time: 'H4 — H20',
        title: 'Moteur de routage',
        description:
          "Implémentation d'un planificateur d'itinéraire sur les données OpenStreetMap/Overpass de la région de Fianarantsoa, avec un Dijkstra maison sur une carte d'adjacence, et une gestion des incidents en temps réel.",
      },
      {
        id: 'activites',
        time: 'H20 — H32',
        title: 'Centre d\'activités',
        description:
          "Ajout d'une carte interactive listant restos, loisirs, services, marchés, santé et éducation, filtrable par catégorie, avec un flux d'évènements locaux (concerts, circuits, conférences).",
      },
      {
        id: 'energie',
        time: 'H32 — H44',
        title: 'Arbitrage énergétique & Fara',
        description:
          "Dernier module : un moteur d'arbitrage urbain qui répartit une production limitée entre quartiers, avec Fara, un assistant IA capable d'expliquer les décisions de répartition en langage naturel.",
      },
      {
        id: 'pitch',
        time: 'H44 — H48',
        title: 'Pitch & finitions',
        description:
          "Nettoyage de l'UI, écran d'accueil cinématique façon cockpit de vaisseau, et répétition du pitch devant le jury.",
      },
    ],
    screenshots: [
      {
        id: 'workspace',
        src: '/assets/vlog/fayze-workspace.jpg',
        alt: 'L’équipe en plein rush de développement',
        caption: 'Sprint final : concentration maximale et synergie d’équipe pendant les dernières heures du hackathon.',
      },
      {
        id: 'interface',
        src: '/assets/vlog/fayze-interface.jpg',
        alt: 'Interface cockpit de Fayze Cloud sur grand écran',
        caption: 'Aperçu de l’interface cockpit futuriste de Fayze Cloud projetée sur les écrans du hub lors des démonstrations.',
      },
      {
        id: 'pitch',
        src: '/assets/vlog/fayze-pitch.jpg',
        alt: 'Présentation du projet devant le jury',
        caption: 'Moment du pitch : l’équipe unie pour défendre l’architecture et la vision de la plateforme.',
      },
      {
        id: 'victory',
        src: '/assets/vlog/fayze-victory.jpg',
        alt: 'Remise du premier prix sur scène',
        caption: 'Consécration : Fierté collective lors de l’annonce des résultats et de la remise du prix de la 1re place.',
      },
      {
        id: 'team-celebration',
        src: '/assets/vlog/fayze-team.jpeg',
        alt: 'Photo de groupe de l’équipe victorieuse',
        caption: 'Une aventure humaine inoubliable couronnée de succès avec un chèque de 700 000 Ariary à la clé !',
      },
    ],
    stack: ['Typescript','Express Js','OpenStreetMap','Overpass','Dijkstra','Prisma','React','Tailwind CSS'],
    learnings: [
      "Prioriser un seul module « bout en bout » avant d'en démarrer un deuxième nous a évité de tout casser à H30.",
      "L'API Overpass timeoute souvent : la rotation multi-serveurs et le retry nous ont sauvés en pleine démo.",
      "Un pitch cinématique (l'écran cockpit) a plus marqué le jury que n'importe quel slide texte.",
    ],
    closing:
      "Fayze reste un prototype de week-end, mais il a posé les bases d'une vraie réflexion sur la donnée urbaine à Madagascar. La suite : brancher de vraies données de trafic et affiner le modèle d'arbitrage énergétique.",
  },
  en: {
    meta: {
      eyebrow: 'Hackathon vlog',
      title: 'FAYZE',
      subtitle: 'AI at the heart of the city',
      tagline:
        'A weekend spent reimagining Fianarantsoa as a smart city: smart routing, energy, local activities — all driven by AI.',
      duration: '48 hours',
      team: 'Team of 5',
      ranking: 'Top finalist',
    },
    ui: {
      back: "Back",
      eyebrowNav: "Behind the scenes",
      ctaWatch: "Read the story",
      introTitle: "The adventure behind the project",
      introSub: "How we tackled the challenge in 48 hours flat.",
      timelineTitle: "Race against time",
      timelineSub: "Our hour-by-hour timeline during the Hackathon.",
      galleryTitle: "The journey in pictures",
      gallerySub: "Selected moments and snapshots of our working prototype.",
      stackTitle: "Tech Stack",
      stackSub: "Tools chosen for this fast-paced challenge.",
      learningsTitle: "What we learned",
      learningsSub: "An extremely rewarding human and technical adventure.",
      backToProjects: "Back to projects",
    },
    intro: [
      "Fayze started from a simple hackathon constraint: make a mid-sized Malagasy city easier to navigate and run, using AI, with no heavy infrastructure and no real budget.",
      'We picked Fianarantsoa ("Fianara") as the playground: routing, energy, local activities. Three everyday problems, one shared data platform.',
    ],
    phases: [
      {
        id: 'idee',
        time: 'H0 — H4',
        title: 'Scoping & ideation',
        description:
          'Brainstormed around a module wheel (Eco-system, Housing, Leisure, Smart routing, Home) to prioritize what would matter most in 48h. We kept smart routing and the activity hub as the MVP core.',
      },
      {
        id: 'routage',
        time: 'H4 — H20',
        title: 'Routing engine',
        description:
          'Built a route planner on OpenStreetMap/Overpass data for the Fianarantsoa region, with a custom Dijkstra over an adjacency map and real-time incident handling.',
      },
      {
        id: 'activites',
        time: 'H20 — H32',
        title: 'Activity hub',
        description:
          'Added an interactive map listing restaurants, leisure, services, markets, health and education, filterable by category, plus a feed of local events (concerts, tours, talks).',
      },
      {
        id: 'energie',
        time: 'H32 — H44',
        title: 'Energy arbitrage & Fara',
        description:
          'Last module: an urban arbitrage engine distributing limited production across districts, plus Fara, an AI assistant able to explain allocation decisions in plain language.',
      },
      {
        id: 'pitch',
        time: 'H44 — H48',
        title: 'Pitch & polish',
        description:
          'Polished the UI, built a cinematic spaceship-cockpit landing screen, and rehearsed the pitch in front of the jury.',
      },
    ],
    screenshots: [
      {
        id: 'workspace',
        src: '/assets/vlog/fayze-workspace.jpg',
        alt: 'Team hard at work coding',
        caption: 'Final sprint: maximum focus and team synergy during the closing hours of the hackathon.',
      },
      {
        id: 'interface',
        src: '/assets/vlog/fayze-interface.jpg',
        alt: 'Fayze Cloud cockpit interface on a big screen',
        caption: 'Overview of the futuristic Fayze Cloud dashboard projected on the hub monitors during live demos.',
      },
      {
        id: 'pitch',
        src: '/assets/vlog/fayze-pitch.jpg',
        alt: 'Project presentation in front of the jury',
        caption: 'Pitch time: standing together to present our architecture and vision to the evaluation panel.',
      },
      {
        id: 'victory',
        src: '/assets/vlog/fayze-victory.jpg',
        alt: 'Receiving the first place prize on stage',
        caption: 'The breakthrough: Pure excitement and pride as we captured the 1st place award on stage.',
      },
      {
        id: 'team-celebration',
        src: '/assets/vlog/fayze-team.jpeg',
        alt: 'Winning team group photo',
        caption: 'An unforgettable journey capped off with a proud 1st place finish and a 700,000 Ariary prize!',
      },
    ],
    stack: ['Typescript','Express Js','OpenStreetMap','Overpass','Dijkstra','Prisma','React','Tailwind CSS'],
    learnings: [
      'Shipping one module end-to-end before starting the next kept us from breaking everything at hour 30.',
      'The Overpass API times out often: multi-server rotation and retries saved us mid-demo.',
      'A cinematic pitch (the cockpit screen) landed with the jury far more than any text slide.',
    ],
    closing:
      "Fayze is still a weekend prototype, but it laid the groundwork for real thinking about urban data in Madagascar. Next: plug in real traffic data and refine the energy arbitrage model.",
  },
}

export type { Project }