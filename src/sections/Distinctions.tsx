import { Medal, Trophy, Sparkles, Shield, Zap, Flame } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { distinctions } from '@/data/portfolio'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

export default function Distinctions() {
  const { t, lang } = useApp()
  const ref = useReveal<HTMLElement>([lang])

  // Générateur de propriétés de cartes à collectionner selon le rang
  const getCardSpecs = (index: number) => {
    switch (index) {
      case 0: 
        return {
          level:25,
          rarity: 'LEGENDARY CARD',
          bgClass: 'bg-gold text-ink border-ink shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
          innerBg: 'bg-cream',
          pillClass: 'bg-ink text-gold',
          icon: <Trophy size={32} className="text-orange-deep animate-bounce" />,
          stats: { code: '07', logic: '12', grind: '2025' },
          badgeColor: 'border-orange-deep text-orange-deep'
        }
      case 1:
        return {
          level:25,
          rarity: 'EPIC CARD',
          bgClass: 'bg-orange text-cream-light border-ink shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
          innerBg: 'bg-ink text-cream-light',
          pillClass: 'bg-gold text-ink',
          icon: <Medal size={32} className="text-gold" />,
          stats: { code: '20', logic: '06', grind: '2025' },
          badgeColor: 'border-gold text-gold'
        }
      default:
        return {
          level:26,
          rarity: 'RARE CARD',
          bgClass: 'bg-cream text-ink border-ink shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
          innerBg: 'bg-sand/30',
          pillClass: 'bg-orange text-cream-light',
          icon: <Sparkles size={32} className="text-orange-deep" />,
          stats: { code: '16', logic: '05', grind: '2026' },
          badgeColor: 'border-ink/30 text-ink/60'
        }
    }
  }

  return (
    <section
      id="distinctions"
      ref={ref}
      className="scroll-mt-24 bg-cream-light py-20 dark:bg-secondary/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader title={t.sections.distinctions} subtitle={t.sections.distinctionsSub} />

        {/* Le Classeur de Cartes (Grid System) */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
          {distinctions[lang].map((d, i) => {
            const specs = getCardSpecs(i)

            return (
              <article
                key={d.event}
                className={`reveal group relative flex flex-col justify-between border-[3px] rounded-2xl p-4 transition-all duration-300 ease-out 
                  hover:-translate-y-3 hover:rotate-1 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] ${specs.bgClass}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* 1. EN-TÊTE DE LA CARTE : Rareté & Date */}
                <div className="flex items-center justify-between font-mono text-[10px] font-black uppercase tracking-widest border-b-2 border-ink/20 pb-2 mb-3">
                  <span className="flex items-center gap-1">
                    <Zap size={10} className="fill-current" />
                    {specs.rarity}
                  </span>
                  <span>{d.date}</span>
                </div>

                {/* 2. ZONE D'ILLUSTRATION CENTRALE */}
                <div className={`w-full aspect-[4/3] rounded-xl border-2 border-ink flex flex-col items-center justify-center relative overflow-hidden p-4 ${specs.innerBg}`}>

                  {/* Image d'illustration en arrière-plan */}
                  <img
                    src={d.image}
                    alt={d.event}
                    className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                  />

                  {/* Superposition d'un léger voile pour garantir la lisibilité et le style TCG */}
                  <div className="absolute inset-0 bg-ink/10 mix-blend-multiply transition-opacity group-hover:opacity-30" />

                  {/* Texture de fond géométrique rétro */}
                  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Petit badge technique de la carte */}
                  <span className={`absolute bottom-2 right-2 z-10 border text-[9px] font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-sm bg-cream/80 ${specs.badgeColor}`}>
                    {specs.level}
                  </span>
                </div>

                {/* 3. BLOC TEXTE & DESCRIPTION (Le lore de la carte) */}
                <div className="mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`retro-pill text-[10px] font-bold uppercase tracking-wider ${specs.pillClass}`}>
                        {d.title}
                      </span>
                    </div>

                    <h3 className="font-display text-xl leading-tight text-current group-hover:text-orange-deep transition-colors">
                      {d.event}
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-relaxed opacity-90 line-clamp-4">
                      {d.description}
                    </p>
                  </div>

                  {/* 4. LE PANEL DES COMPÉTENCES (Power Stats de jeu en bas) */}
                  <div className="mt-6 pt-3 border-t-2 border-dashed border-ink/20 font-mono text-[11px]">
                    <div className="grid grid-cols-3 gap-2 text-center select-none">
                      <div className="border border-ink/20 rounded-lg p-1 bg-cream/10">
                        <span className="block text-[9px] uppercase opacity-60 font-bold flex items-center justify-center gap-0.5">
                          <Flame size={10} /> ATK
                        </span>
                        <span className="font-black text-sm">{specs.stats.code}</span>
                      </div>
                      <div className="border border-ink/20 rounded-lg p-1 bg-cream/10">
                        <span className="block text-[9px] uppercase opacity-60 font-bold flex items-center justify-center gap-0.5">
                          <Shield size={10} /> DEF
                        </span>
                        <span className="font-black text-sm">{specs.stats.logic}</span>
                      </div>
                      <div className="border border-ink/20 rounded-lg p-1 bg-cream/10">
                        <span className="block text-[9px] uppercase opacity-60 font-bold flex items-center justify-center gap-0.5">
                          <Zap size={10} /> SPD
                        </span>
                        <span className="font-black text-sm">{specs.stats.grind}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}