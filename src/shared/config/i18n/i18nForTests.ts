import i18nForTests from 'i18next'
import { initReactI18next } from 'react-i18next'

i18nForTests
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

  })

export default i18nForTests
