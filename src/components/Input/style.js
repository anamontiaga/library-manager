import styled from 'styled-components'
import theme from 'styled-theming'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const inputBorder = theme('mode', {
  light: `2px solid ${Colors.green}`,
  dark: 'none',
})

export const HandleViewButtonEl = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`

export const InputContainerEl = styled.div`
  position: relative;
`

export const InputEl = styled.input`
  border: ${inputBorder};
  border-radius: 4px;
  box-sizing: border-box;
  caret-color: ${Colors.green};
  cursor: pointer;
  color: black;
  height: 56px;
  font-family: ${Fonts.body.regular};
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  padding: 8px 8px 8px 16px;
  width: 215px;
  :focus {
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, ${Colors.yellow}, ${Colors.green});
    outline: none;
  }
`
export const ViewIconEl = styled.svg`
  height: 26px;
  fill: black;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 26px;
  z-index: 1;
`
