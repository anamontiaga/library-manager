import { createGlobalStyle } from 'styled-components'
import MontserratRegular from 'fonts/Montserrat-Regular.woff'
import MontserratSemiBold from 'fonts/Montserrat-SemiBold.woff'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url(${MontserratRegular}) format('woff');
  }
  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url(${MontserratSemiBold}) format('woff');
  }
`
