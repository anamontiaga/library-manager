import styled from 'styled-components'
import theme from 'styled-theming'

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
