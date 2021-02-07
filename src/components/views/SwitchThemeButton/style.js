import styled from 'styled-components'

export const SwitchWrapperEl = styled.div`
  position: relative;
`

export const SwitchLabelEl = styled.label`
  background: green;
  border-radius: 20px;
  cursor: pointer;
  height: 40px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 68px;
  ::after {
    background: pink;
    border-radius: 2rem;
    content: '';
    display: block;
    margin: 4px;
    height: 32px;
    width: 32px;
    margin-left: 4px;
  }
`

export const SwitchEl = styled.input`
  border-radius: 15px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  height: 40px;
  width: 68px;
  :checked + ${SwitchLabelEl} {
    background: pink;
    ::after {
      background: green;
      border-radius: 50%;
      content: '';
      display: block;
      height: 32px;
      margin-left: 32px;
      width: 32px;
    }
  }
`
