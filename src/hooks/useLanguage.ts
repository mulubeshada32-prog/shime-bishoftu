import { useCallback, useEffect, useState } from 'react'

export type Language = 'en' | 'af'

export function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLanguage = window.localStorage.getItem('language')
  if (storedLanguage === 'en' || storedLanguage === 'af') {
    return storedLanguage
  }

  return 'en'
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage())

  useEffect(() => {
    window.localStorage.setItem('language', language)
    document.documentElement.lang = language === 'en' ? 'en' : 'om'
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'af' : 'en'))
  }, [])

  return { language, toggleLanguage }
}
