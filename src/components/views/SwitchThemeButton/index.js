import { SwitchEl, SwitchLabelEl, SwitchWrapperEl } from './style'
import React from 'react'

import { useTheme } from 'contexts/themeToggleContext'

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
