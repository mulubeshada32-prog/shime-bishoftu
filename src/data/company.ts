import type { LocalizedText } from '../i18n/types'

export interface CompanyInfo {
  mission: LocalizedText
  vision: LocalizedText
}

export const companyInfo: CompanyInfo = {
  mission: {
    en: 'To promote the events, places, and initiatives that matter to our community, connecting people with experiences and opportunities across Bishoftu and beyond.',
    om: "Taateewwan, bakkeewwan fi inisheetivoota hawaasa keenyaaf barbaachisoo ta'an beeksisuun, namoota Bishooftuu fi naannawa ishee keessatti muuxannoo fi carraawwan waliin wal qunnamsiisuu.",
  },
  vision: {
    en: 'To be a trusted promotional partner that brings local stories, events, and initiatives into focus for wider audiences.',
    om: "Michuu beeksisaa amanamaa ta'uun, seenaawwan naannoo, taateewwan fi inisheetivoota dhaggeeffattoota bal'aaf addaatti mul'isu.",
  },
}
