import { PropsWithChildren } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

interface Props {
  className?: string
}

export const Counter = ({ className }: PropsWithChildren<Props>) => {
  const dispatch = useDispatch()
  const counter = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <div>
      <h1 data-testid={'value-title'}>
        {counter}
      </h1>
      <Button data-testid={'increment-btn'} onClick={increment}>
        +
      </Button>
      <Button data-testid={'decrement-btn'} onClick={decrement}>
        -
      </Button>
    </div>
  )
}
