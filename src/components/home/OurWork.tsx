import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { promotions } from '@data/promotions'
import { useLanguage } from '@/i18n/LanguageProvider'
import { getLocalizedText } from '@/i18n'

export function OurWork() {
  const { t, locale } = useLanguage()

  const featuredWork = promotions.filter((promo) => promo.featured).slice(0, 3)

  if (featuredWork.length === 0) {
    return null
  }

  const [primary, ...secondary] = featuredWork

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.home.ourWorkSection.eyebrow}
          heading={t.home.ourWorkSection.heading}
          description={t.home.ourWorkSection.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {primary && (
            <article className="group relative overflow-hidden rounded-md lg:row-span-2">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src={primary.images[0]}
                  alt={getLocalizedText(primary.title, locale)}
                  className="h-full w-full object-cover transition-transform duration-normal group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white">
                    {getLocalizedText(primary.category, locale)}
                  </p>
                  <h3 className="mb-2 font-display text-3xl font-medium text-white">
                    {getLocalizedText(primary.title, locale)}
                  </h3>
                  <p className="text-sm text-white/80">
                    {primary.location} • {primary.year}
                  </p>
                </div>
              </div>
            </article>
          )}
          {secondary.map((work) => (
            <article
              key={work.id}
              className="group relative overflow-hidden rounded-md"
            >
              <div className="relative aspect-[16/9]">
                <img
                  src={work.images[0]}
                  alt={getLocalizedText(work.title, locale)}
                  className="h-full w-full object-cover transition-transform duration-normal group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {getLocalizedText(work.category, locale)}
                  </p>
                  <h3 className="mb-1 font-display text-2xl font-medium text-white">
                    {getLocalizedText(work.title, locale)}
                  </h3>
                  <p className="text-sm text-white/80">
                    {work.location} • {work.year}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
