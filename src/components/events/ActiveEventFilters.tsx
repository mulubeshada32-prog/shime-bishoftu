import { X } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageProvider'
import type { EventFilters } from '@/utils/eventFilters'

interface ActiveEventFiltersProps {
  filters: EventFilters
  onClearFilter: (filterKey: keyof EventFilters) => void
  onClearAll: () => void
}

export function ActiveEventFilters({
  filters,
  onClearFilter,
  onClearAll,
}: ActiveEventFiltersProps) {
  const { t } = useLanguage()

  const activeFilters: { key: keyof EventFilters; label: string }[] = []

  if (filters.searchQuery.trim()) {
    activeFilters.push({
      key: 'searchQuery',
      label: filters.searchQuery.trim(),
    })
  }
  if (filters.category !== 'all') {
    activeFilters.push({
      key: 'category',
      label: t.events.categories[filters.category],
    })
  }
  if (filters.status !== 'all') {
    activeFilters.push({
      key: 'status',
      label: t.events.statuses[filters.status],
    })
  }

  if (activeFilters.length === 0) {
    return null
  }

  return (
    <div className="mb-6">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {t.events.filters.activeFilters}
      </h2>
      <div className="flex flex-wrap items-center gap-2">
        {activeFilters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onClearFilter(filter.key)}
            className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${t.events.filters.clear}: ${filter.label}`}
          >
            {filter.label}
            <X className="h-3 w-3" aria-hidden="true" />
          </button>
        ))}
        <button
          onClick={onClearAll}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {t.events.filters.clearAll}
        </button>
      </div>
    </div>
  )
}
