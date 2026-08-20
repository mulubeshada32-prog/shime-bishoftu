import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageProvider'
import type { EventPartner } from '@/types/event'

interface EventSponsorsProps {
  sponsors: EventPartner[]
}

export function EventSponsors({ sponsors }: EventSponsorsProps) {
  const { t } = useLanguage()

  return (
    <section className="overflow-hidden py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.eventDetails.sponsors.title}
          heading={t.eventDetails.sponsors.title}
          align="center"
          className="mb-12"
        />
      </Container>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] sm:gap-6">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <a
              key={`${sponsor.id}-${index}`}
              href={sponsor.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-32 w-56 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-40 sm:w-64"
              aria-label={sponsor.name}
            >
              {sponsor.logo ? (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground">
                  {sponsor.name}
                </span>
              )}

              {/* Company name overlay - appears on hover */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-black/50 p-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-sm font-semibold text-white">
                  {sponsor.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
