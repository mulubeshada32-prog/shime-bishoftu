import { cn } from '@lib/utils'
import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { SectionEyebrow } from '@ui/SectionEyebrow'

interface ErrorStateProps {
  eyebrow?: string
  title: string
  description: string
  primaryAction?: {
    label: string
    onClick?: () => void
    href?: string
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
    href?: string
  }
  className?: string
}

export function ErrorState({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: ErrorStateProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <SectionEyebrow text={eyebrow} className="mb-4 justify-center" />
          )}
          <h1 className="mb-4 font-display text-4xl font-medium text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {primaryAction &&
              (primaryAction.href ? (
                <a
                  href={primaryAction.href}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {primaryAction.label}
                </a>
              ) : (
                <Button onClick={primaryAction.onClick} size="large">
                  {primaryAction.label}
                </Button>
              ))}
            {secondaryAction &&
              (secondaryAction.href ? (
                <a
                  href={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {secondaryAction.label}
                </a>
              ) : (
                <Button
                  variant="secondary"
                  size="large"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
