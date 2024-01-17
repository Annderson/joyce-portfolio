import styled from 'styled-components'

const CenteredHorizontal = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const CenteredVertical = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
`

const ContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
`

export default {
  CenteredHorizontal,
  CenteredVertical,
  Container,
  ContainerVertical,
}
