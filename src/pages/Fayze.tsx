import { useEffect } from 'react'
import {
  ArrowLeft,
  Clock,
  Github,
  Lightbulb,
  Play,
  Radar,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { vlogFayze, type VlogPhase, type VlogScreenshot } from '@/data/vlogFayze'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'
import { Link } from 'react-router' 

const accentCycle = [
  'bg-orange text-cream-light',
  'bg-gold text-ink',
  'bg-sand text-ink',
] as const

function PhaseCard({ phase, index }: { phase: VlogPhase; index: number }) {
  return (
    <article
      className="reveal retro-card flex flex-col p-6"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-xl border-2 border-ink p-2.5 ${accentCycle[index % accentCycle.length]}`}>
          <Clock size={20} />
        </span>
        <span className="font-display text-4xl text-ink/15">0{index + 1}</span>
      </div>

      <span className="mt-4 font-display text-xs uppercase tracking-widest text-ink-soft">
        {phase.time}
      </span>
      <h3 className="mt-1 font-display text-xl text-ink">{phase.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{phase.description}</p>
    </article>
  )
}

function ScreenshotCard({ shot, index }: { shot: VlogScreenshot; index: number }) {
  return (
    <figure
      className="reveal retro-card group overflow-hidden p-0"
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="relative aspect-video overflow-hidden border-b-2 border-ink bg-card">
        <img
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="p-4 text-sm text-ink-soft">{shot.caption}</figcaption>
    </figure>
  )
}

export default function VlogFayze() {
  const { t, lang } = useApp()
  const content = vlogFayze[lang]

  const introRef = useReveal<HTMLElement>([lang])
  const phasesRef = useReveal<HTMLElement>([lang])
  const galleryRef = useReveal<HTMLElement>([lang])
  const stackRef = useReveal<HTMLElement>([lang])
  const closingRef = useReveal<HTMLElement>([lang])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return (
    <div className="min-h-screen bg-cream text-ink dark:bg-background">
      {/* Barre de retour */}
      <div className="sticky top-0 z-20 border-b-2 border-ink bg-cream/90 backdrop-blur dark:bg-background/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Modification : Remplacement de <a> par <Link> pour la navigation interne SPA */}
          <Link to="/#projets" className="retro-btn bg-card !px-3 !py-2 text-ink">
            <ArrowLeft size={16} />
            {content.ui.back}
          </Link>
          <span className="hidden font-display text-xs uppercase tracking-widest text-ink-soft sm:block">
            {content.ui.eyebrowNav}
          </span>
        </div>
      </div>

      {/* ---------- Hero du vlog ---------- */}
      <section className="paper-texture relative overflow-hidden pb-16 pt-16 sm:pt-20">
        <Radar className="absolute left-[6%] top-24 hidden h-14 w-14 -rotate-12 text-ink/20 md:block" strokeWidth={1.5} />
        <Zap className="absolute right-[8%] top-20 hidden h-16 w-16 rotate-6 text-ink/20 md:block" strokeWidth={1.5} />
        <Rocket className="absolute bottom-10 left-[10%] hidden h-12 w-12 rotate-12 text-ink/20 md:block" strokeWidth={1.5} />

        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-2 border-dashed border-ink/25 bg-gold/30" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full border-2 border-dashed border-ink/20 bg-orange/15" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="animate-float-slow inline-block -rotate-6 rounded-lg border-2 border-ink bg-ink px-4 py-1.5 font-display text-sm tracking-widest text-cream-light shadow-[4px_4px_0_0_hsl(var(--gold))] dark:bg-card dark:text-ink"
            style={{ '--float-rot': '-6deg' } as React.CSSProperties}
          >
            {content.meta.eyebrow}
          </div>

          <h1 className="mt-6 font-display text-[15vw] leading-[0.95] text-orange-deep drop-shadow-[4px_4px_0_hsl(var(--ink))] sm:text-7xl lg:text-8xl">
            {content.meta.title}
          </h1>
          <p className="mt-2 font-display text-xl text-ink/85 sm:text-2xl">{content.meta.subtitle}</p>

          <div className="mt-8 inline-flex max-w-full items-center gap-2 rounded-full border-[3px] border-gold bg-ink px-5 py-2.5 shadow-[4px_4px_0_0_hsl(var(--ink))] dark:bg-card">
            <Sparkles size={16} className="shrink-0 text-gold" />
            <span className="truncate text-xs font-bold uppercase tracking-wider text-cream-light dark:text-ink sm:text-sm">
              {content.meta.duration} · {content.meta.team} · {content.meta.ranking}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {content.meta.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/projects/general/github" target="_blank" rel="noreferrer" className="retro-btn bg-ink text-cream-light dark:bg-orange dark:text-ink">
              <Github size={16} />
              {t.sections.githubBtn}
            </a>
            <a href="#recit" className="retro-btn bg-card text-ink">
              <Play size={16} />
              {content.ui.ctaWatch}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Intro / contexte ---------- */}
      <section id="recit" ref={introRef} className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6">
        <SectionHeader title={content.ui.introTitle} subtitle={content.ui.introSub} />
        <div className="mt-8 space-y-4">
          {content.intro.map((paragraph, i) => (
            <p key={i} className="reveal text-base leading-relaxed text-ink-soft sm:text-lg" style={{ transitionDelay: `${i * 90}ms` }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ---------- Timeline du hackathon ---------- */}
      <section ref={phasesRef} className="paper-texture relative scroll-mt-24 px-4 py-16 sm:px-6">
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader title={content.ui.timelineTitle} subtitle={content.ui.timelineSub} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.phases.map((phase, i) => (
              <PhaseCard key={phase.id} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Galerie de captures ---------- */}
      <section ref={galleryRef} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
        <SectionHeader title={content.ui.galleryTitle} subtitle={content.ui.gallerySub} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.screenshots.map((shot, i) => (
            <ScreenshotCard key={shot.id} shot={shot} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- Stack technique ---------- */}
      <section ref={stackRef} className="paper-texture relative scroll-mt-24 px-4 py-16 sm:px-6">
        <div className="relative mx-auto max-w-4xl">
          <SectionHeader title={content.ui.stackTitle} subtitle={content.ui.stackSub} />
          <div className="reveal mt-8 flex flex-wrap gap-2">
            {content.stack.map((tech) => (
              <span key={tech} className="retro-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Enseignements + clôture ---------- */}
      <section ref={closingRef} className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6">
        <SectionHeader title={content.ui.learningsTitle} subtitle={content.ui.learningsSub} />
        <ul className="mt-8 space-y-4">
          {content.learnings.map((point, i) => (
            <li
              key={i}
              className="reveal retro-card flex items-start gap-3 p-5"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="mt-0.5 shrink-0 rounded-xl border-2 border-ink bg-gold p-2 text-ink">
                <Lightbulb size={18} />
              </span>
              <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{point}</p>
            </li>
          ))}
        </ul>

        <div className="reveal retro-card mt-8 flex items-start gap-3 border-orange p-6">
          <span className="mt-0.5 shrink-0 rounded-xl border-2 border-ink bg-orange p-2 text-cream-light">
            <Users size={18} />
          </span>
          <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{content.closing}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {/* Modification : Remplacement de <a> par <Link> ici aussi pour éviter le rechargement brutal */}
          <Link to="/#projets" className="retro-btn bg-ink text-cream-light dark:bg-orange dark:text-ink">
            <ArrowLeft size={16} />
            {content.ui.backToProjects}
          </Link>
          <a href="/projects/general/github" target="_blank" rel="noreferrer" className="retro-btn bg-card text-ink">
            <Github size={16} />
            {t.sections.githubBtn}
          </a>
        </div>
      </section>
    </div>
  )
}