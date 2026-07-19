/**
 * Données du portfolio + système de traduction FR / EN.
 */

export type Lang = 'fr' | 'en'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface Project {
  id: string
  title: string
  tagline: string
  tech: string[]
  github: string
  vlog: string
  accent: 'orange' | 'gold' | 'sand'
  image: string,
}

export interface Certification {
  title: string
  issuer: string
  date: string
  status: 'done' | 'progress'
  type: string
  id?: string
}

export interface Distinction {
  title: string
  event: string
  date: string
  description: string
  image: string // Ajout du champ pour l'illustration de la carte
}

export interface Education {
  degree: string
  school: string
  period: string
  details: string
  subjects: string[]
}

/* ------------------------------------------------------------------ */
/* Profil                               */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'ANDRIANTSIFERANA Sitrakiniaina Landry',
  shortName: 'Landry',
  email: 'landrysitrak@gmail.com',
  phone: '+261 38 52 699 18',
  location: 'Tsarafaritra, Antananarivo — Madagascar',
  github: 'https://github.com/sitrakynyaina',
  linkedin: 'https://www.linkedin.com/in/landry-sitrakiniaina-baa86b335/',
}

/* ------------------------------------------------------------------ */
/* Projets    */
/* ------------------------------------------------------------------ */

export const projects: Record<Lang, Project[]> = {
  fr: [
    {
      id: 'Iza-ary-o',
      title: 'Iza Ary Oh',
      tagline:
        "Fun, anonyme, vocal. Une expérience sociale totalement nouvelle qui transforme la messagerie anonyme en aventure interactive et spatiale.Prototype conçu en 24 heures d'affilée.",
      tech: ['React','Tailwind CSS', 'Node.js', 'Next.js', 'PostgreSQL', 'TypeScript', 'Web Audio API'],
      github: '/projects/iza-ary-o/github',
      vlog: '/vlog/IzaAryO',
      accent: 'orange',
      image: '/assets/portfolio/iza-landing.jpg',
    },
    {
      id: 'safedata',
      title: 'Safe AI',
      tagline:
        "Pipeline d'intégration et d'automatisation de données : ingestion, filtrage des données personnelles, détection d'hallucinations et modération automatique de contenus toxiques.",
      tech: ['Python', 'FastAPI', 'React','Tailwind CSS', 'PostgreSQL', 'Detoxify'],
      github: 'https://github.com/IorYohanna/DevFest-AI-For-Mankind.git',
      vlog: '/vlog/safeAI',
      accent: 'gold',
      image: '/assets/portfolio/safe-AI.png',
    },
    {
      id: 'fayze',
      title: 'Fayze',
      tagline:
        "Prototype d'une plateforme citoyenne intelligente conçue pour répondre aux défis urbains de la ville de Fianarantsoa.",
      tech: ['Typescript','Express Js','OpenStreetMap','Overpass','Dijkstra','Prisma','React','Tailwind CSS'],
      github: '/projects/general/github',
      vlog: '/vlog/fayze',
      accent: 'sand',
      image: '/assets/portfolio/fayze.png',
    },
    {
      id: 'codeKids',
      title: 'Code Kids',
      tagline:
        "Prototype d'une plateforme éducative interactive conçue pour initier les enfants aux compétences numériques et aux bases de l'informatique à travers une expérience ludique et immersive.",
      tech: ['Javascript','React','Tailwind CSS'],
      github: 'https://github.com/HerizoRand/Devhunt2025.git',
      vlog: '/vlog/codeKids',
      accent: 'sand',
      image: '/assets/portfolio/code-kids.png',
    },
    {
      id: 'habakabaka',
      title: 'Habakabaka',
      tagline:
        "Projet académique d'Interface Homme-Machine (IHM) dédié à la conception et au développement complet d'une plateforme intuitive de réservation de billets d'avion en ligne.",
      tech: ['React','Tailwind CSS', 'UI/UX', 'Spring boot','Maven','postgresql'],
      github: 'https://github.com/sitrakynyaina/ihmBack.git',
      vlog: '/',
      accent: 'orange',
      image: '/assets/portfolio/habakabaka.webp',
    },
    {
      id: 'sigin',
      title: 'SIGIN',
      tagline:
        "Plateforme de gestion du service vente conçue pour l'Imprimerie Nationale de Madagascar, optimisant le suivi du catalogue, des commandes et de la facturation client.",
      tech: ['React', 'Node.js', 'Spring boot', 'Oracle'],
      github: '/projects/general/github',
      vlog: '',
      accent: 'sand',
      image: '/assets/portfolio/din.jpg',
    },
    {
      id: 'affect',
      title: 'Gestion Affectation',
      tagline:
        "Application desktop en Java/JavaFX pour orchestrer les affectations des employés aux départements, structurée selon le modèle MVC avec persistance relationnelle via JDBC.",
      tech: ['Java', 'JavaFX', 'JDBC', 'postgresql'],
      github: 'https://github.com/sitrakynyaina/projetJava.git',
      vlog: '/',
      accent: 'gold',
      image: '/assets/portfolio/projet-java.png',
    }
  ],
  en: [
    {
      id: 'Iza-ary-o',
      title: 'Iza Ary Oh',
      tagline:
        'Fun, anonymous, vocal. A completely new social experience transforming anonymous messaging into a spatial, prototype built in a 24-hour sprint.',
      tech: ['React','Tailwind CSS', 'Node.js', 'Next.js', 'PostgreSQL', 'TypeScript', 'Web Audio API'],
       github: '/projects/iza-ary-o/github',
      vlog: '/vlog/IzaAryO',
      accent: 'orange',
      image: '/assets/portfolio/iza-landing.jpg',
    },
    {
      id: 'safedata',
      title: 'Safe AI',
      tagline:
        'Data integration and automation pipeline: ingestion, personal-data filtering, hallucination detection and automatic moderation of toxic content.',
      tech: ['Python', 'FastAPI', 'React','Tailwind CSS', 'PostgreSQL', 'Detoxify'],
      github: 'https://github.com/IorYohanna/DevFest-AI-For-Mankind.git',
      vlog: '/vlog/safeAI',
      accent: 'gold',
      image: '/assets/portfolio/safe-AI.png',
    },
    {
      id: 'fayze',
      title: 'Fayze',
      tagline:
        'Prototype of a smart citizen platform designed to address the urban challenges of the city of Fianarantsoa.',
      tech: ['Typescript','Express Js','OpenStreetMap','Overpass','Dijkstra','Prisma','React','Tailwind CSS'],
      github: '/projects/general/github',
      vlog: '/vlog/fayze',
      accent: 'sand',
      image: '/assets/portfolio/fayze.png',
    },
    {
      id: 'codeKids',
      title: 'Code Kids',
      tagline:
        "Prototype of an interactive educational platform designed to introduce children to digital literacy and computer fundamentals through a fun and immersive learning experience.",
      tech: ['Javascript','React','Tailwind CSS'],
      github: 'https://github.com/HerizoRand/Devhunt2025.git',
      vlog: '/vlog/codeKids',
      accent: 'sand',
      image: '/assets/portfolio/code-kids.png',
    },
    {
      id: 'habakabaka',
      title: 'Habakabaka',
      tagline:
        'An academic Human-Computer Interaction (HCI) project focused on designing and developing a user-friendly online flight ticket booking platform.',
      tech: ['React','Tailwind CSS', 'UI/UX', 'Spring boot','Maven','postgresql'],
      github: 'https://github.com/sitrakynyaina/ihmBack.git',
      vlog: '/',
      accent: 'orange',
      image: '/assets/portfolio/habakabaka.webp',
    },
    {
      id: 'sigin',
      title: 'SIGIN',
      tagline:
        'Sales and service management platform designed and developed during an internship at the Imprimerie Nationale de Madagascar to optimize workflows.',
      tech: ['React', 'Node.js', 'Spring boot', 'Oracle'],
      github: '/projects/general/github',
      vlog: '/',
      accent: 'sand',
      image: '/assets/portfolio/din.jpg',
    },
    {
      id: 'affect',
      title: 'Employee Assignment Management',
      tagline:
        'A Java/JavaFX desktop application designed to streamline employee allocations to departments and projects with database persistence using JDBC.',
      tech: ['Java', 'JavaFX', 'JDBC', 'postgresql'],
      github: 'https://github.com/sitrakynyaina/projetJava.git',
      vlog: '/',
      accent: 'gold',
      image: '/assets/portfolio/projet-java.png',
    }
  ],
}
/* ------------------------------------------------------------------ */
/* Certifications                                                      */
/* ------------------------------------------------------------------ */

