import { FaArrowCircleRight } from 'react-icons/fa'
import { IconType } from 'react-icons'

export interface TextIconType {
  text: string
  Icon: IconType
}

export const descriptionsAbout: TextIconType[] = [
  {
    text: 'Minhas habilidaes',
    Icon: FaArrowCircleRight,
  },
  {
    text: 'Meus Trabalhos',
    Icon: FaArrowCircleRight,
  },
  {
    text: 'Meus hobbies',
    Icon: FaArrowCircleRight,
  },
  {
    text: 'Minhas aspirações e objetivos',
    Icon: FaArrowCircleRight,
  },
]
