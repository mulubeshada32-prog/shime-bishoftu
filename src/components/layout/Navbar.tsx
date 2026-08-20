import { LanguageToggle } from '@common/LanguageToggle'
import { Logo } from '@common/Logo'
import { ThemeToggle } from '@common/ThemeToggle'
import { mainNavigation } from '@data/navigation'
import { cn } from '@lib/utils'
import { Menu } from 'lucide-react'
import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageProvider'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { t } = useLanguage()

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <nav
          className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 md:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <Logo showText={true} className="md:mr-4 md:hidden" />
            <Logo showText={true} className="hidden md:flex" />
          </div>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors duration-normal',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1 py-0.5',
                    isActive
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  )
                }
              >
                {
                  t.navigation[
                    item.translationKey.split(
                      '.'
                    )[1] as keyof typeof t.navigation
                  ]
                }
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <div className="hidden lg:block">
              <LanguageToggle />
            </div>
            <button
              ref={menuButtonRef}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-normal hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMenuClose} />
    </>
  )
}
