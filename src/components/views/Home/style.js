import styled from 'styled-components'
import theme from 'styled-theming'

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'grey',
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
  height: 100px;
  justify-content: space-between;
  margin-top: 70px;
`;

export const FormContainerEl = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
