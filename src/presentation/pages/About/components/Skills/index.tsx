import * as S from './styles'
import Levels from '../Levels'

interface Props {
  data: any
  title: string
}

const Skills = ({ data, title }: Props) => {
  return (
    <S.SkillsBody>
      <S.SkillsTitleContainer>
        <S.HighlighterIcon />
        <S.SubTile>{title}</S.SubTile>
      </S.SkillsTitleContainer>
      <S.SkillsContentContainer>
        {data.map((item: any) => (
          <S.SkillsContent key={item.name}>
            {item.src ? (
              <S.Logo src={item.src} alt={item.name} />
            ) : (
              <S.Text>{item.name}</S.Text>
            )}
            <Levels level={item.level}/>
          </S.SkillsContent>
        ))}
      </S.SkillsContentContainer>
    </S.SkillsBody>
  )
}

export default Skills
