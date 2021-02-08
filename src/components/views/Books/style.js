import styled from 'styled-components'
import theme from 'styled-theming'

const containerBackground = theme('mode', {
  light: 'white',
  dark: 'linear-gradient(335deg, #2d3436 0%, #000000 74%)',
})

export const BooksViewEl = styled.div`
  background: ${containerBackground};
  height: 100vh;
  padding: 20px;
`

export const LoaderContainerEl = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 80vh;
  width: auto;
`
