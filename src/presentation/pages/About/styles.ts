import styled from 'styled-components'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'

import { Layout, Dimensions, Colors } from '@/styles'

export const Root = styled(Layout.ContainerVertical)`
  background-color: ${Colors.orange}11;
  overflow: hidden;
  padding-left: ${Dimensions.px.size50};
`

export const IntroductionContainer = styled(Layout.ContainerVertical)`
  min-height: ${Dimensions.vh.sizeVh100};
  padding: ${Dimensions.px.size0};
`

export const Header = styled.div`
  background-color: ${Colors.orange};
  height: ${Dimensions.px.size70};
  width: 100%;
`
  

export const IntroductionTitle = styled.h3`
  background-color: ${Colors.orange}55;
  color: ${Colors.black};
  font-size: ${Dimensions.px.size50};
  font-weight: 500;
  margin-bottom: ${Dimensions.px.size25};
  padding: ${Dimensions.px.size50} ${Dimensions.px.size12};
  text-align: center;
  @media (max-width: 700px) {
    font-size: ${Dimensions.px.size40};
  }
`

export const IntroductionDescriptionContainer = styled.div`
  display: flex;
  min-height: 80vh;
  justify-content: center;
  grid-gap: ${Dimensions.px.size40};
  > div {
    display: grid;
    grid-gap: ${Dimensions.px.size20};
    max-width: 90%;
    padding: 16px 16px 16px 6px;
    border-radius: ${Dimensions.px.size10};
    > div {
      display: grid;
      grid-template-columns: 10% 90%;
      grid-gap: ${Dimensions.px.size10};
      @media (max-width: 700px) {
        grid-template-columns: 15% 80%;
      }
    }
  }

  @media (max-width: 700px) {
    margin-bottom: ${Dimensions.px.size40};
  }
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
`

export const SkillsBody = styled(Layout.ContainerVertical)`
  grid-gap: ${Dimensions.px.size20};
  padding: 16px;
`

export const SkillsTitleContainer = styled.div`
  align-items: center;
  display: flex;
  grid-gap: ${Dimensions.px.size10};
`

export const SkillsContentContainer = styled(Layout.ContainerVertical)`
  grid-gap: ${Dimensions.px.size15};
  margin-left: ${Dimensions.px.size20};
  > div {
    align-items: center;
    display: flex;
    grid-gap: 30px;
    > div {
      align-items: center;
      display: flex;
      grid-gap: 10px;
    }
  }
`

export const SubTile = styled.h4`
  color: ${Colors.orange};
  font-family: 'Voltaire';
  font-size: ${Dimensions.px.size30};
  font-weight: 500;
`

export const Text = styled.h6`
  color: ${Colors.black};
  font-family: 'Voltaire';
  font-size: ${Dimensions.px.size20};
  min-width: ${Dimensions.px.size80};
`
