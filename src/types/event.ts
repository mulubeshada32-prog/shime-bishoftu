import type { LocalizedText } from '../i18n/types'

export type EventCategory =
  | 'ceremony'
  | 'hospitality'
  | 'development'
  | 'tourism'
  | 'government'
  | 'community'
  | 'charity'
  | 'other'

export type EventStatus = 'upcoming' | 'ongoing' | 'completed'

export interface EventSpeaker {
  id: string
  name: string
  role?: LocalizedText
  organization?: LocalizedText
  image?: string
  bio?: LocalizedText
  isDemo?: boolean
}

export interface EventAgendaItem {
  id: string
  time: string
  title: LocalizedText
  description?: LocalizedText
}

export interface EventFAQ {
  id: string
  question: LocalizedText
  answer: LocalizedText
}

export interface EventGallery {
  id: string
  image: string
  caption?: LocalizedText
  isDemo?: boolean
}

export interface EventPartner {
  id: string
  name: string
  logo?: string
  website?: string
  isDemo?: boolean
}

export interface EventLogistics {
  id: string
  label: LocalizedText
  value: LocalizedText
}

export interface Event {
  id: string
  slug: string
  title: LocalizedText
  shortDescription: LocalizedText
  description: LocalizedText
  category: EventCategory
  status: EventStatus
  featured: boolean
  date: string
  endDate?: string
  startTime: string
  endTime?: string
  location: {
    venue: LocalizedText
    address?: LocalizedText
    city: string
    region: string
    coordinates?: {
      latitude: number
      longitude: number
    }
    mapUrl?: string
  }
  organizer: {
    name: string
    email: string
    phone?: string
    logo?: string
  }
  host?: LocalizedText
  speakers?: EventSpeaker[]
  agenda?: EventAgendaItem[]
  logistics?: EventLogistics[] | LocalizedText
  faqs?: EventFAQ[]
  partners?: EventPartner[]
  gallery?: EventGallery[]
  relatedEventIds?: string[]
}
