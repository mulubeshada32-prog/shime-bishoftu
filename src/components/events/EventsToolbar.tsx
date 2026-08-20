import { useLanguage } from '@/i18n/LanguageProvider'
import type { EventFilters, SortOption } from '@/utils/eventFilters'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

interface EventsToolbarProps {
  filters: EventFilters
  onSearchChange: (query: string) => void
  onCategoryChange: (category: EventFilters['category']) => void
  onStatusChange: (status: EventFilters['status']) => void
  onSortChange: (sort: SortOption) => void
}

export function EventsToolbar({
  filters,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onSortChange,
}: EventsToolbarProps) {
  const { t } = useLanguage()
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const categories: EventFilters['category'][] = [
    'all',
    'ceremony',
    'hospitality',
    'development',
    'tourism',
    'government',
    'community',
    'charity',
    'other',
  ]

  const statuses: EventFilters['status'][] = [
    'all',
    'upcoming',
    'ongoing',
    'completed',
  ]
  const sorts: SortOption[] = ['soonest', 'latest', 'aToZ', 'zToA']

  return (
    <div className="mb-8">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <label htmlFor="event-search" className="sr-only">
            {t.events.search.label}
          </label>
          <input
            id="event-search"
            type="search"
            value={filters.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.events.search.placeholder}
            className="w-full rounded-md border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <select
            value={filters.category}
            onChange={(e) =>
              onCategoryChange(e.target.value as EventFilters['category'])
            }
            aria-label={t.events.filters.category}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all'
                  ? `${t.events.filters.category}: ${t.events.filters.all}`
                  : t.events.categories[category]}
              </option>
            ))}
          </select>

          <select
            value={filters.status}
            onChange={(e) =>
              onStatusChange(e.target.value as EventFilters['status'])
            }
            aria-label={t.events.filters.status}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === 'all'
                  ? `${t.events.filters.status}: ${t.events.filters.all}`
                  : t.events.statuses[status]}
              </option>
            ))}
          </select>

          <select
            value={filters.sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label={t.events.filters.sort}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            {sorts.map((sort) => (
              <option key={sort} value={sort}>
                {t.events.sortOptions[sort]}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-label={t.events.filters.category}
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          {t.events.filters.category}
        </button>
      </div>

      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-background p-6 rounded-t-lg">
            <h3 className="mb-4 font-display text-xl font-medium text-foreground">
              {t.events.filters.category}
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t.events.filters.category}
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => {
                    onCategoryChange(e.target.value as EventFilters['category'])
                    setIsMobileFiltersOpen(false)
                  }}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all'
                        ? t.events.filters.all
                        : t.events.categories[category]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {t.events.filters.status}
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => {
                    onStatusChange(e.target.value as EventFilters['status'])
                    setIsMobileFiltersOpen(false)
                  }}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status === 'all'
                        ? t.events.filters.all
                        : t.events.statuses[status]}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.events.filters.apply}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
