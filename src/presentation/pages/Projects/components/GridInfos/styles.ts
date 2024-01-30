import styled from 'styled-components'
import { Carousel as CarouselCurrent } from 'react-responsive-carousel'
import { Dimensions } from '@/styles'


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
  cursor: pointer;
  height: 50vh;
  max-width: 750px;
  position: relative;

  .carousel .slide {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export const Slide = styled.div`
  cursor: pointer;
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
