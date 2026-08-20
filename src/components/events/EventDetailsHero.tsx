import eventsDetailHero from '@/assets/events-detail-hero.png'
import type { Event } from '@/types/event'
import { Badge } from '@ui/Badge'
import { Container } from '@ui/Container'
import { Link } from 'react-router-dom'
import { getLocalizedText } from '../../i18n'
import { useLanguage } from '../../i18n/LanguageProvider'

interface EventDetailsHeroProps {
  event: Event
}

export function EventDetailsHero({ event }: EventDetailsHeroProps) {
  const { t, locale } = useLanguage()

  const formattedDate = new Intl.DateTimeFormat(locale === 'om' ? 'om' : 'en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(event.date))

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
          poster={eventsDetailHero}
        >
          <img
            src={eventsDetailHero}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70" />
      </div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 text-xs text-muted-foreground sm:mb-6 sm:text-sm"
          >
            <ol className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {t.eventDetails.hero.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/events"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {t.eventDetails.hero.breadcrumbEvents}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                <span className="line-clamp-1 max-w-[200px] sm:max-w-none">
                  {getLocalizedText(event.title, locale)}
                </span>
              </li>
            </ol>
          </nav>
          <div className="mb-4 flex items-center justify-center gap-2">
            <Badge variant="accent">{t.events.statuses[event.status]}</Badge>
            <Badge variant="outline">
              {t.events.categories[event.category]}
            </Badge>
          </div>
          <h1 className="mb-6 font-display text-5xl font-medium leading-tight text-foreground md:text-6xl">
            {getLocalizedText(event.title, locale)}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {getLocalizedText(event.shortDescription, locale)}
          </p>
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={event.date}>{formattedDate}</time>
            <span>{getLocalizedText(event.location.venue, locale)}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
