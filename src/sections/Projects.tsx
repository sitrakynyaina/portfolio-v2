// src/sections/Projects.tsx
import { FolderGit2, Github, Play } from 'lucide-react'
import { Link } from 'react-router' 
import { useApp } from '@/context/AppContext'
import { projects, type Project } from '@/data/portfolio'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

const accentStyles: Record<Project['accent'], string> = {
  orange: 'bg-orange text-cream-light',
  gold: 'bg-gold text-ink',
  sand: 'bg-sand text-ink',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useApp()
  
  // On détecte si c'est un chemin interne (ex: /vlog/fayze) ou un lien externe
  const isInternalVlog = project.vlog?.startsWith('/')

  return (
    <article
      className="reveal retro-card flex flex-col p-6"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* En-tête de la Card */}
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-xl border-2 border-ink p-2.5 ${accentStyles[project.accent]}`}>
          <FolderGit2 size={22} />
        </span>
        <span className="font-display text-4xl text-ink/15">0{index + 1}</span>
      </div>

      {/* Aperçu de l'image du Projet */}
      <div className="mt-4 w-full aspect-[16/10] overflow-hidden border-2 border-ink rounded bg-cream relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover  object-top"
          loading="lazy"
        />
      </div>

      <h3 className="mt-4 font-display text-xl text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.tagline}</p>

      {/* Badges de Technologies */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="retro-chip">
            {tech}
          </span>
        ))}
      </div>

      {/* Boutons d'actions */}
      <div className="mt-5 flex flex-wrap gap-2 border-t-2 border-dashed border-ink/30 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="retro-btn flex-1 bg-ink text-cream-light !text-xs dark:bg-orange dark:text-ink"
        >
          <Github size={15} />
          {t.sections.githubBtn}
        </a>

        {/* Condition de navigation interne (SPA) vs externe */}
        {isInternalVlog ? (
          <Link
            to={project.vlog}
            className="retro-btn flex-1 bg-gold text-ink !text-xs text-center flex items-center justify-center gap-1"
          >
            <Play size={15} />
            {t.sections.vlogBtn}
          </Link>
        ) : (
          <a
            href={project.vlog}
            target="_blank"
            rel="noreferrer"
            className="retro-btn flex-1 bg-gold text-ink !text-xs"
          >
            <Play size={15} />
            {t.sections.vlogBtn}
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const { t, lang } = useApp()
  const ref = useReveal<HTMLElement>([lang])

  return (
    <section id="projets" ref={ref} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeader title={t.sections.projects} subtitle={t.sections.projectsSub} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects[lang].map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}