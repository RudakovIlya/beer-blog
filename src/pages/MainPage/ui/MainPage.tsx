import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'

const MainPage = memo(() => {
  const { t } = useTranslation()
  return (
    <Text>
      {t('Hello world')}
    </Text>
  )
})

export default MainPage
