import type { LocalizedText } from '../i18n/types'

export interface FAQItem {
  id: string
  question: LocalizedText
  answer: LocalizedText
}

export const faqs: FAQItem[] = [
  {
    id: 'event-types',
    question: {
      en: 'What types of events do you promote?',
      om: 'Gosa taatee akkamii dhiheessitu?',
    },
    answer: {
      en: 'We promote a wide range of events including cultural festivals, ceremonies, tourism activities, development initiatives, government ceremonies, community activities, and selected charity initiatives.',
      om: 'Taatee adda addaa kan akka ayyaana aadaa, sirna, hojii tuurizimii, karoora misoomaa, sirna mootummaa, hojii hawaasaa fi karoora arjoomaa filataman dhiheessina.',
    },
  },
  {
    id: 'operating-region',
    question: {
      en: 'Where do you operate?',
      om: 'Eessatti hojjattu?',
    },
    answer: {
      en: 'We are based in Bishoftu and primarily serve Bishoftu and the surrounding region in Oromia, Ethiopia.',
      om: 'Bishooftuu keessatti argamna fi jalqabarratti Bishooftuu fi naannoo ishee Oromiyaa, Itoophiyaa tajaajilna.',
    },
  },
  {
    id: 'promotion-availability',
    question: {
      en: 'How can I request event promotion?',
      om: "Dhiheessa taatee akkamittan gaafachuu danda'a?",
    },
    answer: {
      en: 'You can contact us through the contact page or email us directly. We will discuss your event and determine how we can best support its promotion.',
      om: "Fuula quunnamtii irraa ykn email nuuf erguun nu qunnamuu dandeessu. Taatee keessan irratti mari'annee akkamitti dhiheessa isaa gargaaruu akka dandeenyu ilaalla.",
    },
  },
  {
    id: 'government-ceremonies',
    question: {
      en: 'Do you cover government and public ceremonies?',
      om: 'Sirna mootummaa fi hawaasaa haguugduu?',
    },
    answer: {
      en: 'Yes, we promote government and public ceremonies, helping to ensure they reach the appropriate audiences.',
      om: 'Eeyyee, sirna mootummaa fi hawaasaa dhiheessina, dhaggeeffattoota sirrii bira gahan gargaaruu.',
    },
  },
  {
    id: 'tourism-promotion',
    question: {
      en: 'How do you promote tourism destinations?',
      om: 'Iddoowwan tuurizimii akkamitti dhiheessitu?',
    },
    answer: {
      en: 'We create promotional content that highlights the natural beauty and activities around tourism destinations, using our local knowledge to present them authentically.',
      om: 'Qabeenya dhiheessa kan miidhagina uumamaa fi hojiiwwan iddoo tuurizimii calaqqisiisu uumna, beekumsa naannoo keenyaa fayyadamuun akkaataa dhugaan dhiheessina.',
    },
  },
  {
    id: 'development-promotion',
    question: {
      en: 'Do you promote development projects?',
      om: 'Pirojektii misoomaa dhiheessituu?',
    },
    answer: {
      en: 'Yes, we promote public construction and development projects, helping communicate their progress and impact to the community.',
      om: 'Eeyyee, pirojektii ijaarsa hawaasaa fi misoomaa dhiheessina, guddina fi dhiibbaa isaanii hawaasaaf ibsuuf gargaaruu.',
    },
  },
  {
    id: 'promotion-vs-organization',
    question: {
      en: 'Do you organize events or just promote them?',
      om: 'Taatee qindeessituu moo dhiheessitu qofa?',
    },
    answer: {
      en: 'Our primary focus is promotion. We help bring visibility to events, places, and initiatives through professional promotional support.',
      om: "Xiyyeeffannaan keenya jalqabarratti dhiheessa. Gargaarsa dhiheessa ogeessaa taatee, iddoo fi karooraaf mul'ata fiduuf gargaarina.",
    },
  },
  {
    id: 'contact',
    question: {
      en: 'How can I contact you?',
      om: "Akkamittan isin qunnamuu danda'a?",
    },
    answer: {
      en: 'You can reach us through the contact page, by email, or by phone. All contact details are available in the footer and contact page.',
      om: 'Fuula quunnamtii, email ykn bilbilaan nu argachuu dandeessu. Odeeffannoon quunnamtii hundi fuula quunnamtii fi jala irratti argama.',
    },
  },
]
