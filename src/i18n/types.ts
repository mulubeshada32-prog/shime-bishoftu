export type Locale = 'en' | 'om'

export type LocalizedText = {
  en: string
  om: string
}

export interface TranslationSchema {
  navigation: {
    home: string
    about: string
    events: string
    contact: string
  }
  common: {
    learnMore: string
    viewDetails: string
    viewAll: string
    search: string
    filter: string
    sort: string
    previous: string
    next: string
    noEventsFound: string
    loading: string
  }
  home: {
    title: string
    subtitle: string
    featuredEvents: string
    ourWork: string
    testimonials: string
    partners: string
    hero: {
      eyebrow: string
      heading: string
      description: string
      primaryCta: string
      secondaryCta: string
    }
    aboutPreview: {
      eyebrow: string
      heading: string
      description: string
      cta: string
      imageAlt: string
    }
    promotionCategories: {
      eyebrow: string
      heading: string
      description: string
      categories: {
        events: {
          title: string
          description: string
        }
        ceremonies: {
          title: string
          description: string
        }
        development: {
          title: string
          description: string
        }
        tourism: {
          title: string
          description: string
        }
        community: {
          title: string
          description: string
        }
        charity: {
          title: string
          description: string
        }
      }
    }
    whyChooseUs: {
      eyebrow: string
      heading: string
      description: string
      reasons: {
        localPerspective: {
          title: string
          description: string
        }
        storytelling: {
          title: string
          description: string
        }
        professional: {
          title: string
          description: string
        }
        community: {
          title: string
          description: string
        }
        versatile: {
          title: string
          description: string
        }
      }
    }
    featuredEventsSection: {
      eyebrow: string
      heading: string
      description: string
      viewAll: string
      emptyState: string
      emptyStateCta: string
    }
    ourWorkSection: {
      eyebrow: string
      heading: string
      description: string
      category: string
      location: string
      year: string
    }
    communityImpact: {
      eyebrow: string
      heading: string
      description: string
      imageAlt: string
      impacts: {
        visibility: {
          title: string
          description: string
        }
        awareness: {
          title: string
          description: string
        }
        charity: {
          title: string
          description: string
        }
        storytelling: {
          title: string
          description: string
        }
      }
    }
    testimonialsSection: {
      eyebrow: string
      heading: string
      description: string
      demoNotice: string
    }
    partnersSection: {
      eyebrow: string
      heading: string
      description: string
      demoNotice: string
    }
    faqSection: {
      eyebrow: string
      heading: string
      description: string
    }
    finalCta: {
      eyebrow: string
      heading: string
      description: string
      primaryCta: string
      secondaryCta: string
    }
  }
  about: {
    title: string
    subtitle: string
    team: string
    mission: string
    vision: string
    values: string
    hero: {
      eyebrow: string
      heading: string
      description: string
      breadcrumbHome: string
      breadcrumbAbout: string
    }
    missionVision: {
      eyebrow: string
      heading: string
      missionLabel: string
      visionLabel: string
    }
    coreValues: {
      eyebrow: string
      heading: string
      description: string
      values: {
        community: {
          title: string
          description: string
        }
        integrity: {
          title: string
          description: string
        }
        creativity: {
          title: string
          description: string
        }
        collaboration: {
          title: string
          description: string
        }
      }
    }
    teamSection: {
      eyebrow: string
      heading: string
      description: string
      demoNotice: string
    }
    stats: {
      eyebrow: string
      heading: string
      description: string
      stats: {
        local: {
          title: string
          description: string
        }
        multiSector: {
          title: string
          description: string
        }
        community: {
          title: string
          description: string
        }
        bilingual: {
          title: string
          description: string
        }
      }
    }
    process: {
      eyebrow: string
      heading: string
      description: string
      steps: {
        discover: {
          title: string
          description: string
        }
        plan: {
          title: string
          description: string
        }
        create: {
          title: string
          description: string
        }
        promote: {
          title: string
          description: string
        }
        amplify: {
          title: string
          description: string
        }
      }
    }
    socialCommunity: {
      eyebrow: string
      heading: string
      description: string
    }
    gallery: {
      eyebrow: string
      heading: string
      description: string
      demoNotice: string
    }
  }
  events: {
    title: string
    subtitle: string
    upcoming: string
    ongoing: string
    completed: string
    filterByCategory: string
    filterByStatus: string
    hero: {
      eyebrow: string
      heading: string
      description: string
      breadcrumbHome: string
      breadcrumbEvents: string
    }
    search: {
      placeholder: string
      label: string
    }
    filters: {
      category: string
      status: string
      sort: string
      all: string
      apply: string
      clear: string
      clearAll: string
      activeFilters: string
      showing: string
      of: string
      events: string
      event: string
      noEventsFound: string
      tryChanging: string
    }
    sortOptions: {
      soonest: string
      latest: string
      aToZ: string
      zToA: string
    }
    categories: {
      ceremony: string
      hospitality: string
      development: string
      tourism: string
      government: string
      community: string
      charity: string
      other: string
    }
    statuses: {
      upcoming: string
      ongoing: string
      completed: string
    }
    viewDetails: string
    hostedBy: string
  }
  eventDetails: {
    details: string
    date: string
    time: string
    location: string
    organizer: string
    partners: string
    register: string
    hero: {
      breadcrumbHome: string
      breadcrumbEvents: string
    }
    overview: {
      aboutEvent: string
      eventDetails: string
      date: string
      time: string
      location: string
      category: string
      status: string
      hostedBy: string
    }
    agenda: {
      title: string
      time: string
    }
    speakers: {
      title: string
      role: string
      organization: string
    }
    venue: {
      title: string
      address: string
      cityRegion: string
      viewOnMap: string
    }
    logistics: {
      title: string
    }
    faqs: {
      title: string
    }
    sponsors: {
      title: string
      supportedBy: string
    }
    gallery: {
      title: string
    }
    relatedEvents: {
      title: string
      description: string
    }
    notFound: {
      title: string
      description: string
      browseEvents: string
    }
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    message: string
    send: string
    address: string
    hero: {
      eyebrow: string
      heading: string
      description: string
      breadcrumbHome: string
      breadcrumbContact: string
    }
    info: {
      eyebrow: string
      heading: string
      description: string
      phone: string
      email: string
      location: string
      phoneLabel: string
      emailLabel: string
      locationLabel: string
    }
    hours: {
      eyebrow: string
      heading: string
      monday: string
      tuesday: string
      wednesday: string
      thursday: string
      friday: string
      saturday: string
      sunday: string
      closed: string
      demoNotice: string
    }
    social: {
      eyebrow: string
      heading: string
      description: string
    }
    form: {
      eyebrow: string
      heading: string
      description: string
      fullName: string
      fullNamePlaceholder: string
      email: string
      emailPlaceholder: string
      phone: string
      phonePlaceholder: string
      subject: string
      subjectPlaceholder: string
      eventType: string
      eventTypePlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
      submitting: string
      demoNotice: string
      validation: {
        fullNameRequired: string
        fullNameMinLength: string
        emailRequired: string
        emailInvalid: string
        messageRequired: string
        messageMinLength: string
      }
    }
    office: {
      eyebrow: string
      heading: string
      description: string
      demoNotice: string
    }
    map: {
      eyebrow: string
      heading: string
      description: string
      getDirections: string
      mapTitle: string
    }
    cta: {
      heading: string
      description: string
      button: string
    }
  }
  footer: {
    description: string
    quickLinks: string
    contact: string
    brand: string
    rights: string
    developedBy: string
  }
  faq: {
    title: string
    questions: string
  }
  seo: {
    home: {
      title: string
      description: string
    }
    about: {
      title: string
      description: string
    }
    events: {
      title: string
      description: string
    }
    eventDetails: {
      title: string
      description: string
    }
    contact: {
      title: string
      description: string
    }
    notFound: {
      title: string
      description: string
    }
  }
  errors: {
    notFound: {
      title: string
      description: string
      backHome: string
      browseEvents: string
    }
    eventNotFound: {
      title: string
      description: string
      browseEvents: string
      goHome: string
    }
    emptyEvents: {
      title: string
      description: string
      backHome: string
    }
    noSearchResults: {
      title: string
      description: string
      clearSearch: string
    }
    noFilterResults: {
      title: string
      description: string
      clearFilters: string
    }
    imageLoadFailed: {
      alt: string
    }
    videoLoadFailed: {
      message: string
    }
    mapLoadFailed: {
      message: string
      loadMap: string
    }
    form: {
      validationSummary: string
      submissionFailed: string
      tryAgain: string
      checkConnection: string
    }
    unexpected: {
      title: string
      description: string
      tryAgain: string
      goHome: string
    }
  }
}
