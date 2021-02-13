import React from 'react'
import { useTheme } from 'contexts/themeToggleContext'
import { SwitchEl, SwitchLabelEl, SwitchWrapperEl } from './style'

export const SwitchThemeButton = () => {
  const themeToggle = useTheme()
  return (
    <SwitchWrapperEl>
      <SwitchEl
        onChange={() => themeToggle.toggle()}
        id="checkbox"
        type="checkbox"
      />
      <SwitchLabelEl htmlFor="checkbox" />
    </SwitchWrapperEl>
  )
}
