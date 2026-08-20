import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'

export function OurProcess() {
  const { t } = useLanguage()

  const steps = [
    {
      number: '01',
      title: t.about.process.steps.discover.title,
      description: t.about.process.steps.discover.description,
    },
    {
      number: '02',
      title: t.about.process.steps.plan.title,
      description: t.about.process.steps.plan.description,
    },
    {
      number: '03',
      title: t.about.process.steps.create.title,
      description: t.about.process.steps.create.description,
    },
    {
      number: '04',
      title: t.about.process.steps.promote.title,
      description: t.about.process.steps.promote.description,
    },
    {
      number: '05',
      title: t.about.process.steps.amplify.title,
      description: t.about.process.steps.amplify.description,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.about.process.eyebrow}
          heading={t.about.process.heading}
          description={t.about.process.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative md:text-center">
                {index > 0 && <Separator className="mb-8 md:hidden" />}
                <span className="mb-3 block font-display text-2xl font-medium text-accent">
                  {step.number}
                </span>
                <h3 className="mb-2 font-display text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
