import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'

export function CoreValues() {
  const { t } = useLanguage()

  const values = [
    {
      number: '01',
      title: t.about.coreValues.values.community.title,
      description: t.about.coreValues.values.community.description,
    },
    {
      number: '02',
      title: t.about.coreValues.values.integrity.title,
      description: t.about.coreValues.values.integrity.description,
    },
    {
      number: '03',
      title: t.about.coreValues.values.creativity.title,
      description: t.about.coreValues.values.creativity.description,
    },
    {
      number: '04',
      title: t.about.coreValues.values.collaboration.title,
      description: t.about.coreValues.values.collaboration.description,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.about.coreValues.eyebrow}
          heading={t.about.coreValues.heading}
          description={t.about.coreValues.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-4xl">
          {values.map((value, index) => (
            <div key={value.number}>
              {index > 0 && <Separator className="my-8" />}
              <div className="flex items-start gap-6">
                <span className="font-display text-2xl font-medium text-accent md:text-3xl">
                  {value.number}
                </span>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-medium text-foreground md:text-3xl">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {value.description}
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
