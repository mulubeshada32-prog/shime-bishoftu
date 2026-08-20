export interface NavigationItem {
  label: string
  path: string
  translationKey: string
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
    translationKey: 'navigation.home',
  },
  {
    label: 'About',
    path: '/about',
    translationKey: 'navigation.about',
  },
  {
    label: 'Events',
    path: '/events',
    translationKey: 'navigation.events',
  },
  {
    label: 'Contact',
    path: '/contact',
    translationKey: 'navigation.contact',
  },
]
