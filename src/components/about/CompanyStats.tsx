import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'

export function CompanyStats() {
  const { t } = useLanguage()

  const stats = [
    {
      title: t.about.stats.stats.local.title,
      description: t.about.stats.stats.local.description,
    },
    {
      title: t.about.stats.stats.multiSector.title,
      description: t.about.stats.stats.multiSector.description,
    },
    {
      title: t.about.stats.stats.community.title,
      description: t.about.stats.stats.community.description,
    },
    {
      title: t.about.stats.stats.bilingual.title,
      description: t.about.stats.stats.bilingual.description,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.about.stats.eyebrow}
          heading={t.about.stats.heading}
          description={t.about.stats.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.title} className="text-center">
                {index > 0 && <Separator className="mb-8 lg:hidden" />}
                <h3 className="mb-2 font-display text-3xl font-medium text-foreground md:text-4xl">
                  {stat.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
