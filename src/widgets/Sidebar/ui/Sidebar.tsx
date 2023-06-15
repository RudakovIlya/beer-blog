import { FC } from 'react'
import { clsx } from 'shared/lib'
import { useCollapsed } from 'shared/hooks'

import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { MdArrowForwardIos } from 'react-icons/md'
import { AppNavLink } from 'shared/ui/AppNavLink/AppNavLink'
import { ROUTES_PATHS } from 'app/providers/Router'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCardList } from 'react-icons/bs'
import cls from './Sidebar.module.scss'

interface Props {
  className?: string
}

export const Sidebar: FC<Props> = ({ className }) => {
  const {
    collapsed,
    onToggle,
  } = useCollapsed()
  const { t } = useTranslation()
  return (
    <aside
      data-testid={'sidebar'}
      className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, className)}
    >
      <nav className={cls.items}>
        <AppNavLink className={cls.item} to={ROUTES_PATHS.main}>
          <AiOutlineHome className={cls.icon} />
          <span className={cls.link}>
            {t('home')}
          </span>
        </AppNavLink>
        <AppNavLink className={cls.item} to={ROUTES_PATHS.about}>
          <BsCardList className={cls.icon} />
          <span className={cls.link}>
            {t('about')}
          </span>
        </AppNavLink>

      </nav>
      <Button
        square
        background={'background-inverted'}
        type={'button'}
        onClick={onToggle}
        className={cls['collapsed-btn']}
        data-testid={'sidebar-toggle-button'}
      >
        <MdArrowForwardIos className={clsx('', { [cls.reverse]: !collapsed })} />
      </Button>
    </aside>
  )
}
