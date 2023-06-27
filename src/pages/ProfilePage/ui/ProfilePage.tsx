import { memo, PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { useDynamicModuleLoader } from 'shared/hooks'
import { profileReducer } from 'entities/Profile'
import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'

interface Props {
  className?: string
}

const initialReducer: ReducerList = {
  profile: profileReducer,
}

const ProfilePage = memo(({ className }: PropsWithChildren<Props>) => {
  useDynamicModuleLoader({
    reducers: initialReducer,
    removeAfterUnmount: true,
  })

  return (
    <div className={clsx('', {}, className)}>
      ProfilePage
    </div>
  )
})
export default ProfilePage
