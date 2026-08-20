import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { ExternalLink } from 'lucide-react'
import { socialMediaCards } from '@data/socialMedia'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'

export function SocialCommunity() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.about.socialCommunity.eyebrow}
          heading={t.about.socialCommunity.heading}
          description={t.about.socialCommunity.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {socialMediaCards.map((card) => (
            <a
              key={card.id}
              href={card.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-md border border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={card.name}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {card.mediaType === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                    poster={card.posterUrl}
                  >
                    <source src={card.mediaUrl} type="video/mp4" />
                    <img
                      src={card.posterUrl}
                      alt={card.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </video>
                ) : (
                  <img
                    src={card.mediaUrl}
                    alt={card.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                )}

                {/* Overlay - hidden on desktop, visible on hover; always visible on mobile/tablet */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  <div className="translate-y-0 transition-transform duration-300 lg:translate-y-4 lg:group-hover:translate-y-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                      {card.name} • {card.followers}
                    </p>
                    <h3 className="mb-2 font-display text-xl font-medium text-white">
                      {getLocalizedText(card.title, locale)}
                    </h3>
                    <p className="mb-3 text-sm text-white/80">
                      {getLocalizedText(card.description, locale)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                      {t.common.learnMore}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
