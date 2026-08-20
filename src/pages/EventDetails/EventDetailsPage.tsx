import { useParams } from 'react-router-dom'
import { events } from '@data/events'
import { EventDetailsHero } from '@components/events/EventDetailsHero'
import { EventOverview } from '@components/events/EventOverview'
import { EventAgenda } from '@components/events/EventAgenda'
import { EventSpeakers } from '@components/events/EventSpeakers'
import { EventVenue } from '@components/events/EventVenue'
import { EventLogistics } from '@components/events/EventLogistics'
import { EventFAQs } from '@components/events/EventFAQs'
import { EventSponsors } from '@components/events/EventSponsors'
import { EventGallery } from '@components/events/EventGallery'
import { RelatedEvents } from '@components/events/RelatedEvents'
import { ErrorState } from '@ui/ErrorState'
import { useSEO } from '@hooks/useSEO'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'

export default function EventDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, locale } = useLanguage()

  const event = events.find((currentEvent) => currentEvent.slug === slug)

  useSEO({
    title: event ? getLocalizedText(event.title, locale) : t.seo.notFound.title,
    description: event
      ? getLocalizedText(event.shortDescription, locale)
      : t.seo.notFound.description,
    image: event?.gallery?.[0]?.image,
    type: 'article',
    canonicalPath: event ? `/events/${event.slug}` : undefined,
  })

  if (!event) {
    return (
      <ErrorState
        eyebrow="404"
        title={t.errors.eventNotFound.title}
        description={t.errors.eventNotFound.description}
        primaryAction={{
          label: t.errors.eventNotFound.browseEvents,
          href: '/events',
        }}
        secondaryAction={{
          label: t.errors.eventNotFound.goHome,
          href: '/',
        }}
      />
    )
  }

  return (
    <>
      <EventDetailsHero event={event} />
      <EventOverview event={event} />

      {event.agenda && event.agenda.length > 0 && (
        <EventAgenda agenda={event.agenda} />
      )}

      {event.speakers && event.speakers.length > 0 && (
        <EventSpeakers speakers={event.speakers} />
      )}

      <EventVenue event={event} />

      {event.logistics && event.logistics.length > 0 && (
        <EventLogistics logistics={event.logistics} />
      )}

      {event.faqs && event.faqs.length > 0 && <EventFAQs faqs={event.faqs} />}

      {event.partners && event.partners.length > 0 && (
        <EventSponsors sponsors={event.partners} />
      )}

      {event.gallery && event.gallery.length > 1 && (
        <EventGallery gallery={event.gallery} />
      )}

      <RelatedEvents currentEvent={event} allEvents={events} />
    </>
  )
}
