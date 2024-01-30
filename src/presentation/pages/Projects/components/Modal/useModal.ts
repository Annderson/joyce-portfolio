import { useCallback, useEffect, useState } from 'react'

interface Props {
  images: string[]
  openModal: boolean
  onClose: () => void
}

interface UseModalTypes {
  index: number
  open: boolean
  handleBack: () => void
  handleForward: () => void
  onShowOrHide: () => void
}

const useModal = ({ openModal, images, onClose }: Props): UseModalTypes => {
  const [index, setIndex] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)

  const handleBack = useCallback(() => {
    if (index === 0) return
    setIndex(index - 1)
  }, [index])

  const handleForward = useCallback(() => {
    if (index === images.length-1) return
    setIndex(index + 1)
  }, [images.length, index])

  const onShowOrHide = useCallback(() => {
    setOpen(!open)
    onClose()
  }, [onClose, open])

  useEffect(() => {
    setOpen(openModal)
  }, [openModal])

  useEffect(() => {
    if (images.length > 0) {
      setIndex(0)
    }
  }, [images])

  return {
    index,
    open,
    handleBack,
    handleForward,
    onShowOrHide,
  }
}

export default useModal
