import { useCallback, useState } from 'react'

export const useModals = <D = {} | null>() => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState<D>(null)

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = useCallback((data: D = null) => {
    setIsOpen(true)
    if (data && isOpen) {
      setModalData(data)
    }
  }, [isOpen])

  return {
    isOpen, modalData, onClose, onOpen,
  }
}
