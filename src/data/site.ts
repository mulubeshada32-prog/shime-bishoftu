import type { LocalizedText } from '../i18n/types'

export interface SocialLink {
  label: string
  href: string
  icon:
    | 'facebook'
    | 'instagram'
    | 'tiktok'
    | 'linkedIn'
    | 'X'
    | 'youtube'
    | 'telegram'
    | 'slack'
    | 'whatsapp'
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
  phone: '+251 911 391 625',
  email: 'shimallisinsarmu@gmail.com',
  address: 'Bishoftu, Oromia, Ethiopia',
  socialLinks: [
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@shimebishooftuu',
      icon: 'tiktok',
    },
    {
      label: 'Facebook',
      href: 'https://web.facebook.com/shemles.sermu',
      icon: 'facebook',
    },
    // {
    //   label: 'Instagram',
    //   href: 'https://instagram.com/bishoftuevents',
    //   icon: 'instagram',
    // },
    // {
    //   label: 'linkedIn',
    //   href: 'https://linkedin.com/bishoftuevents',
    //   icon: 'linkedIn',
    // },
    // {
    //   label: 'X',
    //   href: 'https://x.com/bishoftuevents',
    //   icon: 'X',
    // },
    // {
    //   label: 'youtube',
    //   href: 'https://youtube.com/bishoftuevents',
    //   icon: 'youtube',
    // },
    {
      label: 'telegram',
      href: 'https://t.me/shimebishoftucar2',
      icon: 'telegram',
    },
    // {
    //   label: 'slack',
    //   href: 'https://slack.com/bishoftuevents',
    //   icon: 'slack',
    // },
    // {
    //   label: 'whatsapp',
    //   href: 'https://discord.com/bishoftuevents',
    //   icon: 'whatsapp',
    // },
  ],
  developerName: 'BAM Eagle Corps',
  developerUrl: '',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://example.com',
}
