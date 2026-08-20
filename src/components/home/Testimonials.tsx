import { testimonials } from '@data/testimonials'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { Star } from 'lucide-react'
import { getLocalizedText } from '../../i18n'
import { useLanguage } from '../../i18n/LanguageProvider'

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center justify-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${star <= rating ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.home.testimonialsSection.eyebrow}
          heading={t.home.testimonialsSection.heading}
          description={t.home.testimonialsSection.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-4xl">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id}>
              {index > 0 && <Separator className="my-10" />}
              <div className="text-center">
                <div className="relative mx-auto mb-6 h-72 w-72 overflow-hidden rounded-full border-2 border-accent/30 transition-transform duration-500 hover:scale-110">
                  <img
                    src={testimonial.image}
                    alt={getLocalizedText(testimonial.name, locale)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <StarRating rating={testimonial.rating} />

                <blockquote className="mt-4">
                  <p className="mb-4 font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
                    "{getLocalizedText(testimonial.quote, locale)}"
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {getLocalizedText(testimonial.name, locale)}
                    </span>
                    <span className="mx-2">—</span>
                    <span>{getLocalizedText(testimonial.role, locale)}</span>
                    {testimonial.organization && (
                      <>
                        <span className="mx-2">•</span>
                        <span>
                          {getLocalizedText(testimonial.organization, locale)}
                        </span>
                      </>
                    )}
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
