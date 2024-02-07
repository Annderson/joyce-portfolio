import styled, { keyframes } from 'styled-components'
import { Colors, Dimensions, Layout } from '@/styles'

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const Container = styled(Layout.CenteredHorizontal)`
  background-color: transparent;
  overflow: hidden;
  height: 100%;
  position: relative;
  width: 100%;
  //animation: ${gradient} 8s ease infinite;

  @media (max-width: 850px) {
    grid-template-columns: 100%;
    height: auto;
  }
`

export const BackgroundImg = styled.img`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`

export const HeaderContainer = styled(Layout.CenteredVertical)`
  color: ${Colors.white};
  grid-gap: ${Dimensions.px.size20};
  margin-bottom: ${Dimensions.px.size20};
  padding: ${Dimensions.px.size30} ${Dimensions.px.size16};
`

export const Title = styled.h2`
  font-size: ${Dimensions.px.size60};
  font-weight: 500;
  text-align: left;
`

export const SubTitle = styled.h2`
  font-family: 'Rajdhani-SemiBold';
  font-size: ${Dimensions.px.size25};
  font-weight: 500;
  text-align: center;
`

export const CardContact = styled.div`
  background-color: #344e41aa;
  //border-radius: 8px;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: auto;
  max-width: 1300px;
  min-height: 600px;
  width: 100%;

  @media (max-width: 850px) {
    grid-template-columns: 100%;
    // height: 100%;
  }
`

export const InfoContainer = styled(Layout.ContainerVertical)`
  align-items: center;
  color: ${Colors.white};
  // background-color: #344e41bb;
  grid-gap: 40px;
  justify-content: center;
  justify-self: center;
  max-width: 450px;
  padding: 32px;
  > div {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
  }
  @media (max-width: 850px) {
    grid-gap: 20px;
    padding: 16px;
  }
`

export const ContentContainer = styled(Layout.ContainerVertical)`
  align-items: center;
`

export const TextInfo = styled.h4`
  font-family: 'Rajdhani-Regular';
  font-size: 23px;
`

export const FormContainer = styled(Layout.CenteredVertical)`
  color: ${Colors.white};
  // background-color: #344e4199;
  grid-gap: 40px;
  justify-content: space-evenly;
  justify-self: center;
  max-width: 450px;
  padding: 32px;

  > div {
    display: block;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border-bottom: 4px solid #081c15;
  border-left: none;
  border-right: none;
  border-top: none;
  color: #081c15;
  font-size: ${Dimensions.px.size20};
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
  &:focus {
    border-color: yellow;
    outline: none;
  }
  &::placeholder {
    color: #bbb;
  }
`

export const Textarea = styled.textarea`
  background-color: transparent;
  border-bottom: 4px solid #081c15;
  border-left: none;
  border-right: none;
  border-top: none;
  color: #081c15;
  font-size: ${Dimensions.px.size20};
  padding: 5px;
  width: 100%;
  &:focus {
    border-color: yellow;
    outline: none;
  }
  &::placeholder {
    color: #bbb;
  }
`

export const SendButton = styled.button`
  background-color: transparent;
  border: 5px solid #081c15;
  border-radius: 8px;
  color: ${Colors.white};
  cursor: pointer;
  font-size: 18px;
  font-weight: bolder;
  padding: 16px;
  width: 100%;

  &:hover {
    background-color: #081c1544;
  }
`
