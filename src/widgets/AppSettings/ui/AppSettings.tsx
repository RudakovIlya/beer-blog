import {FC} from "react";
import {clsx} from "shared/lib";
import cls from './AppSettings.module.scss'
import {Button} from "shared/ui/Button/Button";
import {IoIosSettings} from "react-icons/io";
import {useTheme} from "app/providers/ThemeProvider";
import {LangSwitcher} from "widgets/LangSwitcher";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useCollapsed} from "shared/hooks";

interface Props {
  className?: string
}

export const AppSettings: FC<Props> = ({className}) => {
  const {theme} = useTheme()
  const {collapsed, onToggle} = useCollapsed()
  return (
    <>
      <Button onClick={onToggle} className={cls.button}>
        <IoIosSettings color={theme === 'dark' ? '#262626' : '#F3F6F9'} size={30}/>
      </Button>
      <div className={clsx(cls.settings, {[cls.open]: collapsed}, className)}>
        <LangSwitcher/>
        <ThemeSwitcher/>
      </div>
    </>
  )
};