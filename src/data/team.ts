import type { LocalizedText } from '../i18n/types'

export interface TeamMember {
  id: string
  name: string
  role: LocalizedText
  bio: LocalizedText
  image: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Shimellis Gelan',
    role: {
      en: 'Founder & CEO',
      om: 'Hundeessaa fi Daareektara Olaanaa',
    },
    bio: {
      en: 'Visionary leader with over 15 years of experience in event management.',
      om: "Hogganaa mul'ataa kan muuxannoo waggaa 15 ol qabu.",
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3H0O2mhZM6IxG9sEjyptHv2c5UXyEUhqwzw&s',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'shimelis@bishoftuevents.com',
    },
  },
  {
    id: '2',
    name: 'Shimellis Hinsermu Gelan',
    role: {
      en: 'Event Director',
      om: 'Daareektara Taatee',
    },
    bio: {
      en: 'Expert in planning and executing large-scale events.',
      om: 'Ogeessa karoora fi raawwii taatee gurguddaa.',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR165RbM8tt-ehhrF6f9RWNH9ODLL5pdSIqxQ&s',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      email: 'shimelis@bishoftuevents.com',
    },
  },
  {
    id: '3',
    name: 'Shimellis Hinsermu Gelan',
    role: {
      en: 'Marketing Manager',
      om: 'Hojjataa Maarketingii',
    },
    bio: {
      en: 'Specialist in event promotion and audience engagement.',
      om: 'Ogeessa dhiheessa taatee fi walqunnamtii dhaggeeffattoota.',
    },
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZGRJ52brdlZJ_5iAC6hugt6Q49V1UwSdRQ&s',
    socialLinks: {
      twitter: 'https://twitter.com',
      email: 'shimelis@bishoftuevents.com',
    },
  },
]
