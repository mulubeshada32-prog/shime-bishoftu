import { getLocalizedText } from '@/i18n'
import { useLanguage } from '@/i18n/LanguageProvider'
import { events } from '@data/events'
import { Badge } from '@ui/Badge'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { Link } from 'react-router-dom'

function formatEventDate(dateString: string, locale: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale === 'om' ? 'om' : 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function FeaturedEvents() {
  const { t, locale } = useLanguage()

  const featuredEvents = events
    .filter((event) => event.featured && event.status !== 'completed')
    .slice(0, 3)

  if (featuredEvents.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center">
            <p className="mb-6 text-lg text-muted-foreground">
              {t.home.featuredEventsSection.emptyState}
            </p>
            <Link
              to="/events"
              className="text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {t.home.featuredEventsSection.emptyStateCta} →
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.home.featuredEventsSection.eyebrow}
          heading={t.home.featuredEventsSection.heading}
          description={t.home.featuredEventsSection.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-background"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={
                    event.gallery?.[0]?.image ||
                    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
                  }
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-normal group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2">
                  <time className="text-xs font-medium text-muted-foreground">
                    {formatEventDate(event.date, locale)}
                  </time>
                  <span className="text-muted-foreground">•</span>
                  <Badge variant="outline">
                    {t.events.categories[event.category] || event.category}
                  </Badge>
                </div>
                <h3 className="mb-3 font-display text-2xl font-medium text-foreground">
                  {getLocalizedText(event.title, locale)}
                </h3>
                <p className="mb-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  {getLocalizedText(event.shortDescription, locale)}
                </p>
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{getLocalizedText(event.location.venue, locale)}</span>
                </div>
                <Separator className="mb-4" />
                <Link
                  to={`/events/${event.slug}`}
                  className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {t.common.viewDetails} →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/events"
            className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {t.home.featuredEventsSection.viewAll} →
          </Link>
        </div>
      </Container>
    </section>
  )
}
