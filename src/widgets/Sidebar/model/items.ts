import { IconType } from 'react-icons/lib'
import { ROUTES_PATHS } from 'app/providers/Router'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCardList } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

export interface SidebarItemType {
  path: string
  text: string
  icon: IconType
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: ROUTES_PATHS.main,
    text: 'home',
    icon: AiOutlineHome,
  },
  {
    path: ROUTES_PATHS.about,
    text: 'about',
    icon: BsCardList,
  },
  {
    path: ROUTES_PATHS.profile,
    text: 'profile',
    icon: CgProfile,
  },
]
