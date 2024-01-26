import styled from 'styled-components'
import { Carousel as CarouselCurrent } from 'react-responsive-carousel'

import { Colors, Dimensions, Layout } from '@/styles'

export const Container = styled(Layout.ContainerVertical)`
  align-items: center;
  // background-color: #210f04;
  background: linear-gradient(0deg, #432818, #210f04, #352208, #0a0908);
  color: ${Colors.white};
  grid-gap: ${Dimensions.px.size20};
  overflow: hidden;
  padding: ${Dimensions.px.size35} ${Dimensions.px.size20};

  @media (max-width: 600px) {
    padding: ${Dimensions.px.size0};
  }
`

export const Title = styled.h1`
  font-size: ${Dimensions.px.size40};
  @media (max-width: 1100px) {
    padding: ${Dimensions.px.size16};
    text-align: center;
  }
`

export const SubTitle = styled.h3`
  font-family: 'Rajdhani-SemiBold';
  font-size: ${Dimensions.px.size25};
  max-width: 1200px;
  text-align: center;

  @media (max-width: 600px) {
    padding: ${Dimensions.px.size16};
  }
`

export const GridContainer = styled(Layout.ContainerVertical)`
  background-color: #ede0d4;
  border-radius: 5px;
  color: ${Colors.black};
  height: ${Dimensions.per.sizeFull};
  margin-top: ${Dimensions.px.size25};
  max-width: 1450px;
  width: ${Dimensions.per.sizeFull};

  @media (max-width: 600px) {
    background-color: #ede0d4cc;
    border-radius: 0px;
  }
`

export const GridTitle = styled.h1`
  font-family: 'Rajdhani-SemiBold';

  @media (max-width: 1100px) {
    text-align: center;
  }
`

export const GridText = styled.h3`
  font-family: 'Rajdhani-Regular';

  @media (max-width: 1100px) {
    text-align: center;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: ${Dimensions.px.size20};
  grid-template-columns: 40% 60%;
  margin: ${Dimensions.px.size40} ${Dimensions.px.size0};
  width: ${Dimensions.per.sizeFull};
  padding: ${Dimensions.px.size16} ${Dimensions.px.size30}
    ${Dimensions.px.size16} ${Dimensions.px.size16};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 100%;
    padding: ${Dimensions.px.size16};

    > div {
      align-items: center;
    }
  }
`

export const SepareteThick = styled.div`
  background-color: #210f04;
  height: 5px;
  width: 100%;
`

export const SepareteThin = styled.div`
  background-color: #210f04;
  height: 2px;
  margin-top: 2px;
  width: 100%;
`

export const Carousel = styled(CarouselCurrent)`
  height: 50vh;
  width: 750px;
  position: relative;

  .carousel .slide {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export const Slide = styled.div`
  height: 50vh;
  max-width: 750px;
  position: relative;
  margin: 0px auto;

  @media (max-width: 600px) {
    height: 45vh;
  }
`

export const SlideImg = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
`
