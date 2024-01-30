import Menu from '@/presentation/components/Menu'

import * as S from './styles'
import { Colors } from '@/styles'

import { gridInfos, GridInfo } from './helper'
import GridInfos from './components/GridInfos/Index'
import Modal from './components/Modal'
import useProject from './useProject'

const Projects = () => {
  const { open, imagesSelected, handleOpen, onExpendImages } = useProject()
  return (
    <Menu color={Colors.black}>
      <Modal openModal={open} images={imagesSelected} onClose={handleOpen} />
      <S.Container>
        <S.Title>Meus trabalhos</S.Title>
        <S.SubTitle>
          Logo abaixo poderá ser encontrado projetos, por mim desenvolvidos, em
          diferntes tipos de frentes
        </S.SubTitle>
        <S.GridContainer>
          {gridInfos.map((item: GridInfo, i: number) => (
            <GridInfos
              key={i}
              project={item}
              index={i}
              onExpendImages={() => onExpendImages(item.slides)}
            />
          ))}
        </S.GridContainer>
      </S.Container>
    </Menu>
  )
}

export default Projects
