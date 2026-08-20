import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { Button } from '@ui/Button'
import { contactInformation } from '@data/contact'
import { useLanguage } from '../../i18n/LanguageProvider'

export function ContactMap() {
  const { t } = useLanguage()
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.contact.map.eyebrow}
          heading={t.contact.map.heading}
          description={t.contact.map.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-md border border-border">
            {isMapLoaded ? (
              <iframe
                src={contactInformation.mapEmbedUrl}
                title={t.contact.map.mapTitle}
                className="h-[400px] w-full"
                loading="lazy"
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center bg-muted">
                <Button
                  onClick={() => setIsMapLoaded(true)}
                  variant="secondary"
                >
                  Load Map
                </Button>
              </div>
            )}
          </div>
          <div className="mt-6 text-center">
            <a
              href={contactInformation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {t.contact.map.getDirections}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
