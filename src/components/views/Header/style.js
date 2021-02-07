import styled from 'styled-components'
import theme from 'styled-theming'
import { Link } from 'react-router-dom'
import { Fonts } from '../../../styles/fonts'

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
`

export const BrandEl = styled.p`
  color: #f4d03f;
  font-family: ${Fonts.body.semiBold};
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
`

export const LinkEl = styled(Link)`
  text-decoration: none;
`
