import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

export const LangSwitcher = memo(() => {
  const {
    t,
    i18n,
  } = useTranslation()

  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      variant={'clear'}
      data-testid={'LangSwitcher'}
      onClick={toggleLang}
    >
      {t('language')}
    </Button>
  )
})
