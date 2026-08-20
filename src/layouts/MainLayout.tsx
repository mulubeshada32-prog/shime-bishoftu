import { Outlet } from 'react-router-dom'
import { Navbar } from '@layout/Navbar'
import { Footer } from '@layout/Footer'
import { PageTransition } from '@ui/PageTransition'
import { SkipLink } from '@ui/SkipLink'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
