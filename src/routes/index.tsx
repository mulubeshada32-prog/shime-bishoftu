import { MainLayout } from '@layouts/MainLayout'
import { LoadingFallback } from '@ui/LoadingFallback'
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const HomePage = lazy(() => import('@pages/Home/HomePage'))
const AboutPage = lazy(() => import('@pages/About/AboutPage'))
const EventsPage = lazy(() => import('@pages/Events/EventsPage'))
const EventDetailsPage = lazy(
  () => import('@pages/EventDetails/EventDetailsPage')
)
const ContactPage = lazy(() => import('@pages/Contact/ContactPage'))
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFoundPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'events',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <EventsPage />
          </Suspense>
        ),
      },
      {
        path: 'events/:slug',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <EventDetailsPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
])
