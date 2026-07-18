import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { profile } from '@/data/portfolio'
import { useReveal } from '@/hooks/useReveal'

export default function Footer() {
  const { t } = useApp()
  const ref = useReveal<HTMLElement>()
  const year = new Date().getFullYear()

  return (
    <footer id="contact" ref={ref} className="scroll-mt-24 pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Carte contact principale */}
        <div className="reveal retro-card overflow-hidden !rounded-3xl bg-ink text-cream-light dark:bg-card dark:text-ink">
          <div className="paper-texture p-8 sm:p-12">
            <h2 className="font-display text-3xl sm:text-4xl">
              {t.footer.title} <span className="text-gold">.</span>
            </h2>
            <p className="mt-3 max-w-lg text-cream-light/80 dark:text-ink-soft">{t.footer.text}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 rounded-xl border-2 border-cream-light/25 p-3 transition-colors hover:border-gold">
                <span className="rounded-lg bg-gold p-2 text-ink"><Mail size={18} /></span>
                <span>
                  <span className="block text-xs uppercase tracking-wide opacity-70">{t.footer.email}</span>
                  <span className="text-sm font-semibold group-hover:text-gold">{profile.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-xl border-2 border-cream-light/25 p-3">
                <span className="rounded-lg bg-gold p-2 text-ink"><Phone size={18} /></span>
                <span>
                  <span className="block text-xs uppercase tracking-wide opacity-70">{t.footer.phone}</span>
                  <span className="text-sm font-semibold">{profile.phone}</span>
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border-2 border-cream-light/25 p-3">
                <span className="rounded-lg bg-gold p-2 text-ink"><MapPin size={18} /></span>
                <span>
                  <span className="block text-xs uppercase tracking-wide opacity-70">{t.footer.location}</span>
                  <span className="text-sm font-semibold">{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="retro-btn bg-orange text-cream-light">
                <Send size={16} />
                {t.hero.ctaContact}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="retro-btn bg-cream-light text-ink">
                <Github size={16} />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="retro-btn bg-cream-light text-ink">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Barre de bas de page */}
        <div className="flex flex-col items-center justify-between gap-3 py-8 text-center text-sm text-ink-soft sm:flex-row sm:text-left">
          <p>
            © {year} <span className="font-display text-ink">{profile.shortName} Andriantsiferana</span> — {t.footer.rights}
          </p>
          <p className="flex items-center gap-1.5">
            {t.footer.madeWith}
            <span className="inline-block h-2.5 w-2.5 rounded-full border border-ink bg-orange" />
          </p>
        </div>
      </div>
    </footer>
  )
}
