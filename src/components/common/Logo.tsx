import logoImage from '@assets/Logo.png'
import { siteInformation } from '@data/site'
import { cn } from '@lib/utils'
import { Link } from 'react-router-dom'

interface LogoProps {
  showText?: boolean
  className?: string
}

export function Logo({ showText = true, className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('flex items-center gap-2', className)}
      aria-label={siteInformation.companyName}
    >
      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary sm:h-10 sm:w-10">
        <img
          src={logoImage}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      {showText && (
        <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
          {siteInformation.companyName}
        </span>
      )}
    </Link>
  )
}
