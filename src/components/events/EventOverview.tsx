import type { Event } from '@/types/event'
import { Container } from '@ui/Container'
import { SectionEyebrow } from '@ui/SectionEyebrow'
import { getLocalizedText } from '../../i18n'
import { useLanguage } from '../../i18n/LanguageProvider'

interface EventOverviewProps {
  event: Event
}

export function EventOverview({ event }: EventOverviewProps) {
  const { t, locale } = useLanguage()

  const formattedDate = new Intl.DateTimeFormat(locale === 'om' ? 'om' : 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(event.date))

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionEyebrow
              text={t.eventDetails.overview.aboutEvent}
              className="mb-4"
            />
            <h2 className="mb-6 font-display text-3xl font-medium text-foreground md:text-4xl">
              {getLocalizedText(event.title, locale)}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {getLocalizedText(event.description, locale)}
            </p>
          </div>

          <div>
            <SectionEyebrow
              text={t.eventDetails.overview.eventDetails}
              className="mb-4"
            />
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t.eventDetails.overview.date}
                </h3>
                <p className="text-muted-foreground">{formattedDate}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t.eventDetails.overview.time}
                </h3>
                <p className="text-muted-foreground">
                  {event.startTime}
                  {event.endTime && ` – ${event.endTime}`}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t.eventDetails.overview.location}
                </h3>
                <p className="text-muted-foreground">
                  {getLocalizedText(event.location.venue, locale)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {event.location.city}, {event.location.region}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t.eventDetails.overview.hostedBy}
                </h3>
                <p className="text-muted-foreground">{event.organizer.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t.eventDetails.overview.category}
                </h3>
                <p className="text-muted-foreground">
                  {t.events.categories[event.category]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
