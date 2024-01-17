import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { RoutesName } from '@/main/routes/routesName'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <S.Container onClick={() => navigate(RoutesName.Welcome)}>
      <S.Title>
        Portfólio de Joyce Abeid <br/>  <br/> Seja bem vindo!
      </S.Title>
      <S.CircleIcon />
      <S.HandIcon />
    </S.Container>
  )
}

export default Welcome
