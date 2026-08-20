import { Link } from 'react-router-dom'
import { Container } from '@ui/Container'
import { Button } from '@ui/Button'
import { useLanguage } from '@/i18n/LanguageProvider'

export function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.home.finalCta.eyebrow}
          </p>
          <h2 className="mb-6 font-display text-4xl font-medium leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {t.home.finalCta.heading}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {t.home.finalCta.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button
                size="large"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                {t.home.finalCta.primaryCta}
              </Button>
            </Link>
            <Link to="/events">
              <Button
                variant="secondary"
                size="large"
                className="w-full bg-transparent text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10 sm:w-auto"
              >
                {t.home.finalCta.secondaryCta}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
