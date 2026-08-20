import { Link } from 'react-router-dom'
import { Container } from '@ui/Container'
import { useLanguage } from '../../i18n/LanguageProvider'
import { mediaConfig } from '@data/media'

export function AboutHero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
          poster={mediaConfig.heroVideo.posterImageOptimized}
        >
          <source src={mediaConfig.heroVideo.videoUrl} type="video/mp4" />
          <img
            src={mediaConfig.heroVideo.posterImageOptimized}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t.about.hero.eyebrow}
          </p>
          <h1 className="mb-6 font-display text-5xl font-medium leading-tight text-foreground md:text-6xl">
            {t.about.hero.heading}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.about.hero.description}
          </p>
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-muted-foreground"
          >
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {t.about.hero.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {t.about.hero.breadcrumbAbout}
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  )
}
