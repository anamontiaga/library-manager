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

const inputFileBorder = theme('mode', {
  light: `2px solid ${Colors.green}`,
  dark: `2px solid ${Colors.yellow}`,
})

const inputFileTextColor = theme('mode', {
  light: `${Colors.green}`,
  dark: `${Colors.yellow}`,
})

const inputBorder = theme('mode', {
  light: `2px solid ${Colors.green}`,
  dark: `2px solid ${Colors.green}`,
})

export const AddImageContainerEl = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  margin-top: 20px;
`

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
  height: 240px;
  justify-content: space-between;
  margin-top: 30%;
  ${isTablet} {
    margin-top: 10%;
  }
`

export const ImageEl = styled.img`
  height: 100px;
  margin-left: 90px;
`

export const InputFileEl = styled.input`
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  z-index: -1;
`

export const InputTitleEl = styled.input`
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
  width: 300px;
  :focus {
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, ${Colors.yellow}, ${Colors.green});
    outline: none;
  }
`

export const LabelEl = styled.label`
  align-items: center;
  background-color: transparent;
  border: ${inputFileBorder};
  border-radius: 4px;
  color: ${inputFileTextColor};
  cursor: pointer;
  display: inline-flex;
  font-family: ${Fonts.body.semiBold};
  font-size: 12px;
  text-transform: capitalize;
  padding: 10px 12px;
`
export const SelectInputContainerEl = styled.div`
  margin-top: 20px;
  width: 320px;
`