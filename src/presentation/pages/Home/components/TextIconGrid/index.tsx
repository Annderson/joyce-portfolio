import { Colors, Dimensions } from '@/styles'
import { IconType } from 'react-icons'

import * as S from './styles'

interface Props {
  text: string
  Icon: IconType
}

const TextIconGrid = ({ Icon, text = 'First Text' }: Props) => (
  <S.GridTextIconContainer>
    <Icon color={Colors.white} size={Dimensions.px.size25} />
    <S.DescriptionAbout>{text}</S.DescriptionAbout>
  </S.GridTextIconContainer>
)

export default TextIconGrid
