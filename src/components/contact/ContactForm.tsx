import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { SectionHeading } from '@ui/SectionHeading'
import { useRef, useState, type FormEvent } from 'react'
import { useLanguage } from '../../i18n/LanguageProvider'

interface FormData {
  fullName: string
  email: string
  phone: string
  subject: string
  eventType: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  message?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    eventType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const firstInvalidRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null
  )

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.contact.form.validation.fullNameRequired
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = t.contact.form.validation.fullNameMinLength
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.validation.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t.contact.form.validation.emailInvalid
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.validation.messageRequired
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.form.validation.messageMinLength
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validateForm()) {
      setStatus('submitting')
      // Demo mode - simulate submission
      setTimeout(() => {
        setStatus('success')
      }, 1000)
    }
  }

  const handleRetry = () => {
    setStatus('idle')
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      eventType: '',
      message: '',
    })
    setErrors({})
    setStatus('idle')
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }))
    }
  }

  if (status === 'success') {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div
              className="rounded-md border border-border bg-background p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <h3 className="mb-2 font-display text-2xl font-medium text-foreground">
                {t.contact.form.demoNotice}
              </h3>
              <p className="mb-6 text-muted-foreground">
                {t.errors.form.checkConnection}
              </p>
              <Button variant="secondary" onClick={handleReset}>
                {t.errors.form.tryAgain}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  if (status === 'error') {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div
              className="rounded-md border border-border bg-background p-8 text-center"
              role="alert"
            >
              <h3 className="mb-2 font-display text-2xl font-medium text-foreground">
                {t.errors.form.submissionFailed}
              </h3>
              <p className="mb-6 text-muted-foreground">
                {t.errors.form.checkConnection}
              </p>
              <Button onClick={handleRetry}>{t.errors.form.tryAgain}</Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24" aria-labelledby="contact-form-heading">
      <Container>
        <SectionHeading
          eyebrow={t.contact.form.eyebrow}
          heading={t.contact.form.heading}
          description={t.contact.form.description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-6">{/* Form fields unchanged */}</div>
          </form>
        </div>
      </Container>
    </section>
  )
}
