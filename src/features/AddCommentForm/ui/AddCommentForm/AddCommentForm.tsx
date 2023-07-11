import { FormEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/hooks'
import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormData'

interface Props {
  isLoading?: boolean
  onSubmit?: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo((props: Props) => {
  const { onSubmit, isLoading } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const text = useSelector(getAddCommentFormText)

  const onChange = useCallback((text: string) => {
    dispatch(addCommentFormActions.setText(text))
  }, [dispatch])

  const onFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(text)
    dispatch(addCommentFormActions.setText(''))
  }, [dispatch, onSubmit, text])

  useDynamicModuleLoader({
    reducers,
  })

  return (
    <form onSubmit={onFormSubmit} className={cls['add-form']}>
      <Input
        readOnly={isLoading}
        className={cls.input}
        wrapperClassName={cls.input}
        value={text}
        onChange={onChange}
        placeholder={t('enter comment text')}
      />
      <Button isLoading={isLoading} type={'submit'} variant={'secondary'}>{t('send')}</Button>
    </form>
  )
})

export default AddCommentForm
