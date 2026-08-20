import type { HTMLAttributes } from 'react'
import { cn } from '@lib/utils'

type BadgeVariant = 'default' | 'accent' | 'outline'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-muted text-muted-foreground',
  accent: 'bg-accent text-accent-foreground',
  outline: 'border border-border text-foreground',
}

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium leading-none',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}
