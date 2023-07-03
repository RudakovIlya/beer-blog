import {
  memo, PropsWithChildren, useCallback, useEffect,
} from 'react'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/hooks'

import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError, getProfileForm,
  getProfileIsLoading, getProfileReadonly,
  ProfileCard,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import { useSelector } from 'react-redux'
import { CurrencyType } from 'entities/Currency'
import { CountryType } from 'entities/Country'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface Props {
  className?: string
}

const initialReducer: ReducerList = {
  profile: profileReducer,
}

const ProfilePage = memo(({ className }: PropsWithChildren<Props>) => {
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadonly)

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ first: value }))
  }, [dispatch])

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    const validValue = value.replace(/\D/g, '')

    dispatch(profileActions.updateProfile({ age: Number(validValue) }))
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((value: CurrencyType) => {
    dispatch(profileActions.updateProfile({ currency: value }))
  }, [dispatch])

  const onChangeCountry = useCallback((value: CountryType) => {
    dispatch(profileActions.updateProfile({ country: value }))
  }, [dispatch])

  useDynamicModuleLoader({
    reducers: initialReducer,
    removeAfterUnmount: true,
  })

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <>
      <ProfilePageHeader />
      <ProfileCard
        data={formData}
        error={error}
        readOnly={readOnly}
        isLoading={isLoading}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeLastname={onChangeLastname}
        onChangeFirstname={onChangeFirstname}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </>
  )
})
export default ProfilePage
