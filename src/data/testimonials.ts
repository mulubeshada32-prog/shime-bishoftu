import type { LocalizedText } from '../i18n/types'

export interface Testimonial {
  id: string
  name: LocalizedText
  role: LocalizedText
  organization?: LocalizedText
  quote: LocalizedText
  image: string
  rating: number // 1-5
  isDemo: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: {
      en: 'Mensur Jemal',
      om: 'Mansuur Jamaal',
    },
    role: {
      en: 'Enterprenuer',
      om: 'Daldalaa',
    },
    organization: {
      en: 'Local Business Association',
      om: 'Waldaa Daldalaa Naannoo',
    },
    quote: {
      en: 'The promotional support helped our event reach the right audience. Professional, reliable, and deeply connected to the community.',
      om: 'Gargaarsi dhiheessa taatee keenya dhaggeeffattoota sirrii bira gahuuf gargaare. Ogeessaa, amanamaa fi hawaasa wajjiin walitti dhufeenya cimaa qaba.',
    },
    image:
      'https://www.ethiovibes.com/assets/imgs/blog/mensur-jemal-standing.webp',
    rating: 5,
    isDemo: false,
  },
  {
    id: 'testimonial-2',
    name: {
      en: 'Artist Kemer Yusuf',
      om: 'Artist Kemer Yuusuf',
    },
    role: {
      en: 'Artist',
      om: 'Hogganaa Karoora Tuurizimii',
    },
    organization: {
      en: 'Regional Tourism Office',
      om: 'Waajjira Tuurizimii Naannoo',
    },
    quote: {
      en: 'Their understanding of the local tourism landscape made a real difference in how we presented our destinations.',
      om: 'Hubannoo isaanii tuurizimii naannoo irratti qaban bakka itti dhiheessine irratti garaagarummaa dhugaa fide.',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-fopXLbwGsowXqNOXGvc9Bcz2GJqpnO8xA&s',
    rating: 4,
    isDemo: false,
  },
  {
    id: 'testimonial-3',
    name: {
      en: 'Artist Jambo Jote',
      om: 'Artist Jambo Jote',
    },
    role: {
      en: 'Afaan Oromo music artist',
      om: 'Artistii muuziqaa Afaan Oromoo',
    },
    organization: {
      en: 'Oromo Artists Association',
      om: 'Waldaa Artistoota Oromoo',
    },
    quote: {
      en: 'They helped us tell our story in a way that resonated with the community and beyond.',
      om: 'Akkaataa hawaasa fi naannoo biraa wajjiin walqunnamsiisuun seenaa keenya himnuuf nu gargaaran.',
    },
    image: 'https://i.scdn.co/image/ab67616d0000b273135417132f7010959d755a03',
    rating: 5,
    isDemo: false,
  },
]
