import type { EventSpeaker } from '@/types/event'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { getLocalizedText } from '../../i18n'
import { useLanguage } from '../../i18n/LanguageProvider'

interface EventSpeakersProps {
  speakers: EventSpeaker[]
}

export function EventSpeakers({ speakers }: EventSpeakersProps) {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.eventDetails.speakers.title}
          heading={t.eventDetails.speakers.title}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="text-center">
              <div className="relative mx-auto mb-4 aspect-square max-w-[200px] overflow-hidden rounded-full">
                <img
                  src={
                    speaker.image ||
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
                  }
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 font-display text-xl font-medium text-foreground">
                {speaker.name}
              </h3>
              {speaker.role && (
                <p className="text-sm font-medium text-accent">
                  {getLocalizedText(speaker.role, locale)}
                </p>
              )}
              {speaker.organization && (
                <p className="text-sm text-muted-foreground">
                  {getLocalizedText(speaker.organization, locale)}
                </p>
              )}
              {speaker.bio && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {getLocalizedText(speaker.bio, locale)}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
