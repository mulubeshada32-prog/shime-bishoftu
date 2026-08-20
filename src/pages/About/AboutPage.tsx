import { AboutHero } from '@components/about/AboutHero'
import { MissionVision } from '@components/about/MissionVision'
import { CoreValues } from '@components/about/CoreValues'
import { Team } from '@components/about/Team'
import { CompanyStats } from '@components/about/CompanyStats'
import { OurProcess } from '@components/about/OurProcess'
import { Partners } from '@components/home/Partners'
import { SocialCommunity } from '@components/about/SocialCommunity'
import { AboutGallery } from '@components/about/AboutGallery'
import { useSEO } from '@hooks/useSEO'
import { useLanguage } from '../../i18n/LanguageProvider'

export default function AboutPage() {
  const { t } = useLanguage()

  useSEO({
    title: t.seo.about.title,
    description: t.seo.about.description,
    canonicalPath: '/about',
  })

  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Team />
      <CompanyStats />
      <OurProcess />
      <Partners />
      <SocialCommunity />
      <AboutGallery />
    </>
  )
}
