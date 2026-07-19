// 1. Ajoute "Download" dans tes imports en haut du fichier
import { ArrowDown, Braces, Cloud, Cpu, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { profile } from '@/data/portfolio'

export default function Hero() {
  const { t } = useApp()

  return (
    <section id="accueil" className="paper-texture relative overflow-hidden pb-16 pt-32 sm:pt-36">
      {/* Doodles décoratifs façon croquis */}
      <Terminal className="absolute left-[6%] top-40 hidden h-14 w-14 -rotate-12 text-ink/20 md:block" strokeWidth={1.5} />
      <Cloud className="absolute right-[8%] top-36 hidden h-16 w-16 rotate-6 text-ink/20 md:block" strokeWidth={1.5} />
      <Braces className="absolute bottom-24 left-[10%] hidden h-12 w-12 rotate-12 text-ink/20 md:block" strokeWidth={1.5} />
      <Cpu className="absolute bottom-32 right-[12%] hidden h-12 w-12 -rotate-6 text-ink/20 md:block" strokeWidth={1.5} />

      {/* Cercle soleil arrière-plan */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-2 border-dashed border-ink/25 bg-gold/30" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full border-2 border-dashed border-ink/20 bg-orange/15" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Conteneur Grille pour aligner texte à gauche et photo à droite */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* COLONNE GAUCHE : Textes & Actions (Prend 7 colonnes sur 12) */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Sticker HELLO! incliné */}
            <div className="animate-float-slow inline-block -rotate-6 rounded-lg border-2 border-ink bg-ink px-4 py-1.5 font-display text-sm tracking-widest text-cream-light shadow-[4px_4px_0_0_hsl(var(--gold))] dark:bg-card dark:text-ink" style={{ '--float-rot': '-6deg' } as React.CSSProperties}>
              {t.hero.hello}
            </div>

            {/* Nom en typographie massive bicolore */}
            <h1 className="mt-6 font-display text-[13vw] leading-[0.95] sm:text-7xl lg:text-8xl">
              <span className="block text-ink">{t.hero.greeting}</span>
              <span className="block text-orange-deep drop-shadow-[4px_4px_0_hsl(var(--ink))]">
                LANDRY
              </span>
              <span className="block text-ink/85 text-[6.5vw] sm:text-4xl lg:text-5xl mt-2">
                ANDRIANTSIFERANA
              </span>
            </h1>

            {/* Pilule de rôle */}
            <div className="mt-8 inline-flex max-w-full items-center gap-2 rounded-full border-[3px] border-gold bg-ink px-5 py-2.5 shadow-[4px_4px_0_0_hsl(var(--ink))] dark:bg-card">
              <Sparkles size={16} className="shrink-0 text-gold" />
              <span className="truncate text-xs font-bold uppercase tracking-wider text-cream-light dark:text-ink sm:text-sm">
                {t.hero.role}
              </span>
            </div>

            {/* Bio */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {t.hero.bio}
            </p>

            {/* CTA + réseaux (Bouton CV ajouté ici) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projets" className="retro-btn bg-orange text-cream-light">
                {t.hero.ctaProjects}
                <ArrowDown size={16} />
              </a>
              
              {/* NOUVEAU : Bouton Télécharger le CV */}
              <a 
                href="cv-AndriantsiferanaLandry.pdf" 
                download="cv-AndriantsiferanaLandry.pdf" 
                className="retro-btn bg-gold text-ink"
              >
                <Download size={16} />
                {t.hero.ctaCv || "Mon CV"}
              </a>

              <a href="#contact" className="retro-btn bg-card text-ink">
                <Mail size={16} />
                {t.hero.ctaContact}
              </a>

              <div className="flex gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="retro-btn bg-card !px-3 text-ink"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="retro-btn bg-card !px-3 text-ink"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${profile.email}`} className="retro-btn bg-card !px-3 text-ink" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Badge disponibilité */}
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-ink bg-orange" />
              </span>
              {t.hero.available}
            </div>
          </div>

          {/* COLONNE DROITE : Cadre Photo Rétro */}
          <div className="flex justify-center w-full mt-8 lg:mt-0 lg:col-span-5">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] border-[3px] border-ink bg-cream p-3 rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform duration-300 ease-in-out select-none">
              <div className="w-full aspect-[3/4] overflow-hidden border-2 border-ink rounded-xl bg-ink/5">
                <img 
                  src="/assets/portfolio/profil.jpeg" 
                  alt="Landry Andriantsiferana - DevFest 2025 Winner" 
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>
              <div className="absolute -bottom-3 -left-4 -rotate-6 rounded-lg border-2 border-ink bg-gold px-3.5 py-1.5 font-display text-xs tracking-wider text-ink shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                Str_N_Aina
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bandeau défilant */}
      <div className="mt-16 -rotate-1 border-y-2 border-ink bg-gold py-3 shadow-[0_4px_0_0_hsl(var(--ink))]">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...t.marquee, ...t.marquee].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-sm uppercase tracking-widest text-ink">
                {item}
                <Sparkles size={14} className="text-orange-deep" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}