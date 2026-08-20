import { useLanguage } from '../../i18n/LanguageProvider'
import { Button } from '@ui/Button'

interface EventsEmptyStateProps {
  onClearFilters: () => void
  hasActiveFilters: boolean
  searchQuery: string
}

export function EventsEmptyState({
  onClearFilters,
  hasActiveFilters,
  searchQuery,
}: EventsEmptyStateProps) {
  const { t } = useLanguage()

  const getTitle = () => {
    if (searchQuery.trim()) {
      return t.errors.noSearchResults.title
    }
    if (hasActiveFilters) {
      return t.errors.noFilterResults.title
    }
    return t.errors.emptyEvents.title
  }

  const getDescription = () => {
    if (searchQuery.trim()) {
      return t.errors.noSearchResults.description
    }
    if (hasActiveFilters) {
      return t.errors.noFilterResults.description
    }
    return t.errors.emptyEvents.description
  }

  const getActionLabel = () => {
    if (searchQuery.trim()) {
      return t.errors.noSearchResults.clearSearch
    }
    if (hasActiveFilters) {
      return t.errors.noFilterResults.clearFilters
    }
    return t.errors.emptyEvents.backHome
  }

  return (
    <div className="py-16 text-center">
      <h2 className="mb-2 font-display text-2xl font-medium text-foreground md:text-3xl">
        {getTitle()}
      </h2>
      <p className="mb-6 text-muted-foreground">{getDescription()}</p>
      <Button onClick={onClearFilters}>{getActionLabel()}</Button>
    </div>
  )
}
