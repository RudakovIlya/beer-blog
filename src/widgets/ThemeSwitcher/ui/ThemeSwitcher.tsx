import {FC} from "react";
import {clsx} from "shared/lib";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {MdOutlineBrightness6} from "react-icons/md";

interface Props {
  className?: string
}

export const ThemeSwitcher: FC<Props> = ({className}) => {
  const {theme, onChangeTheme} = useTheme()
  return (
    <button onClick={onChangeTheme} className={clsx(cls.switcher, {}, className)}>
      <MdOutlineBrightness6 color={theme === 'dark' ? '#262626' : '#F3F6F9'} size={30}/>
    </button>
  )
};