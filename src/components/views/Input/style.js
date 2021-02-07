import styled from 'styled-components'
import theme from 'styled-theming'

const inputBorder = theme('mode', {
  light: '2px solid #16A085',
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
  caret-color: #16a085;
  cursor: pointer;
  color: black;
  height: 56px;
  font-size: 24px;
  transition: all 0.2s ease-in-out;
  padding: 8px 8px 8px 16px;
  width: 215px;
  :focus {
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, #f4d03f, #16a085);
    outline: none;
  }
  :valid {
    border: none;
  }
`
export const ViewIconEl = styled.img`
  height: 26px;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 26px;
  z-index: 1;
`
