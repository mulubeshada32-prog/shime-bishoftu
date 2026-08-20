import type { LocalizedText } from '../i18n/types'

export interface SocialLink {
  label: string
  href: string
  icon: 'facebook' | 'instagram' | 'tiktok'
}

export interface SiteInformation {
  companyName: string
  companyDescription: LocalizedText
  phone: string
  email: string
  address: string
  socialLinks: SocialLink[]
  developerName: string
  developerUrl: string
  siteUrl: string
}

export const siteInformation: SiteInformation = {
  companyName: 'Shime Bishoftu Events & Promotions',
  companyDescription: {
    en: 'Professional event management and promotion services in Bishoftu and the surrounding region.',
    om: 'Tajaajila raawwii taatee fi dhiheessa ogeessaa Bishooftuu fi naannoo ishee.',
  },
  phone: '+251 900 000 000',
  email: 'info@bishoftuevents.com',
  address: 'Bishoftu, Oromia, Ethiopia',
  socialLinks: [
    {
      label: 'TikTok',
      href: 'https://tiktok.com/@bishoftuevents',
      icon: 'tiktok',
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/bishoftuevents',
      icon: 'facebook',
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/bishoftuevents',
      icon: 'instagram',
    },
  ],
  developerName: 'BAM Eagle Corps',
  developerUrl: '#',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://example.com',
}
