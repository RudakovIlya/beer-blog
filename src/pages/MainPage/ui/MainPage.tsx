import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      {
        t('Hello world')
      }
    </div>
  )
}

export default MainPage
