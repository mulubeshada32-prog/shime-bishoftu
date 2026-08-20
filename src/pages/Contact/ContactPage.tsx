import { ContactHero } from '@components/contact/ContactHero'
import { ContactInformation } from '@components/contact/ContactInformation'
import { BusinessHours } from '@components/contact/BusinessHours'
import { ContactForm } from '@components/contact/ContactForm'
import { OfficePhotos } from '@components/contact/OfficePhotos'
import { ContactMap } from '@components/contact/ContactMap'
import { useSEO } from '@hooks/useSEO'
import { useLanguage } from '../../i18n/LanguageProvider'

export default function ContactPage() {
  const { t } = useLanguage()

  useSEO({
    title: t.seo.contact.title,
    description: t.seo.contact.description,
    canonicalPath: '/contact',
  })

  return (
    <>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <BusinessHours />
      <OfficePhotos />
      <ContactMap />
    </>
  )
}
