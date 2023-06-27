import { memo } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface Props {
  className?: string
}

export const LangSwitcher = memo(({ className }: Props) => {
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
      className={clsx(cls.switcher, {}, className)}
    >
      {t('language')}
    </Button>
  )
})
