import { Colors } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: ${Colors.green}55;
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const MenuContainer = styled.div`
  background-color: ${Colors.green};
  box-shadow: 0px 0px 5px 1px ${Colors.brown};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
