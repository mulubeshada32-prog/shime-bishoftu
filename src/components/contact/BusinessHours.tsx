import { contactInformation } from '@data/contact'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'

export function BusinessHours() {
  const { t } = useLanguage()

  const dayTranslations: Record<string, string> = {
    monday: t.contact.hours.monday,
    tuesday: t.contact.hours.tuesday,
    wednesday: t.contact.hours.wednesday,
    thursday: t.contact.hours.thursday,
    friday: t.contact.hours.friday,
    saturday: t.contact.hours.saturday,
    sunday: t.contact.hours.sunday,
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.contact.hours.eyebrow}
          heading={t.contact.hours.heading}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-md px-4 sm:px-0">
          {contactInformation.businessHours.map((businessHour, index) => (
            <div key={businessHour.day}>
              {index > 0 && <Separator className="my-3 sm:my-4" />}
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {dayTranslations[businessHour.day] || businessHour.day}
                </span>
                <span
                  className={`text-sm text-muted-foreground sm:text-base ${businessHour.isClosed ? '' : 'sm:text-foreground'}`}
                >
                  {businessHour.isClosed
                    ? t.contact.hours.closed
                    : businessHour.hours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
