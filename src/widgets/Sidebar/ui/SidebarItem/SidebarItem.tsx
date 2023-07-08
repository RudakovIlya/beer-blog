import { useTranslation } from 'react-i18next'
import { AppNavLink } from 'shared/ui/AppNavLink/AppNavLink'

import { clsx } from 'shared/lib'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { SidebarItemType } from '../../model/items'
import cls from './SidebarItem.module.scss'

interface Props {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: Props) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)
  const {
    text, path, icon: Icon, isAuthOnly,
  } = item

  if (!isAuth && isAuthOnly) {
    return null
  }
  return (
    <AppNavLink className={clsx(cls.item, { [cls.collapsed]: collapsed })} to={path}>
      <Icon className={cls.icon} />
      <Text as={'span'} className={cls.link}>
        {t(text)}
      </Text>
    </AppNavLink>
  )
})
