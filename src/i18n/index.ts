import type { Locale } from './types'
import { enTranslations } from './en'
import { omTranslations } from './om'

const translations: Record<Locale, typeof enTranslations> = {
  en: enTranslations,
  om: omTranslations,
}

export function getTranslations(locale: Locale) {
  return translations[locale] || enTranslations
}

export function translate(locale: Locale, path: string[]): string {
  const translations = getTranslations(locale)
  let value: unknown = translations

  for (const key of path) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key]
    } else {
      return path.join('.')
    }
  }

  return typeof value === 'string' ? value : path.join('.')
}

export function getLocalizedText(
  text: { en: string; om: string },
  locale: Locale
): string {
  return text[locale] || text.en
}
