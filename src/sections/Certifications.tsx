import { BadgeCheck, Cloud, Loader, Award, Binary, BarChart3, ShieldCheck, QrCode } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { certifications } from '@/data/portfolio'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

export default function Certifications() {
  const { t, lang } = useApp()
  const ref = useReveal<HTMLElement>([lang])

  // Associe un combo d'icônes et de styles selon le type de certification
  const getCertStyles = (cert: any) => {
    if (cert.status === 'progress') {
      return {
        bgClass: 'bg-sand/20 border-dashed opacity-7ating dark:bg-secondary/10',
        icon: <Cloud size={24} className="text-ink/40 animate-pulse" />,
        accentClass: 'text-ink/60',
        badgeColor: 'bg-ink/10 text-ink/70'
      }
    }

    switch (cert.type) {
      case 'code': // Style CodinGame Arcade Premium Dark
        return {
          bgClass: 'bg-ink text-cream-light shadow-[6px_6px_0_0_rgba(244,196,48,1)] border-gold',
          icon: <Award size={24} className="text-gold" />,
          accentClass: 'text-gold font-mono',
          badgeColor: 'bg-gold text-ink font-bold animate-bounce'
        }
      case 'data': // Style Orange Digital Center
        return {
          bgClass: 'bg-cream text-ink shadow-[6px_6px_0_0_rgba(241,110,0,1)]',
          icon: <BarChart3 size={24} className="text-orange" />,
          accentClass: 'text-orange font-semibold',
          badgeColor: 'bg-orange text-cream-light'
        }
      default:
        return {
          bgClass: 'bg-cream text-ink shadow-[6px_6px_0_0_rgba(0,0,0,1)]',
          icon: <Binary size={24} className="text-orange-deep" />,
          accentClass: 'text-orange-deep',
          badgeColor: 'bg-gold text-ink'
        }
    }
  }

  return (
    <section
      id="certifications"
      ref={ref}
      className="scroll-mt-24 border-y-2 border-ink bg-sand/30 py-20 dark:bg-secondary/20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader title={t.sections.certifications} subtitle={t.sections.certificationsSub} />

        {/* Grille asymétrique pour casser l'uniformité */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {certifications[lang].map((cert, i) => {
            const styles = getCertStyles(cert)
            const isDone = cert.status === 'done'

            return (
              <article
                key={cert.title}
                className={`reveal border-2 border-ink rounded-2xl p-6 relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 select-none ${styles.bgClass}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Filigrane décoratif de fond pour le look document officiel */}
                {isDone && (
                  <div className="absolute right-2 bottom-12 opacity-5 pointer-events-none transform rotate-12 scale-150">
                    <ShieldCheck size={120} />
                  </div>
                )}

                {/* Bloc Supérieur : Statut & Badge icône */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`p-3 rounded-xl border border-ink/20 bg-cream-light/10 shadow-[2px_2px_0_0_currentColor]`}>
                      {styles.icon}
                    </div>

                    <span className={`retro-pill text-[11px] uppercase tracking-wider font-bold flex items-center gap-1 ${styles.badgeColor}`}>
                      {isDone ? <BadgeCheck size={12} /> : <Loader size={12} className="animate-spin" />}
                      {isDone ? (cert.type === 'code' ? 'HONORS' : t.sections.obtained) : t.sections.inProgress}
                    </span>
                  </div>

                  {/* Infos principales */}
                  <h3 className="font-display text-xl leading-tight tracking-tight mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className={`text-sm tracking-wide ${styles.accentClass}`}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Bloc Inférieur : Date & ID Technique style Matricule */}
                <div className="mt-8 pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-mono opacity-80">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase opacity-50 tracking-widest">Timeline</span>
                    <span className="font-semibold">{cert.date}</span>
                  </div>

                  {cert.id ? (
                    <div className="flex flex-col items-end text-right">
                      <span className="text-[10px] uppercase opacity-50 tracking-widest flex items-center gap-0.5">
                        <QrCode size={10} /> ID Verify
                      </span>
                      <span className="font-bold underline decoration-dotted">{cert.id}</span>
                    </div>
                  ) : (
                    isDone && (
                      <span className="text-[10px] uppercase opacity-40 font-bold tracking-widest border border-current px-1.5 py-0.5 rounded">
                        OFFICIAL
                      </span>
                    )
                  )}
                </div>

              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}