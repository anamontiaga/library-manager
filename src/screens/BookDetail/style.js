import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'styled-theming'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const cardBorder = theme('mode', {
  light: `2px solid ${Colors.green}`,
  dark: `2px solid ${Colors.yellow}`,
})

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'linear-gradient(335deg, #2d3436 0%, #000000 74%)',
})

const textColor = theme('mode', {
  light: 'black',
  dark: 'white',
})

export const CardEl = styled.div`
  border: ${cardBorder};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

export const BookDetailViewEl = styled.div`
  background: ${containerBackground};
  height: 100vh;
  padding: 20px;
`

export const BookImageEl = styled.img`
  height: 400px;
`

export const BookTitleEl = styled.p`
  color: ${textColor};
  font-family: ${Fonts.body.semiBold};
  font-size: 16px;
  margin: 0;
  margin-bottom: 20px;
`

export const LinkEl = styled(Link)`
  text-decoration: none;
`