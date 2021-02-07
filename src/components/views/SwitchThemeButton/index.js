import React from 'react'
import {
  SwitchEl, SwitchLabelEl, SwitchWrapperEl
} from './style'

export const SwitchThemeButton = () => {

  return (
    <SwitchWrapperEl>
    <SwitchEl id="checkbox" type="checkbox" />
    <SwitchLabelEl htmlFor="checkbox"  />
  </SwitchWrapperEl>
  )
}
