import { Link } from 'react-router-dom'
import { Container } from '@ui/Container'
import { Button } from '@ui/Button'
import { YouTubeBackground } from '@ui/YouTubeBackground'
import { useLanguage } from '../../i18n/LanguageProvider'
import { mediaConfig } from '@data/media'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <YouTubeBackground
          youtubeId={mediaConfig.heroVideo.youtubeId}
          posterImage={mediaConfig.heroVideo.posterImageOptimized}
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70" />
      </div>

      <Container className="relative z-10 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="hero-enter-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:mb-6 sm:text-sm">
            {t.home.hero.eyebrow}
          </p>
          <h1 className="hero-enter-heading mb-4 font-display text-4xl font-medium leading-tight text-foreground sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            {t.home.hero.heading}
          </h1>
          <p className="hero-enter-description mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg md:text-xl">
            {t.home.hero.description}
          </p>
          <div className="hero-enter-cta flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/events" className="w-full sm:w-auto">
              <Button size="large" className="w-full sm:w-auto hover-lift">
                {t.home.hero.primaryCta}
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="large"
                className="w-full sm:w-auto hover-lift"
              >
                {t.home.hero.secondaryCta}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
