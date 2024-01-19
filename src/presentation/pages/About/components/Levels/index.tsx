import { Colors, Dimensions } from '@/styles'
import { useMemo } from 'react'
import { FaCircle } from 'react-icons/fa'
import { FaRegCircle, FaCircleHalfStroke } from 'react-icons/fa6'

interface Props {
  level: number
}

const Levels = ({ level }: Props) => {
  const levelList = useMemo(() => {
    const list = []
    for (let i = 1; i <= 5; i++) {
      if (i <= level)
        list.push(
          <FaCircle key={i} color={Colors.orange} size={Dimensions.px.size20} />
        )
      else if (i > level && level > i - 1)
        list.push(
          <FaCircleHalfStroke
            key={i}
            color={Colors.orange}
            size={Dimensions.px.size20}
          />
        )
      else
        list.push(
          <FaRegCircle
            key={i}
            color={Colors.orange}
            size={Dimensions.px.size20}
          />
        )
    }

    return list
  }, [level])

  return <div>{levelList}</div>
}

export default Levels
