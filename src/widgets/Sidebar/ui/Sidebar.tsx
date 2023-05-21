import { FC } from 'react'
import { clsx } from 'shared/lib'
import { useCollapsed } from 'shared/hooks'

import cls from './Sidebar.module.scss'

interface Props {
  className?: string
}

export const Sidebar: FC<Props> = ({ className }) => {
  const { collapsed, onToggle } = useCollapsed()

  return (
    <aside className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, className)}>
      <button type={'button'} onClick={onToggle}>{'Collapsed'}</button>
    </aside>
  )
}
