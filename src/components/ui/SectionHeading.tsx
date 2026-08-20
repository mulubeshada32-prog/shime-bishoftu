import type { HTMLAttributes } from 'react'
import { cn } from '@lib/utils'
import { SectionEyebrow } from '@ui/SectionEyebrow'

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  heading: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
      {...props}
    >
      {eyebrow && <SectionEyebrow text={eyebrow} />}
      <h2 className="text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
