import styled, { css } from 'styled-components'
import { FaCircle } from 'react-icons/fa'
import { FaRegCircle, FaCircleHalfStroke } from 'react-icons/fa6'

import { Colors, Dimensions, Layout } from '@/styles'

export const Container = styled(Layout.Container)`
  align-items: center;
  grid-gap: ${Dimensions.px.size10};
`

const CircleBase = css`
  color: ${Colors.orange};
  height: ${Dimensions.px.size20};
  width: ${Dimensions.px.size20};
`

export const CircleFullIcon = styled(FaCircle)`
  ${CircleBase}
`

export const CircleHalfIcon = styled(FaCircleHalfStroke)`
  ${CircleBase}
`

export const CircleEmptyIcon = styled(FaRegCircle)`
  ${CircleBase}
`
