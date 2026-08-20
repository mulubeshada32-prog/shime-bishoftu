import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 20,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [once])

  const directionClass = {
    up: 'motion-reveal',
    left: 'motion-reveal-left',
    right: 'motion-reveal-right',
    none: 'motion-fade',
  }[direction]

  return (
    <div
      ref={elementRef}
      className={cn(directionClass, isVisible && 'is-visible', className)}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        ...(direction === 'up' && distance !== 20
          ? { '--reveal-distance': `${distance}px` }
          : {}),
      }}
    >
      {children}
    </div>
  )
}
