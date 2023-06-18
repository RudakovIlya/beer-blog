import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Counter />
      {t('Hello world')}
    </div>
  )
}

export default MainPage
