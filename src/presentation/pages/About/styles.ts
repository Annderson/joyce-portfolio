import styled from 'styled-components'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'

import { Layout, Dimensions, Colors } from '@/styles'

export const Root = styled(Layout.ContainerVertical)`
  background-color: ${Colors.orange}55;
  overflow: hidden;
  padding-left: ${Dimensions.px.size50};
`

export const IntroductionContainer = styled(Layout.ContainerVertical)`
  grid-gap: ${Dimensions.px.size40};
  min-height: ${Dimensions.vh.sizeVh100};
  padding: ${Dimensions.px.size0};
`

export const IntroductionTitle = styled.h3`
  background-color: ${Colors.orange};
  box-shadow: 0px 0px 8px 1px #777;
  color: ${Colors.white};
  font-size: ${Dimensions.px.size50};
  font-weight: 500;
  padding: ${Dimensions.px.size12};
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
    max-width: 700px;
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
