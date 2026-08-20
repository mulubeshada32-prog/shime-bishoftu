import type { LocalizedText } from '../i18n/types'

export interface SocialMediaCard {
  id: string
  platform: 'tiktok' | 'facebook' | 'instagram'
  name: string
  mediaType: 'video' | 'image'
  mediaUrl: string
  posterUrl: string
  title: LocalizedText
  description: LocalizedText
  pageUrl: string
  followers: string
}

export const socialMediaCards: SocialMediaCard[] = [
  {
    id: 'tiktok',
    platform: 'tiktok',
    name: 'TikTok',
    mediaType: 'video',
    mediaUrl:
      'https://www.tiktok.com/@shimebishooftuu/video/7673400186160336135?lang=en',
    posterUrl: 'https://static.cdnlogo.com/logos/t/60/tiktok.svg',
    title: {
      en: 'Follow on TikTok',
      om: 'TikTok irratti Hordofaa',
    },
    description: {
      en: 'Watch event highlights and behind-the-scenes videos',
      om: 'Viidiyoo taatee fi duuba seenaa ilaali',
    },
    pageUrl: 'https://www.tiktok.com/@shimebishooftuu',
    followers: '10K+',
  },
  {
    id: 'facebook',
    platform: 'facebook',
    name: 'Facebook',
    mediaType: 'image',
    mediaUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    title: {
      en: 'Follow on Facebook',
      om: 'Facebook irratti Hordofaa',
    },
    description: {
      en: 'Stay updated with our latest news and events',
      om: 'Oduu fi taatee haaraa keenya hordofaa',
    },
    pageUrl: 'https://facebook.com/bishoftuevents',
    followers: '25K+',
  },
  {
    id: 'instagram',
    platform: 'instagram',
    name: 'Instagram',
    mediaType: 'video',
    mediaUrl:
      'https://img.magnific.com/premium-psd/instagram-logo-social-media-icon_705838-13489.jpg?semt=ais_hybrid&w=740&q=80',
    posterUrl:
      'https://img.magnific.com/premium-vector/circle-instagram-logotype-icon-social-media-app-network-application-popular-editorial-brand-vector-illustration_913857-383.jpg?semt=ais_hybrid&w=740&q=80',
    title: {
      en: 'Follow on Instagram',
      om: 'Instagram irratti Hordofaa',
    },
    description: {
      en: 'See our latest photos and event moments',
      om: 'Suuraa fi yeroo taatee keenya haaraa ilaali',
    },
    pageUrl: 'https://instagram.com/bishoftuevents',
    followers: '15K+',
  },
]
