import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface UseMenuTypes {
  open: boolean
  currentRoute: string
  onOpen: () => void
  onNavigate: (e: MouseEvent) => void
}

const useMenu = (): UseMenuTypes => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setMenu] = useState<boolean>(false)
  const [currentRoute, setCurrentRoute] = useState<string>('')

  const onOpen = useCallback(() => setMenu(!open), [open])

  const onNavigate = useCallback((e: MouseEvent) => {
    const { id } = e.target as HTMLHeadingElement
    navigate(id)
  }, [navigate])

  useEffect(() => {
    if (location?.pathname) {
      setCurrentRoute(location.pathname)
    }
  }, [location])

  return {
    open,
    currentRoute,
    onOpen,
    onNavigate
  }
}

export default useMenu
