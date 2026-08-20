import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { aboutGalleryImages } from '@data/aboutGallery'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'

export function AboutGallery() {
  const { t, locale } = useLanguage()

  const [primary, ...secondary] = aboutGalleryImages

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.about.gallery.eyebrow}
          heading={t.about.gallery.heading}
          description={t.about.gallery.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {primary && (
            <div className="group relative overflow-hidden rounded-md md:col-span-2 md:row-span-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                <img
                  src={primary.image}
                  alt={getLocalizedText(primary.alt, locale)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay subtitle - hidden on desktop, visible on hover; always visible on mobile/tablet */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  <p className="translate-y-0 text-lg font-medium text-white transition-transform duration-300 lg:translate-y-4 lg:group-hover:translate-y-0">
                    {getLocalizedText(primary.alt, locale)}
                  </p>
                </div>
              </div>
            </div>
          )}
          {secondary.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-md"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={image.image}
                  alt={getLocalizedText(image.alt, locale)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay subtitle */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  <p className="translate-y-0 text-sm font-medium text-white transition-transform duration-300 lg:translate-y-3 lg:group-hover:translate-y-0">
                    {getLocalizedText(image.alt, locale)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          {t.about.gallery.demoNotice}
        </p>
      </Container>
    </section>
  )
}
