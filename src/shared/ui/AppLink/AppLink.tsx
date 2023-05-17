import {FC} from "react";
import {clsx} from "shared/lib";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export type AppLinkVariant = 'primary' | 'secondary'

interface Props extends LinkProps {
  className?: string
  variant?: AppLinkVariant
}

export const AppLink: FC<Props> = ({variant = 'primary', className, to, children, ...otherProps}) => {
  return (
    <Link {...otherProps} to={to} className={clsx(cls.applink, {}, cls[variant], className)}>
      {children}
    </Link>
  )
};