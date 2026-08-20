import { useTheme } from '@/hooks/useTheme'
import logoDarkImage from '@assets/Logo-dark.png'
import logoImage from '@assets/Logo.png'
import { mainNavigation } from '@data/navigation'
import { siteInformation } from '@data/site'
import { Container } from '@ui/Container'
import { Separator } from '@ui/Separator'
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { FiGlobe } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageProvider'

// Map social icons to react-icons components
const socialIconMap: Record<string, React.ElementType> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
      {siteInformation.socialLinks.map((social) => {
        const IconComponent = socialIconMap[social.icon] || FiGlobe
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={social.label}
          >
            <IconComponent className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-12 md:text-left md:flex md:justify-between">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contact}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4">
              {t.footer.description}
            </p>
            <div className="mt-3 flex flex-col items-center gap-3 sm:mt-4 md:items-start">
              <a
                href={`tel:${siteInformation.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                <FaPhone className="h-4 w-4 text-primary/70" />
                {siteInformation.phone}
              </a>
              <a
                href={`mailto:${siteInformation.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                <FaEnvelope className="h-4 w-4 text-primary/70" />
                {siteInformation.email}
              </a>
              <span className="inline-flex items-center gap-2.5 text-sm text-muted-foreground">
                <FaMapMarkerAlt className="h-4 w-4 text-primary/70" />
                {siteInformation.address}
              </span>
            </div>
          </div>

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.brand}
            </h3>
            <div className="mt-3 flex flex-col items-center sm:mt-4 md:items-start">
              <Link
                to="/"
                className="flex items-center gap-2"
                aria-label={siteInformation.companyName}
              >
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary sm:h-10 sm:w-10">
                  <img
                    src={theme === 'dark' ? logoDarkImage : logoImage}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                  {siteInformation.companyName}
                </span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.footer.description}
              </p>
              <div className="mt-3 sm:mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.quickLinks}
            </h3>
            <nav
              className="mt-3 flex flex-col items-center gap-2 sm:mt-4 md:items-start"
              aria-label="Footer navigation"
            >
              {mainNavigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                >
                  {
                    t.navigation[
                      item.translationKey.split(
                        '.'
                      )[1] as keyof typeof t.navigation
                    ]
                  }
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>

      <Separator />

      <Container className="py-4 sm:py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:gap-4 sm:text-sm">
          <p>
            © {currentYear} {siteInformation.companyName}. {t.footer.rights}
          </p>
          <p>
            {t.footer.developedBy}{' '}
            <a
              href={siteInformation.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              {siteInformation.developerName}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
