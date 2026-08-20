import { LanguageToggle } from '@common/LanguageToggle'
import { Logo } from '@common/Logo'
import { ThemeToggle } from '@common/ThemeToggle'
import { mainNavigation } from '@data/navigation'
import { cn } from '@lib/utils'
import { Separator } from '@ui/Separator'
import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageProvider'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [shouldRender, setShouldRender] = useState(isOpen)
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 300)
    } else {
      document.body.style.overflow = ''
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !menuRef.current) return

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          event.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          event.preventDefault()
        }
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleFocusTrap)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleFocusTrap)
    }
  }, [isOpen, onClose])

  if (!shouldRender) return null

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={menuRef}
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-background shadow-xl transition-transform duration-300 ease-out sm:w-4/5 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-4 sm:h-16 sm:px-6">
          <Logo showText={true} />
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-normal hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 sm:p-6"
          aria-label="Mobile navigation"
        >
          {mainNavigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'rounded-sm px-3 py-3 text-lg font-medium transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2',
                  isActive
                    ? 'bg-muted text-accent'
                    : 'text-foreground hover:bg-muted hover:text-accent'
                )
              }
              style={{
                transitionDelay: isOpen ? `${index * 50 + 100}ms` : '0ms',
              }}
            >
              {
                t.navigation[
                  item.translationKey.split('.')[1] as keyof typeof t.navigation
                ]
              }
            </NavLink>
          ))}
        </nav>

        <Separator className="my-2 sm:my-4" />

        <div
          className={cn(
            'flex items-center justify-between p-4 transition-all duration-300 sm:p-6',
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
          style={{ transitionDelay: isOpen ? '350ms' : '0ms' }}
        >
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
