import { FaDotCircle, FaCircle } from 'react-icons/fa'
import { FaRegCircle, FaCircleHalfStroke } from 'react-icons/fa6'
import Menu from '@/presentation/components/Menu'

import * as S from './styles'
import { Colors } from '@/styles'

const About = () => (
  <Menu>
    <S.Root>
      <S.IntroductionContainer>
        <S.IntroductionTitle>Introdução sobre mim</S.IntroductionTitle>
        <S.IntroductionDescriptionContainer>
          <div>
            <div>
              <S.HighlighterIcon />
              <S.IntroductionDescription>
                Estudante em reta final de conclusão de curso superior, o curso
                é de bacharelado em Arquitetura e Urbanismo com foco em design
                de interiores pela universidade PUC-Campinas (PONTIFÍCIA
                UNIVERSIDADE CATÓLICA DE CAMPINAS).
              </S.IntroductionDescription>
            </div>
            <div>
              <S.HighlighterIcon />
              <S.IntroductionDescription>
                Apaixonada por arte, antes de me matricular em Arquitetura,
                cursei quase que completamente o curso Artes Visuais, também na
                PUC-Campinas. Acredito que esse seja um grande acréscimo para
                meus conhecimentos, por ser um tema que conversa muito bem com a
                arquitetura.
              </S.IntroductionDescription>
            </div>
            <div>
              <S.HighlighterIcon />
              <S.IntroductionDescription>
                Já atuei com projetos sociais nas comunidades de Campinas, a ONG
                em que atuei, possui diversoos trabalhos, mas vou destacar
                alguns em que estive envolvida e está um pouco mais ligada com
                as aréas que são foco desse portifolio, como artes, arquitetura
                e urbanismo: <br />
                <FaDotCircle color={Colors.orange} size={15} /> &nbsp; Discuções
                sobre o desenvolvimento do bairro e processos de regulamentação{' '}
                <br />
                <FaDotCircle color={Colors.orange} size={15} /> &nbsp; Processos
                de regulamentação e infraestrutura do bairro <br />
                <FaDotCircle color={Colors.orange} size={15} /> &nbsp; Design de
                folders e panfletos <br />
                <FaDotCircle color={Colors.orange} size={15} /> &nbsp; Trabalhos
                artisticos e culturais com crianças
              </S.IntroductionDescription>
            </div>
          </div>
        </S.IntroductionDescriptionContainer>
      </S.IntroductionContainer>
      <S.SkillsContainer>
        <S.IntroductionTitle>Habilidades</S.IntroductionTitle>
        <S.SkillsBody>
          <S.SkillsTitleContainer>
            <S.HighlighterIcon />
            <S.SubTile>IDIOMAS</S.SubTile>
          </S.SkillsTitleContainer>
          <S.SkillsContentContainer>
            <div>
              <S.Text>Postuguês</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Inglês</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircleHalfStroke color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Espanhol</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircleHalfStroke color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
              </div>
            </div>
          </S.SkillsContentContainer>
        </S.SkillsBody>
        <S.SkillsBody>
          <S.SkillsTitleContainer>
            <S.HighlighterIcon />
            <S.SubTile>CONHECIMENTOS</S.SubTile>
          </S.SkillsTitleContainer>
          <S.SkillsContentContainer>
            <div>
              <S.Text>Autocad</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircleHalfStroke color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Sketchup</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircleHalfStroke color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Lumion 8.0</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Revit</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircleHalfStroke color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Corel Draw</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Photoshop</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
              </div>
            </div>
            <div>
              <S.Text>Illustrator</S.Text>
              <div>
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircle color={Colors.orange} size={20} />
                <FaCircleHalfStroke color={Colors.orange} size={20} />
                <FaRegCircle color={Colors.orange} size={20} />
              </div>
            </div>
          </S.SkillsContentContainer>
        </S.SkillsBody>
      </S.SkillsContainer>
    </S.Root>
  </Menu>
)

export default About
