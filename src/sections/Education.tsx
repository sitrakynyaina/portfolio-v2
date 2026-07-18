import { useState } from 'react'
import { GraduationCap, School, Folder, Terminal, Layers } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { education } from '@/data/portfolio'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

export default function Education() {
  const { t, lang } = useApp()
  const ref = useReveal<HTMLElement>([lang])
  const [activeTab, setActiveTab] = useState(0)

  const currentEdu = education[lang][activeTab]

  return (
    <section
      id="formations"
      ref={ref}
      className="scroll-mt-24 border-y-2 border-ink bg-sand/40 py-20 dark:bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader title={t.sections.education} subtitle={t.sections.educationSub} />

        {/* Conteneur Principal de l'OS Explorer */}
        <div className="mt-12 grid gap-6 md:grid-cols-12 items-start">
          
          {/* PANNEAU GAUCHE : Sélecteur de dossiers / Index (Prend 4 colonnes sur desktop) */}
          <div className="reveal md:col-span-4 flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 scrollbar-none snap-x">
            {education[lang].map((edu, i) => {
              const isActive = activeTab === i
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`snap-center shrink-0 min-w-[200px] md:w-full text-left p-4 border-2 border-ink rounded-xl transition-all duration-200 flex items-center gap-3 relative select-none
                    ${isActive 
                      ? 'bg-gold text-ink shadow-[4px_4px_0_0_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]' 
                      : 'bg-cream-light text-ink/70 hover:bg-cream hover:text-ink shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0'
                    }`}
                >
                  {/* Indicateur de focus retro */}
                  {isActive && (
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-6 bg-ink rounded-r" />
                  )}
                  
                  <span className={`p-2 rounded-lg border border-ink/20 ${isActive ? 'bg-ink text-gold' : 'bg-ink/5'}`}>
                    {i === 0 ? <GraduationCap size={18} /> : <School size={18} />}
                  </span>
                  
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider opacity-60">{edu.period}</p>
                    <p className="font-display text-sm truncate">{edu.degree}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* PANNEAU DROIT : La Fenêtre Système Active (Prend 8 colonnes sur desktop) */}
          <div className="reveal md:col-span-8" style={{ transitionDelay: '100ms' }}>
            {currentEdu && (
              <article className="border-2 border-ink bg-cream rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] overflow-hidden flex flex-col min-h-[340px]">
                
                {/* Barre supérieure style application Vintage Mac / Windows 95 */}
                <div className="border-b-2 border-ink bg-ink text-cream-light px-4 py-2.5 flex items-center justify-between font-mono text-xs select-none">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-gold" />
                    <span>system_explorer // formation_0{activeTab + 1}.pkg</span>
                  </div>
                  {/* Petits boutons de fenêtre rétro */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 border border-cream-light/40 rounded-sm inline-block bg-cream/10" />
                    <span className="w-3 h-3 border border-cream-light/40 rounded-sm inline-block bg-gold" />
                    <span className="w-3 h-3 border border-cream-light/40 rounded-sm inline-block bg-orange" />
                  </div>
                </div>

                {/* Corps de la fenêtre */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* En-tête du contenu */}
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-dashed border-ink/20 pb-4">
                      <div>
                        <span className="retro-pill bg-orange text-cream-light text-xs font-bold mb-1 inline-block">
                          {currentEdu.period}
                        </span>
                        <h3 className="font-display text-2xl text-ink leading-tight mt-1">
                          {currentEdu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-orange-deep mt-1 flex items-center gap-1.5">
                          <Folder size={14} className="inline" />
                          {currentEdu.school}
                        </p>
                      </div>
                    </div>

                    {/* Description / Détails */}
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft font-medium">
                      {currentEdu.details}
                    </p>
                  </div>

                  {/* Section Matières Clés */}
                  <div className="mt-6 pt-4 border-t border-ink/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/50 flex items-center gap-1.5 mb-2.5">
                      <Layers size={12} />
                      {t.sections.keySubjects}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentEdu.subjects.map((s) => (
                        <span key={s} className="retro-chip bg-cream-light">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </article>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}