export const certifications: Record<Lang, Certification[]> = {
  fr: [
    {
      title: 'Java Certification — With Honors',
      issuer: 'CodinGame by CoderPad',
      date: '05 Juin 2026',
      status: 'done',
      type: 'code',
      id: 'N° 10595577',
    },
    {
      title: 'Python 3 Certification — With Honors',
      issuer: 'CodinGame by CoderPad',
      date: '05 Juin 2026',
      status: 'done',
      type: 'code',
      id: 'N° 10595643',
    },
    {
      title: "Initiation à l'Analyse Exploratoire de Données avec Python",
      issuer: 'Orange Digital Center',
      date: 'Novembre 2024',
      status: 'done',
      type: 'data',
    },
  ],
  en: [
    {
      title: 'Java Certification — With Honors',
      issuer: 'CodinGame by CoderPad',
      date: 'June 5, 2026',
      status: 'done',
      type: 'code',
      id: 'N° 10595577',
    },
    {
      title: 'Python 3 Certification — With Honors',
      issuer: 'CodinGame by CoderPad',
      date: 'June 5, 2026',
      status: 'done',
      type: 'code',
      id: 'N° 10595643',
    },
    {
      title: 'Exploratory Data Analysis with Python',
      issuer: 'Orange Digital Center',
      date: 'November 2024',
      status: 'done',
      type: 'data',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Prix et distinctions                */
/* ------------------------------------------------------------------ */

export const distinctions: Record<Lang, Distinction[]> = {
  fr: [
    {
      title: '1ère place',
      event: 'Devfest Antananarivo 2025',
      date: 'Décembre 2025',
      description:
        "Application web basée sur l'IA intégrant filtrage des données personnelles, détection des hallucinations et modération des contenus toxiques ou inappropriés.",
      image: '/assets/portfolio/devfest-2025.jpg', 
    },
    {
      title: '1ère place',
      event: 'ENI NEXTA-EVENT',
      date: 'Juin 2025',
      description:
        "Code Kids : plateforme éducative destinée aux enfants pour les initier aux bases de la technologie et de la programmation.",
      image: '/assets/portfolio/eni-nexta-event.jpg',
    },
    {
      title: '1ère place',
      event: 'IVO-EGNANA Youth Computing',
      date: 'Mai 2026',
      description:
        "Fayze : application web dédiée à la résolution de défis urbains à Fianarantsoa — logement étudiant, sites touristiques, mobilité et gestion des ressources municipales.",
      image: '/assets/portfolio/ivoegnana-tech-meeting.jpg',
    },
  ],
  en: [
    {
      title: '1st place',
      event: 'Devfest Antananarivo 2025',
      date: 'December 2025',
      description:
        'AI-powered web application featuring personal-data filtering, hallucination detection and moderation of toxic or inappropriate content.',
      image: '/assets/portfolio/devfest-2025.jpg',
    },
    {
      title: '1st place',
      event: 'ENI NEXTA-EVENT',
      date: 'June 2025',
      description:
        'Code Kids: an educational platform designed to introduce children to the fundamentals of technology and programming.',
      image: '/assets/portfolio/eni-nexta-event.jpg',
    },
    {
      title: '1st place',
      event: 'IVO-EGNANA Youth Computing',
      date: 'May 2026',
      description:
        'Fayze: a web application tackling urban challenges in Fianarantsoa — student housing, tourist landmarks, mobility and municipal resource management.',
      image: '/assets/portfolio/ivoegnana-tech-meeting.jpg',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Formations                         */
/* ------------------------------------------------------------------ */

export const education: Record<Lang, Education[]> = {
  fr: [
    {
      degree: 'Licence Professionnelle — Génie Logiciel & Bases de Données',
      school: "École Nationale d'Informatique (ENI), Université de Fianarantsoa",
      period: '2023 — Aujourd’hui (3ème année)',
      details:
        "Formation d'ingénierie logicielle orientée conception, développement et administration de systèmes d'information.",
      subjects: ['Merise', 'Modélisation LDM', 'Architectures cloud', 'Structures de données', 'Java / Spring Boot', 'SQL & Oracle'],
    },
    {
      degree: 'Baccalauréat — Série C, Mention Assez-Bien',
      school: 'ESCA Antanimena',
      period: '2023',
      details: 'Cursus scientifique à dominante mathématiques et sciences physiques.',
      subjects: ['Mathématiques', 'Sciences physiques'],
    },
  ],
  en: [
    {
      degree: 'Professional Bachelor — Software Engineering & Databases',
      school: 'École Nationale d’Informatique (ENI), University of Fianarantsoa',
      period: '2023 — Present (3rd year)',
      details:
        'Software engineering degree focused on design, development and administration of information systems.',
      subjects: ['Merise', 'LDM modeling', 'Cloud architectures', 'Data structures', 'Java / Spring Boot', 'SQL & Oracle'],
    },
    {
      degree: 'Baccalauréat — Series C (Scientific track)',
      school: 'ESCA Antanimena',
      period: '2023',
      details: 'Scientific curriculum with a focus on mathematics and physics.',
      subjects: ['Mathematics', 'Physics'],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Traductions de l'interface                                          */
/* ------------------------------------------------------------------ */

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      certifications: 'Certifications',
      distinctions: 'Distinctions',
      education: 'Formations',
      contact: 'Contact',
    },
    hero: {
      hello: 'HELLO !',
      greeting: 'Je suis',
      role: 'Développeur Full-Stack Junior & Architecte Système',
      bio: "Passionné par le développement, l'architecture système et l'ingénierie cloud, je conçois des applications robustes et élégantes — et j'adore relever des défis algorithmiques.",
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      badge: 'Full-Stack • Cloud • Algo',
      available: 'Disponible pour opportunités',
      ctaCv: 'Telecharger CV'
    },
    sections: {
      projects: 'Projets',
      projectsSub: 'Une sélection de réalisations techniques.',
      certifications: 'Certifications',
      certificationsSub: 'Mon parcours de certification Google Cloud Platform et au-delà.',
      distinctions: 'Distinctions',
      distinctionsSub: 'Victoires et accomplissements en compétitions technologiques.',
      education: 'Formations',
      educationSub: 'Mon parcours académique et les compétences clés acquises.',
      inProgress: 'En cours de préparation',
      obtained: 'Obtenu',
      keySubjects: 'Matières & compétences clés',
      githubBtn: 'GitHub',
      vlogBtn: 'A propos',
      skills: 'Stack Technique',
      skillsSub: 'Mes outils de prédilection et technologies maîtrisées au quotidien.',
    },
    footer: {
      title: 'Travaillons ensemble',
      text: "Un projet, un stage ou une opportunité ? Ma boîte mail est toujours ouverte.",
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      rights: 'Tous droits réservés.',
      madeWith: 'Conçu et développé avec passion',
    },
    marquee: ['Full-Stack', 'Spring Boot', 'React', 'Cloud GCP', 'PostgreSQL', 'Architecture Système', 'Devfest Winner', 'Algorithmique'],
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      certifications: 'Certifications',
      distinctions: 'Awards',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      hello: 'HELLO!',
      greeting: 'I am',
      role: 'Junior Full-Stack Developer & System Architect',
      bio: 'Passionate about development, system architecture and cloud engineering, I build robust and elegant applications — and I love tackling algorithmic challenges.',
      ctaProjects: 'View my projects',
      ctaContact: 'Get in touch',
      badge: 'Full-Stack • Cloud • Algo',
      available: 'Open to opportunities',
      ctaCv: 'Download CV'
    },
    sections: {
      projects: 'Projects',
      projectsSub: 'A selection of technical builds',
      certifications: 'Certifications',
      certificationsSub: 'My Google Cloud Platform certification journey and beyond.',
      distinctions: 'Awards',
      distinctionsSub: 'Wins and achievements in tech competitions.',
      education: 'Education',
      educationSub: 'My academic background and key skills acquired.',
      inProgress: 'In preparation',
      obtained: 'Earned',
      keySubjects: 'Key subjects & skills',
      githubBtn: 'GitHub',
      vlogBtn: 'About',
      skills: 'Tech Stack',
      skillsSub: 'My favorite tools and technologies mastered on a daily basis.',
    },
    footer: {
      title: "Let's work together",
      text: 'A project, an internship or an opportunity? My inbox is always open.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      rights: 'All rights reserved.',
      madeWith: 'Designed and built with passion',
    },
    marquee: ['Full-Stack', 'Spring Boot', 'React', 'GCP Cloud', 'PostgreSQL', 'System Architecture', 'Devfest Winner', 'Algorithms'],
  },
} as const

export type Translations = (typeof translations)['fr']
