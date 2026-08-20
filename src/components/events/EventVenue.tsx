import { MapPin, ExternalLink } from 'lucide-react'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'
import type { Event } from '@/types/event'

interface EventVenueProps {
  event: Event
}

export function EventVenue({ event }: EventVenueProps) {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.eventDetails.venue.title}
          heading={getLocalizedText(event.location.venue, locale)}
          align="center"
          className="mb-8"
        />
        <div className="mx-auto max-w-2xl text-center">
          {event.location.address && (
            <p className="mb-2 text-muted-foreground">
              {getLocalizedText(event.location.address, locale)}
            </p>
          )}
          <p className="mb-6 text-muted-foreground">
            {event.location.city}, {event.location.region}
          </p>
          {event.location.mapUrl && (
            <a
              href={event.location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {t.eventDetails.venue.viewOnMap}
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          )}
        </div>
      </Container>
    </section>
  )
}
