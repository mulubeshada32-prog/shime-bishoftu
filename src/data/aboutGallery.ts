import type { LocalizedText } from '../i18n/types'

export interface AboutGalleryImage {
  id: string
  image: string
  alt: LocalizedText
  isDemo: boolean
}

export const aboutGalleryImages: AboutGalleryImage[] = [
  {
    id: 'about-gallery-1',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop',
    alt: {
      en: 'Community event celebration',
      om: 'Ayyaana taatee hawaasaa',
    },
    isDemo: true,
  },
  {
    id: 'about-gallery-2',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&auto=format&fit=crop',
    alt: {
      en: 'Cultural ceremony gathering',
      om: "Walga'ii sirna aadaa",
    },
    isDemo: true,
  },
  {
    id: 'about-gallery-3',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop',
    alt: {
      en: 'Event promotion and audience',
      om: 'Beeksisa taatee fi hirmaattota',
    },
    isDemo: true,
  },
  {
    id: 'about-gallery-4',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop',
    alt: {
      en: 'Community initiative activity',
      om: 'Hojii inisheetivii hawaasaa',
    },
    isDemo: true,
  },
  {
    id: 'about-gallery-5',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop',
    alt: {
      en: 'Public gathering and event',
      om: "Walga'ii hawaasaa fi taatee",
    },
    isDemo: true,
  },
  {
    id: 'about-gallery-6',
    image:
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80&auto=format&fit=crop',
    alt: {
      en: 'Tourism and nature experience',
      om: 'Muuxannoo tuurizimii fi uumamaa',
    },
    isDemo: true,
  },
]
