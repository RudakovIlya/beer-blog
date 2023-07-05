import { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { ROUTES_PATHS } from '../config/routeConfig'

export const RequireAuth = ({ children }: PropsWithChildren<any>) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  if (!auth) {
    return <Navigate to={ROUTES_PATHS.main} state={{ from: location }} replace />
  }

  return children
}
