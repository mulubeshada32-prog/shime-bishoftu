export interface BusinessHours {
  day: string
  hours: string
  isClosed?: boolean
}

export interface ContactInformation {
  phone: string
  email: string
  address: string
  city: string
  region: string
  country: string
  mapUrl: string
  mapEmbedUrl: string
  businessHours: BusinessHours[]
  socialLinks: {
    label: string
    href: string
    icon: string
  }[]
  isDemo: boolean
}

export const contactInformation: ContactInformation = {
  phone: '+251 900 000 000',
  email: 'info@bishoftuevents.com',
  address: 'Bishoftu',
  city: 'Bishoftu',
  region: 'Oromia',
  country: 'Ethiopia',
  mapUrl: 'https://maps.google.com/?q=Bishoftu,Oromia,Ethiopia',
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=38.97%2C8.72%2C39.03%2C8.76&layer=mapnik',
  businessHours: [
    { day: 'monday', hours: '8:00 AM – 5:00 PM' },
    { day: 'tuesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'wednesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'thursday', hours: '8:00 AM – 5:00 PM' },
    { day: 'friday', hours: '8:00 AM – 5:00 PM' },
    { day: 'saturday', hours: '9:00 AM – 1:00 PM' },
    { day: 'sunday', hours: '', isClosed: true },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      icon: 'facebook',
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: 'instagram',
    },
    {
      label: 'Telegram',
      href: 'https://telegram.org',
      icon: 'telegram',
    },
  ],
  isDemo: true,
}
