import { GridInfo } from '@/presentation/pages/Projects/helper'
import * as S from './styles'

interface Props {
    index: number
  project: GridInfo
  onExpendImages: () => void
}

const GridInfos = ({ project, index, onExpendImages }: Props) => (
  <>
    {index !== 0 && (
      <>
        <S.SepareteThick />
        <S.SepareteThin />
      </>
    )}
    <S.Grid>
      <div>
        <S.GridTitle>{project.description}</S.GridTitle>
        <S.GridTitle>{project.title}</S.GridTitle>
        <S.GridText>{project.text}</S.GridText>
      </div>
      <div>
        <S.Carousel
          autoPlay
          infiniteLoop
          stopOnHover={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {project.slides.map((img: string) => (
            <S.Slide key={img} onClick={onExpendImages}>
              <S.SlideImg src={img} />
            </S.Slide>
          ))}
        </S.Carousel>
      </div>
    </S.Grid>
  </>
)

export default GridInfos
