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

export const vlogSafeAI: Record<'fr' | 'en', VlogContent> = {
  fr: {
    meta: {
      eyebrow: 'DevFest Antananarivo 2025',
      title: 'SAFE AI',
      subtitle: 'Auditeur universel pour une IA responsable',
      tagline:
        "Relever le défi d'AlgoMada pour concevoir une barrière de sécurité logicielle complète : masquage des données sensibles par génération aléatoire, détection des hallucinations et modération de la toxicité en temps réel.",
      duration: '36 heures',
      team: 'Équipe de 5',
      ranking: '1ère Place - Champion National',
    },
    ui: {
      back: 'Retour',
      eyebrowNav: 'Coulisses du Hackathon',
      ctaWatch: 'Explorer le récit',
      introTitle: 'La genèse de SafeAI',
      introSub: "36h de sprint intensif face au défi mondial de la sécurité des IA.",
      timelineTitle: 'Le sprint du DevFest',
      timelineSub: 'De la feuille blanche au titre national, découvrez les coulisses de notre architecture.',
      galleryTitle: "L'application en action",
      gallerySub: 'Découvrez l’interface utilisateur sombre et modulaire conçue pour auditer vos flux d’IA.',
      stackTitle: 'Stack Technique',
      stackSub: "L'écosystème d'outils modernes sélectionné pour allier puissance locale et rapidité d'exécution.",
      learningsTitle: 'Les leçons de la victoire',
      learningsSub: 'Une aventure intense qui a repoussé nos limites techniques, humaines et méthodologiques.',
      backToProjects: 'Retour aux projets',
    },
    intro: [
      "Le sujet posé par AlgoMada était sans équivoque : face à la prolifération fulgurante des intelligences artificielles et à l'émergence d'acteurs malveillants, comment redonner le contrôle aux utilisateurs pour garantir un usage éthique, sécurisé et responsable de cette technologie ?",
      "Notre réponse a été la création de SafeAI, une plateforme d'audit universelle structurée autour de trois piliers critiques fondamentaux : le nettoyage local des fichiers importés (remplacement des données PII par des alternatives pseudonymisées), un moteur de détection factuelle des hallucinations basé sur le RAG, et un système de modération des flux toxiques via Detoxify AI.",
    ],
    phases: [
      {
        id: 'conception',
        time: 'H0 — H4',
        title: 'Analyse & Cadrage Thématique',
        description:
          "Décryptage des critères de notation d'AlgoMada (Originalité, Criticité, Efficience). Choix stratégique de cibler les trois vulnérabilités majeures des LLM grand public : la fuite de données privées, l'incohérence factuelle et la génération de contenus toxiques.",
      },
      {
        id: 'anonymisation',
        time: 'H4 — H14',
        title: 'Moteur de Nettoyage PII Local',
        description:
          "Développement du pipeline de sécurité principal pour l'upload de fichiers textuels et logs bruts. Conception de l'algorithme d'inspection capable d'isoler les secrets, emails et identifiants, puis de les injecter sous forme de données générées aléatoirement avant toute transmission tierce.",
      },
      {
        id: 'hallucination',
        time: 'H14 — H26',
        title: 'Pipeline Anti-Hallucination & RAG',
        description:
          "Ingénierie du cœur d'analyse de confiance. Implémentation d'une brique de vérification factuelle croisée avec récupération contextuelle sécurisée (RAG) pour évaluer en temps réel le taux de fidélité des réponses et intercepter les dérives cognitives de l'IA.",
      },
      {
        id: 'detoxify',
        time: 'H26 — H32',
        title: 'Intégration de Detoxify AI & UI',
        description:
          "Connexion du modèle de modération intelligent permettant de mesurer l'indice de toxicité avec une jauge de sensibilité adaptative. Fine-tuning de l'interface en mode sombre ultra-épurée pour maximiser la clarté des tableaux de bord analytiques.",
      },
      {
        id: 'pitch',
        time: 'H32 — H36',
        title: 'Répétitions & Soutenance Finale',
        description:
          "Optimisation du pitch chronométré de 5 minutes axé sur l'évolutivité logicielle (Expandability). Démo live sans faille devant le jury, illustrant la neutralisation instantanée d'un document confidentiel corrompu.",
      },
    ],
    screenshots: [
      {
        id: 'safeai-main',
        src: '/assets/vlog/devfest-app.jpg',
        alt: 'Tableau de bord SafeAI Auditeur v2.4',
        caption: 'Interface centrale d\'audit de sécurité : configuration modulaire des filtres de protection (Masquer PII, Détecter Secrets, Filtre Toxicité) fonctionnant en traitement local sécurisé.',
      },
      {
        id: 'anti-hallucination',
        src: '/assets/vlog/devfest-app-3.jpg',
        alt: 'Module Anti-Hallucination de SafeAI',
        caption: 'Module d\'Analyse Factuelle : Système d\'inspection de documents et de vérification RAG permettant de croiser les réponses de l\'IA avec des sources fiables pour éradiquer les hallucinations.',
      },
      {
        id: 'detoxify-ai',
        src: '/assets/vlog/devfest-app-1.jpg',
        alt: 'Système de modération Detoxify AI',
        caption: 'Detoxify AI : Système de modération intelligent doté d\'un ajustement dynamique de la sensibilité en temps réel pour capturer et bloquer les menaces textuelles.',
      },
      {
        id: 'team-sprint',
        src: '/assets/vlog/devfest-training.jpg',
        alt: 'L\'équipe en pleine session de développement',
        caption: 'Focus absolu au sein du QG de développement. 36 heures d\'adrénaline pure pour traduire nos concepts d\'IA responsable en code de production stable.',
      },
      {
        id: 'victory-hug',
        src: '/assets/vlog/devfest-pic.jpg',
        alt: 'Émotion de l\'équipe lors de l\'annonce des résultats',
        caption: 'Le moment de la délivrance : l\'étreinte collective sur scène célébrant l\'obtention du titre suprême après une compétition acharnée.',
      },
      {
        id: 'podium',
        src: '/assets/vlog/devfest-victory.jpg',
        alt: 'Remise officielle du premier prix sur scène',
        caption: 'Consécration nationale au DevFest Antananarivo 2025 : l\'équipe sur la première marche du podium, récompensée pour sa vision logicielle d\'une IA au service de l\'humanité.',
      },
    ],
    stack: ['Python', 'FastAPI', 'React','Tailwind CSS', 'PostgreSQL', 'Detoxify'],
    learnings: [
      "La sécurité doit être transparente : simplifier la complexité de l'anonymisation de fichiers confidentiels en un seul clic garantit une adoption immédiate par l'utilisateur.",
      "L'IA locale est l'avenir de la confidentialité : traiter les données sensibles (PII) directement côté client ou sur serveur souverain est l'unique rempart contre la fuite de secrets d'entreprise.",
      "L'impact de la démo live est roi : savoir raconter une histoire technique complexe et prouver l'efficience de nos algorithmes en 5 minutes chrono fait toute la différence face à un jury d'experts.",
    ],
    closing:
      "SafeAI a démontré avec brio qu'avec une ingénierie logicielle rigoureuse, les développeurs ont le pouvoir de dompter les dérives technologiques actuelles. Remporter la 1ère place du Hackathon national DevFest 2025 valide notre modèle architectural. Cap sur le déploiement open-source pour offrir à chacun une IA plus sûre et bienveillante !",
  },
  en: {
    meta: {
      eyebrow: 'DevFest Antananarivo 2025',
      title: 'SAFE AI',
      subtitle: 'Universal Auditor for Responsible AI',
      tagline:
        "Answering the AlgoMada challenge by crafting a complete defensive software layer: local PII data masking using random placeholders, RAG-driven hallucination detection, and real-time toxicity filtering.",
      duration: '36 hours',
      team: 'Team of 5',
      ranking: '1st Place - National Champions',
    },
    ui: {
      back: 'Back',
      eyebrowNav: 'Hackathon Behind the Scenes',
      ctaWatch: 'Explore the story',
      introTitle: 'The Genesis of SafeAI',
      introSub: '36 hours of non-stop sprinting to solve global AI safety vulnerabilities.',
      timelineTitle: 'The DevFest Sprint',
      timelineSub: 'From blank canvases to the national title, look behind our structural choices.',
      galleryTitle: 'The Platform in Action',
      gallerySub: 'Explore our modular dark UI optimized for auditing modern AI data pipelines.',
      stackTitle: 'Tech Stack',
      stackSub: 'Modern utilities carefully chosen to secure edge computation and swift performance.',
      learningsTitle: 'Victory Lessons',
      learningsSub: 'An intense ride that tested our code standards, team synergy, and pitch execution.',
      backToProjects: 'Back to projects',
    },
    intro: [
      "The prompt from the AlgoMada team was clear-cut: given the rapid adoption of AI systems and the rising threats of bad actors, how can technical problem-solvers build reliable software to safeguard people and steer AI toward a responsible direction?",
      "Our breakthrough came with SafeAI, an open-source auditing dashboard built atop three architectural columns: localized file cleanup (swapping critical PII data for anonymous random mock values), automated fact-checking against hallucinations via a custom RAG engine, and text detoxification modules using Detoxify AI.",
    ],
    phases: [
      {
        id: 'conception',
        time: 'H0 — H4',
        title: 'Scoping & Criteria Analysis',
        description:
          "Dissecting the core evaluation parameters set by AlgoMada (Originality, Criticality, Efficiency). Strategized to mitigate three fundamental flaws: credential leaks, factual deviation, and toxic payload generations.",
      },
      {
        id: 'anonymisation',
        time: 'H4 — H14',
        title: 'Local PII Masking Pipeline',
        description:
          "Engineered the foundational secure file ingestion workflow for logs and text data. Programmed the parsing algorithms to strip exposed emails, API tokens, and credentials, safely mocking them with random strings prior to LLM submission.",
      },
      {
        id: 'hallucination',
        time: 'H14 — H26',
        title: 'Anti-Hallucination & RAG Setup',
        description:
          "Developed the semantic verification core. Hooked up document parsing with real-time Retrieval-Augmented Generation (RAG) cross-validation, tracking fact-checking scores to flag automated hallucinated drift.",
      },
      {
        id: 'detoxify',
        time: 'H26 — H32',
        title: 'Detoxify AI Integration & UI Polish',
        description:
          "Integrated advanced deep learning classification components for textual toxicity checking. Bound responsive dashboard elements to a slider component for real-time risk margin management.",
      },
      {
        id: 'pitch',
        time: 'H32 — H36',
        title: 'Pitch Training & Grand Final',
        description:
          "Polished our 5-minute technical presentation highlighting the product's scalable architecture (Expandability). Ran an error-free live production demo neutralizing injected system errors seamlessly.",
      },
    ],
    screenshots: [
      {
        id: 'safeai-main',
        src: '/assets/vlog/devfest-app.jpg',
        alt: 'SafeAI Auditor Dashboard v2.4',
        caption: 'Core Security Audit Screen: Modular parameters managing data sanitization filters (PII Masking, Secret Detection, Toxicity Guardrails) running via edge encryption.',
      },
      {
        id: 'anti-hallucination',
        src: '/assets/vlog/devfest-app-3.jpg',
        alt: 'SafeAI Anti-Hallucination System',
        caption: 'Fact-Checking Engine: Sophisticated document analytics interface utilizing RAG pipelines to cross-examine AI answers against verified truth hubs.',
      },
      {
        id: 'detoxify-ai',
        src: '/assets/vlog/devfest-app-1.jpg',
        alt: 'Detoxify AI Moderation Panel',
        caption: 'Detoxify AI: Intelligent content evaluation layout allowing tailored sensitivity tuning to prevent harmful automated outputs.',
      },
      {
        id: 'team-sprint',
        src: '/assets/vlog/devfest-training.jpg',
        alt: 'Team coding live during the event',
        caption: 'Unwavering focus inside our war room. 36 hours of pure adrenaline to forge stable, deployment-ready responsible AI code structures.',
      },
      {
        id: 'victory-hug',
        src: '/assets/vlog/devfest-pic.jpg',
        alt: 'Team emotional embrace during announcement',
        caption: 'The peak of relief: A tight collective hug on stage as the announcement confirmed our project secured the grand title.',
      },
      {
        id: 'podium',
        src: '/assets/vlog/devfest-victory.jpg',
        alt: 'Official first place prize ceremony',
        caption: 'National Glory at DevFest Antananarivo 2025: Taking 1st place on the official podium, celebrated for designing protective software built for mankind.',
      },
    ],
    stack: ['Python', 'FastAPI', 'React','Tailwind CSS', 'PostgreSQL', 'Detoxify'],
    learnings: [
      "Security requires flawless UX: Packing robust regex and data tokenizers under an intuitive one-click layout ensures heavy user retention.",
      "Local compute is key for data trust: Cleaning private PII sets locally before sending anything over outer APIs remains the definitive firewall for companies.",
      "The live demo commands the room: Boiling complex multi-step backend structures down into a crisp, visual 5-minute story is what secures final victory.",
    ],
    closing:
      "SafeAI proved that through architectural clarity, developers have the power to fix modern technological drift. Grabbing 1st place at DevFest 2025 honors our collective execution. Next phase: Open-sourcing our core modules to bring ethical AI tooling to everyone!",
  },
}