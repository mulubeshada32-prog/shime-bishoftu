import type { LocalizedText } from '@/i18n/types'
import type { EventLogistics as EventLogisticsType } from '@/types/event'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { getLocalizedText } from '../../i18n'
import { useLanguage } from '../../i18n/LanguageProvider'

interface EventLogisticsProps {
  logistics: EventLogisticsType[] | LocalizedText
}

export function EventLogistics({ logistics }: EventLogisticsProps) {
  const { t, locale } = useLanguage()
  const items = Array.isArray(logistics)
    ? logistics
    : [
        {
          id: 'logistics',
          label: {
            en: t.eventDetails.logistics.title,
            om: t.eventDetails.logistics.title,
          },
          value: logistics,
        },
      ]

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.eventDetails.logistics.title}
          heading={t.eventDetails.logistics.title}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-3xl">
          {items.map((item, index) => (
            <div key={item.id}>
              {index > 0 && <Separator className="my-6" />}
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-foreground">
                  {getLocalizedText(item.label, locale)}
                </h3>
                <p className="text-muted-foreground">
                  {getLocalizedText(item.value, locale)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
