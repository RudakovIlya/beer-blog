import { FC } from 'react'
import { clsx } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { MdOutlineBrightness6 } from 'react-icons/md'
import { Button } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface Props {
  className?: string
}

export const ThemeSwitcher: FC<Props> = ({ className }) => {
  const {
    onChangeTheme,
  } = useTheme()
  return (
    <Button
      variant={'clear'}
      onClick={onChangeTheme}
      className={clsx(cls.switcher, {}, className)}
    >
      <MdOutlineBrightness6 fill={'currentColor'} className={clsx(cls.icon, {}, className)} size={30} />
    </Button>
  )
}
