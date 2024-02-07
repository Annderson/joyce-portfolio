import styled from 'styled-components'
import { Carousel as CarouselCurrent } from 'react-responsive-carousel'

import { Layout, Dimensions, Colors } from '@/styles'
import { BsArrowRightSquareFill } from 'react-icons/bs'

export const Root = styled(Layout.ContainerVertical)`
  background: linear-gradient(180deg, ${Colors.black}, #0a0908, #242421, #353535);
  overflow: hidden;
`
export const Container = styled(Layout.ContainerVertical)`
  align-items: center;
  justify-content: space-between;
  color: ${Colors.black};
  height: ${Dimensions.vh.sizeVh100};
  margin-bottom: ${Dimensions.px.size100};
  overflow: hidden;
  padding: 0px 0px 50px 0px;
  position: relative;

  @media (max-width: 700px) {
    height: 100%;
    grid-gap: 40px;
  }
`

export const BackgroundImage = styled.img`
  height: ${Dimensions.vh.sizeVh100};
  position: absolute;
  width: ${Dimensions.per.sizeFull};
  z-index: 1;
`

export const PhotoContainer = styled(Layout.CenteredHorizontal)`
  background: linear-gradient(90deg, #242421, #333533, #242423);
  //border-radius: ${Dimensions.per.sizeHalf};
  height: ${Dimensions.px.size300};
  width: ${Dimensions.per.sizeFull};
  img {
    border: ${Dimensions.px.size10} solid #000;
    border-radius: ${Dimensions.per.sizeHalf};
    height: ${Dimensions.px.size300};
    margin-bottom: -${Dimensions.px.size100};
    width: ${Dimensions.px.size300};
  }
`

export const Description = styled.h4`
  color: ${Colors.white};
  font-size: ${Dimensions.px.size25};
  font-family: 'Voltaire';
  line-height: 40px;
  text-align: center;
  max-width: 50%;
  width: 100%;

  @media (max-width: 700px) {
    max-width: 90%;
  }
`

export const MyDataContainer = styled(Layout.Container)`
  justify-content: flex-start;
  max-width: 90%;
  width: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    grid-gap: 40px;
    margin: 30px auto;
  }

  img {
    height: 180px;
    width: 200px;
    @media (max-width: 700px) {
      height: 130px;
      width: 150px;
    }
  }

  > div {
    display: grid;
    grid-gap: 20px;
  }
`

export const TextName = styled.h1`
  align-items: center;
  display: flex;
  color: ${Colors.white};
  font-size: ${Dimensions.px.size60};
  font-weight: 500;
  line-height: 50px;
  text-align: left;
  @media (max-width: 700px) {
    text-align: center;
  }
`

export const TextAge = styled.h4`
  color: ${Colors.white};
  font-size: ${Dimensions.px.size30};
  font-weight: 100;
  line-height: 30px;
  text-align: left;
  @media (max-width: 700px) {
    text-align: center;
  }
`

export const BackgroundTransparent = styled(Layout.CenteredVertical)`
  background-color: ${Colors.orange};
  justify-content: space-evenly;
  height: 100%;
  padding: 25px;
  width: 100%;
  @media (max-width: 700px) {
    grid-gap: 40px;
    padding: 50px 25px;
  }
`

export const TabContainer = styled(Layout.CenteredHorizontal)`
  height: ${Dimensions.vh.sizeVh100};
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;

  @media (max-width: 700px) {
    grid-gap: ${Dimensions.px.size70};
    grid-template-columns: 100%;
  }
`

export const TabContainerAbout = styled(Layout.CenteredVertical)`
  grid-gap: ${Dimensions.px.size40};
`

export const GridTextIconContainer = styled(Layout.CenteredHorizontal)`
  grid-gap: ${Dimensions.px.size20};
`

export const TitleAbout = styled.h2`
  color: ${Colors.white};
  font-size: ${Dimensions.px.size60};
  font-weight: 500;
  line-height: 30px;
`

export const SubTitleAbout = styled.h2`
  color: ${Colors.white};
  font-size: ${Dimensions.px.size40};
  font-family: 'Voltaire';
  font-weight: 500;
  line-height: 40px;
`

export const RedirectAboutButton = styled.button`
  background-color: ${Colors.transparent};
  border: none;
  color: ${Colors.white};
  :hover {
    color: ${Colors.transparentWhiteAa};
  }
`

export const RedirectAboutIcon = styled(BsArrowRightSquareFill)`
  border-radius: 8px;
  box-shadow: 0px 0px 3px 1px #555;
  color: ${Colors.white};
  cursor: pointer;
  height: ${Dimensions.px.size60};
  width: ${Dimensions.px.size60};

  :hover {
    color: ${Colors.transparentWhiteAa};
  }
`

export const Carousel = styled(CarouselCurrent)`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;

  .carousel .slide {
  }
  .control-next.control-arrow {
    //right: 50px;
  }
`

export const Slide = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const SlideImg = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const SlideLegend = styled(Layout.CenteredVertical)`
  height: 100%;
  position: absolute;
  align-items: center;
  background-color: #00000077;
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  font-size: 30px;
  color: ${Colors.white};
  justify-content: center;
  white-space: normal;
  word-wrap: break-word;
  width: 100%;
  overflow: hidden;

  :hover {
    background-color: ${Colors.transparentBlack55};
  }
`
