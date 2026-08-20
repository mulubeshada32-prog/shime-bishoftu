import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('enter')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exit')
      setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('enter')
      }, 200)
    }
  }, [location, displayLocation])

  return (
    <div
      className={
        transitionStage === 'enter'
          ? 'page-enter'
          : 'opacity-0 transition-opacity duration-200'
      }
    >
      {children}
    </div>
  )
}
