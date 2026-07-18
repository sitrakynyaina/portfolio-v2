interface Props {
  title: string
  subtitle: string
}

/** En-tête de section : kicker doré + titre display + sous-titre */
export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="reveal">
      <span className="section-kicker -rotate-1">{title}</span>
      <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-ink-soft">{subtitle}</p>
      <div className="sketch-divider mt-6" />
    </div>
  )
}
