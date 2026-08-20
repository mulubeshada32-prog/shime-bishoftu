import type { LocalizedText } from '@/i18n/types'

export interface Promotion {
  id: string
  title: LocalizedText
  category: LocalizedText
  location: string
  year: number
  description: LocalizedText
  images: string[]
  featured: boolean
}

export const promotions: Promotion[] = [
  {
    id: '1',
    title: {
      en: 'Bishoftu Cultural Festival 2025',
      om: 'Ayyaana Aadaa Bishooftuu 2025',
    },
    category: {
      en: 'Cultural Event',
      om: 'Taatee Aadaa',
    },
    location: 'Bishoftu',
    year: 2025,
    description: {
      en: 'Successfully organized and promoted a three-day cultural festival with over 10,000 attendees.',
      om: 'Ayyaana aadaa guyyaa sadii kan daawwattoota 10,000 ol qabu qindeessuu fi dhiheessuu.',
    },
    images: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop&auto=format',
    ],
    featured: true,
  },
  {
    id: '2',
    title: {
      en: 'Lake Hora Tourism Campaign',
      om: 'Duula Tuurizimii Haroo Horaa',
    },
    category: {
      en: 'Tourism Promotion',
      om: 'Dhiheessa Tuurizimii',
    },
    location: 'Lake Hora',
    year: 2025,
    description: {
      en: 'Created a comprehensive tourism promotion campaign highlighting the natural beauty and activities around Lake Hora.',
      om: 'Duula dhiheessa tuurizimii kan miidhagina uumamaa fi hojiiwwan Haroo Horaa calaqqisiisu uume.',
    },
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1470071459604-7b8ec44ffd4e?w=800&h=600&fit=crop&auto=format',
    ],
    featured: true,
  },
  {
    id: '3',
    title: {
      en: 'Business Expo 2025',
      om: 'Expo Daldalaa 2025',
    },
    category: {
      en: 'Business Event',
      om: 'Taatee Daldalaa',
    },
    location: 'Bishoftu',
    year: 2025,
    description: {
      en: 'Organized a business expo connecting local entrepreneurs with investors and customers.',
      om: 'Expo daldalaa kan daldalaa naannoo mootummaa, investoraa fi maamiltoota walqunnamsiise.',
    },
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&h=600&fit=crop&auto=format',
    ],
    featured: false,
  },
]
