import { FC } from 'react'
import { clsx } from 'shared/lib'
import { Button } from 'shared/ui/Button/Button'
// import { IoIosSettings } from 'react-icons/io'
import { useTheme } from 'app/providers/ThemeProvider'
import { useCollapsed } from 'shared/hooks'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'

import cls from './AppSettings.module.scss'

interface Props {
  className?: string
}

export const AppSettings: FC<Props> = ({ className }) => {
  const { theme } = useTheme()
  const {
    collapsed,
    onToggle,
  } = useCollapsed()

  return (
    <>
      <Button
        onClick={onToggle}
        className={cls.button}
        variant={'ghost'}
        data-testid={'Toggle-AppSettings'}
      >
        {/* <IoIosSettings className={clsx(cls.icon, {}, theme)} size={30} /> */}
      </Button>
      <div data-testid={'AppSettings'} className={clsx(cls.settings, { [cls.open]: collapsed }, className)}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </>
  )
}
