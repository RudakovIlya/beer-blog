import { CSSProperties } from 'react'
import { clsx } from 'shared/lib'

type Props = {
  className?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
};

export const SkeletonBrick = ({
  className,
  width = '100%',
  height = '50px',
}: Props) => {
  return (
    <div
      className={clsx('skeleton', undefined, className)}
      style={{
        width,
        height,
      }}
    />
  )
}
