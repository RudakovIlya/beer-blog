import { CSSProperties } from 'react'
import { clsx } from 'shared/lib'
import cls from './SkeletonCircle.module.scss'

type Props = {
  className?: string;
  size: CSSProperties['width'] & CSSProperties['height'];
};

export const SkeletonCircle = ({
  className,
  size,
}: Props) => {
  return (
    <div
      className={clsx('skeleton', undefined, cls['skeleton-circle'], className)}
      style={{
        width: size,
        height: size,
      }}
    />
  )
}
