import { HeroSection } from '@components/home/HeroSection'
import { AboutPreview } from '@components/home/AboutPreview'
import { PromotionCategories } from '@components/home/PromotionCategories'
import { WhyChooseUs } from '@components/home/WhyChooseUs'
import { FeaturedEvents } from '@components/home/FeaturedEvents'
import { OurWork } from '@components/home/OurWork'
import { CommunityImpact } from '@components/home/CommunityImpact'
import { Testimonials } from '@components/home/Testimonials'
import { Partners } from '@components/home/Partners'
import { FAQSection } from '@components/home/FAQSection'
import { FinalCTA } from '@components/home/FinalCTA'
import { useSEO } from '@hooks/useSEO'
import { useLanguage } from '../../i18n/LanguageProvider'
import { siteInformation } from '@data/site'

export default function HomePage() {
  const { t } = useLanguage()

  useSEO({
    title: t.seo.home.title,
    description: t.seo.home.description,
    canonicalPath: '/',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteInformation.companyName,
        url: siteInformation.siteUrl,
        description: siteInformation.companyDescription.en,
        email: siteInformation.email,
        telephone: siteInformation.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bishoftu',
          addressRegion: 'Oromia',
          addressCountry: 'ET',
        },
        sameAs: siteInformation.socialLinks.map((social) => social.href),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteInformation.companyName,
        url: siteInformation.siteUrl,
      },
    ],
  })

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <PromotionCategories />
      <WhyChooseUs />
      <FeaturedEvents />
      <OurWork />
      <CommunityImpact />
      <Testimonials />
      <Partners />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
