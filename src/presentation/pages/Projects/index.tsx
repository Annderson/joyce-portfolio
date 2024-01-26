import Menu from '@/presentation/components/Menu'

import * as S from './styles'
import { Colors } from '@/styles'
import { Carousel } from 'react-responsive-carousel'

import { gridInfos } from './helper'

const Projects = () => (
  <Menu color={Colors.black}>
    <S.Container>
      <S.Title>Meus trabalhos</S.Title>
      <S.SubTitle>
        Logo abaixo poderá ser encontrado projetos, por mim desenvolvidos, em
        diferntes tipos de frentes
      </S.SubTitle>
      <S.GridContainer>
        {gridInfos.map((item, i) => (
          <>
            {i !== 0 && (
              <>
                <S.SepareteThick />
                <S.SepareteThin />
              </>
            )}
            <S.Grid>
              <div>
                <S.GridTitle>{item.description}</S.GridTitle>
                <S.GridTitle>{item.title}</S.GridTitle>
                <S.GridText>{item.text}</S.GridText>
              </div>
              <div>
                <Carousel
                  stopOnHover
                  autoPlay
                  infiniteLoop
                  showArrows={false}
                  showStatus={false}
                  showThumbs={false}
                  transitionTime={4}
                >
                  {item.slides.map((item: string) => (
                    <S.Slide key={item}>
                      <S.SlideImg src={item} />
                    </S.Slide>
                  ))}
                </Carousel>
              </div>
            </S.Grid>
          </>
        ))}
      </S.GridContainer>
    </S.Container>
  </Menu>
)

export default Projects
