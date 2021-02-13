import styled from 'styled-components'
import theme from 'styled-theming'
import { Colors } from 'styles/colors'
import { Fonts } from 'styles/fonts'

const buttonBorder = theme('mode', {
  light: `2px solid ${Colors.green}`,
  dark: `2px solid ${Colors.yellow}`,
})

const buttonCaptionColor = theme('mode', {
  light: `${Colors.green}`,
  dark: `${Colors.yellow}`,
})

export const ButtonEl = styled.button`
  align-items: center;
  background: transparent;
  background-size: 200% auto;
  border: ${buttonBorder};
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: block;
  flex-direction: row;
  height: ${(props) => (props.small ? '36px' : '56px')};
  justify-content: center;
  padding: ${(props) => (props.small ? '8px 20px' : '15px 45px')};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
  span.ripple {
    animation: ripple 1s ease-in-out;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
  }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`

export const ContainerEl = styled.div``

export const CaptionEl = styled.p`
  color: ${buttonCaptionColor};
  font-family: ${Fonts.body.regular};
  font-size: ${(props) => (props.small ? '12px' : '16px')};
  margin: 0;
`
