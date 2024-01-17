import styled from 'styled-components'
import { Carousel as CarouselCurrent } from 'react-responsive-carousel'

import { Layout, Dimensions, Colors } from '@/styles'
import { BsArrowRightSquareFill } from 'react-icons/bs'

export const Root = styled(Layout.ContainerVertical)`
  background-color: ${Colors.black};
  padding-left: ${Dimensions.px.size50};
  overflow: hidden;
`
export const Container = styled(Layout.ContainerVertical)`
  align-items: center;
  background-color: ${Colors.black};
  color: ${Colors.black};
  height: ${Dimensions.vh.sizeVh100};
  justify-content: space-between;
  overflow: hidden;
  padding: 40px 0px 50px 0px;
  position: relative;
`

export const BackgroundImage = styled.img`
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 1;
`

export const PhotoContainer = styled.div`
  background-color: ${Colors.white};
  border-radius: ${Dimensions.per.sizeHalf};
  box-shadow: 1px 1px 14px 3px #aaa;
  height: ${Dimensions.px.size170};
  margin: 0 auto;
  width: ${Dimensions.px.size170};
  img {
    border: ${Dimensions.px.size5} solid ${Colors.white};
    border-radius: ${Dimensions.per.sizeHalf};
    height: ${Dimensions.px.size170};
    width: ${Dimensions.px.size170};
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

export const MyDataContainer = styled(Layout.ContainerVertical)`
  grid-gap: 20px;
  max-width: 90%;
  width: 100%;
`

export const TextName = styled.h2`
  align-items: center;
  display: flex;
  color: ${Colors.white};
  font-size: ${Dimensions.px.size60};
  font-weight: 500;
  line-height: 30px;
  text-align: left;
`

export const TextAge = styled.h4`
  color: ${Colors.white};
  font-size: ${Dimensions.px.size30};
  font-weight: 100;
  line-height: 30px;
  text-align: left;
`

export const BackgroundTransparent = styled(Layout.CenteredVertical)`
  background-color: ${Colors.orange};
  justify-content: space-evenly;
  height: 100%;
  padding: 25px;
  width: 100%;
`

export const TabContainer = styled(Layout.CenteredHorizontal)`
  height: ${Dimensions.vh.sizeVh100};
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
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

export const ReerectAboutIcon = styled(BsArrowRightSquareFill)`
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
    right: 50px;
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
  width: 100%;
  overflow: hidden;

  :hover {
    background-color: ${Colors.transparentBlack55};
  }
`