import { FaDotCircle } from 'react-icons/fa'
import Menu from '@/presentation/components/Menu'
import { Colors } from '@/styles'
import folder from '@/assets/img/folder3.jpeg'
import locales from '@/locales/about'

import * as S from './styles'
import { knowledgeList, languagesList } from './helper'
import Skills from './components/Skills'

const About = () => (
  <Menu color='#ff6d00'>
    <S.Root>
      <S.IntroductionContainer>
        <S.FolderImg src={folder} />
        <S.Header />
        <S.IntroductionTitle>{locales.intruduceAboutMe}</S.IntroductionTitle>
        <S.IntroductionDescriptionContainer>
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <S.HighlighterIcon />
              <S.IntroductionDescription>
                Estudante em reta final de conclusão de curso superior, o curso
                é de bacharelado em Arquitetura e Urbanismo com foco em
                paisagismo pela universidade PUC-Campinas (PONTIFÍCIA
                UNIVERSIDADE CATÓLICA DE CAMPINAS).
              </S.IntroductionDescription>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <S.HighlighterIcon />
              <S.IntroductionDescription>
                Apaixonada por arte, antes de me matricular em Arquitetura,
                cursei quase que completamente o curso Artes Visuais, também na
                PUC-Campinas. Acredito que esse seja um grande acréscimo para
                meus conhecimentos, por ser um tema que conversa muito bem com a
                arquitetura.
              </S.IntroductionDescription>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
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
        <S.IntroductionTitle>{locales.skills}</S.IntroductionTitle>
        <Skills title={locales.knowledge.toUpperCase()} data={knowledgeList} />
        <Skills title={locales.languages.toUpperCase()} data={languagesList} />
      </S.SkillsContainer>
    </S.Root>
  </Menu>
)

export default About
