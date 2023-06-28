import { useCallback, useState } from 'react'

export const useModals = <D = {} | null>() => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState<D>()

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = useCallback((data: D) => {
    setIsOpen(true)
    if (data && isOpen) {
      setModalData(data)
    }
  }, [isOpen])

  return {
    isOpen, modalData, onClose, onOpen,
  }
}
