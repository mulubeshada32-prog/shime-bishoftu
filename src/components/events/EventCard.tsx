import { Link } from 'react-router-dom'
import { Badge } from '@ui/Badge'
import { Separator } from '@ui/Separator'
import { ImageWithFallback } from '@ui/ImageWithFallback'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'
import type { Event } from '@/types/event'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const { t, locale } = useLanguage()

  const formattedDate = new Intl.DateTimeFormat(locale === 'om' ? 'om' : 'en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(event.date))

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-background transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <Link
        to={`/events/${event.slug}`}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
        aria-label={`${t.events.viewDetails}: ${getLocalizedText(event.title, locale)}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/10]">
          <ImageWithFallback
            src={event.gallery?.[0]?.image || ''}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
            <Badge variant="accent">{t.events.statuses[event.status]}</Badge>
          </div>
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <div className="flex items-center gap-2 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              <time dateTime={event.date}>{formattedDate}</time>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-1 text-xs font-medium text-muted-foreground sm:mb-3 sm:gap-2">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              <time dateTime={event.date}>{formattedDate}</time>
            </span>
            <span aria-hidden="true">•</span>
            <span>{t.events.categories[event.category]}</span>
          </div>

          <h2 className="mb-2 font-display text-xl font-medium leading-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:mb-3 sm:text-2xl">
            {getLocalizedText(event.title, locale)}
          </h2>

          <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:mb-4">
            {getLocalizedText(event.shortDescription, locale)}
          </p>

          <div className="mb-3 flex flex-col gap-1 text-sm text-muted-foreground sm:mb-4">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {getLocalizedText(event.location.venue, locale)}
            </span>
            <span className="text-xs">
              {t.events.hostedBy} {event.organizer.name}
            </span>
          </div>

          <Separator className="mb-3 sm:mb-4" />

          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-all duration-300 group-hover:gap-2 group-hover:text-foreground">
            {t.events.viewDetails}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  )
}
