import type { TranslationSchema } from './types'

export const omTranslations: TranslationSchema = {
  navigation: {
    home: 'Fuula Jalqabaa',
    about: "Waa'ee Keenya",
    events: 'Taateewwan',
    contact: 'Nu Qunnamaa',
  },
  common: {
    learnMore: 'Dabalata',
    viewDetails: "Bal'ina Ilaali",
    viewAll: 'Hunda Ilaali',
    search: 'Barbaadi',
    filter: 'Calali',
    sort: 'Tartiibessi',
    previous: 'Kan Dura',
    next: 'Kan Itti aanu',
    noEventsFound: 'Taateen tokkolle hin argamne',
    loading: "Fe'amaa Jira...",
  },
  home: {
    title: 'Muuxannoo Yaadatamuu Uumu',
    subtitle:
      'Tajaajila bulchiinsa fi beeksisa taateewwanii ogummaa qabu, Bishooftuu fi naannawa ishee keessatti',
    featuredEvents: 'Taateewwan Aadaa',
    ourWork: 'Hojii Keenya',
    testimonials: 'Yaada Maamiltootaa',
    partners: 'Michoota Keenya',
    hero: {
      eyebrow: 'Taateewwan • Beeksisa • Hawaasa',
      heading: "Yeroo, Bakka fi Namoota Addaatti Mul'isu",
      description:
        'Tajaajila bulchiinsa fi beeksisa taateewwanii ogummaa qabu, hawaasota, aadaa fi carraawwan Bishooftuu fi naannawa ishee walitti fidu.',
      primaryCta: 'Taateewwan Ilaali',
      secondaryCta: 'Hojii Keenya Ilaali',
    },
    aboutPreview: {
      eyebrow: "Waa'ee Keenya",
      heading: 'Muuxannoo Naannoo fi Raawwii Ogummaa',
      description:
        "Nuti dhaabbata taateewwanii fi beeksisaa Bishooftuu keessatti hundaa'e yoo taanu, wantoota gaarii naannoo keenyaa mul'isuuf hojjenna. Sirnoota aadaa fi hojiiwwan daawwannaa irraa kaasee, pirojektoota misoomaa fi hojiiwwan hawaasaa hanga, hojii hunda keessatti raawwii ogummaa fi hubannoo naannoo keenyaa walitti fidna.",
      cta: "Waa'ee Keenya Dabalata Baradhu",
      imageAlt: "Walga'ii hawaasaa taatee aadaa Bishooftuu keessatti",
    },
    promotionCategories: {
      eyebrow: 'Maal Dhiheessina',
      heading: 'Qooda Hojii Keenya',
      description:
        "Taateewwan, bakkeewwan fi hojiiwwan hawaasa keenyaaf barbaachisoo ta'an ni beeksisna.",
      categories: {
        events: {
          title: 'Taateewwan',
          description:
            "Ayyaanota aadaa, konsartiiwwanii fi walga'iiwwan uummataa namoota walitti fidan.",
        },
        ceremonies: {
          title: 'Sirnoota',
          description:
            'Sirnoota hoteelotaa, sirnoota mootummaa fi taateewwan dhaabbilee.',
        },
        development: {
          title: 'Misooma',
          description:
            'Pirojektoota ijaarsaa uummataa fi hojiiwwan misoomaa naannoo keenya bocan.',
        },
        tourism: {
          title: 'Daawwannaa',
          description:
            'Bakkeewwan uumamaa hawwatoo fi muuxannoowwan daawwannaa Bishooftuu fi naannawa ishee.',
        },
        community: {
          title: 'Hawaasa',
          description:
            'Hojiiwwan fi inisheetivoota hawaasaa walitti dhufeenya naannoo cimsan.',
        },
        charity: {
          title: 'Deeggarsa Hawaasummaa ykn Arjoomaa',
          description:
            'Inisheetivoota deeggarsa hawaasummaa yeroo yerootti namoota deeggarsa barbaadan deeggaran.',
        },
      },
    },
    whyChooseUs: {
      eyebrow: 'Maaliif Nu Filattu?',
      heading: 'Gatii Jijjiirama Fidu',
      description:
        'Ogummaa hojii fi hubannoo gadi fagoo naannoo walitti fidna.',
      reasons: {
        localPerspective: {
          title: 'Hubannoo Naannoo',
          description:
            'Bishooftuu fi naannawa ishee, uummata, aadaa fi carraawwan ishee irratti hubannoo gadi fagoo qabna.',
        },
        storytelling: {
          title: "Seenaa Ifa Ta'een Dhiyeessuu",
          description:
            'Seenaa hawwataa qopheessuun taatee ykn inisheetivii keessan dhaggeeffattoota keessan waliin wal qunnamsiifna.',
        },
        professional: {
          title: 'Beeksisa Ogummaa',
          description:
            'Beeksisa qulqullina qabuun taatee keessan ol-kaasnee namoota sirrii biraan geenya.',
        },
        community: {
          title: 'Walitti Dhufeenya Hawaasaa',
          description:
            'Hawaasota naannoo, dhaabbilee fi institiyuushinoota waliin walitti dhufeenya cimaa qabna.',
        },
        versatile: {
          title: 'Dandeettii Hojii Garaagaraa',
          description:
            "Taateewwan, sirnoota, misooma, daawwannaa fi hojiiwwan hawaasaa irratti muuxannoo bal'aa qabna.",
        },
      },
    },
    featuredEventsSection: {
      eyebrow: 'Taateewwan Aadaa',
      heading: 'Taateewwan Ijoo Dhufan',
      description:
        'Taateewwanii fi inisheetivoota nuti boonuudhaan beeksisnu ilaali.',
      viewAll: 'Taateewwan Hunda Ilaali',
      emptyState: 'Yeroo ammaa taateewwan addaa hin jiran.',
      emptyStateCta: "Taateewwan Hunda Sakatta'i",
    },
    ourWorkSection: {
      eyebrow: 'Hojii Keenya',
      heading: 'Beeksisawwan Filataman',
      description: 'Hojiiwwan beeksisaa nuti raawwanne keessaa filannoo addaa.',
      category: 'Ramaddii',
      location: 'Iddoo',
      year: 'Bara',
    },
    communityImpact: {
      eyebrow: 'Dhiibbaa Hawaasaa',
      heading: 'Beeksisa Kaayyoo Qabu',
      description:
        "Beeksisni xiyyeeffannoo hawwachuu caalaa waan hedduu gochuu danda'a — namoota inisheetivoota barbaachisoo ta'an waliin wal qunnamsiisuu danda'a.",
      imageAlt:
        'Miseensonni hawaasaa inisheetivii naannoo tokko irratti hirmaachaa jiran',
      impacts: {
        visibility: {
          title: "Mul'ata Hawaasaa",
          description:
            "Ga'uu fi mul'ata inisheetivoota hawaasaa fi hojiiwwan uummataa guddisuu.",
        },
        awareness: {
          title: 'Hubannoo Uummataa',
          description:
            'Dhimmoota naannoo barbaachisoo, sagantaalee fi carraawwan irratti hubannoo uumuu.',
        },
        charity: {
          title: 'Arjoomaa & Deeggarsa Hawaasummaa',
          description:
            "Hojiiwwan deeggarsa hawaasummaa deeggaruu fi dhaggeeffattoota bal'aa biraan isaan ga'uu.",
        },
        storytelling: {
          title: 'Seenaa Naannoo Dhiyeessuu',
          description:
            'Seenaa hawaasa keenyaa, uummata isaa fi guddina isaa dhiyeessuu.',
        },
      },
    },
    testimonialsSection: {
      eyebrow: 'Yaada Maamiltootaa',
      heading: 'Namoonni Maal Jedhu?',
      description: 'Yaada namoota waliin hojjenne fi deeggarre irraa arganne.',
      demoNotice: "Qabiyyee agarsiisaaf qofa qophaa'e.",
    },
    partnersSection: {
      eyebrow: 'Michoota Keenya',
      heading: 'Waliin Hojjechuu',
      description:
        'Dhaabbilee fi hawaasota waliin hojjechuu keenya irraa boonnu.',
      demoNotice: 'Misooma demo agarsiisaaf qofa',
    },
    faqSection: {
      eyebrow: "Gaaffilee Yeroo Baay'ee Gaafataman",
      heading: 'Gaaffilee Waliigalaa',
      description: "Deebii gaaffilee yeroo baay'ee gaafatamaniif barbaadi.",
    },
    finalCta: {
      eyebrow: 'Wal Qunnamnaa',
      heading:
        'Taatee, bakka ykn inisheetivii xiyyeeffannoo argachuu qabu qabduu?',
      description:
        "Taatee ykn karoora itti aanu dhiheessuuf akkamitti akka gargaarru irratti mari'achuuf nu qunnamaa.",
      primaryCta: 'Nu Qunnamaa',
      secondaryCta: 'Taateewwan Ilaali',
    },
  },
  about: {
    title: "Waa'ee Keenya",
    subtitle: "Seenaa Naannoo Addaatti Mul'isu",
    team: 'Garee Keenya',
    mission: 'Ergama Keenya',
    vision: "Mul'ata Keenya",
    values: "Ergamaa fi Mul'ata Keenya",
    hero: {
      eyebrow: "Waa'ee Keenya",
      heading: 'Seenaa Naannoo Ilaa Keessa Galchuu',
      description:
        "Nuti dhaabbata taateewwanii fi beeksisaa Bishooftuu keessatti hundaa'e yoo taanu, wantoota gaarii naannoo keenyaa mul'isuuf hojjenna.",
      breadcrumbHome: 'Mana',
      breadcrumbAbout: "Waa'ee Keenya",
    },
    missionVision: {
      eyebrow: 'Kaayyoo Keenya',
      heading: "Kaayyoo fi Mul'ata",
      missionLabel: 'Kaayyoo',
      visionLabel: "Mul'ata",
    },
    coreValues: {
      eyebrow: 'Safuu Gurguddaa',
      heading: 'Waan Hojii Keenya Qajeelchu',
      description:
        'Duudhaaleen kun akkaataa itti pirojektii fi hariiroo hojii hunda ittiin raawwannu qajeelchu.',
      values: {
        community: {
          title: 'Hawaasa',
          description:
            'Waan hundumaa keessatti fedhii fi faayidaa hawaasa naannoo keenyaa dursa kennina.',
        },
        integrity: {
          title: 'Amanamummaa',
          description:
            'Hojii fi walitti dhufeenya keenya hunda keessatti amanamummaa, iftoomina fi kabajaan hojjenna.',
        },
        creativity: {
          title: 'Kalaqa',
          description:
            'Beeksisa hunda keessatti ilaalcha haaraa fi mala kalaqaa dhiyeessina',
        },
        collaboration: {
          title: 'Tumsa',
          description:
            'Michoota, dhaabbilee fi miseensota hawaasaa waliin dhiyeenyaan hojjenna.',
        },
      },
    },
    teamSection: {
      eyebrow: 'Garee Keenya',
      heading: 'Namoota Hojii Kana Duuba Jiran',
      description:
        'Namoota pirojektii hundaaf ogummaa fi kutannoo isaanii fidan.',
      demoNotice: "Miseensota garee agarsiisaaf qofa qophaa'an.",
    },
    stats: {
      eyebrow: 'Waan Nuti Fidu',
      heading: 'Cimina Keenya',
      description:
        'Agarsiistota qulqullinaa ilaalcha fi xiyyeeffannoo hojii keenyaa.',
      stats: {
        local: {
          title: 'Naannoo',
          description: 'Bishooftuu irratti xiyyeeffate',
        },
        multiSector: {
          title: 'Dameewwan Garaagaraa',
          description: 'Taatee • Tuurizimii • Daawwannaa • Misooma',
        },
        community: {
          title: 'Hawaasa',
          description: "Mul'ata Naannoo fi Inisheetivoota",
        },
        bilingual: {
          title: 'Afaan Lama',
          description: 'English • Afaan Oromo',
        },
      },
    },
    process: {
      eyebrow: 'Adeemsa Hojii Keenya',
      heading: 'Akkaataa Itti Hojjennu',
      description: 'Ibsa waliigalaa akkaataa itti beeksisa raawwannu.',
      steps: {
        discover: {
          title: 'Argi',
          description: 'Taatee, bakka ykn inisheetivii keessan hubachuu.',
        },
        plan: {
          title: 'Karoora',
          description:
            "Tarsiimoo beeksisaa kaayyoo keessan irratti hundaa'e qopheessuu.",
        },
        create: {
          title: 'Kalaqi',
          description: "Qabiyyee hawwataa fi meeshaalee mul'ataa qopheessuu.",
        },
        promote: {
          title: 'Dhiheessi',
          description:
            'Seenaa keessan chaanaalii barbaachisaa irratti beeksisuu.',
        },
        amplify: {
          title: "Bal'isi",
          description:
            "Ga'ee fi hirmaannaa dhaggeeffattoota keessanii guddisuu.",
        },
      },
    },
    socialCommunity: {
      eyebrow: 'Imala Hordofi',
      heading: 'Nu Qunnamaa',
      description:
        'Taateewwan, hojiiwwan hawaasaa fi seenaawwan naannoo baruuf daawwadhu.',
    },
    gallery: {
      eyebrow: 'Kuusaa Suuraa',
      heading: "Seenaa Mul'ataa",
      description:
        'Yeroo fi muuxannoowwan taateewwan, bakkeewwan fi inisheetivoota nuti beeksisnu keessaa filataman.',
      demoNotice: "Suuraawwan agarsiisaaf qofa qophaa'an.",
    },
  },
  events: {
    title: 'Taateewwan',
    subtitle: 'Taateewwan dhufanii fi darban Baradhu',
    upcoming: 'Kan Dhufan',
    ongoing: 'Kan Adeemaa Jiru',
    completed: 'Kan Xumurame',
    filterByCategory: "Ramaddii irratti hundaa'uun Calali",
    filterByStatus: "Haala irratti hundaa'uun Calali",
    hero: {
      eyebrow: 'Taateewwan',
      heading: 'Waan Raawwatamaa Jiru Baradhu',
      description:
        "Taateewwan, sirnoota fi inisheetivoota Bishooftuu fi naannawa ishee keessatti raawwataman Sakatta'i.",
      breadcrumbHome: 'Fuula Jalqabaa',
      breadcrumbEvents: 'Taateewwan',
    },
    search: {
      placeholder: 'Taateewwan barbaadi...',
      label: 'Taateewwan barbaadi',
    },
    filters: {
      category: 'Ramaddii',
      status: 'Haala',
      sort: 'Tartiibessi',
      all: 'Hunda',
      apply: 'Calalawwan Hojiirra Oolchi',
      clear: 'Haqi',
      clearAll: 'Hunda Haqi',
      activeFilters: 'Calalawwan hojii irra jiran',
      showing: 'Agarsiisaa Jira',
      of: 'keessaa',
      events: 'taateewwan',
      event: 'taatee',
      noEventsFound: 'Taateen hin argamne',
      tryChanging: 'Barbaacha ykn calalawwan keessan jijjiiruun yaalaa.',
    },
    sortOptions: {
      soonest: 'Guyyaa: Dhiyoo',
      latest: 'Guyyaa: Booda',
      aToZ: 'A–Z',
      zToA: 'Z–A',
    },
    categories: {
      ceremony: 'Sirna',
      hospitality: 'Keessummeessaa',
      development: 'Misooma',
      tourism: 'Tuurizimii',
      government: 'Mootummaa',
      community: 'Hawaasa',
      charity: 'Arjoomaa',
      other: 'Kan biraa',
    },
    statuses: {
      upcoming: 'Kan Dhufan',
      ongoing: 'Kan Addeemsa irra jiran',
      completed: 'Kan Xumuraman',
    },
    viewDetails: "Bali'ina Ilaali",
    hostedBy: 'Kan Qopheesse',
  },
  eventDetails: {
    details: "Taatee Bali'ina",
    date: 'Guyyaa',
    time: "Sa'aa",
    location: 'Iddoo',
    organizer: 'Qindeessaa',
    agenda: 'Sagantaa',
    speakers: 'Afferamtoota',
    partners: 'Michoota',
    gallery: 'Kuusaa Suuraa',
    faqs: "Gaaffilee Yeroo Baay'ee Gaafataman",
    register: "Galmaa'i",
    hero: {
      breadcrumbHome: 'Mana',
      breadcrumbEvents: 'Taateewwan',
    },
    overview: {
      aboutEvent: "Waa'ee Taatee",
      eventDetails: "Taatee Bal'inan",
      date: 'Guyyaa',
      time: "Sa'aa",
      location: 'Iddoo',
      category: 'Ramaddii',
      status: 'Haala',
      hostedBy: 'Kan dhiheesse',
    },
    agenda: {
      title: 'Sagantaa',
      time: "Sa'aa",
    },
    speakers: {
      title: 'Afferamtoota',
      role: 'Gahee',
      organization: 'Dhaabbata',
    },
    venue: {
      title: 'Iddoo',
      address: 'Teessoo',
      cityRegion: 'Magaalaa / Naannoo',
      viewOnMap: 'Kaartaa irratti Ilaali',
    },
    logistics: {
      title: 'Qophiiwwan Teeknikaa fi Geejjibaa',
    },
    faqs: {
      title: 'Gaaffilee Taatee',
    },
    sponsors: {
      title: 'Kan Gargaaran',
      supportedBy: 'Kan Deeggarame',
    },
    gallery: {
      title: 'Kuusaa Suuraa',
    },
    relatedEvents: {
      title: 'Taateewwan Walqabatan',
      description: 'Taateewwan kanneen keessattis fedhii qabaachuu dandeessa.',
    },
    notFound: {
      title: 'Taateen Hin Argamne',
      description: 'Taateen ati barbaaddu hin argamne',
      browseEvents: 'Taateewwan Ilaali',
    },
  },
  contact: {
    title: 'Nu Quunnamaa',
    subtitle: 'Garee keenya wajjiin wal qunnamaa',
    name: 'Maqaa',
    email: 'Email',
    phone: 'Bilbila',
    message: 'Ergaa',
    send: 'Ergaa Ergi',
    address: 'Teessoo',
    hero: {
      eyebrow: 'Nu Quunnamaa',
      heading: "Waa'ee Taatee Keessan Itti Aanuu Haa Mari'annu",
      description:
        "Taatee, sirna, beeksisa ykn pirojektii hawaasaa tokko yaadaa jirtuu? Waa'ee isaa isin irraa dhaga'uu ni gammanna.",
      breadcrumbHome: 'Mana',
      breadcrumbContact: 'Quunnamtii',
    },
    info: {
      eyebrow: 'Nu Qunnamaa',
      heading: 'Odeeffannoo Qunnamtii',
      description: 'Karaa qunnamtii armaan gadiitiin nu qunnamaa.',
      phone: 'Bilbila',
      email: 'Email',
      location: 'Iddoo',
      phoneLabel: 'Nu bilbilaa',
      emailLabel: 'Email nuuf ergaa',
      locationLabel: 'Iddoo keenya',
    },
    hours: {
      eyebrow: "Sa'aatii Hojii",
      heading: 'Yeroo Hojii Irra Jirru',
      monday: 'Wiixata',
      tuesday: 'Kibxata',
      wednesday: 'Roobii',
      thursday: 'Kamisa',
      friday: 'Jimaata',
      saturday: 'Sanbata',
      sunday: 'Dilbata',
      closed: 'Cufaa',
      demoNotice: "Sa'aatii hojii agarsiisaaf qofa qophaa'e.",
    },
    social: {
      eyebrow: 'Karaa Miidiyaalee Hawaasa Keenya Nu Hordofaa',
      heading: 'Wal Qunnamaa',
      description:
        'Oduu haaraa taateewwanii fi seenaawwan hawaasaa argachuuf miidiyaa hawaasaa irratti nu hordofi.',
    },
    form: {
      eyebrow: 'Gaaffii Ergi',
      heading: "Waa'ee Pirojektii Keessanii Nutti Himaa",
      description: 'Unka armaan gadii guutaa; nutis deebii isiniif kennina.',
      fullName: 'Maqaa Guutuu',
      fullNamePlaceholder: 'Maqaa guutuu keessan galchaa',
      email: 'Email',
      emailPlaceholder: 'Email keessan galchaa',
      phone: 'Bilbila (ijaaba)',
      phonePlaceholder: 'Lakkoofsa bilbilaa keessan galchaa',
      subject: 'Mata-duree',
      subjectPlaceholder: 'Mata-duree galchaa',
      eventType: 'Gosa Taatee',
      eventTypePlaceholder: 'Gosa taatee filadhaa',
      message: 'Ergaa',
      messagePlaceholder:
        "Waa'ee taatee ykn pirojektii keessanii nutti himaa...",
      submit: 'Ergaa Ergi',
      submitting: 'Ergaa...',
      demoNotice:
        'Unki agarsiisaaf qofa — ergaan isaa ammaaf hin walqabsiifamne.',
      validation: {
        fullNameRequired: 'Maqaan guutuun barbaachisa',
        fullNameMinLength: "Maqaan guutuun yoo xiqqaate 2 arfii ta'uu qaba",
        emailRequired: 'Email barbaachisa',
        emailInvalid: 'Email sirrii galchaa',
        messageRequired: 'Ergaan barbaachisa',
        messageMinLength: "Ergaan yoo xiqqaate 10 arfii ta'uu qaba",
      },
    },
    office: {
      eyebrow: 'Iddoo Keenya',
      heading: 'Bakka Waajjira Dhaabbatichaa',
      description: 'Ilaalcha naannoo hojii fi hojii keenyaa.',
      demoNotice: 'Suuraa demo agarsiisaaf qofa',
    },
    map: {
      eyebrow: 'Iddoo Keenya',
      heading: 'Asitti Nu Argi',
      description: 'Nuti Bishooftuu, Oromiyaa, Itoophiyaa keessatti argamna.',
      getDirections: 'Kallattii Argadhu',
      mapTitle: 'Iddoo hojii kaampaanii',
    },
    cta: {
      heading: 'Waliin Hojjechuuf Qophiidhaa?',
      description:
        "Waa'ee taatee, sirna ykn pirojektii beeksisaa keessan itti aanu haa mari'annu.",
      button: 'Nu Qunnamaa',
    },
  },
  footer: {
    description:
      'Tajaajila bulchiinsa fi beeksisa taateewwanii ogummaa qabu Bishooftuu fi naannawa ishee keessatti.',
    quickLinks: 'Geessitoota Saffisaa',
    contact: 'Quunnamtii',
    brand: 'Brandii',
    rights: 'Mirga hundaa eegamaadha',
    developedBy: "Kan Qophaa'e:",
  },
  faq: {
    title: "Gaaffilee Yeroo Baay'ee Gaafataman",
    questions: 'Gaaffilee',
  },
  seo: {
    home: {
      title: 'Taateewwanii fi Beeksisa Bishooftuu',
      description:
        'Tajaajila bulchiinsa fi beeksisa taateewwanii ogummaa qabu Bishooftuu fi naannawa ishee keessatti. Taateewwan, sirnoota, hojiiwwan daawwannaa fi inisheetivoota hawaasaa baruuf daawwadhu.',
    },
    about: {
      title: "Waa'ee Keenya",
      description:
        "Waa'ee Taateewwanii fi Beeksisa Bishooftuu baradhu. Taateewwan, sirnoota, daawwannaa fi hojiiwwan hawaasaa Bishooftuu fi naannawa ishee keessatti ni beeksisna.",
    },
    events: {
      title: 'Taateewwan',
      description:
        'Taateewwan dhufan, sirnoota fi hojiiwwan hawaasaa Bishooftuu fi naannawa ishee keessatti argaman baruuf daawwadhu.',
    },
    eventDetails: {
      title: 'Taatee Balbala',
      description:
        "Bal'ina taatee, sagantaa, dhiyeessitoota, odeeffannoo iddoo taatee fi kanneen biroo ilaali.",
    },
    contact: {
      title: 'Nu Quunnamaa',
      description:
        'Taateewwanii fi Beeksisa Bishooftuu waliin qunnami. Taateewwan, sirnoota, hojiiwwan daawwannaa fi inisheetivoota hawaasaa ni beeksisna.',
    },
    notFound: {
      title: 'Fuula Hin Argamne',
      description: 'Fuula barbaadde hin argamne.',
    },
  },
  errors: {
    notFound: {
      title: 'Fuulli ati barbaaddu hin argamne.',
      description:
        'Fuula barbaadde hin jiru ykn gara iddoo biraatti jijjiirameera.',
      backHome: 'Gara Mana',
      browseEvents: 'Taateewwan Ilaali',
    },
    eventNotFound: {
      title: 'Taateen Hin Argamne',
      description: 'Taateen barbaadde hin argamne.',
      browseEvents: 'Taateewwan Hunda Ilaali',
      goHome: 'Gara Mana',
    },
    emptyEvents: {
      title: 'Taateen Hin Jiru',
      description:
        "Yeroo ammaa taateen hin jiru. Taatee dhufan ilaaluuf yeroo biraa deebi'aa.",
      backHome: "Gara Mana Deebi'i",
    },
    noSearchResults: {
      title: 'Taateen Hin Argamne',
      description: 'Taateen barbaacha keessan wajjiin wal hin qabne.',
      clearSearch: 'Barbaacha Haqi',
    },
    noFilterResults: {
      title: 'Taatee Walfakkaataa Hin Jiru',
      description: 'Taateen filtrarii filataman wajjiin wal hin qabne.',
      clearFilters: 'Filtrarii Haqi',
    },
    imageLoadFailed: {
      alt: 'Suuraan hin argamne',
    },
    videoLoadFailed: {
      message: 'Viidiyoon hin load taane',
    },
    mapLoadFailed: {
      message: 'Kaartaan hin load taane',
      loadMap: 'Kaartaa Load Godhi',
    },
    form: {
      validationSummary: 'Dogoggora armaan gadii sirreessaa.',
      submissionFailed: 'Ergaan keessan hin ergamne.',
      tryAgain: "Irra Deebi'i",
      checkConnection: "Quunnamtii keessan ilaalaa, irra deebi'aa.",
    },
    unexpected: {
      title: 'Wanti Tokko Dogoggora',
      description: 'Kutaa kana yeroo ammaa agarsiisuu hin dandeenye.',
      tryAgain: "Irra Deebi'i",
      goHome: 'Gara Mana',
    },
  },
}
