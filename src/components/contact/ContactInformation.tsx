import { Phone, Mail, MapPin } from 'lucide-react'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { contactInformation } from '@data/contact'
import { useLanguage } from '../../i18n/LanguageProvider'

export function ContactInformation() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.contact.info.eyebrow}
          heading={t.contact.info.heading}
          description={t.contact.info.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <a
              href={`tel:${contactInformation.phone.replace(/\s/g, '')}`}
              className="flex flex-col items-center gap-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-4"
              aria-label={t.contact.info.phoneLabel}
            >
              <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-foreground">
                {t.contact.info.phone}
              </h3>
              <p className="text-sm text-muted-foreground">
                {contactInformation.phone}
              </p>
            </a>

            <a
              href={`mailto:${contactInformation.email}`}
              className="flex flex-col items-center gap-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-4"
              aria-label={t.contact.info.emailLabel}
            >
              <Mail className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-foreground">
                {t.contact.info.email}
              </h3>
              <p className="text-sm text-muted-foreground">
                {contactInformation.email}
              </p>
            </a>

            <div className="flex flex-col items-center gap-3 text-center p-4">
              <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-foreground">
                {t.contact.info.location}
              </h3>
              <p className="text-sm text-muted-foreground">
                {contactInformation.address}, {contactInformation.region}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
