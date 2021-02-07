import styled from 'styled-components'
import theme from 'styled-theming'

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'linear-gradient(335deg, #2d3436 0%, #000000 74%)',
})

export const ContainerEl = styled.div`
  background: ${containerBackground};
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
`;

export const FormContainerEl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LandingImageEl = styled.img`
  height: 1000px;
  position: absolute;
  width: 200px;
  z-index: -1;
`;