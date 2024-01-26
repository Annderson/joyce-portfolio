import { useMemo } from 'react'

import * as S from './styles'

interface Props {
  level: number
}

const Levels = ({ level }: Props) => {
  const levelList = useMemo(() => {
    const list = []
    for (let i = 1; i <= 5; i++) {
      if (i <= level) list.push(<S.CircleFullIcon key={i} />)
      else if (i > level && level > i - 1)
        list.push(<S.CircleHalfIcon key={i} />)
      else list.push(<S.CircleEmptyIcon key={i} />)
    }

    return list
  }, [level])

  return <S.Container>{levelList}</S.Container>
}

export default Levels
