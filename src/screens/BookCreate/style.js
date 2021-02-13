import styled from 'styled-components'
import theme from 'styled-theming'
import { isTablet } from 'utils/mediaqueries'
import { Fonts } from 'styles/fonts'
import { Colors } from 'styles/colors'

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'linear-gradient(335deg, #2d3436 0%, #000000 74%)',
})

const errorTextColor = theme('mode', {
  light: `${Colors.green}`,
  dark: `${Colors.yellow}`,
})

export const ContainerEl = styled.div`
  background: ${containerBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
`

export const ErrorEl = styled.div`
  color: ${errorTextColor};
  font-family: ${Fonts.body.regular};
  font-size: 9px;
  margin-top: 4px;
`

export const FormEl = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-between;
  margin-top: 30%;
  ${isTablet} {
    margin-top: 10%;
  }
`

export const FormContainerEl = styled.div`
  display: flex;
  flex-direction: column;
`
