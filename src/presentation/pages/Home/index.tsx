import { FcInfo } from 'react-icons/fc'
import { HiPlus } from 'react-icons/hi'

import photo from '@/assets/img/foto.jpeg'
import tecnicas from '@/assets/img/tecnicas.png'
import project from '@/assets/img/project.png'
import urbanist from '@/assets/img/urbanist.png'
import inst from '@/assets/img/inst.png'

import Menu from '@/presentation/components/Menu'
import { Colors, Dimensions } from '@/styles'
import locales from '@/locales/home'

import * as S from './styles'
import TextIconGrid from './components/TextIconGrid'
import { descriptionsAbout, TextIconType } from './helper'
import useHome from './useHome'
import { RoutesName } from '@/main/routes/routesName'

const Home = () => {
  const { onNavigate } = useHome()
  return (
    <Menu>
      <S.Root>
        <S.Container>
          <S.PhotoContainer>
            <img src={photo} alt='foto de rostoß' />
          </S.PhotoContainer>
          <S.MyDataContainer>
            <S.TextName>Joyce Abeid</S.TextName>
            <S.TextAge>30 anos, casada</S.TextAge>
          </S.MyDataContainer>
          <S.Description>{locales.description}</S.Description>
        </S.Container>
        <S.TabContainer>
          <S.TabContainerAbout>
            <S.GridTextIconContainer>
              <S.TitleAbout>Para</S.TitleAbout>
              <HiPlus color={Colors.blue} size={Dimensions.px.size60} />
            </S.GridTextIconContainer>

            <FcInfo size={Dimensions.px.size60} />
            <S.TitleAbout>Sobre</S.TitleAbout>
            <S.SubTitleAbout>MIM</S.SubTitleAbout>
          </S.TabContainerAbout>
          <S.BackgroundTransparent>
            <S.SubTitleAbout>
              Aqui você poderá conhecer mais sobre:
            </S.SubTitleAbout>
            <div>
              {descriptionsAbout.map((item: TextIconType) => (
                <TextIconGrid
                  key={item.text}
                  Icon={item.Icon}
                  text={item.text}
                />
              ))}
            </div>
            <S.GridTextIconContainer>
              <S.Description>Para saber mais clique aqui</S.Description>
              <S.ReerectAboutIcon
                onClick={() => onNavigate(RoutesName.About)}
              />
            </S.GridTextIconContainer>
          </S.BackgroundTransparent>
        </S.TabContainer>
        <S.Carousel
          autoPlay
          infiniteLoop
          showArrows
          verticalSwipe="natural"
          axis="vertical"
          showThumbs={false}
        >
          <S.Slide>
            <S.SlideImg src={tecnicas} />
            <S.SlideLegend>
              Técnicas construtivas
              <S.ReerectAboutIcon
                onClick={() => onNavigate(RoutesName.Projects)}
              />
            </S.SlideLegend>
          </S.Slide>
          <S.Slide>
            <S.SlideImg src={project} />
            <S.SlideLegend>
              Projetos
              <S.ReerectAboutIcon
                onClick={() => onNavigate(RoutesName.Projects)}
              />
            </S.SlideLegend>
          </S.Slide>
          <S.Slide>
            <S.SlideImg src={urbanist} />
            <S.SlideLegend>
              Urbanismo
              <S.ReerectAboutIcon
                onClick={() => onNavigate(RoutesName.Projects)}
              />
            </S.SlideLegend>
          </S.Slide>
          <S.Slide>
            <S.SlideImg src={inst} />
            <S.SlideLegend>
              Instalações
              <S.ReerectAboutIcon
                onClick={() => onNavigate(RoutesName.Projects)}
              />
            </S.SlideLegend>
          </S.Slide>
        </S.Carousel>
      </S.Root>
    </Menu>
  )
}
export default Home
