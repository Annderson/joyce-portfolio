import styled from 'styled-components'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'

import { Layout, Dimensions, Colors } from '@/styles'

export const Root = styled(Layout.ContainerVertical)`
  background-color: ${Colors.orange}11;
  overflow: hidden;
`

export const IntroductionContainer = styled(Layout.ContainerVertical)`
  min-height: ${Dimensions.vh.sizeVh100};
  padding: ${Dimensions.px.size0};
  position: relative;
`

export const Header = styled.div`
  background-color: ${Colors.orange};
  height: ${Dimensions.px.size70};
  width: 100%;
  z-index: 2;
`
  

export const IntroductionTitle = styled.h3`
  background-color: ${Colors.orange}55;
  color: ${Colors.black};
  font-size: ${Dimensions.px.size50};
  font-weight: 500;
  padding: ${Dimensions.px.size50} ${Dimensions.px.size12};
  text-align: center;
  z-index: 2;
  @media (max-width: 700px) {
    font-size: ${Dimensions.px.size40};
  }
`

export const IntroductionDescriptionContainer = styled.div`
  display: flex;
  min-height: 80vh;
  justify-content: center;
  grid-gap: ${Dimensions.px.size40};
  position: relative;
  > div {
    background-color: ${Colors.white}22;
    display: grid;
    grid-gap: ${Dimensions.px.size20};
    max-width: 100%;
    padding: 35px 16px 30px 6px;
    z-index: 2;
    > div {
      display: grid;
      grid-template-columns: 10% 90%;
      grid-gap: ${Dimensions.px.size10};
      @media (max-width: 700px) {
        grid-template-columns: 15% 80%;
      }
    }
  }
`

export const FolderImg = styled.img`
  position: absolute;
  height: ${Dimensions.per.sizeFull};
  width: ${Dimensions.per.sizeFull};
  z-index: 1;
`

export const HighlighterIcon = styled(TbArrowBadgeRightFilled)`
  color: ${Colors.orange};
  height: ${Dimensions.px.size40};
  width: ${Dimensions.px.size40};
`

export const IntroductionDescription = styled.h5`
  color: ${Colors.black};
  font-family: 'Rajdhani-SemiBold';
  font-size: ${Dimensions.px.size20};
  text-align: left;
  word-wrap: break-word;
  max-width: 60%;
  width: 100%;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`

export const SkillsContainer = styled(Layout.ContainerVertical)`
  grid-gap: ${Dimensions.px.size40};
  min-height: ${Dimensions.vh.sizeVh100};
  padding: ${Dimensions.px.size0};
  margin-bottom: ${Dimensions.px.size50};
  @media (max-width: 700px) {
  }
`
