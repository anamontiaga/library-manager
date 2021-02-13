import styled from 'styled-components'
import theme from 'styled-theming'
import { Fonts } from 'styles/fonts'

const textColor = theme('mode', {
  light: 'black',
  dark: 'white',
})

export const ContainerEl = styled.div`
  align-items: center;
  background: rgb(251, 27, 87);
  background: linear-gradient(
    125deg,
    rgba(251, 27, 87, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 20%
  );
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 60px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  width: auto;
`

export const CloseButtonEl = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const CloseIconEl = styled.img`
  height: 24px;
  margin-right: 20px;
  width: 24px;
`

export const MessageEl = styled.p`
  color: ${textColor};
  font-family: ${Fonts.body.semiBold};
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
`

export const SubMessageEl = styled.p`
  color: ${textColor};
  font-family: ${Fonts.body.regular};
  font-size: 11px;
  margin: 0;
`
