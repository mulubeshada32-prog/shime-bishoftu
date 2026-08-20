import type { Event } from '@/types/event'

export const events: Event[] = [
  {
    id: '1',
    slug: 'bishoftu-cultural-festival-2026',
    title: {
      en: 'Bishoftu Cultural Festival 2026',
      om: 'Ayyaana Aadaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'A celebration of Oromo culture, music, and traditions',
      om: 'Ayyaana aadaa, muuziqaa fi aadaa Oromoo',
    },
    description: {
      en: 'Join us for a vibrant celebration of Oromo culture featuring traditional music, dance performances, art exhibitions, and local cuisine. This three-day festival brings together artists, performers, and cultural enthusiasts from across the region.',
      om: 'Ayyaana aadaa Oromoo kan muuziqaa aadaa, shubbisa, agarsiisa aartii fi nyaata aadaa of keessaa qabu irratti nu hordofaa. Ayyaanni guyyaa sadii kun artistoota, dubbatoota fi jaalattota aadaa naannoo hunda irraa walitti qaba.',
    },
    category: 'community',
    status: 'upcoming',
    featured: true,
    date: '2026-09-15',
    startTime: '09:00',
    endTime: '22:00',
    location: {
      venue: {
        en: 'Bishoftu Cultural Center',
        om: 'Wiirtuu Aadaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
      coordinates: {
        latitude: 8.7346,
        longitude: 39.0085,
      },
    },
    organizer: {
      name: 'Bishoftu Cultural Association',
      email: 'culture@bishoftuevents.com',
      phone: '+251 911 111 111',
    },
    host: {
      en: 'Bishoftu Events & Promotions',
      om: 'Taatee Bishooftuu & Dhiheessa',
    },
    speakers: [
      {
        id: '1',
        name: 'Dr. Worku Tesfaye',
        role: {
          en: 'Cultural Historian',
          om: 'Hayyuu Aadaa',
        },
        bio: {
          en: 'Expert in Oromo cultural heritage with over 20 years of research experience.',
          om: 'Ogeessa aadaa Oromoo kan waggaa 20 ol tajaajilaa qorannoo keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Artist Chala Gonfa',
        role: {
          en: 'Traditional Musician',
          om: 'Muuziqaa Aadaa',
        },
        bio: {
          en: 'Renowned Oromo traditional musician and krar player, performing internationally.',
          om: 'Muuziqaa aadaa Oromoo fi taphataa kiraarii beekamaa, biyya alattis taphachaa.',
        },
        image:
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Makeda Wondimu',
        role: {
          en: 'Cultural Dance Choreographer',
          om: 'Shubbisaa Aadaa',
        },
        bio: {
          en: 'Leading traditional dance troupes across Oromia, preserving cultural heritage.',
          om: 'Gartuuwwan shubbisaa aadaa Oromiyaa hunda keessatti hoogganaa, dhaala aadaa eeguu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Mekdes Wondewosen',
        role: {
          en: 'Cultural Dance Choreographer',
          om: 'Shubbisaa Aadaa',
        },
        bio: {
          en: 'Leading traditional dance troupes across Oromia, preserving cultural heritage.',
          om: 'Gartuuwwan shubbisaa aadaa Oromiyaa hunda keessatti hoogganaa, dhaala aadaa eeguu.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Opening Ceremony',
          om: 'Sirna Banaa',
        },
        description: {
          en: 'Welcome remarks and opening performances',
          om: 'Nagaa dhaammachuu fi shubbisa banaa',
        },
      },
      {
        id: '2',
        time: '11:00',
        title: {
          en: 'Traditional Music Workshop',
          om: 'Ogbarruu Muuziqaa Aadaa',
        },
        description: {
          en: 'Learn about Oromo musical instruments and traditions',
          om: 'Meessaa muuziqaa fi aadaa Oromoo ilmaataa',
        },
      },
      {
        id: '3',
        time: '14:00',
        title: {
          en: 'Cultural Exhibitions',
          om: 'Agarsiisa Aadaa',
        },
        description: {
          en: 'Traditional art and craft displays from across Oromia',
          om: 'Agarsiisa aartii fi hojii harkaa aadaa Oromiyaa hunda irraa',
        },
      },
      {
        id: '4',
        time: '16:00',
        title: {
          en: 'Dance Performance Showcase',
          om: 'Agarsiisa Shubbisaa',
        },
        description: {
          en: 'Traditional dance performances by various cultural groups',
          om: 'Shubbisa aadaa gartuuwwan aadaa adda addaa irraa',
        },
      },
      {
        id: '5',
        time: '19:00',
        title: {
          en: 'Evening Concert',
          om: 'Konzarti Galgalaa',
        },
        description: {
          en: 'Live music performances by local and national artists',
          om: 'Muuziqaa lubbuu qabu artistoota naannoo fi biyya keessaa',
        },
      },
    ],
    logistics: {
      en: 'Free parking available. Shuttle service from Bishoftu city center every 30 minutes. Wheelchair accessible. Food vendors available on site.',
      om: 'Paarkiin bilisaa jira. Tajaajila shuttle wiirtuu Bishooftuu irraa daqiiqaa 30 kenna. Biyyada nama qabduun galmaan gahaa. Daldalaan nyaataa iddoo irratti jira.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'What is the entry fee?',
          om: 'Kaffaltii seenaa meeqa?',
        },
        answer: {
          en: 'Entry is free for all attendees.',
          om: 'Seenaan hundaaf bilisa.',
        },
      },
      {
        id: '2',
        question: {
          en: 'Are there food vendors?',
          om: 'Daldalaan nyaataa jiruu?',
        },
        answer: {
          en: 'Yes, local food vendors will be present offering traditional Oromo cuisine.',
          om: 'Eeyyee, daldalaan nyaataa naannoo kan nyaata Oromoo kennan jira.',
        },
      },
      {
        id: '3',
        question: {
          en: 'Is the venue wheelchair accessible?',
          om: 'Iddoon biyyada nama qabduun galmaan gahaa?',
        },
        answer: {
          en: 'Yes, the venue is fully wheelchair accessible.',
          om: 'Eeyyee, iddoon biyyada nama qabduun guutummaatti galmaan gaha.',
        },
      },
      {
        id: '4',
        question: {
          en: 'Can I bring my children?',
          om: "Ijoollee koo fiduu nan danda'aa?",
        },
        answer: {
          en: 'Yes, the festival is family-friendly with activities for all ages.',
          om: "Eeyyee, ayyaanni maatiif mijaa'aa kan hojiiwwan umriin hundaa qabu.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Oromia Tourism Commission',
        logo: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/oromia-tourism',
      },
      {
        id: '2',
        name: 'Bishoftu Municipality',
        logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/bishoftu-municipality',
      },
      {
        id: '3',
        name: 'Ethiopian Cultural Heritage Trust',
        logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/echt',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional dance performance at the festival',
          om: 'Shubbisa aadaa ayyaana irratti',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Art exhibition showcasing local talent',
          om: 'Agarsiisa aartii kan dandeettii naannoo agarsiisu',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional musical performance',
          om: 'Shubbisa muuziqaa aadaa',
        },
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1546039907-7fa05f864c1b?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Cultural artifacts exhibition',
          om: 'Agarsiisa meeshaalee aadaa',
        },
      },
    ],
  },
  {
    id: '2',
    slug: 'lake-hora-eco-tour-2026',
    title: {
      en: 'Lake Hora Eco-Tourism Experience',
      om: 'Muuxannoo Eco-Tourism Haroo Horaa',
    },
    shortDescription: {
      en: 'Explore the natural beauty of Lake Hora with guided tours',
      om: 'Miidhagina uumamaa Haroo Horaa qajeelfama wajjiin ilaali',
    },
    description: {
      en: 'Discover the stunning natural beauty of Lake Hora with guided eco-tours, bird watching, boat rides, and educational programs about environmental conservation. Perfect for nature lovers and families.',
      om: "Miidhagina uumamaa Haroo Horaa kan qajeelfama eco-tour, ilaalcha simbirroo, yaabbii bidiruu fi sagantaa barnootaa eegumsa naannoo wajjiin argadhu. Jaalattota uumamaa fi maatiif mijaa'aa.",
    },
    category: 'tourism',
    status: 'ongoing',
    featured: true,
    date: '2026-07-01',
    startTime: '08:00',
    endTime: '17:00',
    location: {
      venue: {
        en: 'Lake Hora',
        om: 'Haroo Horaa',
      },
      city: 'Bishoftu',
      region: 'Oromia',
      coordinates: {
        latitude: 8.7346,
        longitude: 39.0085,
      },
    },
    organizer: {
      name: 'Bishoftu Eco-Tourism Initiative',
      email: 'eco@bishoftuevents.com',
      phone: '+251 922 222 222',
    },
    host: {
      en: 'Eco-Tourism Bishoftu',
      om: 'Eco-Tourism Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Dr. Alemayehu Fekadu',
        role: {
          en: 'Environmental Scientist',
          om: 'Saayintistii Naannoo',
        },
        bio: {
          en: 'PhD in Environmental Science with focus on wetland conservation.',
          om: 'PhD Saayinsii Naannoo kan eegumsa biyyoo jiidhan irratti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Tigist Hailu',
        role: {
          en: 'Bird Watching Expert',
          om: 'Ogeessa Ilaalcha Simbirroo',
        },
        bio: {
          en: 'Ornithologist with over 15 years of experience in Ethiopian bird species.',
          om: 'Ogeessa simbirroo kan waggaa 15 ol tajaajila gosa simbirroo Itoophiyaa keessatti qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1511497584788-876761c11969?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Bekele Tulu',
        role: {
          en: 'Eco-Tourism Guide',
          om: 'Qajeelfama Eco-Tourism',
        },
        bio: {
          en: 'Expert eco-tourism guide with knowledge of local ecosystems.',
          om: 'Qajeelfama eco-tourism ogeessa kan beekumsa ekosisteemii naannoo qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Mulugeta Worku',
        role: {
          en: 'Conservation Educator',
          om: 'Barsiisaa Eegumsa',
        },
        bio: {
          en: 'Environmental educator teaching conservation to communities.',
          om: 'Barsiisaa naannoo kan eegumsa hawaasootaaf barsiisu.',
        },
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '08:00',
        title: {
          en: 'Welcome & Registration',
          om: "Nagaa Dhaammachuu fi Galmaa'ii",
        },
        description: {
          en: 'Check-in and orientation for the day',
          om: "Galmaa'ii fi qajeelfama guyyaa",
        },
      },
      {
        id: '2',
        time: '08:30',
        title: {
          en: 'Guided Nature Walk',
          om: 'Deddeebii Uumamaa Qajeelfamaan',
        },
        description: {
          en: 'Walk around the lake with an expert guide',
          om: "Qajeelfama ogeessa wajjiin haroo naanna'uu",
        },
      },
      {
        id: '3',
        time: '11:00',
        title: {
          en: 'Bird Watching Session',
          om: 'Ilaalcha Simbirroo',
        },
        description: {
          en: 'Identify local bird species with telescopes and binoculars',
          om: 'Gosa simbirroo naannoo teleskooppii fi binokulaariidhaan addaan baasuu',
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Lunch Break',
          om: 'Boqonnaa Laachii',
        },
        description: {
          en: 'Picnic lunch by the lake',
          om: 'Laachii qarqara haroo',
        },
      },
      {
        id: '5',
        time: '14:30',
        title: {
          en: 'Boat Ride on Lake Hora',
          om: 'Yaabbii Bidiruu Haroo Horaa irratti',
        },
        description: {
          en: 'Scenic boat tour with commentary about the local ecosystem',
          om: "Yaabbii bidiruu miidhagaa kan waa'ee ekosisteemii naannoo ibsu",
        },
      },
      {
        id: '6',
        time: '16:00',
        title: {
          en: 'Conservation Workshop',
          om: 'Ogbarruu Eegumsa',
        },
        description: {
          en: 'Learn about local conservation efforts and how to help',
          om: "Waa'ee hojii eegumsa naannoo fi akkaataa gargaaruu dandeenyu ilmaataa",
        },
      },
    ],
    logistics: {
      en: 'Tour guides available in English and Afaan Oromo. Bring comfortable walking shoes, water, sunscreen, and a hat. Boat rides included. Lunch provided.',
      om: "Qajeelfamtoonni Afaan Ingilizii fi Afaan Oromoo jiru. Kophee deddeebii mijaa'aa, bishaan, qoricha aduu fi qolloo qabaadhaa. Yaabbii bidiruu dabalate. Laachii kenname.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'How long is the tour?',
          om: "Imimni sa'aatii meeqa?",
        },
        answer: {
          en: 'The tour lasts approximately 6 hours, from 8 AM to 5 PM with breaks.',
          om: "Imimni sa'aatii 6 ta'aa, ganama 8:00 hanga galgala 5:00 boqonnaawajjiin.",
        },
      },
      {
        id: '2',
        question: {
          en: 'Is lunch included?',
          om: 'Laachii dabalatee?',
        },
        answer: {
          en: 'Yes, a picnic lunch is included in the tour package.',
          om: 'Eeyyee, laachii qarqara haroo dabalate.',
        },
      },
      {
        id: '3',
        question: {
          en: 'Do I need to bring my own binoculars?',
          om: 'Binokulaarii koo ofiin fiduu qaba?',
        },
        answer: {
          en: 'Binoculars are provided, but you are welcome to bring your own.',
          om: 'Binokulaarii ni kenname, garuu ofiin fiduu dandeessu.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Wildlife Conservation Authority',
        logo: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ewca',
      },
      {
        id: '2',
        name: 'Oromia Environment Protection Agency',
        logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/oepa',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Lake Hora scenic view',
          om: "Mul'ata miidhagaa Haroo Horaa",
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1470071459604-7b8ec44ffd7b?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Bird watching at Lake Hora',
          om: 'Ilaalcha simbirroo Haroo Horaa irratti',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Boat ride on the lake',
          om: 'Yaabbii bidiruu haroo irratti',
        },
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1440581270065-aae7af6c3a06?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Nature walk around the lake',
          om: "Deddeebii uumamaa haroo naanna'uu",
        },
      },
    ],
  },
  {
    id: '3',
    slug: 'youth-empowerment-conference-2026',
    title: {
      en: 'Youth Empowerment Conference 2026',
      om: 'Konfiraansii Humna Dargaggootaa 2026',
    },
    shortDescription: {
      en: 'Empowering the next generation of leaders in Bishoftu',
      om: 'Dargaggoota hogganaa bara boruu Bishooftuu keessatti humneessuu',
    },
    description: {
      en: 'A comprehensive conference focused on leadership development, entrepreneurship, career guidance, and innovation for young people in Bishoftu. Featuring keynote speakers, workshops, and networking opportunities.',
      om: 'Konfiraansii guutuu kan guddina hogganummaa, daldalaa, qajeelfama hojii fi ogummaa dargaggoota Bishooftuu irratti xiyyeeffate. Dubbii gurguddaa, ogbarruu fi carraa wal-baruu of keessaa qaba.',
    },
    category: 'development',
    status: 'upcoming',
    featured: false,
    date: '2026-10-20',
    startTime: '08:30',
    endTime: '16:30',
    location: {
      venue: {
        en: 'Bishoftu Convention Center',
        om: 'Wiirtuu Konfiraansii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
      coordinates: {
        latitude: 8.7346,
        longitude: 39.0085,
      },
    },
    organizer: {
      name: 'Bishoftu Youth Association',
      email: 'youth@bishoftuevents.com',
      phone: '+251 933 333 333',
    },
    host: {
      en: 'Bishoftu Youth & Sports Bureau',
      om: 'Biroo Dargaggootaa fi Isportii Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Amina Hassan',
        role: {
          en: 'Entrepreneurship Coach',
          om: 'Leenjisaa Daldalaa',
        },
        bio: {
          en: 'Helping young people start their own businesses with over 10 years of experience.',
          om: 'Dargaggoota daldala isaanii jalqaban gargaaruu kan waggaa 10 ol tajaajila qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Dawit Tadesse',
        role: {
          en: 'Leadership Development Expert',
          om: 'Ogeessa Guddina Hogganummaa',
        },
        bio: {
          en: 'Author of "The Young Leader\'s Handbook" and leadership trainer.',
          om: 'Barreessaa "Kitaaba Hogganaa Dargaggeessa" fi leenjisaa hogganummaa.',
        },
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Sara Mohammed',
        role: {
          en: 'Tech Innovation Consultant',
          om: 'Gorsaa Ogummaa Teeknoolojii',
        },
        bio: {
          en: 'Digital transformation expert working with Ethiopian startups.',
          om: 'Ogeessa jijjiiruu dijitaalaa kan start-upoota Itoophiyaa wajjiin hojjechu.',
        },
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Abebe',
        role: {
          en: 'Career Development Specialist',
          om: 'Ogeessa Guddina Hojii',
        },
        bio: {
          en: 'Career counselor helping youth find their path.',
          om: 'Gorsaa hojii kan dargaggoota karaa isaanii argachuuf gargaaru.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '08:30',
        title: {
          en: 'Registration & Networking Breakfast',
          om: "Galmaa'ii fi Ciree Wal-Baru",
        },
        description: {
          en: 'Check-in and breakfast networking session',
          om: "Galmaa'ii fi ciree wal-baruu",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Opening Remarks & Welcome',
          om: 'Dubbii Banaa fi Nagaa Dhaammachuu',
        },
        description: {
          en: 'Official opening of the conference',
          om: 'Banaa konfiraansii',
        },
      },
      {
        id: '3',
        time: '10:00',
        title: {
          en: 'Keynote: Leadership in the 21st Century',
          om: 'Dubbii Gurguddaa: Hogganummaa Bara 21ffaa',
        },
        description: {
          en: 'Inspiring talk on modern leadership skills',
          om: 'Dubbii kakaasaa kan dandeettii hogganummaa ammayyaa',
        },
      },
      {
        id: '4',
        time: '11:30',
        title: {
          en: 'Workshop: Building Your Brand',
          om: 'Ogbarruu: Brand Kee Ijaaruun',
        },
        description: {
          en: 'Practical session on personal branding',
          om: 'Ogbarruu harkaa qabu kan brand amala keessaa',
        },
      },
      {
        id: '5',
        time: '13:00',
        title: {
          en: 'Lunch Break',
          om: 'Boqonnaa Laachii',
        },
        description: {
          en: 'Networking lunch with mentors',
          om: 'Laachii wal-baruu gorsa wajjiin',
        },
      },
      {
        id: '6',
        time: '14:00',
        title: {
          en: 'Panel: Entrepreneurship in Ethiopia',
          om: 'Mariyaa Daldalaa Itoophiyaa',
        },
        description: {
          en: 'Panel discussion with successful entrepreneurs',
          om: "Mariyaa daldaltoota milkaa'aan wajjiin",
        },
      },
      {
        id: '7',
        time: '15:30',
        title: {
          en: 'Career Guidance Session',
          om: 'Qajeelfama Hojii',
        },
        description: {
          en: 'One-on-one career counseling opportunities',
          om: 'Carraa gorsa hojii tokko-tokkoo',
        },
      },
      {
        id: '8',
        time: '16:00',
        title: {
          en: 'Closing Ceremony',
          om: 'Sirna Cufaa',
        },
        description: {
          en: 'Final remarks and conference closing',
          om: 'Dubbii xumura fi cufaa konfiraansii',
        },
      },
    ],
    logistics: {
      en: 'Free Wi-Fi throughout the venue. Parking available. Meals and refreshments provided. Translation services available in Afaan Oromo and Amharic.',
      om: 'Wi-Fi bilisaa iddoo guutuu. Paarkiin jira. Nyaata fi dhugaatii ni kenname. Tajaajila hiikuu Afaan Oromoo fi Amharaatiin jira.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is there a registration fee?',
          om: "Kaffaltii galmaa'ii jiraa?",
        },
        answer: {
          en: 'Registration is free for youth under 25. Small fee for others.',
          om: "Galmaa'iin dargaggoota umrii 25 gadii bilisa. Kaffaltii xiqqaa namoota biroof.",
        },
      },
      {
        id: '2',
        question: {
          en: 'Will there be certificates?',
          om: 'Sertifikaatiin ni kenname?',
        },
        answer: {
          en: 'Yes, certificates of participation will be provided.',
          om: 'Eeyyee, sertifikaatii hirmaannaa ni kenname.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'UNDP Ethiopia',
        logo: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/undp-ethiopia',
      },
      {
        id: '2',
        name: 'Bishoftu Youth Network',
        logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/byn',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Conference networking session',
          om: 'Wal-baruu konfiraansii',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Keynote speaker presentation',
          om: 'Agarsiisa dubbii gurguddaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Youth participants engaged',
          om: 'Hirmaattota dargaggeessa tajaajilan',
        },
      },
    ],
  },
  {
    id: '4',
    slug: 'charity-food-drive-2026',
    title: {
      en: 'Community Charity Food Drive 2026',
      om: "Walga'ii Nyaataa Arjoomaa Hawaasaa 2026",
    },
    shortDescription: {
      en: 'Supporting families in need across Bishoftu',
      om: 'Maatiilee rakkatan Bishooftuu keessaa gargaaruu',
    },
    description: {
      en: 'Join our community food drive to support families in need. We are collecting non-perishable food items, essential supplies, and monetary donations. Your support can make a difference.',
      om: "Walga'ii nyaataa hawaasaa maatiilee rakkatan gargaaruuf. Nyaata hin badne, meeshaa barbaachisaa fi arjoomaa maallaqaa walitti qabna. Gargaarsi keessan jijjiiruu fiduu danda'a.",
    },
    category: 'charity',
    status: 'completed',
    featured: false,
    date: '2026-05-10',
    startTime: '09:00',
    endTime: '18:00',
    location: {
      venue: {
        en: 'Bishoftu Community Hall',
        om: 'Gamoo Hawaasaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Charity Foundation',
      email: 'charity@bishoftuevents.com',
      phone: '+251 944 444 444',
    },
    host: {
      en: 'Bishoftu Community Services',
      om: 'Tajaajila Hawaasaa Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Meseret Woldemariam',
        role: {
          en: 'Community Outreach Coordinator',
          om: 'Qindeessaa Hawwasa',
        },
        bio: {
          en: 'Leading community outreach programs for over 10 years.',
          om: 'Sagantaa hawwasa kan waggaa 10 ol hoogganuu.',
        },
        image:
          'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Ebise Terefe',
        role: {
          en: 'Community Outreach Coordinator',
          om: 'Qindeessaa Hawwasa',
        },
        bio: {
          en: 'Leading community outreach programs for over 10 years.',
          om: 'Sagantaa hawwasa kan waggaa 10 ol hoogganuu.',
        },
        image:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Aliya Waqoo',
        role: {
          en: 'Community Outreach Coordinator',
          om: 'Qindeessaa Hawwasa',
        },
        bio: {
          en: 'Leading community outreach programs for over 10 years.',
          om: 'Sagantaa hawwasa kan waggaa 10 ol hoogganuu.',
        },
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Worku',
        role: {
          en: 'Charity Program Manager',
          om: 'Qindeessaa Sagantaa Arjoomaa',
        },
        bio: {
          en: 'Managing charity programs with compassion and efficiency.',
          om: 'Sagantaa arjoomaa hawwasa fi qajeelfamaan hoogganuu.',
        },
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Volunteer Briefing',
          om: 'Qajeelfama Tajaajiltootaa',
        },
        description: {
          en: 'Briefing for all volunteers',
          om: 'Qajeelfama tajaajiltoota hundaaf',
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Collection Starts',
          om: 'Walitti Qabuu Jalqaba',
        },
        description: {
          en: 'Begin collecting donations',
          om: 'Arjoomaa walitti qabuu jalqabuu',
        },
      },
      {
        id: '3',
        time: '12:00',
        title: {
          en: 'Packaging & Sorting',
          om: 'Sararaa fi Baasuul',
        },
        description: {
          en: 'Sorting and packaging collected items',
          om: 'Baasuul fi sararaa meeshaalee walitti qabaman',
        },
      },
      {
        id: '4',
        time: '15:00',
        title: {
          en: 'Distribution Phase',
          om: 'Haaloo Kennaa',
        },
        description: {
          en: 'Delivering to families in need',
          om: 'Maatiilee rakkatan geessuu',
        },
      },
    ],
    logistics: {
      en: 'Collection points at all major supermarkets in Bishoftu. Volunteers with vehicles needed for distribution. Donations accepted until 6 PM.',
      om: "Iddoowwan walga'ii supirmaarkitii gurguddaa Bishooftuu hunda. Tajaajiltoota makiina qaban haaloo kennaaf barbaadamu. Arjoomaan hanga sa'a 6 galgala fudhatama.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'What items are being collected?',
          om: 'Meeshaalee akkamitu walitti qabama?',
        },
        answer: {
          en: 'Non-perishable food items, clothing, hygiene products, and monetary donations.',
          om: 'Nyaata hin badne, uffata, meeshaa qulqullinaa fi arjoomaa maallaqaa.',
        },
      },
      {
        id: '2',
        question: {
          en: 'Can I volunteer to help?',
          om: "Tajaajiluu gargaaruu nan danda'aa?",
        },
        answer: {
          en: 'Yes, volunteers are welcome and needed. Please sign up at our registration desk.',
          om: "Eeyyee, tajaajiltoonni baga nagaan dhufanii fi barbaadamu. Maaloo galmaa'ii wiirtuu galmaa'ii keessatti.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Red Cross Society',
        logo: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/redcross',
      },
      {
        id: '2',
        name: 'Bishoftu Business Association',
        logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/bba',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Volunteers sorting donations',
          om: 'Tajaajiltoonni arjoomaa baasuuluu',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Food collection and packaging',
          om: 'Walitti qabuu fi sararaa nyaataa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Community members receiving aid',
          om: 'Miseensota hawaasaa gargaarsa fudhatu',
        },
      },
    ],
  },
  {
    id: '5',
    slug: 'bishoftu-music-festival-2026',
    title: {
      en: 'Bishoftu Music Festival 2026',
      om: 'Ayyaana Muuziqaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'A night of live music and entertainment under the stars',
      om: 'Halkan muuziqaa lubbuu qabu fi bashannana urjii wajjiin',
    },
    description: {
      en: 'Experience an unforgettable night of live music featuring local and national artists. From traditional Oromo rhythms to modern Afro-pop, jazz, and contemporary hits, this festival has something for everyone. Food vendors, art displays, and a vibrant atmosphere.',
      om: 'Halkan muuziqaa lubbuu qabu kan artistoota naannoo fi biyya keessaa of keessaa qabu muuxannoo hin dagatamne argadhu. Sagalee aadaa Oromoo irraa kaasee hanga Afro-pop, jaazii fi muuziqaa ammayyaatti, ayyaanni kun waan namni hunduu fedhu qaba. Daldalaan nyaataa, agarsiisa aartii fi haala bashannanaa.',
    },
    category: 'community',
    status: 'upcoming',
    featured: true,
    date: '2026-08-22',
    startTime: '18:00',
    endTime: '23:59',
    location: {
      venue: {
        en: 'Bishoftu Amphitheater',
        om: 'Amfiiteetira Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Music Collective',
      email: 'music@bishoftuevents.com',
      phone: '+251 955 555 555',
    },
    host: {
      en: 'Bishoftu Arts & Culture Bureau',
      om: 'Biroo Aartii fi Aadaa Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Yonas Kassa',
        role: {
          en: 'Music Director',
          om: 'Akaakuu Muuziqaa',
        },
        bio: {
          en: 'Award-winning music director and composer.',
          om: 'Akaakuu muuziqaa fi barreessaa faalmaan badhaadhe.',
        },
        image:
          'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Hanna Tesfaye',
        role: {
          en: 'Vocalist',
          om: 'Dubbisaa Muuziqaa',
        },
        bio: {
          en: 'Renowned vocalist performing traditional and contemporary music.',
          om: 'Dubbisaa beekamaa kan muuziqaa aadaa fi ammayyaa taphatu.',
        },
        image:
          'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Getachew',
        role: {
          en: 'Jazz Musician',
          om: 'Muuziqaa Jaazii',
        },
        bio: {
          en: 'Jazz musician performing internationally with Ethiopian influences.',
          om: 'Muuziqaa jaazii kan dhiibbaa Itoophiyaa wajjiin addunyaatti taphachaa.',
        },
        image:
          'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Mekdes Wondimu',
        role: {
          en: 'Music Producer',
          om: 'Oomishaa Muuziqaa',
        },
        bio: {
          en: 'Music producer working with emerging Ethiopian artists.',
          om: 'Oomishaa muuziqaa kan artistoota Itoophiyaa haaraa wajjiin hojjechu.',
        },
        image:
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '18:00',
        title: {
          en: 'Doors Open',
          om: 'Balbala Banaa',
        },
        description: {
          en: 'Gates open and pre-show entertainment begins',
          om: 'Balbala banaa fi bashannana duraa jalqaba',
        },
      },
      {
        id: '2',
        time: '19:00',
        title: {
          en: 'Opening Act: Traditional Music',
          om: 'Taphii Banaa: Muuziqaa Aadaa',
        },
        description: {
          en: 'Traditional Oromo music performance',
          om: 'Shubbisa muuziqaa aadaa Oromoo',
        },
      },
      {
        id: '3',
        time: '20:30',
        title: {
          en: 'Main Performance: Afro-pop',
          om: 'Taphii Gurguddaa: Afro-pop',
        },
        description: {
          en: 'Contemporary Afro-pop artists take the stage',
          om: 'Artistoota Afro-pop ammayyaa taphu',
        },
      },
      {
        id: '4',
        time: '22:00',
        title: {
          en: 'Jazz Session',
          om: 'Taphii Jaazii',
        },
        description: {
          en: 'Live jazz performance with Ethiopian influences',
          om: 'Shubbisa jaazii lubbuu qabu kan dhiibbaa Itoophiyaa qabu',
        },
      },
      {
        id: '5',
        time: '23:00',
        title: {
          en: 'Grand Finale',
          om: 'Xumura Gurguddaa',
        },
        description: {
          en: 'Closing performance with all artists',
          om: 'Taphii xumura artistoota hunda wajjiin',
        },
      },
    ],
    logistics: {
      en: 'Food and drinks available on site. VIP seating available. Family-friendly zone. Parking available. Cash and mobile money accepted.',
      om: "Nyaata fi dhugaatii iddoo irratti jira. Siiitii VIP jira. Iddoo maatiif mijaa'aa. Paarkiin jira. Maallaqaa fi maallaqa moobiilii fudhatama.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'What is the ticket price?',
          om: 'Gatii tikiiitii meeqa?',
        },
        answer: {
          en: 'General admission: 200 ETB. VIP: 500 ETB. Tickets available at the gate.',
          om: 'Seenaa waliigalaa: 200 ETB. VIP: 500 ETB. Tiikiitii balbala irratti jira.',
        },
      },
      {
        id: '2',
        question: {
          en: 'Is the event family-friendly?',
          om: "Taateen maatiif mijaa'aa?",
        },
        answer: {
          en: 'Yes, there is a designated family zone with activities for children.',
          om: 'Eeyyee, iddoo maatiif kan hojiiwwan ijoollee qabu jira.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Music Association',
        logo: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ema',
      },
      {
        id: '2',
        name: 'Oromia Media Network',
        logo: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/omn',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Live music performance',
          om: 'Shubbisa muuziqaa lubbuu qabu',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Crowd enjoying the concert',
          om: 'Tuuta ayyaana kabajaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Stage setup and lighting',
          om: 'Qaphxii fi ibsaa',
        },
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Musicians performing',
          om: 'Muuziqaa taphataa',
        },
      },
    ],
  },
  {
    id: '6',
    slug: 'women-entrepreneurship-forum-2026',
    title: {
      en: 'Women in Entrepreneurship Forum 2026',
      om: 'Mariyaa Dubartoota Daldalaa 2026',
    },
    shortDescription: {
      en: 'Empowering women entrepreneurs across Oromia',
      om: 'Dubartoota daldalaa Oromiyaa hunda humneessuu',
    },
    description: {
      en: 'A forum dedicated to empowering women entrepreneurs through mentorship, networking, funding opportunities, and skills development. Connect with successful business leaders and access resources to grow your business.',
      om: "Mariyaa dubartoota daldalaa karaa gorsa, wal-baruu, carraa maallaqaatti argachuun fi guddina dandeettii humneessuuf qophaa'e. Hogganaa daldalaa milkaa'an wajjiin wal qabsiisaa fi qabeenya daldala keessan guddifachuuf argadhaa.",
    },
    category: 'development',
    status: 'upcoming',
    featured: false,
    date: '2026-11-05',
    startTime: '09:00',
    endTime: '17:00',
    location: {
      venue: {
        en: "Bishoftu Women's Center",
        om: 'Wiirtuu Dubartoota Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: "Oromia Women's Network",
      email: 'women@bishoftuevents.com',
      phone: '+251 966 666 666',
    },
    host: {
      en: "Oromia Women's Association",
      om: 'Waldaa Dubartoota Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Meron Tekle',
        role: {
          en: 'Business Strategist',
          om: "Ogeessa Bu'aa Daldalaa",
        },
        bio: {
          en: 'Helping women scale their businesses across Ethiopia with proven strategies.',
          om: "Dubartoota daldala isaanii Itoophiyaa keessatti karaa mirkanaa'een babal'isuuf gargaaruu.",
        },
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Tigist Abebe',
        role: {
          en: 'Finance Expert',
          om: 'Ogeessa Maallaqaa',
        },
        bio: {
          en: 'Investment banker specializing in women-led startups.',
          om: 'Baankii investimentii kan start-upoota dubartootaan hoogganaman irratti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Hanna Tesfaye',
        role: {
          en: 'Marketing Consultant',
          om: 'Gorsaa Gibeessaa',
        },
        bio: {
          en: 'Digital marketing expert working with women entrepreneurs.',
          om: 'Ogeessa gibeessaa dijitaalaa kan dubartoota daldalaa wajjiin hojjechu.',
        },
        image:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Azeb Hailu',
        role: {
          en: 'Women Empowerment Advocate',
          om: 'Waraabessaa Dubartootaa',
        },
        bio: {
          en: "Advocate for women's economic empowerment across Oromia.",
          om: 'Waraabessaa humneessuu dubartootaa Oromiyaa hunda.',
        },
        image:
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Registration & Welcome Tea',
          om: "Galmaa'ii fi Shaayi Nagaa",
        },
        description: {
          en: 'Registration and networking over tea',
          om: "Galmaa'ii fi wal-baruu shaayi irratti",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Opening Keynote',
          om: 'Dubbii Banaa Gurguddaa',
        },
        description: {
          en: 'Inspiring talk on women in business',
          om: 'Dubbii kakaasaa dubartoota daldalaa irratti',
        },
      },
      {
        id: '3',
        time: '10:45',
        title: {
          en: 'Panel: Access to Funding',
          om: 'Mariyaa: Argachuu Maallaqaa',
        },
        description: {
          en: 'Panel discussion on funding opportunities for women entrepreneurs',
          om: 'Mariyaa carraa maallaqaatti argachuu dubartoota daldalaaf',
        },
      },
      {
        id: '4',
        time: '12:30',
        title: {
          en: 'Networking Lunch',
          om: 'Laachii Wal-Baru',
        },
        description: {
          en: 'Lunch with opportunities to connect with other entrepreneurs',
          om: 'Laachii carraa daldaltoota biroo wajjiin wal qabsiisuu',
        },
      },
      {
        id: '5',
        time: '13:30',
        title: {
          en: 'Workshop: Business Plan Development',
          om: 'Ogbarruu: Ijaarsa Karoora Daldalaa',
        },
        description: {
          en: 'Hands-on session to develop your business plan',
          om: 'Ogbarruu harkaa qabu karoora daldalaa keessan ijaaruuf',
        },
      },
      {
        id: '6',
        time: '15:30',
        title: {
          en: 'Mentorship Session',
          om: 'Gorsa',
        },
        description: {
          en: 'One-on-one mentorship with experienced business leaders',
          om: 'Gorsa tokko-tokkoo hogganaa daldalaa muuxannoo qaban wajjiin',
        },
      },
      {
        id: '7',
        time: '16:30',
        title: {
          en: 'Closing Remarks',
          om: 'Dubbii Xumuraa',
        },
        description: {
          en: 'Closing and next steps',
          om: 'Cufaa fi tarkaanfii itti aanu',
        },
      },
    ],
    logistics: {
      en: 'Free parking, Wi-Fi, and materials provided. Translators available. Childcare available on site.',
      om: 'Paarkiin bilisaa, Wi-Fi fi meeshaalee ni kenname. Hiiktoonni jiru. Kunuunsa ijoollee iddoo irratti jira.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is there a fee to attend?',
          om: 'Kaffaltii hirmaachuuf jiraa?',
        },
        answer: {
          en: 'Attendance is free for women entrepreneurs. Small fee for others.',
          om: 'Hirmaachuun dubartoota daldalaaf bilisa. Kaffaltii xiqqaa namoota biroof.',
        },
      },
      {
        id: '2',
        question: {
          en: 'Is childcare available?',
          om: 'Kunuunsa ijoollee jiraa?',
        },
        answer: {
          en: 'Yes, free childcare is available during the event.',
          om: 'Eeyyee, kunuunsa ijoollee bilisaa taatee keessatti jira.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'UN Women Ethiopia',
        logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/unwomen',
      },
      {
        id: '2',
        name: 'Ethiopian Women in Business',
        logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ewb',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Women entrepreneurs networking',
          om: 'Dubartoota daldalaa wal-baruu',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Panel discussion on entrepreneurship',
          om: 'Mariyaa daldalaa irratti',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Workshop participants',
          om: 'Hirmaattota ogbarruu',
        },
      },
    ],
  },
  {
    id: '7',
    slug: 'environmental-conservation-workshop-2026',
    title: {
      en: 'Environmental Conservation Workshop 2026',
      om: 'Ogbarruu Eegumsa Naannoo 2026',
    },
    shortDescription: {
      en: 'Learn about protecting our environment and sustainable practices',
      om: 'Eegumsa naannoo keenyaa fi amala jiraataa ilmaataa',
    },
    description: {
      en: "A hands-on workshop focused on environmental conservation, sustainable practices, tree planting, waste management, and community action to protect Bishoftu's natural resources. Practical sessions and expert guidance.",
      om: "Ogbarruu harkaa qabu kan eegumsa naannoo, amala jiraataa, dhaabbii mukaa, qabduu boba'aa fi tarkaanfii hawaasaa qabeenya uumamaa Bishooftuu eeguuf xiyyeeffate. Ogbarruu harkaa qabu fi qajeelfama ogeessa.",
    },
    category: 'development',
    status: 'ongoing',
    featured: false,
    date: '2026-07-15',
    startTime: '08:00',
    endTime: '12:00',
    location: {
      venue: {
        en: 'Bishoftu Environmental Center',
        om: 'Wiirtuu Naannoo Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Green Bishoftu Initiative',
      email: 'green@bishoftuevents.com',
      phone: '+251 977 777 777',
    },
    host: {
      en: 'Oromia Environment Protection Agency',
      om: 'Aajensii Eegumsa Naannoo Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Fikru Gebre',
        role: {
          en: 'Environmental Engineer',
          om: 'Injinerii Naannoo',
        },
        bio: {
          en: 'Expert in waste management and recycling programs.',
          om: "Ogeessa qabduu boba'aa fi sagantaa irra deebi'uu.",
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Tigist Worku',
        role: {
          en: 'Conservation Biologist',
          om: 'Biologist Eegumsa',
        },
        bio: {
          en: 'Biologist specializing in ecosystem conservation.',
          om: 'Biologist kan eegumsa ekosisteemii keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Alemayehu Desta',
        role: {
          en: 'Sustainability Expert',
          om: 'Ogeessa Jiraataa',
        },
        bio: {
          en: 'Expert in sustainable development practices.',
          om: 'Ogeessa amala guddina jiraataa.',
        },
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Mulugeta Tulu',
        role: {
          en: 'Climate Change Analyst',
          om: 'Qorataa Jijjiiruu Qilleensaa',
        },
        bio: {
          en: 'Climate change analyst working on adaptation strategies.',
          om: 'Qorataa jijjiiruu qilleensaa kan karoora madaqumsaa hojjechu.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '08:00',
        title: {
          en: 'Registration',
          om: "Galmaa'ii",
        },
        description: {
          en: 'Check-in and materials distribution',
          om: "Galmaa'ii fi hiruu meeshaalee",
        },
      },
      {
        id: '2',
        time: '08:30',
        title: {
          en: 'Introduction to Conservation',
          om: 'Seensa Eegumsa',
        },
        description: {
          en: 'Overview of environmental challenges',
          om: 'Ibsa waliigalaa rakkoo naannoo',
        },
      },
      {
        id: '3',
        time: '09:30',
        title: {
          en: 'Tree Planting Session',
          om: 'Ogbarruu Dhaabbii Mukaa',
        },
        description: {
          en: 'Hands-on tree planting activity',
          om: 'Hojii dhaabbii mukaa harkaa qabu',
        },
      },
      {
        id: '4',
        time: '10:30',
        title: {
          en: 'Waste Management Workshop',
          om: "Ogbarruu Qabduu Boba'aa",
        },
        description: {
          en: 'Practical session on waste reduction and recycling',
          om: "Ogbarruu harkaa qabu hir'isa boba'aa fi irra deebi'uu irratti",
        },
      },
      {
        id: '5',
        time: '11:30',
        title: {
          en: 'Community Action Planning',
          om: 'Karoora Tarkaanfii Hawaasaa',
        },
        description: {
          en: 'Plan community-based conservation initiatives',
          om: 'Karoora eegumsa hawaasa arratti',
        },
      },
    ],
    logistics: {
      en: 'Gloves and planting tools provided. Wear comfortable outdoor clothing. Bring water and hat. Free participation.',
      om: "Gaantii fi meeshaa dhaabbii ni kenname. Uffata alaa mijaa'aa uffadhaa. Bishaan fi qolloo qabadhaa. Hirmaannaan bilisa.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is there a cost to participate?',
          om: 'Kaffaltii hirmaachuuf jiraa?',
        },
        answer: {
          en: 'Participation is completely free.',
          om: 'Hirmaannaan guutummaatti bilisa.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Environmental Protection Authority',
        logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eepa',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Tree planting session',
          om: 'Ogbarruu dhaabbii mukaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Environmental workshop in progress',
          om: 'Ogbarruu naannoo hoijechaa jiru',
        },
      },
    ],
  },
  {
    id: '8',
    slug: 'bishoftu-art-craft-expo-2026',
    title: {
      en: 'Bishoftu Art & Craft Expo 2026',
      om: 'Agarsiisa Aartii fi Hojii Harkaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Showcasing the finest local artisans and their work',
      om: 'Ogeessoota hojii harkaa naannoo fi hojii isaanii agarsiisuu',
    },
    description: {
      en: 'An expo featuring the finest local artisans, traditional crafts, handmade jewelry, pottery, textiles, and cultural artifacts from across Oromia. Live demonstrations, workshops, and opportunities to purchase unique handmade items.',
      om: 'Agarsiisa ogeessota hojii harkaa naannoo, hojii aadaa, faaya harkaan tolchamee, fooggaa, huccuu fi meeshaalee aadaa Oromiyaa hunda irraa. Agarsiisa lubbuu qabu, ogbarruu fi carraa meeshaalee harkaan tolfaman addaa bitachuuf.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-12-01',
    startTime: '10:00',
    endTime: '19:00',
    location: {
      venue: {
        en: 'Bishoftu Expo Center',
        om: 'Wiirtuu Agarsiisa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Oromia Artisan Association',
      email: 'artisan@bishoftuevents.com',
      phone: '+251 988 888 888',
    },
    host: {
      en: 'Bishoftu Cultural Heritage Bureau',
      om: 'Biroo Dhaala Aadaa Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Behailu Assefa',
        role: {
          en: 'Master Artisan',
          om: 'Ogeessa Hojii Harkaa',
        },
        bio: {
          en: 'Traditional pottery and textile artisan with 30 years of experience.',
          om: 'Ogeessa fooggaa fi huccuu aadaa kan waggaa 30 tajaajila qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Tigist Ayele',
        role: {
          en: 'Textile Designer',
          om: 'Tolchaa Huccuu',
        },
        bio: {
          en: 'Designer of traditional Ethiopian textiles and fabrics.',
          om: 'Tolchaa huccuu fi uffata aadaa Itoophiyaa.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Gizaw',
        role: {
          en: 'Jewelry Maker',
          om: 'Tolchaa Faayaa',
        },
        bio: {
          en: 'Handmade jewelry maker using traditional techniques.',
          om: 'Tolchaa faayaa harkaan akkaataa aadaatiin.',
        },
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Mekdes Tulu',
        role: {
          en: 'Pottery Artist',
          om: 'Aartii Fooggaa',
        },
        bio: {
          en: 'Pottery artist creating traditional and modern ceramic works.',
          om: 'Aartii fooggaa kan hojii fooggaa aadaa fi ammayyaa tolchu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '10:00',
        title: {
          en: 'Expo Opening',
          om: 'Banaa Agarsiisa',
        },
        description: {
          en: 'Official opening and welcome',
          om: 'Banaa aanaa fi nagaa dhaammachuu',
        },
      },
      {
        id: '2',
        time: '10:30',
        title: {
          en: 'Artisan Demonstrations',
          om: 'Agarsiisa Ogeessotaa',
        },
        description: {
          en: 'Live demonstrations of traditional crafts',
          om: 'Agarsiisa lubbuu qabu hojii harkaa aadaa',
        },
      },
      {
        id: '3',
        time: '12:00',
        title: {
          en: 'Workshop: Pottery Making',
          om: 'Ogbarruu: Fooggaa Tolchuu',
        },
        description: {
          en: 'Hands-on pottery workshop',
          om: 'Ogbarruu harkaa qabu fooggaa tolchuuf',
        },
      },
      {
        id: '4',
        time: '14:00',
        title: {
          en: 'Exhibition Viewing',
          om: 'Ilaalcha Agarsiisa',
        },
        description: {
          en: 'View and purchase artisan items',
          om: 'Meeshaalee ogeessotaa ilaaluu fi bitachuu',
        },
      },
      {
        id: '5',
        time: '17:00',
        title: {
          en: 'Cultural Performances',
          om: 'Shubbisa Aadaa',
        },
        description: {
          en: 'Traditional dance and music performances',
          om: 'Shubbisa fi muuziqaa aadaa',
        },
      },
    ],
    logistics: {
      en: 'Free admission. Workshops have limited spaces - register early. ATM on site. Food court available.',
      om: "Seenaan bilisa. Ogbarruun iddoo xiqqaa qaba - achumaan galmaa'aa. ATM iddoo irratti jira. Iddoo nyaataa jira.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Can I buy items at the expo?',
          om: "Meeshaalee agarsiisa irratti bitachuu nan danda'aa?",
        },
        answer: {
          en: 'Yes, many artisans sell their work directly.',
          om: "Eeyyee, ogeessoonni baay'een hojii isaanii qarqaratti gurguru.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Art and Craft Association',
        logo: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eaca',
      },
      {
        id: '2',
        name: 'Oromia Culture and Tourism Bureau',
        logo: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/octb',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Handmade crafts display',
          om: 'Agarsiisa hojii harkaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional artwork exhibition',
          om: 'Agarsiisa aartii aadaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1535962395954-5397e1d5662a?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Pottery demonstration',
          om: 'Agarsiisa fooggaa',
        },
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional textiles',
          om: 'Huccuu aadaa',
        },
      },
    ],
    /*
    id: '9',
    slug: 'bishoftu-health-and-wellness-fair-2026',
    title: {
      en: 'Bishoftu Health & Wellness Fair 2026',
      om: 'Agarsiisa Fayyaa fi Fayoolee Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Free health screenings, fitness, and wellness advice',
      om: 'Qorumsa fayyaa bilisaa, jabeessaa qaamaa fi gorsa fayoolee',
    },
    description: {
      en: 'A community health fair offering free screenings for blood pressure, blood sugar, vision, and more. Nutrition advice, fitness demonstrations, yoga sessions, and mental health resources for all ages. A holistic approach to community wellness.',
      om: 'Agarsiisa fayyaa hawaasaa kan qorumsa bilisaa dhiiba dhiigaa, sukkaara dhiigaa, ilaalcha fi kkf kenna. Gorsa nyaata, agarsiisa jabeessaa qaamaa, yoga fi qabeenya fayyaa sammuu umriin hundaaf. Karaa guutuu fayoolee hawaasaaf.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-08-05',
    startTime: '08:00',
    endTime: '16:00',
    location: {
      venue: {
        en: 'Bishoftu Health Center',
        om: 'Wiirtuu Fayyaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Health Initiative',
      email: 'health@bishoftuevents.com',
      phone: '+251 999 999 999',
    },
    host: {
      en: 'Bishoftu Health Bureau',
      om: 'Biroo Fayyaa Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Dr. Helen Mesfin',
        role: {
          en: 'Public Health Specialist',
          om: 'Ogeessa Fayyaa Waliigalaa',
        },
        bio: {
          en: 'Medical doctor with focus on community health and preventive care.',
          om: 'Doktora fayyaa kan fayyaa hawaasaa fi kunuunsa ittisan irratti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Yosef Tesema',
        role: {
          en: 'Fitness Trainer',
          om: 'Leenjisaa Jabeessaa Qaamaa',
        },
        bio: {
          en: 'Certified fitness trainer promoting active lifestyle.',
          om: 'Leenjisaa jabeessaa qaamaa sertifikaatii qabuu kan jireenya sochii guddisu.',
        },
        image:
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Dr. Abebech Desta',
        role: {
          en: 'Nutritionist',
          om: 'Ogeessa Nyaata Fayyaa',
        },
        bio: {
          en: 'Nutrition expert helping communities adopt healthy eating habits.',
          om: 'Ogeessa nyaata fayyaa kan hawaasoota amala nyaata fayyaa fudhachuuf gargaaru.',
        },
        image:
          'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Mekonnen',
        role: {
          en: 'Mental Health Counselor',
          om: 'Gorsaa Fayyaa Sammuut',
        },
        bio: {
          en: 'Mental health counselor providing support to the community.',
          om: 'Gorsaa fayyaa sammuut kan gargaarsa hawaasaaf kennu.',
        },
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '08:00',
        title: {
          en: 'Registration and Check-in',
          om: "Galmaa'ii fi Seensa",
        },
        description: {
          en: 'Event registration and health forms',
          om: "Galmaa'ii taatee fi foomii fayyaa",
        },
      },
      {
        id: '2',
        time: '08:30',
        title: {
          en: 'Health Screenings Begin',
          om: 'Qorumsa Fayyaa Jalqaba',
        },
        description: {
          en: 'Free health screenings available all day',
          om: 'Qorumsa fayyaa bilisaa guyyaa guutuu',
        },
      },
      {
        id: '3',
        time: '09:30',
        title: {
          en: 'Fitness Demonstration',
          om: 'Agarsiisa Jabeessaa Qaamaa',
        },
        description: {
          en: 'Live fitness demonstrations for all levels',
          om: 'Agarsiisa jabeessaa qaamaa lubbuu qabu sadarkaa hundaaf',
        },
      },
      {
        id: '4',
        time: '11:00',
        title: {
          en: 'Nutrition Workshop',
          om: 'Ogbarruu Nyaata Fayyaa',
        },
        description: {
          en: 'Healthy eating and nutrition guidance',
          om: 'Qajeelfama nyaata fayyaa fi xinnuu',
        },
      },
      {
        id: '5',
        time: '13:00',
        title: {
          en: 'Mental Health Session',
          om: 'Qajeelfama Fayyaa Sammuut',
        },
        description: {
          en: 'Mental health awareness and resources',
          om: 'Beekumsa fayyaa sammuu fi qabeenya',
        },
      },
      {
        id: '6',
        time: '14:30',
        title: {
          en: 'Yoga Session',
          om: 'Yoga',
        },
        description: {
          en: 'Group yoga for all levels',
          om: 'Yoga gartuu sadarkaa hundaaf',
        },
      },
    ],
    logistics: {
      en: "Free for all community members. Children's activities available. Register on-site. Bring comfortable clothes for fitness activities.",
      om: "Miseensota hawaasaa hundaaf bilisa. Hojiiwwan ijoollee jiru. Iddoo irratti galmaa'aa. Uffata mijaa'aa hojii jabeessaa qaamaaf qabadhaa.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is there a cost?',
          om: 'Kaffaltiin jiraa?',
        },
        answer: {
          en: 'All services are completely free.',
          om: 'Tajaajilli hundi guutummaatti bilisa.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Public Health Institute',
        logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ephi',
      },
      {
        id: '2',
        name: 'WHO Ethiopia',
        logo: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/who-ethiopia',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Health screening station',
          om: 'Iddoo qorumsa fayyaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Fitness exercise session',
          om: 'Ogbarruu jabeessaa qaamaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Yoga session',
          om: 'Yoga',
        },
      },
    ],
    */
  },
  {
    id: '10',
    slug: 'sports-for-peace-tournament-2026',
    title: {
      en: 'Sports for Peace Tournament 2026',
      om: 'Dorgommii Isportii Nagaa 2026',
    },
    shortDescription: {
      en: 'Uniting communities through football, basketball, and athletics',
      om: 'Hawaasota karaa kubbaa miillaa, kubbaa harkaa fi isportii ifa wajjiin walitti hidhuu',
    },
    description: {
      en: 'A multi-sport tournament promoting peace and unity through football, basketball, athletics, and volleyball for youth and community members across Bishoftu. Join us for friendly competition and community spirit.',
      om: "Dorgommii isportii baay'ee kan kubbaa miillaa, kubbaa harkaa, isportii ifa fi volleyboollii dargaggoota fi miseensota hawaasaa Bishooftuu keessatti nagaa fi tokkummaa guddisu. Dorgommii michuutoo fi hawwasa hawaasaaf nu hordofaa.",
    },
    category: 'community',
    status: 'ongoing',
    featured: false,
    date: '2026-06-20',
    startTime: '07:00',
    endTime: '20:00',
    location: {
      venue: {
        en: 'Bishoftu Sports Stadium',
        om: 'Istaadiyaamii Isportii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Sports Council',
      email: 'sports@bishoftuevents.com',
      phone: '+251 900 000 000',
    },
    host: {
      en: 'Bishoftu Youth & Sports Bureau',
      om: 'Biroo Dargaggootaa fi Isportii Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Solomon Ayele',
        role: {
          en: 'Sports Coordinator',
          om: 'Qindeessaa Isportii',
        },
        bio: {
          en: 'Sports development expert promoting peace through athletics.',
          om: 'Ogeessa guddina isportii kan nagaa karaa isportiitiin guddisu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Yonas Desta',
        role: {
          en: 'Football Coach',
          om: 'Leenjisaa Kubbaa Miillaa',
        },
        bio: {
          en: 'Experienced football coach developing youth talent.',
          om: 'Leenjisaa kubbaa miillaa muuxannoo qabu kan dandeettii dargaggoota guddisu.',
        },
        image:
          'https://images.unsplash.com/photo-1519869325930-281384f01fe5?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Bekele Tulu',
        role: {
          en: 'Basketball Referee',
          om: 'Abiddaa Kubbaa Harkaa',
        },
        bio: {
          en: 'Certified basketball referee promoting fair play.',
          om: 'Abiddaa kubbaa harkaa sertifikaatii qabuu kan taphii qajeelaa guddisu.',
        },
        image:
          'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Athletics Coach',
          om: 'Leenjisaa Isportii Ifa',
        },
        bio: {
          en: 'Athletics coach training young runners and jumpers.',
          om: 'Leenjisaa isportii ifa kan fiigtoota fi utaaltota dargaggeessa leenjisu.',
        },
        image:
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '07:00',
        title: {
          en: 'Opening Parade',
          om: 'Saffisa Banaa',
        },
        description: {
          en: 'Teams parade with peace messages',
          om: 'Gartuuwwan ergaa nagaan saffisu',
        },
      },
      {
        id: '2',
        time: '08:00',
        title: {
          en: 'Football Matches Begin',
          om: 'Dorgommii Kubbaa Miillaa Jalqaba',
        },
        description: {
          en: 'Football tournament starts',
          om: 'Dorgommii kubbaa miillaa jalqaba',
        },
      },
      {
        id: '3',
        time: '10:00',
        title: {
          en: 'Basketball Matches',
          om: 'Dorgommii Kubbaa Harkaa',
        },
        description: {
          en: 'Basketball competition',
          om: 'Dorgommii kubbaa harkaa',
        },
      },
      {
        id: '4',
        time: '12:00',
        title: {
          en: 'Athletics Events',
          om: 'Isportii Ifa',
        },
        description: {
          en: 'Track and field events',
          om: 'Dorgommii fi isportii ifa',
        },
      },
      {
        id: '5',
        time: '14:00',
        title: {
          en: 'Volleyball Matches',
          om: 'Dorgommii Volleyboollii',
        },
        description: {
          en: 'Volleyball competition',
          om: 'Dorgommii volleyboollii',
        },
      },
      {
        id: '6',
        time: '17:00',
        title: {
          en: 'Finals',
          om: 'Xumura Dorgommii',
        },
        description: {
          en: 'Final matches and awards ceremony',
          om: 'Dorgommii xumuraa fi sirna badhaasa',
        },
      },
    ],
    logistics: {
      en: 'Free entry for spectators. Registration for teams ongoing. Food and drinks available. First aid station on site. Trophies and medals for winners.',
      om: "Seenaan ilaaltotaaf bilisa. Galmaa'iin gartuuf jira. Nyaata fi dhugaatii jira. Iddoo gargaarsa duraa iddoo irratti jira. Qophii fi baaqqee dorgomtootaaf.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'How do I register a team?',
          om: "Akkami gartuu galmaa'uu danda'a?",
        },
        answer: {
          en: 'Register your team at the Sports Council office or online.',
          om: "Gartuu keessan wiirtuu Isportii yookaan online galmaa'aa.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Football Federation',
        logo: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eff',
      },
      {
        id: '2',
        name: 'Oromia Sports Commission',
        logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/osc',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Football match in action',
          om: 'Dorgommii kubbaa miillaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1519869325930-281384f01fe5?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Basketball competition',
          om: 'Dorgommii kubbaa harkaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1534008855812-5a61e92b48cf?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Athletics event',
          om: 'Isportii ifa',
        },
      },
    ],
  },
  {
    id: '11',
    slug: 'traditional-food-festival-2026',
    title: {
      en: 'Traditional Food Festival 2026',
      om: 'Ayyaana Nyaata Aadaa 2026',
    },
    shortDescription: {
      en: 'Celebrating Oromo cuisine and culinary heritage',
      om: 'Ayyaana nyaata Oromoo fi dhaala haala nyaataa',
    },
    description: {
      en: 'Taste the best of Oromo cuisine with traditional dishes like kitfo, doro wat, ibs, and local breads. Live cooking demonstrations, food competitions, and taste-testing events. A celebration of food, culture, and community.',
      om: "Nyaata Oromoo kan kitaafoo, doroo waa'ii, ibsii fi daabboo naannoo wajjiin dhugaatii. Agarsiisa toonuu lubbuu qabu, dorgommii nyaataa fi dhandhamuu. Ayyaana nyaataa, aadaa fi hawaasaa.",
    },
    category: 'community',
    status: 'upcoming',
    featured: true,
    date: '2026-10-10',
    startTime: '11:00',
    endTime: '21:00',
    location: {
      venue: {
        en: 'Bishoftu Cultural Market',
        om: 'Gabaaya Aadaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Culinary Society',
      email: 'food@bishoftuevents.com',
      phone: '+251 911 222 333',
    },
    host: {
      en: 'Oromia Culinary Arts Association',
      om: 'Waldaa Aartii Nyaataa Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Mulugeta Worku',
        role: {
          en: 'Chef & Food Historian',
          om: 'Chefii fi Hayyuu Nyaataa',
        },
        bio: {
          en: 'Renowned chef preserving traditional Ethiopian cooking techniques.',
          om: 'Chefii beekamaa kan akkaataa toonuu Itoophiyaa aadaa eegu.',
        },
        image:
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Azeb Hailu',
        role: {
          en: 'Food Blogger',
          om: 'Barreessaa Nyaataa',
        },
        bio: {
          en: 'Popular food blogger sharing Ethiopian recipes globally.',
          om: 'Barreessaa nyaataa beekamaa kan fuula aadaa Itoophiyaa addunyaatti qoodu.',
        },
        image:
          'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Tesfaye',
        role: {
          en: 'Master Chef',
          om: 'Chefii Ogeessa',
        },
        bio: {
          en: 'Master chef specializing in traditional Oromo cuisine.',
          om: 'Chefii ogeessa kan nyaata aadaa Oromoo keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Bekele Desta',
        role: {
          en: 'Food Critic',
          om: 'Qorataa Nyaataa',
        },
        bio: {
          en: 'Food critic and writer specializing in Ethiopian cuisine.',
          om: 'Qorataa fi barreessaa nyaataa kan nyaata Itoophiyaa keessatti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '11:00',
        title: {
          en: 'Festival Opening',
          om: 'Banaa Ayyaanaa',
        },
        description: {
          en: 'Welcome and opening ceremony',
          om: 'Nagaa dhaammachuu fi banaa',
        },
      },
      {
        id: '2',
        time: '11:30',
        title: {
          en: 'Cooking Demonstrations',
          om: 'Agarsiisa Toonuu',
        },
        description: {
          en: 'Chefs demonstrate traditional dishes',
          om: 'Chefiin nyaata aadaa agarsiisu',
        },
      },
      {
        id: '3',
        time: '13:00',
        title: {
          en: 'Food Tasting Session',
          om: 'Dhandhamuu Nyaataa',
        },
        description: {
          en: 'Taste a variety of traditional foods',
          om: 'Nyaata aadaa adda addaa dhandhamuu',
        },
      },
      {
        id: '4',
        time: '15:00',
        title: {
          en: 'Cooking Competition',
          om: 'Dorgommii Toonuu',
        },
        description: {
          en: 'Chefs compete in traditional cooking',
          om: 'Chefiin toonuu aadaa irratti dorgomu',
        },
      },
      {
        id: '5',
        time: '18:00',
        title: {
          en: 'Food Market',
          om: 'Gabaaya Nyaataa',
        },
        description: {
          en: 'Purchase local produce and spices',
          om: 'Meeshaalee naannoo fi qubaroo bitachuu',
        },
      },
    ],
    logistics: {
      en: 'Free entry. Food tasting tickets available. Cooking competition open to all chefs. Parking available.',
      om: 'Seenaan bilisa. Tiikiitii dhandhamuu nyaataa jira. Dorgommii toonuu chefii hundaaf banaa. Paarkiin jira.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is there a cost to taste the food?',
          om: 'Kaffaltii nyaata dhandhamuuf jiraa?',
        },
        answer: {
          en: 'Small fee for tasting tickets, or purchase a full meal.',
          om: 'Kaffaltii xiqqaa tiikiitii dhandhamuu, yookaan nyaata guutuu bitadhaa.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Tourism Organization',
        logo: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eto',
      },
      {
        id: '2',
        name: 'Bishoftu Hotel Association',
        logo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/bha',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional food display',
          om: 'Agarsiisa nyaata aadaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Cooking demonstration',
          om: 'Agarsiisa toonuu',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional Ethiopian coffee ceremony',
          om: 'Sirna bunaa Itoophiyaa',
        },
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Local dishes and spices',
          om: 'Nyaata naannoo fi qubaroo',
        },
      },
    ],
  },
  {
    id: '12',
    slug: 'bishoftu-education-expo-2026',
    title: {
      en: 'Bishoftu Education Expo 2026',
      om: 'Agarsiisa Barnootaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Your future starts here - explore educational opportunities',
      om: 'Fuuturaankee asii jalqaba - carraa barnootaa ilaali',
    },
    description: {
      en: 'An education expo connecting students with universities, vocational training centers, scholarship opportunities, and career guidance from across Ethiopia and abroad. Meet with representatives, attend workshops, and plan your future.',
      om: "Agarsiisa barnootaa kan barattoota yunivarsiitii, wiirtuu leenjisa ogummaa, carraa shaakalaa fi qajeelfama hojii Itoophiyaa fi alaa wajjiin wal qabsiisu. Bakka bu'oota wajjiin wal qabsiisaa, ogbarruu hirmaachaa fi fuuturaa keessan karoorfadhaa.",
    },
    category: 'development',
    status: 'upcoming',
    featured: false,
    date: '2026-09-01',
    startTime: '09:00',
    endTime: '17:00',
    location: {
      venue: {
        en: 'Bishoftu Convention Center',
        om: 'Wiirtuu Konfiraansii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Education Network',
      email: 'edu@bishoftuevents.com',
      phone: '+251 922 333 444',
    },
    host: {
      en: 'Bishoftu Education Bureau',
      om: 'Biroo Barnootaa Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Prof. Tsegaye Mamo',
        role: {
          en: 'Education Policy Expert',
          om: 'Ogeessa Qajeelfama Barnootaa',
        },
        bio: {
          en: 'Leading educational reform in Ethiopia with over 25 years of experience.',
          om: 'Qajeelfama barnootaa Itoophiyaa jiran kan waggaa 25 ol tajaajila qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Bethel Tesfaye',
        role: {
          en: 'Scholarship Coordinator',
          om: 'Qindeessaa Shaakalaa',
        },
        bio: {
          en: 'Helping students access international scholarship opportunities.',
          om: 'Barattoota carraa shaakalaa addunyaa argachuuf gargaaruu.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Dr. Mekonnen Tulu',
        role: {
          en: 'University Professor',
          om: 'Piroofeessarii Yunivarsiitii',
        },
        bio: {
          en: 'Professor of education with focus on curriculum development.',
          om: 'Piroofeessarii barnootaa kan karoora barnootaa irratti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Career Counselor',
          om: 'Gorsaa Hojii',
        },
        bio: {
          en: 'Career counselor helping students plan their professional paths.',
          om: 'Gorsaa hojii kan barattoota karaa ogummaa isaanii karoorfachuuf gargaaru.',
        },
        image:
          'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Expo Opening',
          om: 'Banaa Agarsiisa',
        },
        description: {
          en: 'Welcome and opening remarks',
          om: 'Nagaa dhaammachuu fi dubbii banaa',
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'University Exhibitions',
          om: 'Agarsiisa Yunivarsiitii',
        },
        description: {
          en: 'Meet university representatives',
          om: "Bakka bu'oota yunivarsiitii wajjiin wal qabsiisaa",
        },
      },
      {
        id: '3',
        time: '11:00',
        title: {
          en: 'Scholarship Information Session',
          om: 'Qajeelfama Shaakalaa',
        },
        description: {
          en: 'Learn about available scholarships',
          om: "Waa'ee shaakalaa jiran ilmaataa",
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Career Guidance Workshop',
          om: 'Ogbarruu Qajeelfama Hojii',
        },
        description: {
          en: 'Practical guidance for career choices',
          om: 'Qajeelfama harkaa qabu filannoo hojii keessatti',
        },
      },
      {
        id: '5',
        time: '15:00',
        title: {
          en: 'Vocational Training Showcase',
          om: 'Agarsiisa Leenjisa Ogummaa',
        },
        description: {
          en: 'Explore vocational training options',
          om: 'Carraa leenjisa ogummaa ilaali',
        },
      },
      {
        id: '6',
        time: '16:00',
        title: {
          en: 'Networking Session',
          om: 'Wal-Baru',
        },
        description: {
          en: 'Connect with institutions and other students',
          om: 'Iddoowwan barnootaa fi barattoota biroo wajjiin wal qabsiisaa',
        },
      },
    ],
    logistics: {
      en: 'Free for students and educators. Registration recommended. Free Wi-Fi. Lunch available for purchase.',
      om: "Barattootaa fi barattootaa bilisa. Galmaa'iin gorfama. Wi-Fi bilisaa. Laachii bitachuuf jira.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is the expo free for students?',
          om: 'Agarsiisni barattootaaf bilisa?',
        },
        answer: {
          en: 'Yes, admission is completely free for all students.',
          om: 'Eeyyee, seenaan barattoota hundaaf guutummaatti bilisa.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Ministry of Education',
        logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ethiopia-moe',
      },
      {
        id: '2',
        name: 'Addis Ababa University',
        logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b4243?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/aau',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Education expo attendees',
          om: "Dhangala'oota agarsiisa barnootaa",
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1546410531-bb4caa6b4243?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'University representatives booth',
          om: "Iddoo bakka bu'oota yunivarsiitii",
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Workshop session',
          om: 'Ogbarruu',
        },
      },
    ],
  },
  {
    id: '13',
    slug: 'bishoftu-fashion-week-2026',
    title: {
      en: 'Bishoftu Fashion Week 2026',
      om: 'Torbaan Faashinii Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Celebrating Ethiopian fashion and design',
      om: 'Faashinii fi tolcha Itoophiyaa ayyaaneffachuu',
    },
    description: {
      en: 'A week-long celebration of Ethiopian fashion featuring local designers, traditional textile weaving, modern ready-to-wear, and sustainable fashion. Runway shows, exhibitions, and designer meet-and-greets.',
      om: 'Torbaan faashinii Itoophiyaa kan tolchitoota naannoo, fooggaa huccuu aadaa, uffata ammayyaa fi faashinii jiraataa of keessaa qabu. Agarsiisa runway, agarsiisa fi wal-baruu tolchitoota.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-12-10',
    startTime: '10:00',
    endTime: '20:00',
    location: {
      venue: {
        en: 'Bishoftu Design Center',
        om: 'Wiirtuu Tolcha Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Fashion Association',
      email: 'fashion@bishoftuevents.com',
      phone: '+251 922 444 555',
    },
    host: {
      en: 'Ethiopian Fashion Council',
      om: 'Marii Faashinii Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Liya Kebede',
        role: {
          en: 'Fashion Designer',
          om: 'Tolchaa Faashinii',
        },
        bio: {
          en: 'Internationally recognized Ethiopian fashion designer.',
          om: 'Tolchaa faashinii Itoophiyaa addunyaatti beekamu.',
        },
        image:
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Textile Artist',
          om: 'Aartii Huccuu',
        },
        bio: {
          en: 'Textile artist specializing in traditional Ethiopian weaving.',
          om: 'Aartii huccuu kan fooggaa aadaa Itoophiyaa keessatti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Desta',
        role: {
          en: 'Fashion Stylist',
          om: 'Tolchaa Faashinii',
        },
        bio: {
          en: 'Fashion stylist working with top Ethiopian designers.',
          om: 'Tolchaa faashinii kan tolchitoota Itoophiyaa gurguddaa wajjiin hojjechu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Sustainable Fashion Advocate',
          om: 'Waraabessaa Faashinii Jiraataa',
        },
        bio: {
          en: 'Advocate for sustainable and ethical fashion practices.',
          om: 'Waraabessaa amala faashinii jiraataa fi qajeelaa.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '10:00',
        title: {
          en: 'Opening Runway Show',
          om: 'Agarsiisa Runway Banaa',
        },
        description: {
          en: 'Kickoff fashion show with top designers',
          om: 'Agarsiisa faashinii tolchitoota gurguddaa wajjiin',
        },
      },
      {
        id: '2',
        time: '12:00',
        title: {
          en: 'Traditional Textile Exhibition',
          om: 'Agarsiisa Huccuu Aadaa',
        },
        description: {
          en: 'Display of traditional weaving and textiles',
          om: 'Agarsiisa fooggaa fi huccuu aadaa',
        },
      },
      {
        id: '3',
        time: '14:00',
        title: {
          en: 'Designer Workshop',
          om: 'Ogbarruu Tolchaa',
        },
        description: {
          en: 'Learn about fashion design techniques',
          om: 'Akkaataa tolcha faashinii ilmaataa',
        },
      },
      {
        id: '4',
        time: '16:00',
        title: {
          en: 'Sustainable Fashion Panel',
          om: 'Mariyaa Faashinii Jiraataa',
        },
        description: {
          en: 'Discussion on sustainable fashion practices',
          om: 'Mariyaa amala faashinii jiraataa irratti',
        },
      },
      {
        id: '5',
        time: '18:00',
        title: {
          en: 'Designer Meet & Greet',
          om: 'Wal-Baru Tolchitoota',
        },
        description: {
          en: 'Meet and network with featured designers',
          om: 'Tolchitoota argisiifaman wajjiin wal qabsiisaa',
        },
      },
    ],
    logistics: {
      en: 'Tickets available online and at the door. Limited VIP seating. Food and drinks available. Photography allowed.',
      om: 'Tiikiitii online fi balbala irratti jira. Siiitii VIP xiqqaa. Nyaata fi dhugaatii jira. Suuraa fudhachuun ni hayyama.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'How much are tickets?',
          om: 'Gatii tiikiitii meeqa?',
        },
        answer: {
          en: 'General: 300 ETB, VIP: 800 ETB.',
          om: 'Waliigalaa: 300 ETB, VIP: 800 ETB.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Textile Industry',
        logo: 'https://images.unsplash.com/photo-1535962395954-5397e1d5662a?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eti',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1535962395954-5397e1d5662a?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Fashion runway show',
          om: 'Agarsiisa runway faashinii',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional textile display',
          om: 'Agarsiisa huccuu aadaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Designer collection',
          om: 'Walitta tolchaa',
        },
      },
    ],
  },
  {
    id: '14',
    slug: 'tech-innovation-summit-2026',
    title: {
      en: 'Bishoftu Tech Innovation Summit 2026',
      om: 'Marqaa Ogummaa Teeknoolojii Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Where technology meets innovation in Bishoftu',
      om: 'Iddoo teeknoolojii fi ogummaa Bishooftuu keessatti wal qabani',
    },
    description: {
      en: 'A summit bringing together tech innovators, developers, startups, and investors to discuss the future of technology in Ethiopia. Hackathons, keynotes, workshops, and networking opportunities.',
      om: 'Marqaa ogummaa teeknoolojii, geggeessitoota, start-upoota fi investitoota fuuturaa teeknoolojii Itoophiyaa keessatti mari’achuuf walitti qabu. Hackathon, dubbii gurguddaa, ogbarruu fi carraa wal-baruu.',
    },
    category: 'development',
    status: 'upcoming',
    featured: true,
    date: '2026-11-20',
    startTime: '09:00',
    endTime: '18:00',
    location: {
      venue: {
        en: 'Bishoftu Innovation Hub',
        om: 'Wiirtuu Ogummaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Tech Community',
      email: 'tech@bishoftuevents.com',
      phone: '+251 933 555 666',
    },
    host: {
      en: 'Ethiopian Tech Network',
      om: 'Waldaa Teeknoolojii Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Dr. Mekonnen Getachew',
        role: {
          en: 'AI Researcher',
          om: 'Qorataa AI',
        },
        bio: {
          en: 'Leading AI research in Ethiopia with multiple international publications.',
          om: "Qorannaa AI Itoophiyaa keessatti kan barreeffama addunyaa baay'ee qabu.",
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Selam Tesfaye',
        role: {
          en: 'Tech Entrepreneur',
          om: 'Daldalaa Teeknoolojii',
        },
        bio: {
          en: 'Founder of Ethiopian fintech startup.',
          om: 'Qabxii start-up fintech Itoophiyaa.',
        },
        image:
          'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Yohannes Tulu',
        role: {
          en: 'Software Engineer',
          om: 'Injinerii Sagantaa',
        },
        bio: {
          en: 'Senior software engineer leading development teams.',
          om: 'Injinerii sagantaa hangafaa kan gartuuwwan guddinaa hoogganu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Tech Policy Expert',
          om: 'Ogeessa Qajeelfama Teeknoolojii',
        },
        bio: {
          en: 'Expert in technology policy and digital governance.',
          om: 'Ogeessa qajeelfama teeknoolojii fi bulchiinsa dijitaalaa.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Registration & Networking',
          om: "Galmaa'ii fi Wal-Baru",
        },
        description: {
          en: 'Check-in and morning networking',
          om: "Galmaa'ii fi wal-baruu ganama",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Opening Keynote: Future of Tech in Africa',
          om: 'Dubbii Banaa: Fuuturaa Teeknoolojii Afrikaa',
        },
        description: {
          en: 'Inspiring talk on African tech innovation',
          om: 'Dubbii kakaasaa ogummaa teeknoolojii Afrikaa irratti',
        },
      },
      {
        id: '3',
        time: '10:30',
        title: {
          en: 'Panel: Ethiopian Tech Ecosystem',
          om: 'Mariyaa: Teeknoolojii Itoophiyaa',
        },
        description: {
          en: 'State of tech in Ethiopia',
          om: 'Haala teeknoolojii Itoophiyaa',
        },
      },
      {
        id: '4',
        time: '12:00',
        title: {
          en: 'Workshop: AI & Machine Learning',
          om: 'Ogbarruu: AI fi Baruu Makiinaa',
        },
        description: {
          en: 'Introduction to AI applications',
          om: 'Seensa fayyadama AI',
        },
      },
      {
        id: '5',
        time: '13:30',
        title: {
          en: 'Lunch & Networking',
          om: 'Laachii fi Wal-Baru',
        },
        description: {
          en: 'Networking lunch with speakers',
          om: 'Laachii wal-baruu dubbatoo wajjiin',
        },
      },
      {
        id: '6',
        time: '14:30',
        title: {
          en: 'Hackathon Challenge',
          om: 'Dorgommii Hackathon',
        },
        description: {
          en: 'Collaborative coding challenge',
          om: "Dorgommii koodii walta'iinsaan",
        },
      },
      {
        id: '7',
        time: '16:30',
        title: {
          en: 'Startup Pitch Session',
          om: 'Agarsiisa Start-up',
        },
        description: {
          en: 'Startups pitch to investors',
          om: 'Start-upoota investitootaaf agarsiisa',
        },
      },
      {
        id: '8',
        time: '17:30',
        title: {
          en: 'Closing Reception',
          om: 'Gammachuu Cufaa',
        },
        description: {
          en: 'Networking and closing ceremony',
          om: 'Wal-baruu fi cufaa',
        },
      },
    ],
    logistics: {
      en: 'Free Wi-Fi, charging stations, and refreshments provided. Hackathon participants register online in advance. Investor networking session available.',
      om: "Wi-Fi bilisaa, iddoo chaajisuu fi dhugaatii ni kenname. Hirmaattota Hackathon achumaan online galmaa'aa. Wal-baruu investitoota jira.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Can I participate in the hackathon?',
          om: "Hackathon keessatti hirmaachuu nan danda'aa?",
        },
        answer: {
          en: 'Yes, register online before the event with your team.',
          om: "Eeyyee, taatee dura gartuu keessaan online galmaa'aa.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian ICT Development Agency',
        logo: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eictda',
      },
      {
        id: '2',
        name: 'Google Developer Group Ethiopia',
        logo: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/gdg-ethiopia',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Tech innovation summit',
          om: 'Marqaa ogummaa teeknoolojii',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Developers working together',
          om: 'Geggeessitoota waliin hojjechaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Workshop session',
          om: 'Ogbarruu',
        },
      },
    ],
  },
  {
    id: '15',
    slug: 'bishoftu-book-festival-2026',
    title: {
      en: 'Bishoftu Book & Literature Festival 2026',
      om: 'Ayyaana Kitaabaa fi Afaan Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Celebrating Ethiopian literature and authors',
      om: 'Kitaaba fi barreessitoota Itoophiyaa ayyaaneffachuu',
    },
    description: {
      en: "A festival celebrating Ethiopian and Oromo literature featuring author readings, book signings, panel discussions, writing workshops, and children's activities. Connect with your favorite authors and discover new voices.",
      om: 'Ayyaana kitaaba Itoophiyaa fi Oromoo kan dubbisa barreessitoota, malxa kitaabaa, mariyaa, ogbarruu barreessuu fi hojii ijoollee of keessaa qabu. Barreessitoota jaallattan wajjiin wal qabsiisaa fi sagalee haaraa argadhaa.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-07-30',
    startTime: '10:00',
    endTime: '18:00',
    location: {
      venue: {
        en: 'Bishoftu Public Library',
        om: 'Mankabaa Waliigalaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Literary Association',
      email: 'literary@bishoftuevents.com',
      phone: '+251 922 666 777',
    },
    host: {
      en: 'Ethiopian Writers Association',
      om: 'Waldaa Barreessitoota Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Birhanu Yemane',
        role: {
          en: 'Author & Poet',
          om: 'Barreessaa fi Taraa',
        },
        bio: {
          en: 'Award-winning Ethiopian author writing in both Amharic and English.',
          om: 'Barreessaa faalmaan badhaadhuu kan Afaan Amharaa fi Ingliziidhaan barreessu.',
        },
        image:
          'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Dr. Assefa Tolosa',
        role: {
          en: 'Literary Critic',
          om: 'Qorataa Kitaabaa',
        },
        bio: {
          en: 'Professor of literature specializing in Oromo oral traditions.',
          om: 'Piroofeessarii kitaabaa kan aadaa Afaan Oromoo keessatti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Mekdes Tulu',
        role: {
          en: "Children's Author",
          om: 'Barreessaa Ijoollee',
        },
        bio: {
          en: "Author of children's books in Afaan Oromo and Amharic.",
          om: 'Barreessaa kitaaba ijoollee Afaan Oromoo fi Amharaatiin.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Poet',
          om: 'Taraa',
        },
        bio: {
          en: 'Poet writing in Afaan Oromo with published collections.',
          om: 'Taraa Afaan Oromoon barreessu kan walitta maxxanfame qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '10:00',
        title: {
          en: 'Festival Opening',
          om: 'Banaa Ayyaanaa',
        },
        description: {
          en: 'Opening ceremony and welcome',
          om: 'Banaa fi nagaa dhaammachuu',
        },
      },
      {
        id: '2',
        time: '10:30',
        title: {
          en: 'Author Reading: Birhanu Yemane',
          om: 'Dubbisa Barreessaa: Birhanu Yemane',
        },
        description: {
          en: 'Reading from latest work',
          om: 'Barreeffama haaraa irraa dubbisuu',
        },
      },
      {
        id: '3',
        time: '11:30',
        title: {
          en: 'Panel: Oromo Literature Today',
          om: 'Mariyaa: Kitaaba Oromoo Amma',
        },
        description: {
          en: 'Discussion on contemporary Oromo literature',
          om: 'Mariyaa kitaaba Oromoo ammayyaa irratti',
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Writing Workshop',
          om: 'Ogbarruu Barreessuu',
        },
        description: {
          en: 'Practical creative writing workshop',
          om: 'Ogbarruu barreessuu harkaa qabu',
        },
      },
      {
        id: '5',
        time: '14:30',
        title: {
          en: 'Book Signing Session',
          om: 'Malxa Kitaabaa',
        },
        description: {
          en: 'Meet authors and get books signed',
          om: 'Barreessitoota wajjiin wal qabsiisaa fi kitaaba malxiisaa',
        },
      },
      {
        id: '6',
        time: '16:00',
        title: {
          en: "Children's Story Hour",
          om: "Sa'aa Seenaa Ijoollee",
        },
        description: {
          en: 'Storytelling for children',
          om: 'Seenaa ijoolleef',
        },
      },
    ],
    logistics: {
      en: "Free admission. Books available for purchase. Children's activities area. Cafeteria on site.",
      om: 'Seenaan bilisa. Kitaabni bitachuuf jira. Iddoo hojii ijoollee. Kafetiriyaa iddoo irratti.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Are books available in Afaan Oromo?',
          om: 'Kitaabni Afaan Oromoon jiraa?',
        },
        answer: {
          en: 'Yes, many books in Afaan Oromo are available.',
          om: "Eeyyee, kitaabni baay'een Afaan Oromoon jira.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Writers Association',
        logo: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ewa',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Book festival attendees',
          om: "Dhangala'oota ayyaana kitaabaa",
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1506880018603-83d8b434b8e1?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Author reading session',
          om: 'Dubbisa barreessaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Book displays',
          om: 'Agarsiisa kitaabaa',
        },
      },
    ],
  },
  {
    id: '16',
    slug: 'african-film-festival-bishoftu',
    title: {
      en: 'African Film Festival Bishoftu 2026',
      om: 'Ayyaana Fiilmii Afrikaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Celebrating African cinema and storytelling',
      om: 'Fiilmii Afrikaa fi seenaafuu ayyaaneffachuu',
    },
    description: {
      en: 'A film festival showcasing the best of African cinema with screenings, filmmaker Q&As, workshops, and networking. Featuring films from across the continent including Ethiopia, Nigeria, Kenya, and South Africa.',
      om: 'Ayyaana fiilmii kan fiilmii Afrikaa isa gaarii agarsiisu kan agarsiisa fiilmii, gaaffii fi deebii fiilmii tolchitoota, ogbarruu fi wal-baruu of keessaa qabu. Fiilmii Itoophiyaa, Naayijeeriyaa, Kiiniyaa fi Afrikaa Kibbaa keessaa argisiisa.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-08-15',
    startTime: '10:00',
    endTime: '22:00',
    location: {
      venue: {
        en: 'Bishoftu Film Center',
        om: 'Wiirtuu Fiilmii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Film Society',
      email: 'film@bishoftuevents.com',
      phone: '+251 944 777 888',
    },
    host: {
      en: 'Ethiopian Film Association',
      om: 'Waldaa Fiilmii Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Binyam Berhanu',
        role: {
          en: 'Filmmaker',
          om: 'Tolchaa Fiilmii',
        },
        bio: {
          en: 'Award-winning Ethiopian filmmaker with works shown internationally.',
          om: 'Tolchaa fiilmii Itoophiyaa faalmaan badhaadhuu kan hojii addunyaatti argisiifame.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Documentary Filmmaker',
          om: 'Tolchaa Fiilmii Dokumantarii',
        },
        bio: {
          en: 'Documentary filmmaker telling Ethiopian stories.',
          om: 'Tolchaa fiilmii dokumantarii kan seenaa Itoophiyaa ibsu.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Screenwriter',
          om: 'Barreessaa Fiilmii',
        },
        bio: {
          en: 'Screenwriter for award-winning African films.',
          om: 'Barreessaa fiilmii kan fiilmii Afrikaa faalmaan badhaadhaniif.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Film Critic',
          om: 'Qorataa Fiilmii',
        },
        bio: {
          en: 'Film critic and writer on African cinema.',
          om: 'Qorataa fi barreessaa fiilmii Afrikaa.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '10:00',
        title: {
          en: 'Opening Film Screening',
          om: 'Agarsiisa Fiilmii Banaa',
        },
        description: {
          en: 'Screening of opening film',
          om: 'Agarsiisa fiilmii banaa',
        },
      },
      {
        id: '2',
        time: '12:00',
        title: {
          en: 'Filmmaker Q&A Session',
          om: 'Gaaffii fi Deebii Tolchitoota',
        },
        description: {
          en: 'Q&A with featured filmmakers',
          om: 'Gaaffii fi deebii tolchitoota argisiifaman',
        },
      },
      {
        id: '3',
        time: '14:00',
        title: {
          en: 'Documentary Showcase',
          om: 'Agarsiisa Dokumantarii',
        },
        description: {
          en: 'Documentary films from across Africa',
          om: 'Fiilmii dokumantarii Afrikaa hunda irraa',
        },
      },
      {
        id: '4',
        time: '16:00',
        title: {
          en: 'Film Production Workshop',
          om: 'Ogbarruu Tolcha Fiilmii',
        },
        description: {
          en: 'Learn about film production',
          om: "Waa'ee tolcha fiilmii ilmaataa",
        },
      },
      {
        id: '5',
        time: '18:00',
        title: {
          en: 'Feature Film Screening',
          om: 'Agarsiisa Fiilmii Gurguddaa',
        },
        description: {
          en: 'Main feature film of the day',
          om: 'Fiilmii gurguddaa guyyaa',
        },
      },
      {
        id: '6',
        time: '20:00',
        title: {
          en: 'Networking Reception',
          om: 'Gammachuu Wal-Baru',
        },
        description: {
          en: 'Networking with filmmakers and film lovers',
          om: 'Wal-baruu tolchitoota fi jaalattota fiilmii wajjiin',
        },
      },
    ],
    logistics: {
      en: 'Tickets available at the venue. Student discounts available. Subtitles in English and French. Cafeteria on site.',
      om: "Tiikiitii iddoo irratti jira. Hir'isa barattootaaf jira. Galmee Afaan Inglizi fi Faransaayiin. Kafetiriyaa iddoo irratti.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Are films subtitled?',
          om: 'Fiilmii galmee qabaa?',
        },
        answer: {
          en: 'Yes, all films have English subtitles.',
          om: 'Eeyyee, fiilmii hundi galmee Afaan Inglizii qaba.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Film Commission',
        logo: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/efc',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Film screening at the festival',
          om: 'Agarsiisa fiilmii ayyaana irratti',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Cinema audience',
          om: "Dhangala'oota fiilmii",
        },
      },
    ],
  },
  {
    id: '17',
    slug: 'bishoftu-agriculture-expo-2026',
    title: {
      en: 'Bishoftu Agriculture & Farming Expo 2026',
      om: 'Agarsiisa Qonnaa fi Oomisha Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Showcasing modern farming techniques and agribusiness',
      om: 'Akkaataa qonnaa ammayyaa fi daldala qonnaa agarsiisuu',
    },
    description: {
      en: 'An expo for farmers, agribusiness professionals, and food producers showcasing modern farming techniques, irrigation systems, seed varieties, and agricultural technology. Seminars and networking opportunities.',
      om: 'Agarsiisa qonnaattota, ogeessota daldala qonnaa fi oomishtoota nyaataaf kan akkaataa qonnaa ammayyaa, sirna irrigation, gosa sanyii fi teeknoolojii qonnaa agarsiisu. Samaaraa fi carraa wal-baruu.',
    },
    category: 'development',
    status: 'upcoming',
    featured: false,
    date: '2026-09-25',
    startTime: '09:00',
    endTime: '17:00',
    location: {
      venue: {
        en: 'Bishoftu Agricultural Center',
        om: 'Wiirtuu Qonnaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Oromia Agricultural Association',
      email: 'agri@bishoftuevents.com',
      phone: '+251 955 888 999',
    },
    host: {
      en: 'Oromia Agriculture Bureau',
      om: 'Biroo Qonnaa Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Tolera Fikre',
        role: {
          en: 'Agricultural Scientist',
          om: 'Saayintistii Qonnaa',
        },
        bio: {
          en: 'Research scientist in sustainable farming practices.',
          om: 'Saayintistii qorannoo qonnaa jiraataa keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Agribusiness Consultant',
          om: 'Gorsaa Daldala Qonnaa',
        },
        bio: {
          en: 'Consultant helping farmers grow their agribusiness.',
          om: 'Gorsaa kan qonnaattota daldala qonnaa isaanii guddifachuuf gargaaru.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Desta',
        role: {
          en: 'Irrigation Specialist',
          om: 'Ogeessa Irrigation',
        },
        bio: {
          en: 'Expert in irrigation systems and water management.',
          om: 'Ogeessa sirna irrigation fi bulchiinsa bishaanii.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Seed Technology Expert',
          om: 'Ogeessa Teeknoolojii Sanyii',
        },
        bio: {
          en: 'Expert in seed varieties and crop improvement.',
          om: "Ogeessa gosa sanyii fi fooyya'iinsa oomisha keessatti.",
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Expo Opening',
          om: 'Banaa Agarsiisa',
        },
        description: {
          en: 'Opening ceremony and welcome',
          om: 'Banaa fi nagaa dhaammachuu',
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Modern Farming Techniques Seminar',
          om: 'Samaaraa Akkaataa Qonnaa Ammayyaa',
        },
        description: {
          en: 'Seminar on modern farming methods',
          om: 'Samaaraa akkaataa qonnaa ammayyaa irratti',
        },
      },
      {
        id: '3',
        time: '11:00',
        title: {
          en: 'Irrigation Systems Exhibition',
          om: 'Agarsiisa Sirna Irrigation',
        },
        description: {
          en: 'Latest irrigation technology',
          om: 'Teeknoolojii irrigation haaraa',
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Seed Varieties Showcase',
          om: 'Agarsiisa Gosa Sanyii',
        },
        description: {
          en: 'Different seed varieties for crops',
          om: 'Gosa sanyii oomisha adda addaa',
        },
      },
      {
        id: '5',
        time: '15:00',
        title: {
          en: 'Agribusiness Networking',
          om: 'Wal-Baru Daldala Qonnaa',
        },
        description: {
          en: 'Connect with agribusiness professionals',
          om: 'Ogeessota daldala qonnaa wajjiin wal qabsiisaa',
        },
      },
    ],
    logistics: {
      en: 'Free for farmers. Registration required. Seminars in Afaan Oromo and English.',
      om: "Qonnaattotaaf bilisa. Galmaa'iin barbaachisa. Samaaraan Afaan Oromoo fi Ingliziidhaan.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is this expo only for commercial farmers?',
          om: 'Agarsiisni kun qonnaattota daldalaa qofaaf?',
        },
        answer: {
          en: 'No, all farmers and agribusiness professionals are welcome.',
          om: 'Lakki, qonnaattotaa fi ogeessota daldala qonnaa hundi baga nagaan dhufan.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Agricultural Research Institute',
        logo: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eari',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Agriculture expo displays',
          om: 'Agarsiisa qonnaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1574943320219-553eb213f72a?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Farming equipment exhibition',
          om: 'Agarsiisa meeshaa qonnaa',
        },
      },
    ],
  },
  {
    id: '18',
    slug: 'bishoftu-coffee-ceremony-festival',
    title: {
      en: 'Bishoftu Coffee Ceremony Festival 2026',
      om: 'Ayyaana Sirna Bunaa Bishooftuu 2026',
    },
    shortDescription: {
      en: "Celebrating Ethiopia's coffee culture and traditions",
      om: 'Aadaa fi dhaala bunaa Itoophiyaa ayyaaneffachuu',
    },
    description: {
      en: 'A festival celebrating Ethiopian coffee culture with traditional coffee ceremonies, coffee tasting, roasting demonstrations, cultural performances, and workshops. Experience the full journey from bean to cup.',
      om: 'Ayyaana aadaa bunaa Itoophiyaa kan sirna bunaa aadaa, dhandhamuu bunaa, agarsiisa qaalaa, shubbisa aadaa fi ogbarruu of keessaa qabu. Imimna guutuu sanyii irraa hanga baquutti muuxannoo.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-11-15',
    startTime: '09:00',
    endTime: '20:00',
    location: {
      venue: {
        en: 'Bishoftu Cultural Village',
        om: 'Gandaa Aadaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Coffee Society',
      email: 'coffee@bishoftuevents.com',
      phone: '+251 966 999 000',
    },
    host: {
      en: 'Ethiopian Coffee Association',
      om: 'Waldaa Bunaa Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Ato Gizachew Tulu',
        role: {
          en: 'Coffee Master',
          om: 'Ogeessa Bunaa',
        },
        bio: {
          en: 'Master coffee roaster with 20 years of experience.',
          om: 'Ogeessa qaalaa bunaa kan waggaa 20 tajaajila qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Coffee Expert',
          om: 'Ogeessa Bunaa',
        },
        bio: {
          en: 'Coffee expert specializing in Ethiopian coffee varieties.',
          om: 'Ogeessa bunaa kan gosa bunaa Itoophiyaa keessatti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Coffee Culture Educator',
          om: 'Barsiisaa Aadaa Bunaa',
        },
        bio: {
          en: 'Educator teaching about coffee culture and traditions.',
          om: 'Barsiisaa kan aadaa fi dhaala bunaa barsiisu.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Coffee Roaster',
          om: 'Qaalaa Bunaa',
        },
        bio: {
          en: 'Professional coffee roaster with international experience.',
          om: 'Qaalaa bunaa ogeessa kan muuxannoo addunyaa qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Opening Coffee Ceremony',
          om: 'Sirna Bunaa Banaa',
        },
        description: {
          en: 'Traditional coffee ceremony to open the festival',
          om: 'Sirna bunaa aadaa ayyaana banaaf',
        },
      },
      {
        id: '2',
        time: '10:00',
        title: {
          en: 'Coffee Tasting Session',
          om: 'Dhandhamuu Bunaa',
        },
        description: {
          en: 'Taste different Ethiopian coffee varieties',
          om: 'Bunaa Itoophiyaa gosa adda addaa dhandhamuu',
        },
      },
      {
        id: '3',
        time: '12:00',
        title: {
          en: 'Roasting Demonstration',
          om: 'Agarsiisa Qaalaa',
        },
        description: {
          en: 'Live coffee roasting demonstration',
          om: 'Agarsiisa qaalaa bunaa lubbuu qabu',
        },
      },
      {
        id: '4',
        time: '14:00',
        title: {
          en: 'Cultural Performances',
          om: 'Shubbisa Aadaa',
        },
        description: {
          en: 'Traditional music and dance performances',
          om: 'Muuziqaa fi shubbisa aadaa',
        },
      },
      {
        id: '5',
        time: '16:00',
        title: {
          en: 'Coffee Brewing Workshop',
          om: 'Ogbarruu Bunaa Tolchuu',
        },
        description: {
          en: 'Learn different coffee brewing methods',
          om: 'Akkaataa bunaa tolchuu adda addaa ilmaataa',
        },
      },
      {
        id: '6',
        time: '18:00',
        title: {
          en: 'Coffee Market & Shopping',
          om: 'Gabaaya Bunaa fi Daldala',
        },
        description: {
          en: 'Purchase fresh coffee beans and equipment',
          om: 'Bunaa haaraa fi meeshaa bitachuu',
        },
      },
    ],
    logistics: {
      en: 'Free entry. Coffee tasting tickets available for purchase. Traditional dress encouraged. Parking available.',
      om: 'Seenaan bilisa. Tiikiitii dhandhamuu bunaa bitachuuf jira. Uffata aadaa gorfama. Paarkiin jira.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Can I buy coffee beans at the festival?',
          om: "Bunaa sanyii ayyaana irratti bitachuu nan danda'aa?",
        },
        answer: {
          en: 'Yes, fresh coffee beans will be available for purchase.',
          om: 'Eeyyee, bunaa sanyii haaraa bitachuuf jira.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Coffee Exporters Association',
        logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ecea',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional coffee ceremony',
          om: 'Sirna bunaa aadaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Coffee roasting demonstration',
          om: 'Agarsiisa qaalaa bunaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Coffee tasting',
          om: 'Dhandhamuu bunaa',
        },
      },
    ],
  },
  {
    id: '19',
    slug: 'ethiopian-new-year-celebration-2017',
    title: {
      en: 'Enkutatash - Ethiopian New Year Celebration',
      om: 'Enkutataash - Ayyaana Bara Haaraa Itoophiyaa',
    },
    shortDescription: {
      en: 'Celebrate Ethiopian New Year 2017 with joy and tradition',
      om: 'Bara Haaraa Itoophiyaa 2017 gammachuu fi aadaadhaan ayyaaneffachuu',
    },
    description: {
      en: 'Join us for Enkutatash, the Ethiopian New Year. Celebrate with traditional music, dance, feasting, and the famous celebration of Meskerem. A day of joy, family, and community spirit.',
      om: 'Enkutataash, bara haaraa Itoophiyaa nu hordofaa. Muuziqaa aadaa, shubbisa, ciree fi ayyaana beekamaa Meskerem wajjiin ayyaaneffadhaa. Guyyaa gammachuu, maatii fi hawwasa.',
    },
    category: 'community',
    status: 'upcoming',
    featured: true,
    date: '2026-09-11',
    startTime: '10:00',
    endTime: '23:00',
    location: {
      venue: {
        en: 'Bishoftu City Square',
        om: 'Wiirtuu Magaalaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu City Administration',
      email: 'city@bishoftuevents.com',
      phone: '+251 911 000 000',
    },
    host: {
      en: 'Bishoftu City Council',
      om: 'Marii Magaalaa Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Mayor Tesfaye Legesse',
        role: {
          en: 'City Mayor',
          om: 'Abbaa Magaalaa',
        },
        bio: {
          en: 'Mayor of Bishoftu City.',
          om: 'Abbaa magaalaa Bishooftuu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Bishoftu Cultural Leader',
        role: {
          en: 'Cultural Leader',
          om: 'Hogganaa Aadaa',
        },
        bio: {
          en: 'Leader of cultural activities in Bishoftu.',
          om: 'Hogganaa hojii aadaa Bishooftuu.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Mekdes Tulu',
        role: {
          en: 'Community Organizer',
          om: 'Qindeessaa Hawaasaa',
        },
        bio: {
          en: 'Organizer of community celebrations and events.',
          om: 'Qindeessaa ayyaana fi taatee hawaasaa.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Traditional Music Coordinator',
          om: 'Qindeessaa Muuziqaa Aadaa',
        },
        bio: {
          en: 'Coordinator of traditional music and dance performances.',
          om: 'Qindeessaa shubbisa muuziqaa fi shubbisaa aadaa.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '10:00',
        title: {
          en: 'New Year Parade',
          om: 'Saffisa Bara Haaraa',
        },
        description: {
          en: 'City-wide parade with cultural groups',
          om: 'Saffisa magaalaa guutuu gartuuwwan aadaa wajjiin',
        },
      },
      {
        id: '2',
        time: '12:00',
        title: {
          en: 'Traditional Music Performances',
          om: 'Shubbisa Muuziqaa Aadaa',
        },
        description: {
          en: 'Live performances by traditional musicians',
          om: 'Shubbisa lubbuu qabu muuziqaa aadaa',
        },
      },
      {
        id: '3',
        time: '14:00',
        title: {
          en: 'Cultural Dance Showcase',
          om: 'Agarsiisa Shubbisaa Aadaa',
        },
        description: {
          en: 'Traditional dance performances',
          om: 'Shubbisa aadaa',
        },
      },
      {
        id: '4',
        time: '17:00',
        title: {
          en: 'Grand Feast',
          om: 'Ciree Gurguddaa',
        },
        description: {
          en: 'Traditional Ethiopian feast for all',
          om: 'Ciree aadaa Itoophiyaa hundaaf',
        },
      },
      {
        id: '5',
        time: '19:00',
        title: {
          en: 'Fireworks Display',
          om: 'Agarsiisa Bembii',
        },
        description: {
          en: 'Spectacular fireworks to celebrate the new year',
          om: 'Bembii miidhagaa bara haaraa ayyaaneffachuuf',
        },
      },
    ],
    logistics: {
      en: 'Free for all. Bring your family and friends. Food and drinks available. Public transportation recommended.',
      om: 'Hundaaf bilisa. Maatii fi michoota keessan fiduu. Nyaata fi dhugaatii jira. Geejjiba waliigalaa gorfama.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is there parking available?',
          om: 'Paarkiin jiraa?',
        },
        answer: {
          en: 'Limited parking available. Use public transportation.',
          om: 'Paarkiin xiqqaa jira. Geejjiba waliigalaa fayyadamaa.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Oromia Culture and Tourism Bureau',
        logo: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/octb',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Enkutatash celebration',
          om: 'Ayyaana Enkutataash',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Fireworks display',
          om: 'Agarsiisa bem bii',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Cultural parade',
          om: 'Saffisa aadaa',
        },
      },
    ],
  },
  {
    id: '20',
    slug: 'bishoftu-investment-forum-2026',
    title: {
      en: 'Bishoftu Investment & Business Forum 2026',
      om: 'Mariyaa Investimenti fi Daldalaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Connecting investors with opportunities in Oromia',
      om: 'Investitoota carraa Oromiyaa wajjiin wal qabsiisuu',
    },
    description: {
      en: 'A forum connecting local and international investors with business opportunities in Oromia. Featuring government officials, business leaders, and investment opportunities in agriculture, manufacturing, tourism, and technology sectors.',
      om: 'Mariyaa investitoota naannoo fi addunyaa carraa daldalaa Oromiyaa wajjiin wal qabsiisu. Qondaalota mootummaa, hogganaa daldalaa fi carraa investimenti qonnaa, oomisha, turizimiifi teeknoolojii keessatti.',
    },
    category: 'development',
    status: 'upcoming',
    featured: false,
    date: '2026-10-30',
    startTime: '09:00',
    endTime: '17:00',
    location: {
      venue: {
        en: 'Bishoftu International Conference Center',
        om: 'Wiirtuu Konfiraansii Idil-Aaddunyaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Oromia Investment Commission',
      email: 'invest@bishoftuevents.com',
      phone: '+251 922 111 222',
    },
    host: {
      en: 'Oromia Government',
      om: 'Mootummaa Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'H.E. Dr. Fikru Tulu',
        role: {
          en: 'Investment Minister',
          om: 'Ministira Investimenti',
        },
        bio: {
          en: 'Minister of Investment for Oromia Region.',
          om: 'Ministira Investimenti Naannoo Oromiyaa.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Abebech Desta',
        role: {
          en: 'CEO of Investment Bank',
          om: 'CEO Baankii Investimenti',
        },
        bio: {
          en: 'Leading investment banker in Ethiopia.',
          om: 'Baankii investimenti Itoophiyaa keessatti hoogganaa.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Getachew',
        role: {
          en: 'Business Development Expert',
          om: 'Ogeessa Guddina Daldalaa',
        },
        bio: {
          en: 'Expert in business development and investment strategy.',
          om: 'Ogeessa guddina daldalaa fi karoora investimenti.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Investment Analyst',
          om: 'Qorataa Investimenti',
        },
        bio: {
          en: 'Investment analyst specializing in emerging markets.',
          om: 'Qorataa investimenti kan gabaa haaraa keessatti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Registration & Welcome',
          om: "Galmaa'ii fi Nagaa Dhaammachuu",
        },
        description: {
          en: 'Registration and welcome coffee',
          om: "Galmaa'ii fi bunaa nagaa",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Investment Opportunities in Oromia',
          om: 'Carraa Investimenti Oromiyaa',
        },
        description: {
          en: 'Government presentation on investment opportunities',
          om: 'Agarsiisa mootummaa carraa investimenti irratti',
        },
      },
      {
        id: '3',
        time: '11:00',
        title: {
          en: 'Panel: Doing Business in Ethiopia',
          om: 'Mariyaa: Daldala Itoophiyaa Keessatti',
        },
        description: {
          en: 'Panel discussion on business environment',
          om: 'Mariyaa haala daldalaa irratti',
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Networking Lunch',
          om: 'Laachii Wal-Baru',
        },
        description: {
          en: 'Lunch with investors and government officials',
          om: 'Laachii investitootaa fi qondaalota mootummaa wajjiin',
        },
      },
      {
        id: '5',
        time: '14:30',
        title: {
          en: 'Breakout: Agriculture Investment',
          om: 'Mariyaa: Investimenti Qonnaa',
        },
        description: {
          en: 'Investment opportunities in agriculture',
          om: 'Carraa investimenti qonnaa',
        },
      },
      {
        id: '6',
        time: '15:30',
        title: {
          en: 'Breakout: Technology & Innovation',
          om: 'Mariyaa: Teeknoolojii fi Ogummaa',
        },
        description: {
          en: 'Investment opportunities in tech sector',
          om: 'Carraa investimenti teeknoolojii',
        },
      },
      {
        id: '7',
        time: '16:30',
        title: {
          en: 'Closing & Next Steps',
          om: 'Cufaa fi Tarkaanfii Itti Aanu',
        },
        description: {
          en: 'Closing remarks and follow-up plan',
          om: 'Dubbii xumuraa fi karoora itti aanuu',
        },
      },
    ],
    logistics: {
      en: 'By invitation only. Register online for attendance. Business attire required. Translation services available.',
      om: "Afeera qofa. Online galmaa'uu. Uffata daldalaa barbaachisa. Tajaajila hiikuu jira.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Who should attend this forum?',
          om: 'Eenyutu mariyaa kana hirmaachuu qaba?',
        },
        answer: {
          en: 'Investors, business leaders, entrepreneurs, and government officials.',
          om: 'Investitoota, hogganaa daldalaa, daldaltoota fi qondaalota mootummaa.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Investment Commission',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eic',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Investment forum session',
          om: 'Mariyaa investimenti',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Investors networking',
          om: 'Wal-baruu investitootaa',
        },
      },
    ],
  },
  {
    id: '21',
    slug: 'bishoftu-marathon-2026',
    title: {
      en: 'Bishoftu International Marathon 2026',
      om: 'Maratonii Idil-Aaddunyaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Run with the world in Bishoftu',
      om: 'Addunyaa wajjiin Bishooftuu keessatti fiiguu',
    },
    description: {
      en: 'The Bishoftu International Marathon brings together runners from across the world. Featuring full marathon, half marathon, 10K, and 5K races. A celebration of health, fitness, and community spirit.',
      om: 'Maratonii Idil-Aaddunyaa Bishooftuu fiigtoota addunyaa hunda irraa walitti qaba. Dorgommii maratonii guutuu, maratonii walakkaa, 10K fi 5K of keessaa qaba. Ayyaana fayyaa, jabeessaa qaamaa fi hawwasa hawaasaa.',
    },
    category: 'community',
    status: 'upcoming',
    featured: true,
    date: '2026-11-28',
    startTime: '06:00',
    endTime: '14:00',
    location: {
      venue: {
        en: 'Bishoftu Sports Complex',
        om: 'Wiirtuu Isportii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Marathon Committee',
      email: 'marathon@bishoftuevents.com',
      phone: '+251 977 111 222',
    },
    host: {
      en: 'Oromia Athletics Federation',
      om: 'Federaashinii Isportii Ifa Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Kenenisa Bekele',
        role: {
          en: 'World Champion Athlete',
          om: 'Isportii ifa addunyaa',
        },
        bio: {
          en: 'Olympic champion and world record holder.',
          om: 'Dorgommaa Olompikii fi qabxii addunyaa.',
        },
        image:
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Tigist Assefa',
        role: {
          en: 'Elite Athlete',
          om: 'Isportii Ifa Ogeessa',
        },
        bio: {
          en: 'Elite athlete with multiple marathon wins.',
          om: "Isportii ifa ogeessa kan maratonii baay'ee mo'ate.",
        },
        image:
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Desta',
        role: {
          en: 'Marathon Organizer',
          om: 'Qindeessaa Maratonii',
        },
        bio: {
          en: 'Organizer of international marathons in Ethiopia.',
          om: 'Qindeessaa maratonii idil-addunyaa Itoophiyaa keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Mekdes Tulu',
        role: {
          en: 'Sports Medicine Specialist',
          om: 'Ogeessa Fayyaa Isportii',
        },
        bio: {
          en: 'Sports medicine doctor providing care for athletes.',
          om: 'Doktora fayyaa isportii kan kunuunsa isporttootaaf kennu.',
        },
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '06:00',
        title: {
          en: 'Marathon Start - Full Marathon',
          om: 'Maratonii Guutuu Jalqaba',
        },
        description: {
          en: 'Full marathon race begins',
          om: 'Dorgommii maratonii guutuu jalqaba',
        },
      },
      {
        id: '2',
        time: '06:30',
        title: {
          en: 'Half Marathon Start',
          om: 'Maratonii Walakkaa Jalqaba',
        },
        description: {
          en: 'Half marathon race begins',
          om: 'Dorgommii maratonii walakkaa jalqaba',
        },
      },
      {
        id: '3',
        time: '07:00',
        title: {
          en: '10K Race Start',
          om: 'Dorgommii 10K Jalqaba',
        },
        description: {
          en: '10K race begins',
          om: 'Dorgommii 10K jalqaba',
        },
      },
      {
        id: '4',
        time: '07:30',
        title: {
          en: '5K Fun Run Start',
          om: 'Fiiguu 5K Bashannanaa Jalqaba',
        },
        description: {
          en: '5K fun run begins',
          om: 'Fiiguu 5K bashannanaa jalqaba',
        },
      },
      {
        id: '5',
        time: '10:00',
        title: {
          en: 'Award Ceremony',
          om: 'Sirna Badhaasa',
        },
        description: {
          en: 'Awards for winners of all races',
          om: 'Badhaasa dorgomtoota hundaaf',
        },
      },
      {
        id: '6',
        time: '12:00',
        title: {
          en: 'Community Celebration',
          om: 'Ayyaana Hawaasaa',
        },
        description: {
          en: 'Celebration with food and music',
          om: 'Ayyaana nyaataa fi muuziqaa wajjiin',
        },
      },
    ],
    logistics: {
      en: 'Registration required. Water stations along the route. Medical support available. Shuttle service from city center.',
      om: "Galmaa'iin barbaachisa. Iddoowwan bishaanii karaa irratti. Gargaarsa fayyaa jira. Tajaajila shuttle wiirtuu magaalaa irraa.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'How do I register for the marathon?',
          om: "Akkami maratonii galmaa'uu danda'a?",
        },
        answer: {
          en: 'Register online at our website or at the sports complex.',
          om: "Website keenya irratti yookaan wiirtuu isportii irratti galmaa'aa.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Athletics Federation',
        logo: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eaf',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Marathon runners',
          om: 'Fiigtoota maratonii',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1536215204627-842e79c92225?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Half marathon race',
          om: 'Dorgommii maratonii walakkaa',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Winners at the award ceremony',
          om: "Dorgomtoota milkaa'an sirna badhaasa",
        },
      },
    ],
  },
  {
    id: '22',
    slug: 'bishoftu-heritage-tour-2026',
    title: {
      en: 'Bishoftu Heritage & History Tour 2026',
      om: 'Imimna Dhaalaa fi Seenaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Explore the rich history and heritage of Bishoftu',
      om: 'Seenaa fi dhaala Bishooftuu badhaadhaa ilaali',
    },
    description: {
      en: 'A guided heritage tour exploring the historical sites of Bishoftu, including the lakes, cultural centers, historical buildings, and traditional markets. Perfect for history enthusiasts and cultural tourists.',
      om: "Imimna dhaalaa qajeelfamaan iddoowwan seenaa Bishooftuu, kan haroowwan, wiirtuuwwan aadaa, gamoo seenaa fi gabaaya aadaa of keessaa qabu. Jaalattota seenaa fi turistota aadaa mijaa'aa.",
    },
    category: 'tourism',
    status: 'ongoing',
    featured: false,
    date: '2026-07-10',
    startTime: '08:00',
    endTime: '16:00',
    location: {
      venue: {
        en: 'Bishoftu Heritage Center',
        om: 'Wiirtuu Dhaalaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Heritage Association',
      email: 'heritage@bishoftuevents.com',
      phone: '+251 988 000 111',
    },
    host: {
      en: 'Oromia Heritage Commission',
      om: 'Marii Dhaalaa Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Dr. Hirut Bekele',
        role: {
          en: 'Historian',
          om: 'Hayyuu Seenaa',
        },
        bio: {
          en: 'Historian specialized in Oromo history.',
          om: 'Hayyuu seenaa Oromoo keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Cultural Guide',
          om: 'Qajeelfama Aadaa',
        },
        bio: {
          en: 'Expert cultural guide with knowledge of Bishoftu history.',
          om: 'Qajeelfama aadaa ogeessa kan beekumsa seenaa Bishooftuu qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Desta',
        role: {
          en: 'Archaeology Expert',
          om: 'Ogeessa Qorannoo Uumaa',
        },
        bio: {
          en: 'Expert in archaeology and historical preservation.',
          om: 'Ogeessa qorannoo uumaa fi eegumsa seenaa.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Wondimu',
        role: {
          en: 'Heritage Educator',
          om: 'Barsiisaa Dhaalaa',
        },
        bio: {
          en: 'Educator teaching about cultural heritage.',
          om: 'Barsiisaa kan dhaala aadaa barsiisu.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '08:00',
        title: {
          en: 'Tour Briefing',
          om: 'Qajeelfama Imimnaa',
        },
        description: {
          en: 'Briefing and orientation',
          om: 'Qajeelfama',
        },
      },
      {
        id: '2',
        time: '08:30',
        title: {
          en: 'Heritage Site Visit',
          om: 'Daawwanna Iddoo Dhaalaa',
        },
        description: {
          en: 'Visit to historical sites and landmarks',
          om: 'Daawwanna iddoowwan seenaa fi mallattoo',
        },
      },
      {
        id: '3',
        time: '10:30',
        title: {
          en: 'Cultural Center Visit',
          om: 'Daawwanna Wiirtuu Aadaa',
        },
        description: {
          en: 'Guided tour of cultural center',
          om: 'Daawwanna qajeelfamaan wiirtuu aadaa',
        },
      },
      {
        id: '4',
        time: '12:30',
        title: {
          en: 'Lunch Break',
          om: 'Boqonnaa Laachii',
        },
        description: {
          en: 'Lunch and rest',
          om: 'Laachii fi boqonnaa',
        },
      },
      {
        id: '5',
        time: '13:30',
        title: {
          en: 'Traditional Market Tour',
          om: 'Daawwanna Gabaaya Aadaa',
        },
        description: {
          en: 'Visit to traditional market',
          om: 'Daawwanna gabaaya aadaa',
        },
      },
      {
        id: '6',
        time: '15:00',
        title: {
          en: 'Heritage Photo Session',
          om: 'Suuraa Dhaalaa',
        },
        description: {
          en: 'Photo opportunities at heritage sites',
          om: 'Carraa suuraa iddoowwan dhaalaa',
        },
      },
    ],
    logistics: {
      en: 'Tour guide included. Comfortable walking shoes required. Lunch provided. Transportation from hotel available.',
      om: "Qajeelfama imimnaa dabalatee. Kophee deddeebii mijaa'aa barbaachisa. Laachii kenname. Geejjiba hoteelii irraa jira.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'How long is the heritage tour?',
          om: "Imimni dhaalaa sa'aatii meeqa?",
        },
        answer: {
          en: 'The tour lasts approximately 6 hours.',
          om: "Imimni sa'aatii 6 ta'aa.",
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Oromia Tourism Commission',
        logo: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/otc',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Heritage site tour',
          om: 'Imimna iddoo dhaalaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1440581270065-aae7af6c3a06?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Historical landmark',
          om: 'Mallattoo seenaa',
        },
      },
    ],
  },
  {
    id: '23',
    slug: 'bishoftu-christmas-celebration',
    title: {
      en: 'Ethiopian Christmas (Genna) Celebration',
      om: 'Ayyaana Qoodaachisaa (Genna)',
    },
    shortDescription: {
      en: 'Celebrate Genna - Ethiopian Christmas in Bishoftu',
      om: 'Qoodaachisaa - Ayyaana Dhalootaa Itoophiyaa Bishooftuu keessatti',
    },
    description: {
      en: 'Join us for a traditional Ethiopian Christmas celebration known as Genna. Featuring church services, traditional meals, cultural performances, and community gatherings. Experience the rich traditions of Ethiopian Orthodox Christmas.',
      om: "Ayyaana Dhalootaa Itoophiyaa kan Genna jedhamu nu hordofaa. Tajaajila mana kiristaanaa, nyaata aadaa, shubbisa aadaa fi walga'ii hawaasaa of keessaa qaba. Aadaa badhaadhaa Dhalootaa Kiristaanaa Ortodoksii Itoophiyaa muuxannoo.",
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2027-01-07',
    startTime: '06:00',
    endTime: '20:00',
    location: {
      venue: {
        en: 'Bishoftu Orthodox Church',
        om: 'Mana Kiristaanaa Ortodoksii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Orthodox Church Committee',
      email: 'genna@bishoftuevents.com',
      phone: '+251 999 111 222',
    },
    host: {
      en: 'Bishoftu Orthodox Church',
      om: 'Mana Kiristaanaa Ortodoksii Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Abune Gabre Selassie',
        role: {
          en: 'Church Leader',
          om: 'Hogganaa Mana Kiristaanaa',
        },
        bio: {
          en: 'Orthodox church leader in Bishoftu.',
          om: 'Hogganaa mana kiristaanaa Ortodoksii Bishooftuu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Community Organizer',
          om: 'Qindeessaa Hawaasaa',
        },
        bio: {
          en: 'Organizer of community celebrations and events.',
          om: 'Qindeessaa ayyaana fi taatee hawaasaa.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Cultural Coordinator',
          om: 'Qindeessaa Aadaa',
        },
        bio: {
          en: 'Coordinator of cultural activities and performances.',
          om: 'Qindeessaa hojii fi shubbisa aadaa.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Choir Leader',
          om: 'Hogganaa Waamtaa',
        },
        bio: {
          en: 'Leader of the church choir and music program.',
          om: 'Hogganaa waamtaa mana kiristaanaa fi sagantaa muuziqaa.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '06:00',
        title: {
          en: 'Early Morning Church Service',
          om: 'Tajaajila Mana Kiristaanaa Ganama',
        },
        description: {
          en: 'Traditional Orthodox Christmas service',
          om: 'Tajaajila Dhalootaa Ortodoksii aadaa',
        },
      },
      {
        id: '2',
        time: '08:00',
        title: {
          en: 'Blessing of the Congregation',
          om: 'Eebba Waldaa',
        },
        description: {
          en: 'Christmas blessings for all',
          om: 'Eebba Dhalootaa hundaaf',
        },
      },
      {
        id: '3',
        time: '10:00',
        title: {
          en: 'Traditional Christmas Feast',
          om: 'Ciree Dhalootaa Aadaa',
        },
        description: {
          en: 'Traditional Ethiopian Christmas meal',
          om: 'Nyaata Dhalootaa Itoophiyaa aadaa',
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Cultural Performances',
          om: 'Shubbisa Aadaa',
        },
        description: {
          en: 'Traditional music and dance',
          om: 'Muuziqaa fi shubbisa aadaa',
        },
      },
      {
        id: '5',
        time: '15:00',
        title: {
          en: 'Community Gathering',
          om: "Walga'ii Hawaasaa",
        },
        description: {
          en: 'Community fellowship and celebration',
          om: "Walga'ii fi ayyaana hawaasaa",
        },
      },
      {
        id: '6',
        time: '18:00',
        title: {
          en: 'Evening Prayer Service',
          om: 'Tajaajila Kadhannaa Galgalaa',
        },
        description: {
          en: 'Closing prayer and blessings',
          om: 'Kadhannaa xumuraa fi eebba',
        },
      },
    ],
    logistics: {
      en: 'Free and open to all. Traditional dress encouraged. Bring your family and friends. Food provided.',
      om: 'Bilisa fi hundaaf banaa. Uffata aadaa gorfama. Maatii fi michoota keessan fiduu. Nyaata ni kenname.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Is the celebration open to non-Orthodox visitors?',
          om: 'Ayyaanni daawwattoota kan Ortodoksii hin taaniniif banaa?',
        },
        answer: {
          en: 'Yes, everyone is welcome to join the celebration.',
          om: 'Eeyyee, namni hunduu baga nagaan dhufe.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Orthodox Church - Oromia Diocese',
        logo: 'https://images.unsplash.com/photo-1440581270065-aae7af6c3a06?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eoc',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1440581270065-aae7af6c3a06?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Christmas church service',
          om: 'Tajaajila mana kiristaanaa Dhalootaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional Christmas celebration',
          om: 'Ayyaana Dhalootaa aadaa',
        },
      },
    ],
  },
  {
    id: '24',
    slug: 'bishoftu-digital-skills-workshop',
    title: {
      en: 'Bishoftu Digital Skills Workshop',
      om: 'Ogbarruu Dandeettii Dijitaalaa Bishooftuu',
    },
    shortDescription: {
      en: 'Learn essential digital skills for the future',
      om: 'Dandeettii dijitaalaa barbaachisaa fuuturaaf ilmaataa',
    },
    description: {
      en: 'A workshop teaching essential digital skills including computer basics, internet navigation, digital literacy, online safety, and using digital tools for education and employment. Perfect for students, job seekers, and professionals.',
      om: "Ogbarruu dandeettii dijitaalaa barbaachisaa kan kompiitaraa, internettii, beekumsa dijitaalaa, nageenya online fi fayyadama meeshaa dijitaalaa barnootaa fi hojii keessatti barsiisu. Barattoota, hojii barbaaddota fi ogeessotaaf mijaa'aa.",
    },
    category: 'development',
    status: 'upcoming',
    featured: false,
    date: '2026-08-08',
    startTime: '09:00',
    endTime: '16:00',
    location: {
      venue: {
        en: 'Bishoftu Digital Center',
        om: 'Wiirtuu Dijitaalaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Digital Initiative',
      email: 'digital@bishoftuevents.com',
      phone: '+251 900 888 999',
    },
    host: {
      en: 'Ethiopian Digital Skills Program',
      om: 'Sagantaa Dandeettii Dijitaalaa Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Henok Teshome',
        role: {
          en: 'Digital Skills Trainer',
          om: 'Leenjisaa Dandeettii Dijitaalaa',
        },
        bio: {
          en: 'Certified digital skills trainer with 10 years of experience.',
          om: 'Leenjisaa dandeettii dijitaalaa sertifikaatii kan waggaa 10 tajaajila qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Computer Science Educator',
          om: 'Barsiisaa Saayinsii Kompiitaraa',
        },
        bio: {
          en: 'Educator teaching computer science to students.',
          om: 'Barsiisaa kan saayinsii kompiitaraa barattootaaf barsiisu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Internet Safety Expert',
          om: 'Ogeessa Nageenya Internettii',
        },
        bio: {
          en: 'Expert in online safety and digital security.',
          om: 'Ogeessa nageenya online fi nageenya dijitaalaa.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Software Trainer',
          om: 'Leenjisaa Sagantaa',
        },
        bio: {
          en: 'Trainer in software applications and digital tools.',
          om: 'Leenjisaa fayyadama sagantaa fi meeshaa dijitaalaa.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Registration',
          om: "Galmaa'ii",
        },
        description: {
          en: 'Check-in and materials distribution',
          om: "Galmaa'ii fi hiruu meeshaalee",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Computer Basics',
          om: "Bu'uura Kompiitaraa",
        },
        description: {
          en: 'Introduction to computers and operating systems',
          om: 'Seensa kompiitaraa fi sirna itti hojjechu',
        },
      },
      {
        id: '3',
        time: '10:45',
        title: {
          en: 'Internet Skills',
          om: 'Dandeettii Internettii',
        },
        description: {
          en: 'Navigating the internet and using search engines',
          om: 'Internettii fayyadamu fi makina barbaaduu fayyadamu',
        },
      },
      {
        id: '4',
        time: '11:45',
        title: {
          en: 'Digital Literacy',
          om: 'Beekumsa Dijitaalaa',
        },
        description: {
          en: 'Understanding digital information and media',
          om: 'Hubachuu odeeffannoo dijitaalaa fi miidiyaa',
        },
      },
      {
        id: '5',
        time: '13:00',
        title: {
          en: 'Lunch Break',
          om: 'Boqonnaa Laachii',
        },
        description: {
          en: 'Lunch and networking',
          om: 'Laachii fi wal-baruu',
        },
      },
      {
        id: '6',
        time: '14:00',
        title: {
          en: 'Online Safety',
          om: 'Nageenya Online',
        },
        description: {
          en: 'Staying safe online and protecting your data',
          om: 'Nageenya online eeguu fi qabeenya keessan ittisu',
        },
      },
      {
        id: '7',
        time: '15:00',
        title: {
          en: 'Digital Tools for Work',
          om: 'Meeshaa Dijitaalaa Hojii',
        },
        description: {
          en: 'Using digital tools for employment and career',
          om: 'Meeshaa dijitaalaa hojii fi karoora hojii keessatti fayyadamu',
        },
      },
      {
        id: '8',
        time: '15:45',
        title: {
          en: 'Closing & Certificate',
          om: 'Cufaa fi Sertifikaatii',
        },
        description: {
          en: 'Closing remarks and certificate distribution',
          om: 'Dubbii xumuraa fi hiruu sertifikaatii',
        },
      },
    ],
    logistics: {
      en: 'Free for students and job seekers. Small fee for others. Computers and materials provided. Bring a notebook.',
      om: 'Barattoota fi hojii barbaaddotaaf bilisa. Kaffaltii xiqqaa namoota biroof. Kompiitaraa fi meeshaa ni kenname. Kitaaba harkaa qabadhaa.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Do I need my own computer?',
          om: 'Kompiitaraa koo ofiin qabuu qaba?',
        },
        answer: {
          en: 'No, computers are provided for the workshop.',
          om: 'Lakki, kompiitaraan ogbarruuf ni kenname.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ministry of Innovation and Technology',
        logo: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/moit',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Digital skills training',
          om: 'Leenjisa dandeettii dijitaalaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Workshop participants',
          om: 'Hirmaattota ogbarruu',
        },
      },
    ],
  },
  {
    id: '25',
    slug: 'bishoftu-film-and-photography-workshop',
    title: {
      en: 'Bishoftu Film & Photography Workshop',
      om: 'Ogbarruu Fiilmii fi Suuraa Bishooftuu',
    },
    shortDescription: {
      en: 'Learn filmmaking and photography skills',
      om: 'Dandeettii fiilmii fi suuraa ilmaataa',
    },
    description: {
      en: 'A hands-on workshop teaching filmmaking, photography, video editing, and storytelling. Perfect for aspiring filmmakers, content creators, and photography enthusiasts. Practical sessions with professional equipment.',
      om: "Ogbarruu harkaa qabu fiilmii, suuraa, kuyyuu fiidiyoo fi seenaafuu barsiisu. Tolchitoota fiilmii, oomishtoota kontentii fi jaalattota suuraa mijaa'aa. Ogbarruu harkaa qabu meeshaa ogeessaa wajjiin.",
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-09-05',
    startTime: '09:00',
    endTime: '17:00',
    location: {
      venue: {
        en: 'Bishoftu Film Studio',
        om: 'Iddoo Fiilmii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Film Academy',
      email: 'filmworkshop@bishoftuevents.com',
      phone: '+251 988 222 333',
    },
    host: {
      en: 'Ethiopian Film Institute',
      om: 'Iddoo Fiilmii Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Tigist Wondimu',
        role: {
          en: 'Documentary Filmmaker',
          om: 'Tolchaa Fiilmii Dokumantarii',
        },
        bio: {
          en: 'Award-winning documentary filmmaker with works shown internationally.',
          om: 'Tolchaa fiilmii dokumantarii faalmaan badhaadhuu kan hojii addunyaatti argisiifame.',
        },
        image:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Photographer',
          om: 'Suuraa Tolchaa',
        },
        bio: {
          en: 'Professional photographer with international exhibitions.',
          om: 'Suuraa tolchaa ogeessa kan agarsiisa addunyaa qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Solomon Desta',
        role: {
          en: 'Video Editor',
          om: 'Kuyyoo Fiidiyoo',
        },
        bio: {
          en: 'Professional video editor with experience in film production.',
          om: 'Kuyyoo fiidiyoo ogeessa kan muuxannoo tolcha fiilmii qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Tigist Assefa',
        role: {
          en: 'Storytelling Coach',
          om: 'Leenjisaa Seenaafuu',
        },
        bio: {
          en: 'Coach teaching storytelling techniques for film.',
          om: 'Leenjisaa kan akkaataa seenaafuu fiilmii keessatti barsiisu.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Registration',
          om: "Galmaa'ii",
        },
        description: {
          en: 'Check-in and equipment distribution',
          om: "Galmaa'ii fi hiruu meeshaa",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Introduction to Filmmaking',
          om: 'Seensa Tolcha Fiilmii',
        },
        description: {
          en: 'Basics of filmmaking',
          om: "Bu'uura tolcha fiilmii",
        },
      },
      {
        id: '3',
        time: '10:30',
        title: {
          en: 'Photography Techniques',
          om: 'Akkaataa Suuraa',
        },
        description: {
          en: 'Camera settings and composition',
          om: 'Haala Kaameraa fi tolcha suuraa',
        },
      },
      {
        id: '4',
        time: '12:00',
        title: {
          en: 'Video Editing Skills',
          om: 'Dandeettii Kuyyuu Fiidiyoo',
        },
        description: {
          en: 'Introduction to video editing software',
          om: 'Seensa Sagantaa kuyyuu fiidiyoo',
        },
      },
      {
        id: '5',
        time: '13:30',
        title: {
          en: 'Lunch Break',
          om: 'Boqonnaa Laachii',
        },
        description: {
          en: 'Lunch and networking',
          om: 'Laachii fi wal-baruu',
        },
      },
      {
        id: '6',
        time: '14:30',
        title: {
          en: 'Storytelling for Film',
          om: 'Seenaafuu Fiilmii',
        },
        description: {
          en: 'How to tell powerful stories through film',
          om: 'Akkasata seenaa jabaa fiilmii keessatti ibsu',
        },
      },
      {
        id: '7',
        time: '15:30',
        title: {
          en: 'Practical Session',
          om: 'Ogbarruu Harkaa Qabu',
        },
        description: {
          en: 'Hands-on shooting and editing',
          om: 'Suuraa fi kuyyuu harkaa qabu',
        },
      },
      {
        id: '8',
        time: '16:30',
        title: {
          en: 'Feedback & Q&A',
          om: 'Deebii fi Gaaffii',
        },
        description: {
          en: 'Review of work and Q&A',
          om: 'Ilaalcha hojii fi gaaffii deebii',
        },
      },
    ],
    logistics: {
      en: 'Equipment provided. Bring your own camera if available. Small class size for individual attention. Certificate provided.',
      om: 'Meeshaa ni kenname. Kaameraa keessan ofiin qabadhaa. Sadarkaa barnootaa xiqqaa. Sertifikaatii ni kenname.',
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Do I need a camera?',
          om: 'Kaameraa qabuu qaba?',
        },
        answer: {
          en: 'Cameras are provided, but you are welcome to bring your own.',
          om: 'Kaameraa ni kenname, garuu ofiin fiduu dandeessu.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Film Commission',
        logo: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/efc',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Video editing session',
          om: 'Ogbarruu kuyyuu fiidiyoo',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Photography workshop',
          om: 'Ogbarruu suuraa',
        },
      },
    ],
  },
  {
    id: '26',
    slug: 'bishoftu-dance-festival-2026',
    title: {
      en: 'Bishoftu Dance Festival 2026',
      om: 'Ayyaana Shubbisaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'Celebrating Ethiopian and Oromo dance traditions',
      om: 'Aadaa shubbisaa Itoophiyaa fi Oromoo ayyaaneffachuu',
    },
    description: {
      en: 'A vibrant dance festival featuring traditional Oromo dance, modern Ethiopian dance, and international dance styles. Dance workshops, performances, competitions, and opportunities to learn from master dancers.',
      om: 'Ayyaana shubbisaa kan shubbisa aadaa Oromoo, shubbisa ammayyaa Itoophiyaa fi shubbisa idil-addunyaa of keessaa qabu. Ogbarruu shubbisaa, shubbisa, dorgommii fi carraa shubbisoota ogeessa irraa barachuuf.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-10-05',
    startTime: '10:00',
    endTime: '22:00',
    location: {
      venue: {
        en: 'Bishoftu Dance Arena',
        om: 'Iddoo Shubbisaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Dance Collective',
      email: 'dance@bishoftuevents.com',
      phone: '+251 911 444 555',
    },
    host: {
      en: 'Oromia Dance Association',
      om: 'Waldaa Shubbisaa Oromiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Mulugeta Tulu',
        role: {
          en: 'Master Dancer',
          om: 'Shubbisaa Ogeessa',
        },
        bio: {
          en: 'Master dancer specializing in traditional Oromo dance.',
          om: 'Shubbisaa ogeessa kan shubbisa aadaa Oromoo keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Dance Choreographer',
          om: 'Shubbisaa Tolchaa',
        },
        bio: {
          en: 'Choreographer creating contemporary Ethiopian dance.',
          om: 'Tolchaa shubbisaa kan shubbisa ammayyaa Itoophiyaa tolchu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Dance Instructor',
          om: 'Barsiisaa Shubbisaa',
        },
        bio: {
          en: 'Dance instructor teaching both traditional and modern styles.',
          om: 'Barsiisaa shubbisaa kan akkaataa aadaa fi ammayyaa leenjisu.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Dance Critic',
          om: 'Qorataa Shubbisaa',
        },
        bio: {
          en: 'Dance critic and writer on Ethiopian dance forms.',
          om: 'Qorataa fi barreessaa shubbisaa akkaataa shubbisaa Itoophiyaa.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '10:00',
        title: {
          en: 'Festival Opening',
          om: 'Banaa Ayyaanaa',
        },
        description: {
          en: 'Opening ceremony and performance',
          om: 'Banaa fi shubbisa',
        },
      },
      {
        id: '2',
        time: '10:30',
        title: {
          en: 'Traditional Oromo Dance Showcase',
          om: 'Agarsiisa Shubbisaa Aadaa Oromoo',
        },
        description: {
          en: 'Traditional Oromo dance performances',
          om: 'Shubbisa aadaa Oromoo',
        },
      },
      {
        id: '3',
        time: '12:00',
        title: {
          en: 'Dance Workshop',
          om: 'Ogbarruu Shubbisaa',
        },
        description: {
          en: 'Learn traditional dance moves',
          om: 'Sochii shubbisaa aadaa barachuu',
        },
      },
      {
        id: '4',
        time: '14:00',
        title: {
          en: 'Modern Dance Competition',
          om: 'Dorgommii Shubbisaa Ammayyaa',
        },
        description: {
          en: 'Competition for modern dance troupes',
          om: 'Dorgommii gartuuwwan shubbisaa ammayyaa',
        },
      },
      {
        id: '5',
        time: '16:00',
        title: {
          en: 'International Dance Showcase',
          om: 'Agarsiisa Shubbisaa Idil-addunyaa',
        },
        description: {
          en: 'International dance performances',
          om: 'Shubbisa idil-addunyaa',
        },
      },
      {
        id: '6',
        time: '18:00',
        title: {
          en: 'Open Dance Floor',
          om: 'Iddoo Shubbisaa Banaa',
        },
        description: {
          en: 'Open dancing for all participants',
          om: 'Shubbisa banaa hirmaattota hundaaf',
        },
      },
    ],
    logistics: {
      en: 'Free entry. Workshops have limited capacity - register early. Comfortable clothing recommended.',
      om: "Seenaan bilisa. Ogbarruun iddoo xiqqaa qaba - achumaan galmaa'aa. Uffata mijaa'aa gorfama.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Do I need dance experience?',
          om: 'Muuxannoo shubbisaa qabuu qaba?',
        },
        answer: {
          en: 'No, all levels are welcome including beginners.',
          om: 'Lakki, sadarkaa hundii kan barattoota haaraa walii galan baga nagaan dhufan.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Dance Association',
        logo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eda',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Traditional dance performance',
          om: 'Shubbisa aadaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Dance workshop participants',
          om: 'Hirmaattota ogbarruu shubbisaa',
        },
      },
    ],
  },
  {
    id: '27',
    slug: 'bishoftu-writers-residency-2026',
    title: {
      en: 'Bishoftu Writers Residency 2026',
      om: 'Jireenya Barreessitoota Bishooftuu 2026',
    },
    shortDescription: {
      en: 'A residency for writers and storytellers',
      om: 'Jireenya barreessitoota fi seenaafutootaaf',
    },
    description: {
      en: 'A month-long residency program for writers, poets, and storytellers. Includes accommodation, workspace, mentorship, and publication opportunities. Focus on Ethiopian and Oromo literature, and contemporary writing.',
      om: "Sagantaa jireenya ji'a tokkoo barreessitoota, taroota fi seenaafutootaaf. Iddoo jireenyaa, iddoo hojii, gorsa fi carraa maxxansaatiin dabalate. Kitaaba Itoophiyaa fi Oromoo, fi barreeffama ammayyaa irratti xiyyeeffate.",
    },
    category: 'development',
    status: 'ongoing',
    featured: false,
    date: '2026-07-15',
    startTime: '00:00',
    endTime: '23:59',
    location: {
      venue: {
        en: 'Bishoftu Writers House',
        om: 'Mana Barreessitootaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Writers Association',
      email: 'writers@bishoftuevents.com',
      phone: '+251 922 777 888',
    },
    host: {
      en: 'Ethiopian Writers Association',
      om: 'Waldaa Barreessitoota Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Lemma Tulu',
        role: {
          en: 'Published Author',
          om: 'Barreessaa Maxxanfame',
        },
        bio: {
          en: 'Author of 5 novels and numerous short stories.',
          om: "Barreessaa kitaaba 5 fi seenaa gabaabaa baay'ee.",
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Mentor Writer',
          om: 'Barreessaa Gorsaa',
        },
        bio: {
          en: 'Mentor writer helping emerging authors develop their craft.',
          om: 'Barreessaa gorsaa kan barreessitoota haaraa dandeettii isaanii guddifachuuf gargaaru.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Poet',
          om: 'Taraa',
        },
        bio: {
          en: 'Poet with published collections in Afaan Oromo.',
          om: 'Taraa kan walitta maxxanfame Afaan Oromoon qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Literary Editor',
          om: 'Qindeessaa Kitaabaa',
        },
        bio: {
          en: 'Editor working with writers to refine their manuscripts.',
          om: 'Qindeessaa kan barreessitoota qulqullina barreeffama isaanii gargaaru.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '10:00',
        title: {
          en: 'Welcome & Orientation',
          om: 'Nagaa Dhaammachuu fi Qajeelfama',
        },
        description: {
          en: 'Welcome and introduction to the residency',
          om: 'Nagaa dhaammachuu fi seensa jireenyaa',
        },
      },
      {
        id: '2',
        time: '11:00',
        title: {
          en: 'Writing Workshop',
          om: 'Ogbarruu Barreessuu',
        },
        description: {
          en: 'Daily creative writing workshop',
          om: 'Ogbarruu barreessuu guyyaa guutuu',
        },
      },
      {
        id: '3',
        time: '14:00',
        title: {
          en: 'One-on-One Mentorship',
          om: 'Gorsa Tokko-Tokkoo',
        },
        description: {
          en: 'Individual feedback sessions with mentors',
          om: "Walga'ii deebii tokko-tokkoo gorsa wajjiin",
        },
      },
      {
        id: '4',
        time: '16:00',
        title: {
          en: 'Writing Time',
          om: 'Yeroo Barreessuu',
        },
        description: {
          en: 'Independent writing time',
          om: 'Yeroo barreessuu ofii',
        },
      },
      {
        id: '5',
        time: '19:00',
        title: {
          en: 'Evening Reading Series',
          om: 'Dubbisa Galgalaa',
        },
        description: {
          en: 'Daily reading and sharing of work',
          om: 'Dubbisa fi qooda hojii guyyaa',
        },
      },
    ],
    logistics: {
      en: 'Application required. Accommodation provided. Meals included. Write daily and participate in all sessions.',
      om: "Applikashinii barbaachisa. Iddoo jireenya ni kenname. Nyaata dabalatee. Guyyaa guutuu barreessaa fi walga'ii hunda hirmaachaa.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'How do I apply for the residency?',
          om: 'Akkami jireenyaaf applikashinii godha?',
        },
        answer: {
          en: 'Submit a writing sample and application form online.',
          om: 'Barreeffama fi foomii applikashinii online ergaa.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Literature Association',
        logo: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/ela',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Writers residency space',
          om: 'Iddoo jireenya barreessitootaa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Reading session',
          om: 'Dubbisa',
        },
      },
    ],
  },
  {
    id: '28',
    slug: 'bishoftu-green-energy-forum',
    title: {
      en: 'Bishoftu Green Energy & Sustainability Forum',
      om: 'Mariyaa Qaama Haaraa fi Jiraataa Bishooftuu',
    },
    shortDescription: {
      en: 'Shaping a sustainable future through green energy',
      om: 'Fuuturaa jiraataa karaa qaama haaraatiin tolchuu',
    },
    description: {
      en: 'A forum discussing renewable energy, sustainable development, and green technologies in Ethiopia. Featuring experts, policymakers, and business leaders sharing insights and opportunities in the green energy sector.',
      om: "Mariyaa qaama haaraa, guddina jiraataa fi teeknoolojii haaraa Itoophiyaa keessatti mari'achu. Ogeessota, karoorfatoo fi hogganaa daldalaa hubannoo fi carraa qaama haaraa keessatti qoodan.",
    },
    category: 'development',
    status: 'upcoming',
    featured: false,
    date: '2026-09-18',
    startTime: '09:00',
    endTime: '17:00',
    location: {
      venue: {
        en: 'Bishoftu Conference Center',
        om: 'Wiirtuu Konfiraansii Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Green Initiative',
      email: 'greenenergy@bishoftuevents.com',
      phone: '+251 933 666 777',
    },
    host: {
      en: 'Ethiopian Ministry of Energy',
      om: 'Ministira Qaama Haaraa Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Dr. Abera Tulu',
        role: {
          en: 'Energy Expert',
          om: 'Ogeessa Qaama Haaraa',
        },
        bio: {
          en: 'Expert in renewable energy and sustainable development.',
          om: 'Ogeessa qaama haaraa fi guddina jiraataa keessatti.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Sustainability Consultant',
          om: 'Gorsaa Jiraataa',
        },
        bio: {
          en: 'Consultant on sustainable business practices.',
          om: 'Gorsaa amala daldala jiraataa irratti.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Green Technology Specialist',
          om: 'Ogeessa Teeknoolojii Haaraa',
        },
        bio: {
          en: 'Specialist in green technology and renewable energy systems.',
          om: 'Ogeessa teeknoolojii haaraa fi sirna qaama haaraa.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Energy Policy Analyst',
          om: 'Qorataa Qajeelfama Qaama Haaraa',
        },
        bio: {
          en: 'Analyst on energy policy and regulation.',
          om: 'Qorataa qajeelfama fi tokkansa qaama haaraa.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Registration',
          om: "Galmaa'ii",
        },
        description: {
          en: 'Check-in and materials',
          om: "Galmaa'ii fi meeshaalee",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Welcome & Keynote',
          om: 'Nagaa Dhaammachuu fi Dubbii Gurguddaa',
        },
        description: {
          en: 'Keynote on green energy future',
          om: 'Dubbii gurguddaa fuuturaa qaama haaraa',
        },
      },
      {
        id: '3',
        time: '10:45',
        title: {
          en: 'Panel: Renewable Energy in Ethiopia',
          om: 'Mariyaa: Qaama Haaraa Itoophiyaa',
        },
        description: {
          en: 'Current state and future of renewable energy',
          om: 'Haala ammaa fi fuuturaa qaama haaraa',
        },
      },
      {
        id: '4',
        time: '12:30',
        title: {
          en: 'Networking Lunch',
          om: 'Laachii Wal-Baru',
        },
        description: {
          en: 'Lunch with energy sector leaders',
          om: 'Laachii hogganaa qaama haaraa wajjiin',
        },
      },
      {
        id: '5',
        time: '13:30',
        title: {
          en: 'Sustainable Business Models',
          om: 'Haala Daldala Jiraataa',
        },
        description: {
          en: 'Green business opportunities',
          om: 'Carraa daldala qaama haaraa',
        },
      },
      {
        id: '6',
        time: '15:30',
        title: {
          en: 'Policy & Regulation Discussion',
          om: 'Mariyaa Qajeelfamaa',
        },
        description: {
          en: 'Government policy for green energy',
          om: 'Qajeelfama mootummaa qaama haaraaf',
        },
      },
      {
        id: '7',
        time: '16:30',
        title: {
          en: 'Closing',
          om: 'Cufaa',
        },
        description: {
          en: 'Closing remarks and next steps',
          om: 'Dubbii xumuraa fi tarkaanfii itti aanu',
        },
      },
    ],
    logistics: {
      en: 'Free for students and researchers. Registration required. Translation services available.',
      om: "Barattoota fi qorattootaaf bilisa. Galmaa'iin barbaachisa. Tajaajila hiikuu jira.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Who should attend?',
          om: 'Eenyutu hirmaachuu qaba?',
        },
        answer: {
          en: 'Energy professionals, students, researchers, business leaders, and policymakers.',
          om: 'Ogeessota qaama haaraa, barattoota, qorattoota, hogganaa daldalaa fi karoorfatoo.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Energy Authority',
        logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eea',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Green energy forum',
          om: 'Mariyaa qaama haaraa',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Sustainability session',
          om: "Walga'ii jiraataa",
        },
      },
    ],
  },
  {
    id: '29',
    slug: 'bishoftu-street-art-festival-2026',
    title: {
      en: 'Bishoftu Street Art Festival 2026',
      om: 'Ayyaana Aartii Daandii Bishooftuu 2026',
    },
    shortDescription: {
      en: "Transforming Bishoftu's streets with art",
      om: 'Daandii Bishooftuu aartiidhaan jijjiiruu',
    },
    description: {
      en: "A vibrant street art festival featuring live mural painting, graffiti art, street performances, and community art projects. Artists from across Ethiopia will transform the city's walls into a gallery of creativity.",
      om: 'Ayyaana aartii daandii kan murals, graffiti, shubbisa daandii fi hojii aartii hawaasaa of keessaa qabu. Artistoota Itoophiyaa hunda irraa dallaa magaalaa galerii ogummaa taasisu.',
    },
    category: 'community',
    status: 'upcoming',
    featured: false,
    date: '2026-12-15',
    startTime: '08:00',
    endTime: '18:00',
    location: {
      venue: {
        en: 'Bishoftu City Streets',
        om: 'Daandii Magaalaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Art Collective',
      email: 'streetart@bishoftuevents.com',
      phone: '+251 944 999 000',
    },
    host: {
      en: 'Bishoftu Culture & Tourism Bureau',
      om: 'Biroo Aadaa fi Turizimii Bishooftuu',
    },
    speakers: [
      {
        id: '1',
        name: 'Solomon Tulu',
        role: {
          en: 'Street Artist',
          om: 'Aartii Daandii',
        },
        bio: {
          en: 'Renowned street artist creating murals across Ethiopia.',
          om: 'Aartii daandii beekamaa kan mural Itoophiyaa keessatti tolchu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Mekdes Tulu',
        role: {
          en: 'Graffiti Artist',
          om: 'Aartii Graffiti',
        },
        bio: {
          en: 'Graffiti artist with works across Oromia.',
          om: 'Aartii graffiti kan hojii Oromiyaa hunda keessatti qabu.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Mural Painter',
          om: 'Mural Aartii',
        },
        bio: {
          en: 'Mural painter creating large-scale public art.',
          om: 'Mural aartii kan aartii waliigalaa gurguddaa tolchu.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Street Performer',
          om: 'Shubbisaa Daandii',
        },
        bio: {
          en: 'Street performer and art activist.',
          om: 'Shubbisaa daandii fi aartii waraabessaa.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '08:00',
        title: {
          en: 'Festival Opening',
          om: 'Banaa Ayyaanaa',
        },
        description: {
          en: 'Opening ceremony and artist introductions',
          om: 'Banaa fi seensa artistoota',
        },
      },
      {
        id: '2',
        time: '08:30',
        title: {
          en: 'Live Mural Painting',
          om: 'Mural Aartii Lubbuu Qabu',
        },
        description: {
          en: 'Artists paint murals on city walls',
          om: 'Artistoota dallaa magaalaa irratti mural tolchu',
        },
      },
      {
        id: '3',
        time: '11:00',
        title: {
          en: 'Graffiti Art Workshop',
          om: 'Ogbarruu Aartii Graffiti',
        },
        description: {
          en: 'Learn graffiti art techniques',
          om: 'Akkaataa aartii graffiti ilmaataa',
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Street Performances',
          om: 'Shubbisa Daandii',
        },
        description: {
          en: 'Music and dance performances on the streets',
          om: 'Muuziqaa fi shubbisa daandii irratti',
        },
      },
      {
        id: '5',
        time: '15:00',
        title: {
          en: 'Community Art Project',
          om: 'Hojii Aartii Hawaasaa',
        },
        description: {
          en: 'Community members create art together',
          om: 'Miseensota hawaasaa waliin aartii tolchu',
        },
      },
      {
        id: '6',
        time: '17:00',
        title: {
          en: 'Art Exhibition & Closing',
          om: 'Agarsiisa Aartii fi Cufaa',
        },
        description: {
          en: "Exhibition of the day's artwork",
          om: 'Agarsiisa hojii aartii guyyaa',
        },
      },
    ],
    logistics: {
      en: 'Free for all. Art materials provided. Wear comfortable clothes. Family-friendly event.',
      om: "Hundaaf bilisa. Meeshaa aartii ni kenname. Uffata mijaa'aa uffadhaa. Taateen maatiif mijaa'aa.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Can I participate in creating art?',
          om: "Aartii tolchu keessatti hirmaachuu nan danda'aa?",
        },
        answer: {
          en: 'Yes, there are community art projects open to all.',
          om: 'Eeyyee, hojii aartii hawaasaa hundaaf banaa jira.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Art Council',
        logo: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/eac',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Street art mural',
          om: 'Mural aartii daandii',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Live painting session',
          om: 'Aartii lubbuu qabu',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Graffiti art demonstration',
          om: 'Agarsiisa aartii graffiti',
        },
      },
    ],
  },
  {
    id: '30',
    slug: 'bishoftu-startup-competition-2026',
    title: {
      en: 'Bishoftu Startup Competition & Pitch Night 2026',
      om: 'Dorgommii Start-up fi Halkan Agarsiisaa Bishooftuu 2026',
    },
    shortDescription: {
      en: 'The ultimate startup competition in Bishoftu',
      om: 'Dorgommii start-up Bishooftuu isaa xumuraa',
    },
    description: {
      en: 'A competitive event for startups to pitch their ideas to investors and win funding. Includes mentorship, training, networking, and cash prizes for the winners. Open to all types of startups in any industry.',
      om: "Taatee dorgommii start-upoota yaada isaanii investitootaaf agarsiisanii fi maallaqa mo'achuuf. Gorsa, leenjisa, wal-baruu fi badhaasa maallaqaa dorgomtootaaf dabalatee. Start-upoota gosa hundaafi industirii hundaaf banaa.",
    },
    category: 'development',
    status: 'upcoming',
    featured: true,
    date: '2026-09-30',
    startTime: '09:00',
    endTime: '21:00',
    location: {
      venue: {
        en: 'Bishoftu Innovation Hub',
        om: 'Wiirtuu Ogummaa Bishooftuu',
      },
      city: 'Bishoftu',
      region: 'Oromia',
    },
    organizer: {
      name: 'Bishoftu Startup Network',
      email: 'startup@bishoftuevents.com',
      phone: '+251 955 000 111',
    },
    host: {
      en: 'Ethiopian Startup Network',
      om: 'Waldaa Start-up Itoophiyaa',
    },
    speakers: [
      {
        id: '1',
        name: 'Yohannes Tulu',
        role: {
          en: 'Venture Capitalist',
          om: 'Investitoota Maallaqaa',
        },
        bio: {
          en: 'Leading venture capitalist investing in Ethiopian startups.',
          om: 'Investitoota maallaqaa kan start-upoota Itoophiyaa keessatti investii godhu.',
        },
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '2',
        name: 'Meron Wondimu',
        role: {
          en: 'Startup Coach',
          om: 'Leenjisaa Start-up',
        },
        bio: {
          en: 'Startup coach helping entrepreneurs launch and grow their businesses.',
          om: 'Leenjisaa start-up kan daldaltoota start-up jalqabuu fi guddifachuuf gargaaru.',
        },
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '3',
        name: 'Tigist Wondimu',
        role: {
          en: 'Business Mentor',
          om: 'Gorsaa Daldalaa',
        },
        bio: {
          en: 'Mentor for early-stage startups and founders.',
          om: 'Gorsaa start-upoota jalqabaa fi qabxii.',
        },
        image:
          'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: '4',
        name: 'Solomon Desta',
        role: {
          en: 'Investment Analyst',
          om: 'Qorataa Investimenti',
        },
        bio: {
          en: 'Investment analyst focused on startup funding.',
          om: 'Qorataa investimenti kan maallaqa start-up irratti xiyyeeffate.',
        },
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80&auto=format&fit=crop',
      },
    ],
    agenda: [
      {
        id: '1',
        time: '09:00',
        title: {
          en: 'Registration & Orientation',
          om: "Galmaa'ii fi Qajeelfama",
        },
        description: {
          en: 'Registration and competition briefing',
          om: "Galmaa'ii fi qajeelfama dorgommii",
        },
      },
      {
        id: '2',
        time: '09:30',
        title: {
          en: 'Mentorship Session',
          om: 'Gorsa',
        },
        description: {
          en: 'One-on-one mentorship for startups',
          om: 'Gorsa tokko-tokkoo start-upootaaf',
        },
      },
      {
        id: '3',
        time: '11:00',
        title: {
          en: 'Pitch Training Workshop',
          om: 'Ogbarruu Leenjisa Agarsiisaa',
        },
        description: {
          en: 'Training on how to pitch effectively',
          om: "Leenjisa akkaataa agarsiisuu itti ga'e",
        },
      },
      {
        id: '4',
        time: '13:00',
        title: {
          en: 'Lunch Break',
          om: 'Boqonnaa Laachii',
        },
        description: {
          en: 'Networking lunch',
          om: 'Laachii wal-baruu',
        },
      },
      {
        id: '5',
        time: '14:00',
        title: {
          en: 'Pitch Competition - Round 1',
          om: 'Dorgommii Agarsiisaa - Jaapha 1',
        },
        description: {
          en: 'First round of startup pitches',
          om: 'Jaapha duraa agarsiisa start-up',
        },
      },
      {
        id: '6',
        time: '16:00',
        title: {
          en: 'Pitch Competition - Finals',
          om: 'Dorgommii Agarsiisaa - Xumura',
        },
        description: {
          en: 'Finalist pitches to the judges',
          om: 'Agarsiisa xumuraa abbootii murtii',
        },
      },
      {
        id: '7',
        time: '17:30',
        title: {
          en: 'Networking Break',
          om: 'Wal-Baru',
        },
        description: {
          en: 'Networking with investors and founders',
          om: 'Wal-baruu investitootaa fi qabxii',
        },
      },
      {
        id: '8',
        time: '18:30',
        title: {
          en: 'Award Ceremony',
          om: 'Sirna Badhaasa',
        },
        description: {
          en: 'Winners announced and prizes awarded',
          om: "Dorgomtoota milkaa'an beeksifamee fi badhaasa kenname",
        },
      },
      {
        id: '9',
        time: '19:30',
        title: {
          en: 'Evening Reception',
          om: 'Gammachuu Galgalaa',
        },
        description: {
          en: 'Celebration with food, drinks, and music',
          om: 'Ayyaana nyaataa, dhugaatii fi muuziqaa wajjiin',
        },
      },
    ],
    logistics: {
      en: 'Registration required for competitors. Free to attend for audience. Meals provided for participants. Cash prizes for winners.',
      om: "Galmaa'iin dorgomtootaaf barbaachisa. Ilaltotaaf bilisa. Nyaata hirmaattootaaf kenname. Badhaasa maallaqaa dorgomtoota milkaa'anif.",
    },
    faqs: [
      {
        id: '1',
        question: {
          en: 'Can I pitch a startup as an individual?',
          om: "Start-up tokko ofiin agarsiisuu nan danda'aa?",
        },
        answer: {
          en: 'Yes, individuals and teams can compete.',
          om: "Eeyyee, namoonni tokkoo fi gartuuwwan dorgomuu danda'u.",
        },
      },
      {
        id: '2',
        question: {
          en: 'What is the prize?',
          om: 'Badhaasiin maal?',
        },
        answer: {
          en: 'Prize includes cash, mentorship, and networking opportunities.',
          om: 'Badhaasiin maallaqaa, gorsa fi carraa wal-baruu dabalatee.',
        },
      },
    ],
    partners: [
      {
        id: '1',
        name: 'Ethiopian Startup Hub',
        logo: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/esh',
      },
      {
        id: '2',
        name: 'Oromia Innovation Council',
        logo: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80&auto=format&fit=crop',
        website: 'https://example.com/oic',
      },
    ],
    gallery: [
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Startup pitch event',
          om: 'Taatee agarsiisa start-up',
        },
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Entrepreneurs networking',
          om: 'Wal-baruu daldaltoota',
        },
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop',
        caption: {
          en: 'Award ceremony',
          om: 'Sirna badhaasa',
        },
      },
    ],
  },
]
