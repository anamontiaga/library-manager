import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'styled-theming'
import { isTablet, isDesktop } from 'utils/mediaqueries'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const containerBackground = theme('mode', {
  light: 'white',
  dark: '#000000',
})

export const ContainerEl = styled.div`
  align-items: center;
  background: ${containerBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 20px;
  width: auto;
  ${isTablet} {
    height: 70px;
    padding: 50px;
  }
`

export const BrandEl = styled.p`
  color: ${Colors.yellow};
  font-family: ${Fonts.body.semiBold};
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  ${isTablet} {
    font-size: 18px;
  }
  ${isDesktop} {
    font-size: 20px;
  }
`

export const ButtonsContainerEl = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const LinkEl = styled(Link)`
  text-decoration: none;
`
