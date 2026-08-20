import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'
import type { EventAgendaItem } from '@/types/event'

interface EventAgendaProps {
  agenda: EventAgendaItem[]
}

export function EventAgenda({ agenda }: EventAgendaProps) {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.eventDetails.agenda.title}
          heading={t.eventDetails.agenda.title}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-3xl">
          {agenda.map((item, index) => (
            <div key={item.id}>
              {index > 0 && <Separator className="my-6" />}
              <div className="flex items-start gap-6">
                <time className="w-20 flex-shrink-0 text-sm font-semibold text-accent">
                  {item.time}
                </time>
                <div>
                  <h3 className="mb-1 font-medium text-foreground">
                    {getLocalizedText(item.title, locale)}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">
                      {getLocalizedText(item.description, locale)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
