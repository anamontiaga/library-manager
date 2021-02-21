import styled from 'styled-components'
import theme from 'styled-theming'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const tagBackground = theme('mode', {
  light: `${Colors.greenOpacity}`,
  dark: `${Colors.yellowOpacity}`,
})

const labelColor = theme('mode', {
  light: `${Colors.green}`,
  dark: `${Colors.yellow}`,
})

export const ContainerEl = styled.div`
  align-items: center;
  background: ${tagBackground};
  border-radius: 2em;
  display: flex;
  justify-content: center;
  padding: 5px;
`

export const LabelEl = styled.p`
  color: ${labelColor};
  font-family: ${Fonts.body.regular};
  font-size: 12px;
`
