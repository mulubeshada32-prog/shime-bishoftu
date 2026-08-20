import type { HTMLAttributes } from 'react'
import { cn } from '@lib/utils'
import { Container } from './Container'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerSize?: 'default' | 'narrow' | 'wide'
  withContainer?: boolean
  spacing?: 'default' | 'compact' | 'large'
}

export function Section({
  className,
  children,
  containerSize = 'default',
  withContainer = true,
  spacing = 'default',
  ...props
}: SectionProps) {
  const content = withContainer ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  )

  return (
    <section
      className={cn(
        'w-full',
        spacing === 'default' && 'py-12 sm:py-16 md:py-20 lg:py-24',
        spacing === 'compact' && 'py-6 sm:py-8 md:py-10 lg:py-12',
        spacing === 'large' && 'py-16 sm:py-20 md:py-28 lg:py-32',
        className
      )}
      {...props}
    >
      {content}
    </section>
  )
}
