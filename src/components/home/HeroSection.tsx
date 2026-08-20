import { useLanguage } from '@/i18n/LanguageProvider'
import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { Link } from 'react-router-dom'

// Direct imports for hero background videos
import {
  default as heroVideoMobile,
  default as heroVideoTablet,
} from '@/assets/videos/hero-mobile-bg.mp4'
import { default as heroVideoDesktop } from '@/assets/videos/hero-pc-bg.mp4'

// Optional: WebM versions for better browser support
import {
  default as heroVideoMobileWebm,
  default as heroVideoTabletWebm,
} from '@/assets/videos/hero-mobile-bg.webm'
import { default as heroVideoDesktopWebm } from '@/assets/videos/hero-pc-bg.webm'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background with responsive video */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          {/* WebM format (better compression) */}
          <source
            media="(max-width: 640px)"
            src={heroVideoMobileWebm}
            type="video/webm"
          />
          <source
            media="(min-width: 641px) and (max-width: 1024px)"
            src={heroVideoTabletWebm}
            type="video/webm"
          />
          <source
            media="(min-width: 1025px)"
            src={heroVideoDesktopWebm}
            type="video/webm"
          />

          {/* MP4 format (fallback) */}
          <source
            media="(max-width: 640px)"
            src={heroVideoMobile}
            type="video/mp4"
          />
          <source
            media="(min-width: 641px) and (max-width: 1024px)"
            src={heroVideoTablet}
            type="video/mp4"
          />
          <source
            media="(min-width: 1025px)"
            src={heroVideoDesktop}
            type="video/mp4"
          />

          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-background/80" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70" />
      </div>

      <Container className="relative z-10 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="hero-enter-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black dark:text-white sm:mb-6 sm:text-sm">
            {t.home.hero.eyebrow}
          </p>
          <h1 className="hero-enter-heading mb-4 font-display text-4xl font-medium leading-tight text-foreground sm:mb-6 sm:text-xl md:text-6xl lg:text-7xl">
            {t.home.hero.heading}
          </h1>
          <p className="hero-enter-description mx-auto mb-6 max-w-2xl text-base  dark:text-blue-100 leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg md:text-xl">
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
