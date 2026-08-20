import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageProvider'

export function OfficePhotos() {
  const { t } = useLanguage()

  const officeImages = [
    {
      id: 'office-1',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70&auto=format&fit=crop',
      alt: 'Office workspace',
      isLarge: true,
    },
    {
      id: 'office-2',
      image:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=70&auto=format&fit=crop',
      alt: 'Meeting space',
      isLarge: false,
    },
    {
      id: 'office-3',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=70&auto=format&fit=crop',
      alt: 'Team collaboration area',
      isLarge: false,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.contact.office.eyebrow}
          heading={t.contact.office.heading}
          description={t.contact.office.description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {officeImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-md ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div
                className={`relative ${
                  index === 0
                    ? 'aspect-[4/3] md:aspect-auto md:h-full'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay subtitle */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                  <p className="translate-y-0 text-sm font-medium text-white transition-transform duration-300 lg:translate-y-3 lg:group-hover:translate-y-0">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          {t.contact.office.demoNotice}
        </p>
      </Container>
    </section>
  )
}
