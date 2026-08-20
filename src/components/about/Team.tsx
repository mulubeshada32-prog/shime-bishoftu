import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { teamMembers } from '@data/team'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'

export function Team() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.about.teamSection.eyebrow}
          heading={t.about.teamSection.heading}
          description={t.about.teamSection.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative mx-auto mb-6 aspect-[3/4] max-w-xs overflow-hidden rounded-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 font-display text-xl font-medium text-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent">
                {getLocalizedText(member.role, locale)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {getLocalizedText(member.bio, locale)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          {t.about.teamSection.demoNotice}
        </p>
      </Container>
    </section>
  )
}
