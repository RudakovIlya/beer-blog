import {
  memo, useCallback, ReactNode, useState,
} from 'react'
import { clsx } from 'shared/lib'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { BiCopy } from 'react-icons/bi'
import { Text } from 'shared/ui/Text/Text'
import cls from './Code.module.scss'

interface Props {
  children: ReactNode | string
  className?: string
}

export const Code = memo(({
  children,
  className,
}: Props) => {
  const { t } = useTranslation()

  const [isCopy, setIsCopy] = useState(false)

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(children as string)
    setIsCopy(true)
  }, [children])
  const colorIcon = isCopy ? 'var(--color-typo-success)' : 'var(--color-typo-primary)'

  return (
    <pre className={clsx(cls.pre, {}, className)}>
      <Button onClick={isCopy ? undefined : onCopy} className={cls.btn} variant={'clear'}>
        <BiCopy color={colorIcon} />
        <Text variant={isCopy ? 'success' : 'primary'}>{isCopy ? t('copied') : t('copy')}</Text>
      </Button>
      <code className={clsx(cls.code, {}, className)}>
        {children}
      </code>
    </pre>
  )
})
