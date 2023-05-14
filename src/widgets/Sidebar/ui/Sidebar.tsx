import {FC, useState} from "react";
import {clsx} from "shared/lib";
import cls from './Sidebar.module.scss'

interface Props {
  className?: string
}

export const Sidebar: FC<Props> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <aside className={clsx(cls.sidebar, {[cls.collapsed]: collapsed}, className)}>
      <button onClick={onToggle}>Collapsed</button>
    </aside>
  )
};