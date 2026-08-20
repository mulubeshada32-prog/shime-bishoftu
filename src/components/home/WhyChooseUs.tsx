import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'

export function WhyChooseUs() {
  const { t } = useLanguage()

  const reasons = [
    {
      number: '01',
      title: t.home.whyChooseUs.reasons.localPerspective.title,
      description: t.home.whyChooseUs.reasons.localPerspective.description,
    },
    {
      number: '02',
      title: t.home.whyChooseUs.reasons.storytelling.title,
      description: t.home.whyChooseUs.reasons.storytelling.description,
    },
    {
      number: '03',
      title: t.home.whyChooseUs.reasons.professional.title,
      description: t.home.whyChooseUs.reasons.professional.description,
    },
    {
      number: '04',
      title: t.home.whyChooseUs.reasons.community.title,
      description: t.home.whyChooseUs.reasons.community.description,
    },
    {
      number: '05',
      title: t.home.whyChooseUs.reasons.versatile.title,
      description: t.home.whyChooseUs.reasons.versatile.description,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.home.whyChooseUs.eyebrow}
          heading={t.home.whyChooseUs.heading}
          description={t.home.whyChooseUs.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-4xl">
          {reasons.map((reason, index) => (
            <div key={reason.number}>
              {index > 0 && <Separator className="my-8" />}
              <div className="flex items-start gap-6">
                <span className="font-display text-2xl font-medium text-accent md:text-3xl">
                  {reason.number}
                </span>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-medium text-foreground md:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
