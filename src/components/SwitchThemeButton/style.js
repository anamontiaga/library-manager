import styled from 'styled-components'
import { isTablet } from 'utils/mediaqueries'
import { Colors } from 'styles/colors'

export const SwitchWrapperEl = styled.div`
  position: relative;
`

export const SwitchLabelEl = styled.label`
  border: 2px solid ${Colors.green};
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  height: 34px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 70px;
  ::after {
    background: ${Colors.yellow};
    border-radius: 2rem;
    content: '';
    display: block;
    margin: 2px;
    height: 26px;
    width: 26px;
    margin-left: 4px;
  }
  ${isTablet} {
    border: 3px solid ${Colors.green};
    height: 42px;
    width: 76px;
    ::after {
      margin: 3px;
      height: 30px;
      width: 30px;
    }
  }
`

export const SwitchEl = styled.input`
  border-radius: 15px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  height: 34px;
  width: 68px;
  :checked + ${SwitchLabelEl} {
    background: ${Colors.yellow};
    ::after {
      background: ${Colors.green};
      border-radius: 50%;
      content: '';
      display: block;
      height: 26px;
      margin-left: 38px;
      width: 26px;
    }
  }
  ${isTablet} {
    :checked + ${SwitchLabelEl} {
      ::after {
        height: 30px;
        width: 30px;
      }
    }
  }
`
