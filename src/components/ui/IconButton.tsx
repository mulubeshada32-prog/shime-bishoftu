import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@lib/utils'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function IconButton({
  className,
  label,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-normal',
        'hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      aria-label={label}
      title={label}
      {...props}
    >
      {children}
    </button>
  )
}
