import { CgCloseO } from 'react-icons/cg'
import { BiGridAlt } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'

import styled, { keyframes } from 'styled-components'
import { Layout, Dimensions, Colors } from '@/styles'


const fadeIn = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}

`

export const Container = styled.div`
  background-color: ${Colors.transparent};
  animation-name: ${fadeIn};
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 2s;
  display: flex;
  opacity: 1;
  overflow: hidden;
`

export const ContentContainer = styled.div`
  background-color: ${Colors.transparent};
  height: ${Dimensions.vh.sizeVh100};
  overflow-y: auto;
  width: ${Dimensions.per.sizeFull};
  &::-webkit-scrollbar {
    background-color: ${Colors.brown}55;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.brown};
    border-radius: 5px;
  }
`

export const MenuCloseContainer = styled.div`
  display: flex;
  background-color: #843c22;
  box-shadow: 2px 0px 9px 1px #888;
  height: ${Dimensions.vh.sizeVh100};
  justify-content: center;
  padding-top: ${Dimensions.px.size18};
  position: fixed;
  width: ${Dimensions.px.size50};
  z-index: 5;
`

export const MenuGridIcon = styled(BiGridAlt)`
  color: ${Colors.white};
  cursor: pointer;
  height: ${Dimensions.px.size30};
  width: ${Dimensions.px.size30};
`

export const MenuOpenContainer = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 8;
  transition: right 9s ease-in-out;
`

export const BackgroundContainer = styled.div`
  background-color: ${Colors.black}aa;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 7;
`

export const MenuContainer = styled(Layout.ContainerVertical)`
  align-items: flex-end;
  background-color: ${Colors.brown}dd;
  box-shadow: 2px 0px 9px 1px #888;
  color: ${Colors.white};
  grid-gap: ${Dimensions.px.size50};
  height: 100%;
  padding: ${Dimensions.px.size16};
  position: fixed;
  transition-delay: 4s;
  transition: width 9s ease-in-out;
  width: 250px;
  z-index: 8;
`

export const IconHomeContainer = styled.div`
  align-items: center;
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  width: ${Dimensions.per.sizeFull};
`

export const IconButton = styled.div`
  display: flex;
  height: fit-content;
  :hover {
    color: ${Colors.white}cc;
  }
`

export const HomeIcon = styled(FaHome)`
  color: ${Colors.white};
  cursor: pointer;
  height: ${Dimensions.px.size30};
  width: ${Dimensions.px.size30};
`

export const CloseIcon = styled(CgCloseO)`
  color: ${Colors.white};
  cursor: pointer;
  float: right;
  height: ${Dimensions.px.size30};
  width: ${Dimensions.px.size30};
`

export const RouterContainer = styled(Layout.ContainerVertical)`
  grid-gap: ${Dimensions.px.size30};
  width: ${Dimensions.per.sizeFull};
`

interface MenuItemProp {
  isActive: boolean
}
export const MenuItem = styled.h3<MenuItemProp>`
  background-color: ${({ isActive }) =>
    isActive ? Colors.transparentBlack55 : Colors.transparent};
  padding: 5px 16px;
  border-radius: 5px;
  color: ${Colors.white};
  cursor: pointer;
  font-family: 'Voltaire';
  font-size: 20px;
  text-decoration: none;
  width: ${Dimensions.per.sizeFull};
`
