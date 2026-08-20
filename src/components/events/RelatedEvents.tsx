import type { Event } from '@/types/event'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageProvider'
import { EventCard } from './EventCard'

interface RelatedEventsProps {
  currentEvent: Event
  allEvents: Event[]
}

export function RelatedEvents({ currentEvent, allEvents }: RelatedEventsProps) {
  const { t } = useLanguage()

  const getRelatedEvents = (): Event[] => {
    if (currentEvent.relatedEventIds?.length) {
      return currentEvent.relatedEventIds
        .map((id) => allEvents.find((event) => event.id === id))
        .filter((event): event is Event => event !== undefined)
        .slice(0, 3)
    }

    return allEvents
      .filter((event) => event.id !== currentEvent.id)
      .filter((event) => event.category === currentEvent.category)
      .slice(0, 3)
  }

  const relatedEvents = getRelatedEvents()

  if (relatedEvents.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.eventDetails.relatedEvents.title}
          heading={t.eventDetails.relatedEvents.title}
          description={t.eventDetails.relatedEvents.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  )
}
