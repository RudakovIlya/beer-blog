import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    // have a common namespace used around the full app
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: { en: { translations: {} } },
  })

export default i18n
