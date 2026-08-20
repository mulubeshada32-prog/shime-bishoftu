import type { HTMLAttributes } from 'react'
import { cn } from '@lib/utils'

interface SectionEyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function SectionEyebrow({
  text,
  className,
  ...props
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent',
        className
      )}
      {...props}
    >
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {text}
    </span>
  )
}
