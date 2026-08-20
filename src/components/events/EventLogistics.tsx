import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'
import type { EventLogistics as EventLogisticsType } from '@/types/event'

interface EventLogisticsProps {
  logistics: EventLogisticsType[]
}

export function EventLogistics({ logistics }: EventLogisticsProps) {
  const { t, locale } = useLanguage()

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
          {logistics.map((item, index) => (
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
