import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { useLanguage } from '../../i18n/LanguageProvider'

export function PromotionCategories() {
  const { t } = useLanguage()

  const categories = [
    {
      number: '01',
      title: t.home.promotionCategories.categories.events.title,
      description: t.home.promotionCategories.categories.events.description,
    },
    {
      number: '02',
      title: t.home.promotionCategories.categories.ceremonies.title,
      description: t.home.promotionCategories.categories.ceremonies.description,
    },
    {
      number: '03',
      title: t.home.promotionCategories.categories.development.title,
      description:
        t.home.promotionCategories.categories.development.description,
    },
    {
      number: '04',
      title: t.home.promotionCategories.categories.tourism.title,
      description: t.home.promotionCategories.categories.tourism.description,
    },
    {
      number: '05',
      title: t.home.promotionCategories.categories.community.title,
      description: t.home.promotionCategories.categories.community.description,
    },
    {
      number: '06',
      title: t.home.promotionCategories.categories.charity.title,
      description: t.home.promotionCategories.categories.charity.description,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.home.promotionCategories.eyebrow}
          heading={t.home.promotionCategories.heading}
          description={t.home.promotionCategories.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-4xl">
          {categories.map((category, index) => (
            <div key={category.number}>
              {index > 0 && <Separator className="my-8" />}
              <div className="flex items-start gap-6">
                <span className="font-display text-2xl font-medium text-accent md:text-3xl">
                  {category.number}
                </span>
                <div>
                  <h3 className="mb-2 font-display text-2xl font-medium text-foreground md:text-3xl">
                    {category.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {category.description}
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
