import { useCallback, useState } from 'react'

interface UseProjectTypes {
  imagesSelected: string[]
  open: boolean
  handleOpen: () => void
  onExpendImages: (images: string[]) => void
}

const useProject = (): UseProjectTypes => {
  const [imagesSelected, setImagesSelected] = useState<string[]>([])
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = useCallback(() => setOpen(!open), [open])

  const onExpendImages = useCallback((images: string[]) => {
    setImagesSelected(images)
    handleOpen()
  }, [handleOpen])

  return { imagesSelected, open, handleOpen, onExpendImages }
}

export default useProject
