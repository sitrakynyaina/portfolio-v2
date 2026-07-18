import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from '@/data/portfolio'

interface AppContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
  dark: boolean
  toggleDark: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'en' ? 'en' : 'fr'
  })
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  const value: AppContextValue = {
    lang,
    setLang,
    t: translations[lang] as Translations,
    dark,
    toggleDark: () => setDark((d) => !d),
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
