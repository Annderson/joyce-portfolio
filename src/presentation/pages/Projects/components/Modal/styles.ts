import styled, { css } from 'styled-components'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { CgCloseR } from 'react-icons/cg'

import { Colors, Dimensions, Layout } from '@/styles'

export const Container = styled(Layout.ContainerVertical)`
  background-color: ${Colors.black}ef;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`

export const IconButton = styled.div`
  align-self: end;
  color: ${Colors.white};
  display: flex;
  height: fit-content;
  margin: ${Dimensions.px.size16};
  width: fit-content;
  :hover {
    color: ${Colors.white}cc;
  }
`

export const CloseIcon = styled(CgCloseR)`
  color: ${Colors.white};
  cursor: pointer;
  height: ${Dimensions.px.size50};
  width: ${Dimensions.px.size50};
`

export const ImgContainer = styled(Layout.CenteredHorizontal)`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  height: ${Dimensions.per.sizeFull};
  padding: ${Dimensions.px.size16};
  width: ${Dimensions.per.sizeFull};
  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
`

export const ArrowBase = css`
  color: ${Colors.white};
  cursor: pointer;
  height: ${Dimensions.px.size40};
  width: ${Dimensions.px.size40};

  @media (max-width: 700px) {
    align-self: center;
    height: ${Dimensions.px.size60};
    justify-self: center;
    width: ${Dimensions.px.size60};
  }
`

export const ArrowBack = styled(MdArrowBackIos)`
  ${ArrowBase};
`

export const ArrowForward = styled(MdArrowForwardIos)`
  ${ArrowBase};
  justify-self: flex-end;
`

export const Image = styled.img`
  height: ${Dimensions.per.sizeFull};
  max-height: 700px;
  width: ${Dimensions.per.sizeFull};
`
