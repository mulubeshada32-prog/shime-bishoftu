import { useLanguage } from '@/i18n/LanguageProvider'
import { partners } from '@data/partners'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'

export function Partners() {
  const { t } = useLanguage()

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="overflow-hidden py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.home.partnersSection.eyebrow}
          heading={t.home.partnersSection.heading}
          description={t.home.partnersSection.description}
          align="center"
          className="mb-12"
        />
      </Container>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] sm:gap-6">
          {duplicatedPartners.map((partner, index) => (
            <a
              key={`${partner.id}-${index}`}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-32 w-56 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-40 sm:w-64"
              aria-label={partner.name}
            >
              {/* Logo fills card */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              {/* Company name overlay - appears on hover with bottom to top animation */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-black/50 p-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-sm font-semibold text-white">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
