import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Separator } from '@ui/Separator'
import { communityImpacts } from '@data/communityImpact'
import { useLanguage } from '@/i18n/LanguageProvider'
import { getLocalizedText } from '@/i18n'
import logoImage from '@assets/Logo.png'

export function CommunityImpact() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.home.communityImpact.eyebrow}
          heading={t.home.communityImpact.heading}
          description={t.home.communityImpact.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="grid gap-6">
              {communityImpacts.map((impact, index) => (
                <div key={impact.id}>
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="flex items-start gap-4">
                    <span className="font-display text-2xl font-medium text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="mb-2 font-display text-xl font-medium text-foreground md:text-2xl">
                        {getLocalizedText(impact.title, locale)}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {getLocalizedText(impact.description, locale)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto">
            <img
              src={logoImage}
              alt={t.home.communityImpact.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
