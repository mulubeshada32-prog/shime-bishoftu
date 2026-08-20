import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Locale } from './types'
import { getTranslations } from './index'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLanguage: () => void
  t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLocale = window.localStorage.getItem('language')
  if (storedLocale === 'en' || storedLocale === 'om') {
    return storedLocale
  }

  const browserLanguage = window.navigator.language.toLowerCase()
  if (browserLanguage.startsWith('om')) {
    return 'om'
  }

  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale())

  useEffect(() => {
    window.localStorage.setItem('language', locale)
    document.documentElement.lang = locale === 'en' ? 'en' : 'om'
  }, [locale])

  const toggleLanguage = () => {
    setLocale((currentLocale) => (currentLocale === 'en' ? 'om' : 'en'))
  }

  const t = getTranslations(locale)

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
