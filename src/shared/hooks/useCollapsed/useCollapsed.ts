import { useCallback, useState } from 'react'

export const useCollapsed = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = useCallback(() => {
    setCollapsed((prevState) => { return !prevState })
  }, [setCollapsed])

  return {
    collapsed,
    onToggle,
  }
}
