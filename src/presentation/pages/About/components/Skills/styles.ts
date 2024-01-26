import styled from 'styled-components'

import { Colors, Dimensions, Layout } from '@/styles'
import { TbArrowBadgeRightFilled } from 'react-icons/tb'

export const SkillsBody = styled(Layout.ContainerVertical)`
  grid-gap: ${Dimensions.px.size20};
  padding: 16px;
`

export const SkillsTitleContainer = styled.div`
  align-items: center;
  display: flex;
  grid-gap: ${Dimensions.px.size10};
`

export const SkillsContentContainer = styled(Layout.CenteredHorizontal)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  grid-gap: 40px 15px;
  justify-content: center;
  align-items: baseline;
  white-space: normal;
  max-width: 1300px;
`

export const SkillsContent = styled(Layout.ContainerVertical)`
  align-items: center;
  grid-gap: 15px;
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

export const HighlighterIcon = styled(TbArrowBadgeRightFilled)`
  color: ${Colors.orange};
  height: ${Dimensions.px.size40};
  width: ${Dimensions.px.size40};
`

export const Logo = styled.img`
  height: ${Dimensions.px.size50};
  width: ${Dimensions.px.size200};
`
