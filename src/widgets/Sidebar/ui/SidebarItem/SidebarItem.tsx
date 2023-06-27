import { useTranslation } from 'react-i18next'
import { AppNavLink } from 'shared/ui/AppNavLink/AppNavLink'

import { clsx } from 'shared/lib'
import { memo } from 'react'
import { SidebarItemType } from '../../model/items'
import cls from './SidebarItem.module.scss'

interface Props {
  item?: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: Props) => {
  const { t } = useTranslation()
  const { text, path, icon: Icon } = item
  return (
    <AppNavLink className={clsx(cls.item, { [cls.collapsed]: collapsed })} to={path}>
      <Icon className={cls.icon} />
      <span className={cls.link}>
        {t(text)}
      </span>
    </AppNavLink>
  )
})
