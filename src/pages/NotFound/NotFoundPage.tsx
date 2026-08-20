import { useSEO } from '@hooks/useSEO'
import { useLanguage } from '../../i18n/LanguageProvider'
import { ErrorState } from '@ui/ErrorState'

export default function NotFoundPage() {
  const { t } = useLanguage()

  useSEO({
    title: t.seo.notFound.title,
    description: t.seo.notFound.description,
    canonicalPath: undefined,
  })

  return (
    <ErrorState
      eyebrow="404"
      title={t.errors.notFound.title}
      description={t.errors.notFound.description}
      primaryAction={{
        label: t.errors.notFound.backHome,
        href: '/',
      }}
      secondaryAction={{
        label: t.errors.notFound.browseEvents,
        href: '/events',
      }}
    />
  )
}
