import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageProvider'
import { getLocalizedText } from '../../i18n'
import { cn } from '@lib/utils'
import type { EventFAQ } from '@/types/event'

interface EventFAQsProps {
  faqs: EventFAQ[]
}

export function EventFAQs({ faqs }: EventFAQsProps) {
  const { t, locale } = useLanguage()
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const toggleFaq = (faqId: string) => {
    setOpenFaqId((currentId) => (currentId === faqId ? null : faqId))
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.eventDetails.faqs.title}
          heading={t.eventDetails.faqs.title}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id
            return (
              <div key={faq.id} className="border-b border-border">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {getLocalizedText(faq.question, locale)}
                  </h3>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-normal',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-content-${faq.id}`}
                  role="region"
                  className={cn(
                    'grid transition-all duration-normal',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-base leading-relaxed text-muted-foreground">
                      {getLocalizedText(faq.answer, locale)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
