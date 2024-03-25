import { FcInfo } from 'react-icons/fc'
import { HiPlus } from 'react-icons/hi'

import photo from '@/assets/img/profile.jpeg'
import tecnicas from '@/assets/img/tecnicas.png'
import project from '@/assets/img/project.png'
import urbanist from '@/assets/img/urbanist.png'
import inst from '@/assets/img/inst.png'
import logo from '@/assets/svg/vite.svg'

import TextIconGrid from '@/presentation/components/TextIconGrid'
import Menu from '@/presentation/components/Menu'

import { Colors, Dimensions } from '@/styles'
import locales from '@/locales/home'

import * as S from './styles'
import { descriptionsAbout, TextIconType } from './helper'
import useHome from './useHome'
import { RoutesName } from '@/main/routes/routesName'

const Home = () => {
  const { onNavigate } = useHome()
  return (
    <Menu color={Colors.brown73}>
      <S.Root>
        <S.Container>
          <S.ProfileContainer>
            <S.MyDataContainer>
              <S.PhotoLogo src={logo} alt="foto do logo" />
              <div>
                <S.TextName>Joyce Abeid</S.TextName>
                <S.TextAge>Arquitetura / Urbanismo / Paisagismo</S.TextAge>
              </div>
            </S.MyDataContainer>
            <S.PhotoProfile src={photo} alt="foto de rosto" />
          </S.ProfileContainer>

          <S.Description>{locales.description}</S.Description>
        </S.Container>
        <S.TabContainer>
          <S.TabContainerAbout>
            <S.GridTextIconContainer>
              <S.TitleAbout>Para</S.TitleAbout>
              <HiPlus color={Colors.blue} size={Dimensions.px.size60} />
            </S.GridTextIconContainer>
            <FcInfo size={Dimensions.px.size60} />
            <S.TitleAbout>Sobre mim</S.TitleAbout>
            <S.GridTextIconContainer>
              <S.Description>Clique aqui</S.Description>
              <S.RedirectAboutButton
                onClick={() => onNavigate(RoutesName.About)}
              >
                <S.RedirectAboutIcon />
              </S.RedirectAboutButton>
            </S.GridTextIconContainer>
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
          </S.BackgroundTransparent>
        </S.TabContainer>
        <S.Carousel
          stopOnHover
          autoPlay
          infiniteLoop
          showArrows
          showStatus={false}
          showThumbs={false}
        >
          <S.Slide>
            <S.SlideImg src={tecnicas} />
            <S.SlideLegend>
              Técnicas <br /> construtivas
              <S.RedirectCurouselButton
                onClick={() => onNavigate(RoutesName.Projects)}
              >
                <S.RedirectCorouselIcon />
              </S.RedirectCurouselButton>
            </S.SlideLegend>
          </S.Slide>
          <S.Slide>
            <S.SlideImg src={project} />
            <S.SlideLegend>
              Projetos
              <S.RedirectCurouselButton
                onClick={() => onNavigate(RoutesName.Projects)}
              >
                <S.RedirectCorouselIcon />
              </S.RedirectCurouselButton>
            </S.SlideLegend>
          </S.Slide>
          <S.Slide>
            <S.SlideImg src={urbanist} />
            <S.SlideLegend>
              Urbanismo
              <S.RedirectCurouselButton
                onClick={() => onNavigate(RoutesName.Projects)}
              >
                <S.RedirectCorouselIcon />
              </S.RedirectCurouselButton>
            </S.SlideLegend>
          </S.Slide>
          <S.Slide>
            <S.SlideImg src={inst} />
            <S.SlideLegend>
              Instalações
              <S.RedirectCurouselButton
                onClick={() => onNavigate(RoutesName.Projects)}
              >
                <S.RedirectCorouselIcon />
              </S.RedirectCurouselButton>
            </S.SlideLegend>
          </S.Slide>
        </S.Carousel>
      </S.Root>
    </Menu>
  )
}
export default Home
