import { ActiveEventFilters } from '@components/events/ActiveEventFilters'
import { EventCard } from '@components/events/EventCard'
import { EventsEmptyState } from '@components/events/EventsEmptyState'
import { EventsHero } from '@components/events/EventsHero'
import { EventsToolbar } from '@components/events/EventsToolbar'
import { useEventFilters } from '@hooks/useEventFilters'
import { useSEO } from '@hooks/useSEO'
import { Container } from '@ui/Container'
import { useLanguage } from '../../i18n/LanguageProvider'

export default function EventsPage() {
  const { t } = useLanguage()
  const {
    filters,
    filteredEvents,
    hasActiveFilters,
    setSearchQuery,
    setCategory,
    setStatus,
    setSort,
    clearFilters,
    clearFilter,
  } = useEventFilters()

  useSEO({
    title: t.seo.events.title,
    description: t.seo.events.description,
    canonicalPath: '/events',
  })

  const totalEvents = filteredEvents.length

  return (
    <>
      <EventsHero />
      <section className="py-16 md:py-24">
        <Container>
          <EventsToolbar
            filters={filters}
            onSearchChange={setSearchQuery}
            onCategoryChange={setCategory}
            onStatusChange={setStatus}
            onSortChange={setSort}
          />

          <ActiveEventFilters
            filters={filters}
            onClearFilter={clearFilter}
            onClearAll={clearFilters}
          />

          <div className="mb-8 text-sm text-muted-foreground">
            {t.events.filters.showing} {totalEvents}{' '}
            {totalEvents === 1
              ? t.events.filters.event
              : t.events.filters.events}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EventsEmptyState
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
              searchQuery={filters.searchQuery}
            />
          )}
        </Container>
      </section>
    </>
  )
}
