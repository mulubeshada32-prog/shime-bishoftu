import { Link } from 'react-router-dom'
import { Container } from '@ui/Container'
import { SectionEyebrow } from '@ui/SectionEyebrow'
import { Button } from '@ui/Button'
import { useLanguage } from '@/i18n/LanguageProvider'
import { useTheme } from '@/hooks/useTheme'
import logoImage from '@assets/Logo.png'
import logoDarkImage from '@assets/Logo-dark.png'

export function AboutPreview() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={theme === 'dark' ? logoDarkImage : logoImage}
              alt={t.home.aboutPreview.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-start">
            <SectionEyebrow
              text={t.home.aboutPreview.eyebrow}
              className="mb-4"
            />
            <h2 className="mb-4 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              {t.home.aboutPreview.heading}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {t.home.aboutPreview.description}
            </p>
            <Link to="/about">
              <Button variant="secondary">{t.home.aboutPreview.cta}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
