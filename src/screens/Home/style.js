import styled from 'styled-components'
import theme from 'styled-theming'
import { isTablet } from 'utils/mediaqueries'

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'linear-gradient(335deg, #2d3436 0%, #000000 74%)',
})

export const ContainerEl = styled.div`
  background: ${containerBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
`

export const FormEl = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-between;
  margin-top: 50%;
  ${isTablet} {
    margin-top: 10%;
  }
`

export const FormContainerEl = styled.div`
  display: flex;
  flex-direction: column;
`
