import styled from 'styled-components'
import theme from 'styled-theming'
import { Link } from 'react-router-dom'

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'linear-gradient(335deg, #2d3436 0%, #000000 74%)',
})

export const BooksViewEl = styled.div`
  background: ${containerBackground};
  height: 100%;
  padding: 20px;
`

export const LinkEl = styled(Link)`
  text-decoration: none;
  `

export const LoaderContainerEl = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 80vh;
  width: auto;
`
