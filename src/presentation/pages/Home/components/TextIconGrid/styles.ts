import { Colors, Dimensions, Layout } from '@/styles'
import styled from 'styled-components'

export const GridTextIconContainer = styled(Layout.Container)`
  align-items: center;
  grid-gap: ${Dimensions.px.size20};
  margin: ${Dimensions.px.size10} ${Dimensions.px.size0};
`

export const DescriptionAbout = styled.h2`
  color: ${Colors.white};
  font-size: ${Dimensions.px.size25};
  font-family: 'Voltaire';
  font-weight: 500;
`
