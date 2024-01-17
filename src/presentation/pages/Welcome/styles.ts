import styled, { keyframes } from 'styled-components'
import { LiaHandPointer } from 'react-icons/lia'

import { Layout, Dimensions, Colors } from '@/styles'

export const Container = styled(Layout.Container)`
  align-items: center;
  background-image: radial-gradient(
    circle at center,
    ${Colors.green} 0,
    ${Colors.brown} 100%
  );
  cursor: pointer;
  height: 100vh;
  justify-content: center;
  padding: ${Dimensions.px.size20};
  transition: all 5s ease;
  width: ${Dimensions.per.sizeFull};
`

const hand = keyframes`
  10% {
    color: ${Colors.white};
  }
  19% {
    color: ${Colors.white};
  }
  20% {
    color: ${Colors.transparent};
  }
  80% {
    color: ${Colors.transparent};
  }
  81% {
    color: ${Colors.white};
  }
  100% {
    color: ${Colors.white};
  }
`
export const HandIcon = styled(LiaHandPointer)`
  display: flex;
  color: ${Colors.white};
  height: 80px;
  position: absolute;
  right: 200px;
  top: 200px;
  transform: rotate(330deg);
  width: 50px;
  z-index: 1;
  animation: ${hand} 10s linear infinite;
`

const circle = keyframes`
  10% {
    border: 1px solid ${Colors.white};
    transform: scale(1);
  }
  19% {
    border: 1px solid ${Colors.white}00;
    transform: scale(3);
  }
  20% {
    border: 1px solid ${Colors.white}00;
  }
  80% {
    border: 1px solid ${Colors.white}00;
  }
  81% {
    border: 1px solid ${Colors.white};
    transform: scale(1);
  }
  100% {
    border: 1px solid ${Colors.white}00;
    transform: scale(3);
  }  
`

export const CircleIcon = styled.div`
  border: 1px solid ${Colors.white};
  border-radius: 50%;
  height: 15px;
  position: absolute;
  right: 235px;
  top: 210px;
  width: 15px;
  z-index: 2px;
  animation: ${circle} 10s both infinite;
`

const fontTitle = keyframes`
  0% {
    font-size: 35px;
  }

  50% {
    font-size: 45px;
  }

  100% {
    font-size: 35px;
  }
`
export const Title = styled.h1`
  color: ${Colors.white};
  font-style: italic;
  line-height: 60px;
  text-align: center;
  animation: ${fontTitle} 6s linear infinite;
`
