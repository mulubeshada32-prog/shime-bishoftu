import type { LocalizedText } from '@/i18n/types'

export interface CommunityImpactItem {
  id: string
  title: LocalizedText
  description: LocalizedText
}

export const communityImpacts: CommunityImpactItem[] = [
  {
    id: 'community-visibility',
    title: {
      en: 'Community Visibility',
      om: "Mul'ata Hawaasaa",
    },
    description: {
      en: 'Amplifying the reach and visibility of community initiatives and public activities.',
      om: "Ga'uu fi mul'ata inisheetivoota hawaasaa fi hojiiwwan uummataa guddisuu.",
    },
  },
  {
    id: 'public-awareness',
    title: {
      en: 'Public Awareness',
      om: 'Hubannoo Hawaasaa',
    },
    description: {
      en: 'Building awareness around important local issues, programs, and opportunities.',
      om: 'Dhimmoota naannoo barbaachisoo, sagantaalee fi carraawwan irratti hubannoo uumuu.',
    },
  },
  {
    id: 'charity-support',
    title: {
      en: 'Charity & Support',
      om: 'Arjoomaa & Gargaarsa',
    },
    description: {
      en: 'Supporting charitable efforts and connecting them with broader audiences.',
      om: "Hojiiwwan deeggarsa hawaasummaa deeggaruu fi dhaggeeffattoota bal'aa biraan isaan ga'uu.",
    },
  },
  {
    id: 'local-storytelling',
    title: {
      en: 'Local Storytelling',
      om: 'Seenaa Naannoo Dhiyeessuu',
    },
    description: {
      en: 'Telling the stories of our community, its people, and its progress.',
      om: 'Seenaa hawaasa keenyaa, uummata isaa fi guddina isaa dhiyeessuu.',
    },
  },
]
