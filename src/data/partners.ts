export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  isDemo: boolean
}

export const partners: Partner[] = [
  {
    id: 'partner-1',
    name: 'Ethio Telecom',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkHTWJhXR8lOYpSFx53_zqhHxE2xOOIzgqw&s',
    website: 'https://www.ethiotelecom.com',
    isDemo: false,
  },
  {
    id: 'partner-2',
    name: 'Ethiopian Airlines',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ethiopian_Airlines_Logo.svg/1280px-Ethiopian_Airlines_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20211007223757',
    website: 'https://www.ethiopianairlines.com/aa/EN/home.html',
    isDemo: false,
  },
  {
    id: 'partner-3',
    name: 'Hyatt Regency',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaMifwI-67r6ONfihOwJMVMjSvQMKxDN9gA&s',
    website: 'https://www.hyatt.com',
    isDemo: false,
  },
  {
    id: 'partner-4',
    name: 'Hilton',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbYBc-he6ptosietXa3qPAFpBkSorncHw_A&s',
    website: 'https://www.hilton.com',
    isDemo: false,
  },
  {
    id: 'partner-5',
    name: 'Radisson Blu',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEAO5PMX2C2WPieXgRl2uQNt6v4YjzOotiA&s',
    website: 'https://www.radissonhotels.com',
    isDemo: false,
  },
  {
    id: 'partner-6',
    name: 'Golden Tulip',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RYZXU0RKMtqbOi3pof8-GhR2tea2CCZIGg&s',
    website: 'https://www.goldentulip.com',
    isDemo: false,
  },
]
