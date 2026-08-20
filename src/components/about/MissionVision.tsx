import { Container } from '@ui/Container'
import { SectionEyebrow } from '@ui/SectionEyebrow'
import { Separator } from '@ui/Separator'
import { companyInfo } from '@data/company'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'

export function MissionVision() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <SectionEyebrow
              text={t.about.missionVision.eyebrow}
              className="mb-4"
            />
            <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
              {t.about.missionVision.heading}
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="mb-4 font-display text-2xl font-medium text-accent">
                {t.about.missionVision.missionLabel}
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {getLocalizedText(companyInfo.mission, locale)}
              </p>
            </div>
            <Separator className="lg:hidden" />
            <div>
              <h3 className="mb-4 font-display text-2xl font-medium text-accent">
                {t.about.missionVision.visionLabel}
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {getLocalizedText(companyInfo.vision, locale)}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
