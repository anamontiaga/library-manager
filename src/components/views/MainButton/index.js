import React from 'react'
import { ButtonEl, CaptionEl, ContainerEl } from './style'

export const MainButton = ({ alt, label, onClick, small }) => {
  const createRipple = (e) => {
    const button = e.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    /* eslint-disable */
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`
    circle.classList.add('ripple')
    /* eslint-enable */

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
      ripple.remove()
    }
    button.appendChild(circle)
  }

  return (
    <ContainerEl onClick={onClick}>
      <ButtonEl
        alt={alt}
        className="ripple"
        onClick={(e) => createRipple(e)}
        small={small}
        type="submit"
      >
        <CaptionEl small={small}>{label}</CaptionEl>
      </ButtonEl>
    </ContainerEl>
  )
}
