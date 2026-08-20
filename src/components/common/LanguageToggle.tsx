import { cn } from '@lib/utils'
import { useLanguage } from '../../i18n/LanguageProvider'

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className="flex items-center rounded-md border border-border bg-background"
      role="group"
      aria-label="Language selection"
    >
      <button
        onClick={() => setLocale('en')}
        className={cn(
          'rounded-md px-2 py-1 text-xs font-semibold transition-colors duration-normal',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          locale === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-pressed={locale === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale('om')}
        className={cn(
          'rounded-md px-2 py-1 text-xs font-semibold transition-colors duration-normal',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          locale === 'om'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-pressed={locale === 'om'}
        aria-label="Switch to Afaan Oromo"
      >
        A/O
      </button>
    </div>
  )
}
