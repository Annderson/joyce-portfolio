import styled from 'styled-components'

import { Colors, Dimensions, Layout } from '@/styles'

export const Container = styled(Layout.ContainerVertical)`
  align-items: center;
  background: linear-gradient(0deg, #231104, #210f04, #352208, #0a0908);
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
