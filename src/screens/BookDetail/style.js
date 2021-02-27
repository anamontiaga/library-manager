import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'styled-theming'
import { isTablet } from 'utils/mediaqueries'
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

export const ActionsEl = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const BookDetailViewEl = styled.div`
  background: ${containerBackground};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 20px;
`

export const BookDescriptionEl = styled.p`
  color: ${textColor};
  font-family: ${Fonts.body.regular};
  font-size: 11px;
  line-height: 1.5;
  margin: 0;
  text-align: justify;
  margin-bottom: 20px;
`


export const BookImageEl = styled.img`
  height: 440px;
`

export const BookInfoContainerEl = styled.div``

export const BookTitleEl = styled.p`
  color: ${textColor};
  font-family: ${Fonts.body.semiBold};
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
`

export const CardEl = styled.div`
  border: ${cardBorder};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  ${isTablet} {
    height: 440px;
    width: 600px;
  }
`

export const CategoriesContainerEl = styled.div``

export const FlexColumnEl = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`

export const LinkEl = styled(Link)`
  text-decoration: none;
`
