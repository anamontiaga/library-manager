import styled from 'styled-components'
import theme from 'styled-theming'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const cardBorder = theme('mode', {
  light: `2px solid ${Colors.green}`,
  dark: `2px solid ${Colors.yellow}`,
})

const textColor = theme('mode', {
  light: 'black',
  dark: 'white',
})

export const ContainerEl = styled.div`
  align-items: center;
  background: transparent;
  border: ${cardBorder};
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  width: auto;
`

export const BookImageEl = styled.img`
  height: 70px;
  margin-right: 20px;
`

export const BookTitleEl = styled.p`
  color: ${textColor};
  font-family: ${Fonts.body.semiBold};
  font-size: 12px;
  margin: 0;
`
