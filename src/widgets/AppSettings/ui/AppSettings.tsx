import { FC } from 'react'
import { clsx } from 'shared/lib'
import { Button } from 'shared/ui/Button/Button'
import { IoIosSettings } from 'react-icons/io'

import { useCollapsed } from 'shared/hooks'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'

import { useTheme } from 'app/providers/ThemeProvider'
import cls from './AppSettings.module.scss'

interface Props {
  className?: string
}

export const AppSettings: FC<Props> = ({ className }) => {
  const { theme } = useTheme()
  const { collapsed, onToggle } = useCollapsed()
  return (
    <>
      <Button data-testid={'Toggle-AppSettings'} onClick={onToggle} className={cls.button}>
        <IoIosSettings color={theme === 'dark' ? '#262626' : '#F3F6F9'} size={30} />
      </Button>
      <div data-testid={'AppSettings'} className={clsx(cls.settings, { [cls.open]: collapsed }, className)}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </>
  )
}
