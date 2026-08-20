import { useState } from 'react'
import { cn } from '@lib/utils'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'sync' | 'async' | 'auto'
  width?: number
  height?: number
}

const DEFAULT_FALLBACK =
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=60&auto=format&fit=crop'

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className,
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setCurrentSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={cn('h-full w-full object-cover', className)}
      loading={loading}
      decoding={decoding}
      width={width}
      height={height}
      onError={handleError}
    />
  )
}
