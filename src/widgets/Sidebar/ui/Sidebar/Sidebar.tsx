import { memo, useMemo } from 'react'
import { clsx } from 'shared/lib'
import { useCollapsed } from 'shared/hooks'

import { Button } from 'shared/ui/Button/Button'
import { MdArrowForwardIos } from 'react-icons/md'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'
import { SidebarItemsList } from '../../model/items'

interface Props {
  className?: string
}

export const Sidebar = memo(({ className }: Props) => {
  const {
    collapsed,
    onToggle,
  } = useCollapsed()

  const sidebarItems = useMemo(() => {
    return SidebarItemsList.map((item) => {
      return <SidebarItem key={item.path} collapsed={collapsed} item={item} />
    })
  }, [collapsed])

  return (
    <aside
      data-testid={'sidebar'}
      className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, className)}
    >
      <nav className={cls.items}>
        {sidebarItems}
      </nav>
      <Button
        variant={'ghost'}
        type={'button'}
        onClick={onToggle}
        className={cls['collapsed-btn']}
        data-testid={'sidebar-toggle-button'}
      >
        <MdArrowForwardIos className={clsx('', { [cls.reverse]: !collapsed })} />
      </Button>
    </aside>
  )
})
