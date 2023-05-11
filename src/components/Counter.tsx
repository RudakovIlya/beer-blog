import React, {useState} from 'react'
import cls from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(prevState => prevState + 1)
  }
  return <div>
    <h1>{count}</h1>
    <button className={cls.button} onClick={onClick}>increment</button>
  </div>
};