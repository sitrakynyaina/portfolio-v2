import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useApp } from '@/context/AppContext'

const anchors = [
  { id: 'accueil', key: 'home' },
  { id: 'projets', key: 'projects' },
  { id: 'certifications', key: 'certifications' },
  { id: 'distinctions', key: 'distinctions' },
  { id: 'formations', key: 'education' },
  { id: 'contact', key: 'contact' },
] as const

export default function Navbar() {
  const { t, lang, setLang, dark, toggleDark } = useApp()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 dark:bg-background/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo façon sticker */}
        <a
          href="#accueil"
          className="font-display text-lg tracking-tight text-ink -rotate-2 rounded-xl border-2 border-ink bg-gold px-3 py-1 shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:rotate-0"
        >
          L<span className="text-orange-deep">.</span>A
        </a>

        {/* Liens desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {anchors.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-sand hover:text-ink"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Toggle FR / EN */}
          <div className="flex overflow-hidden rounded-xl border-2 border-ink bg-card shadow-[3px_3px_0_0_hsl(var(--ink))]">
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                  lang === l ? 'bg-orange text-cream-light' : 'text-ink-soft hover:bg-sand'
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Toggle thème sombre / clair */}
          <button
            onClick={toggleDark}
            className="retro-btn bg-card !px-2.5 !py-1.5 text-ink"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="retro-btn bg-card !px-2.5 !py-1.5 text-ink lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-b-2 border-ink bg-cream transition-all duration-300 dark:bg-background lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 px-4 py-3">
          {anchors.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-semibold text-ink hover:bg-sand"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
