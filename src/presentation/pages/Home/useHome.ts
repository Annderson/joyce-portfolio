import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface UseHomeTypes {
    onNavigate: (route: string) => void
}

const useHome = (): UseHomeTypes => {
  const navigate = useNavigate()

  const onNavigate = useCallback((route: string) => navigate(route), [navigate])

  return {
    onNavigate
  }
}

export default useHome
