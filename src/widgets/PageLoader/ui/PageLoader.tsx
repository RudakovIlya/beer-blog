import { clsx } from 'shared/lib'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface Props {
  className?: string
}

export const PageLoader = ({ className }: Props) => {
  return (
    <div className={clsx(cls['page-loader'], {}, className)}>
      <Loader size={'large'} />
    </div>
  )
}
