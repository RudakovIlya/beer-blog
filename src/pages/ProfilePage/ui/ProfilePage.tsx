import { memo, PropsWithChildren, useEffect } from 'react'
import { clsx } from 'shared/lib'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/hooks'

import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'

interface Props {
  className?: string
}

const initialReducer: ReducerList = {
  profile: profileReducer,
}

const ProfilePage = memo(({ className }: PropsWithChildren<Props>) => {
  const dispatch = useAppDispatch()

  useDynamicModuleLoader({
    reducers: initialReducer,
    removeAfterUnmount: true,
  })

  useEffect(() => {
    // dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <div className={clsx('', {}, className)}>
      <ProfileCard />
    </div>
  )
})
export default ProfilePage
