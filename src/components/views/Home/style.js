import styled from 'styled-components'
import theme from 'styled-theming'

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'grey',
})

const buttonBackground = theme('mode', {
  light: 'green',
  dark: 'blue',
})

export const ContainerEl = styled.div`
  background: ${containerBackground};
  height: 100vh;
  width: auto;
`

export const LoginButtonEl = styled.button`
  background: ${buttonBackground};
`
