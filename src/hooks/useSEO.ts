import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
  canonicalPath?: string
  structuredData?: Record<string, unknown>[]
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://example.com'

export function useSEO({
  title,
  description,
  image,
  type = 'website',
  canonicalPath,
  structuredData = [],
}: SEOProps) {
  const location = useLocation()

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath || location.pathname}`
    const fullTitle = `${title} | Bishoftu Events & Promotions`

    document.title = fullTitle

    updateMetaTag('description', description)
    updateLinkTag('canonical', canonicalUrl)

    updateMetaTag('og:title', fullTitle)
    updateMetaTag('og:description', description)
    updateMetaTag('og:url', canonicalUrl)
    updateMetaTag('og:type', type)
    updateMetaTag('og:site_name', 'Bishoftu Events & Promotions')

    if (image) {
      updateMetaTag('og:image', image)
      updateMetaTag('twitter:card', 'summary_large_image')
      updateMetaTag('twitter:image', image)
    } else {
      updateMetaTag('twitter:card', 'summary')
    }

    updateMetaTag('twitter:title', fullTitle)
    updateMetaTag('twitter:description', description)

    const existingJsonLd = document.querySelectorAll('script[data-seo-jsonld]')
    existingJsonLd.forEach((script) => script.remove())

    structuredData.forEach((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', 'true')
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })

    return () => {
      // Cleanup handled on next update
    }
  }, [
    title,
    description,
    image,
    type,
    canonicalPath,
    structuredData,
    location.pathname,
  ])
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}
