import { 
  SiSpringboot, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql, 
  SiMysql 
} from 'react-icons/si'
import { 
  FaJava, 
} from 'react-icons/fa';
import { 
  Atom, 
  Braces, 
} from 'lucide-react'
import { useApp } from '@/context/AppContext'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

// Structure des compétences avec les couleurs de ta palette
const techStack = [
  { name: 'Java', icon: FaJava, color: 'bg-orange', textColor: 'text-cream-light' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'bg-gold', textColor: 'text-ink' },
  { name: 'JavaScript', icon: SiJavascript, color: 'bg-sand', textColor: 'text-ink' },
  { name: 'React JS', icon: SiReact, color: 'bg-cream-light', textColor: 'text-ink' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'bg-card', textColor: 'text-ink' },
  { name: 'Python', icon: SiPython, color: 'bg-orange', textColor: 'text-cream-light' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'bg-gold', textColor: 'text-ink' },
  { name: 'MySQL', icon: SiMysql, color: 'bg-sand', textColor: 'text-ink' }
]

export default function Skills() {
  const { t, lang } = useApp()
  const ref = useReveal<HTMLElement>([lang])

  return (
    <section
      id="competences"
      ref={ref}
      className="paper-texture relative scroll-mt-24 py-20"
    >
      {/* Éléments de décoration façon croquis */}
      <Braces className="absolute left-[5%] top-20 hidden h-16 w-16 -rotate-12 text-ink/10 md:block" strokeWidth={1.5} />
      <Atom className="absolute bottom-20 right-[5%] hidden h-20 w-20 rotate-12 text-ink/10 md:block" strokeWidth={1.5} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader 
          title={t.sections.skills || "Stack Technique"} 
          subtitle={t.sections.skillsSub || "Mes outils de prédilection"} 
        />

        {/* Grille de cartes */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 sm:gap-6 lg:gap-8">
          {techStack.map((tech, i) => (
            <article 
              key={tech.name} 
              className="reveal retro-card group relative flex cursor-pointer flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_hsl(var(--ink))] dark:bg-secondary/40"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {/* Bulle de fond décorative qui grandit au hover */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border-2 border-dashed border-ink/20 bg-ink/5 transition-transform duration-500 group-hover:scale-[2.5]" />
              
              {/* Icône de la technologie */}
              <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 ${tech.color}`}>
                <tech.icon size={28} className={tech.textColor} strokeWidth={1.5} />
              </div>

              {/* Nom de la technologie */}
              <h3 className="relative z-10 mt-5 font-display text-base tracking-wider text-ink sm:text-lg">
                {tech.name}
              </h3>
              
              {/* Petit point décoratif */}
              <span className="relative z-10 mt-2 block h-1.5 w-1.5 rounded-full border border-ink bg-orange opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}