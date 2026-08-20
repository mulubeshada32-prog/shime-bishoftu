import { Moon, Sun } from 'lucide-react'
import { IconButton } from '@ui/IconButton'
import { useTheme } from '@hooks/useTheme'
import { useLanguage } from '../../i18n/LanguageProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { locale } = useLanguage()

  const label =
    theme === 'light'
      ? locale === 'om'
        ? 'Gara haala dukkanaatti jijjiiri'
        : 'Switch to dark mode'
      : locale === 'om'
        ? 'Gara haala ifaatti jijjiiri'
        : 'Switch to light mode'

  return (
    <IconButton label={label} onClick={toggleTheme}>
      {theme === 'light' ? (
        <Moon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" />
      )}
    </IconButton>
  )
}
