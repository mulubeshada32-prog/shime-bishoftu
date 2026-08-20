import { events } from '@data/events'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageProvider'
import {
  applyEventFilters,
  defaultFilters,
  hasActiveFilters,
  type EventFilters,
  type SortOption,
} from '../utils/eventFilters'

export function useEventFilters() {
  const { locale } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()

  const filters: EventFilters = useMemo(() => {
    const searchQuery = searchParams.get('search') || defaultFilters.searchQuery
    const category =
      (searchParams.get('category') as EventFilters['category']) ||
      defaultFilters.category
    const status =
      (searchParams.get('status') as EventFilters['status']) ||
      defaultFilters.status
    const sort = (searchParams.get('sort') as SortOption) || defaultFilters.sort

    return {
      searchQuery,
      category: isValidCategory(category) ? category : defaultFilters.category,
      status: isValidStatus(status) ? status : defaultFilters.status,
      sort: isValidSort(sort) ? sort : defaultFilters.sort,
    }
  }, [searchParams])

  const filteredEvents = useMemo(() => {
    return applyEventFilters(events, filters, locale)
  }, [events, filters, locale])

  const setSearchQuery = useCallback(
    (searchQuery: string) => {
      setSearchParams(
        (prevParams) => {
          const newParams = new URLSearchParams(prevParams)
          if (searchQuery.trim()) {
            newParams.set('search', searchQuery.trim())
          } else {
            newParams.delete('search')
          }
          return newParams
        },
        { replace: false }
      )
    },
    [setSearchParams]
  )

  const setCategory = useCallback(
    (category: EventFilters['category']) => {
      setSearchParams(
        (prevParams) => {
          const newParams = new URLSearchParams(prevParams)
          if (category !== 'all') {
            newParams.set('category', category)
          } else {
            newParams.delete('category')
          }
          return newParams
        },
        { replace: false }
      )
    },
    [setSearchParams]
  )

  const setStatus = useCallback(
    (status: EventFilters['status']) => {
      setSearchParams(
        (prevParams) => {
          const newParams = new URLSearchParams(prevParams)
          if (status !== 'all') {
            newParams.set('status', status)
          } else {
            newParams.delete('status')
          }
          return newParams
        },
        { replace: false }
      )
    },
    [setSearchParams]
  )

  const setSort = useCallback(
    (sort: SortOption) => {
      setSearchParams(
        (prevParams) => {
          const newParams = new URLSearchParams(prevParams)
          if (sort !== defaultFilters.sort) {
            newParams.set('sort', sort)
          } else {
            newParams.delete('sort')
          }
          return newParams
        },
        { replace: false }
      )
    },
    [setSearchParams]
  )

  const clearFilters = useCallback(() => {
    setSearchParams({}, { replace: false })
  }, [setSearchParams])

  const clearFilter = useCallback(
    (filterKey: keyof EventFilters) => {
      setSearchParams(
        (prevParams) => {
          const newParams = new URLSearchParams(prevParams)
          newParams.delete(filterKey)
          return newParams
        },
        { replace: false }
      )
    },
    [setSearchParams]
  )

  return {
    filters,
    filteredEvents,
    hasActiveFilters: hasActiveFilters(filters),
    setSearchQuery,
    setCategory,
    setStatus,
    setSort,
    clearFilters,
    clearFilter,
  }
}

function isValidCategory(
  category: string
): category is EventFilters['category'] {
  const validCategories: EventFilters['category'][] = [
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
  return validCategories.includes(category as EventFilters['category'])
}

function isValidStatus(status: string): status is EventFilters['status'] {
  const validStatuses: EventFilters['status'][] = [
    'all',
    'upcoming',
    'ongoing',
    'completed',
  ]
  return validStatuses.includes(status as EventFilters['status'])
}

function isValidSort(sort: string): sort is SortOption {
  const validSorts: SortOption[] = ['soonest', 'latest', 'aToZ', 'zToA']
  return validSorts.includes(sort as SortOption)
}
