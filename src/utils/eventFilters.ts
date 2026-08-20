import type { Event } from '@/types/event'
import type { Locale } from '../i18n/types'
import { getLocalizedText } from '../i18n'

export type SortOption = 'soonest' | 'latest' | 'aToZ' | 'zToA'

export interface EventFilters {
  searchQuery: string
  category: Event['category'] | 'all'
  status: Event['status'] | 'all'
  sort: SortOption
}

export const defaultFilters: EventFilters = {
  searchQuery: '',
  category: 'all',
  status: 'all',
  sort: 'soonest',
}

export function searchEvents(
  events: Event[],
  searchQuery: string,
  locale: Locale
): Event[] {
  if (!searchQuery.trim()) {
    return events
  }

  const query = searchQuery.toLowerCase().trim()

  return events.filter((event) => {
    const searchableText = [
      getLocalizedText(event.title, locale),
      getLocalizedText(event.shortDescription, locale),
      getLocalizedText(event.description, locale),
      getLocalizedText(event.location.venue, locale),
      event.location.city,
      event.location.region,
      event.organizer.name,
      event.category,
      event.status,
    ]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(query)
  })
}

export function filterEventsByCategory(
  events: Event[],
  category: EventFilters['category']
): Event[] {
  if (category === 'all') {
    return events
  }
  return events.filter((event) => event.category === category)
}

export function filterEventsByStatus(
  events: Event[],
  status: EventFilters['status']
): Event[] {
  if (status === 'all') {
    return events
  }
  return events.filter((event) => event.status === status)
}

export function sortEvents(
  events: Event[],
  sort: SortOption,
  locale: Locale
): Event[] {
  const sortedEvents = [...events]

  switch (sort) {
    case 'soonest':
      return sortedEvents.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.startTime || '00:00'}`)
        const dateB = new Date(`${b.date}T${b.startTime || '00:00'}`)
        return dateA.getTime() - dateB.getTime()
      })
    case 'latest':
      return sortedEvents.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.startTime || '00:00'}`)
        const dateB = new Date(`${b.date}T${b.startTime || '00:00'}`)
        return dateB.getTime() - dateA.getTime()
      })
    case 'aToZ':
      return sortedEvents.sort((a, b) =>
        getLocalizedText(a.title, locale).localeCompare(
          getLocalizedText(b.title, locale)
        )
      )
    case 'zToA':
      return sortedEvents.sort((a, b) =>
        getLocalizedText(b.title, locale).localeCompare(
          getLocalizedText(a.title, locale)
        )
      )
    default:
      return sortedEvents
  }
}

export function applyEventFilters(
  events: Event[],
  filters: EventFilters,
  locale: Locale
): Event[] {
  let filteredEvents = events

  filteredEvents = searchEvents(filteredEvents, filters.searchQuery, locale)
  filteredEvents = filterEventsByCategory(filteredEvents, filters.category)
  filteredEvents = filterEventsByStatus(filteredEvents, filters.status)
  filteredEvents = sortEvents(filteredEvents, filters.sort, locale)

  return filteredEvents
}

export function hasActiveFilters(filters: EventFilters): boolean {
  return (
    filters.searchQuery.trim() !== '' ||
    filters.category !== 'all' ||
    filters.status !== 'all'
  )
}
