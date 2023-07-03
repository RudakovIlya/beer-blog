import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'

const AboutPage = memo(() => {
  const { t } = useTranslation('about')
  return (
    <Text>
      {t('About the site')}
    </Text>
  )
})

export default AboutPage
