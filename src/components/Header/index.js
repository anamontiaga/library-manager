import React from 'react'
import { LOGOUT } from 'config/router/paths'
import { BrandEl, ContainerEl, LinkEl } from './style'
import { MainButton } from 'components/MainButton'
import { SwitchThemeButton } from 'components/SwitchThemeButton'

export const Header = ({ isPrivate }) => {
  return (
    <ContainerEl>
      {isPrivate ? (
        <>
          <LinkEl to={LOGOUT}>
            <MainButton alt="Cerrar sesión" label="Cerrar sesión" small />
          </LinkEl>
          <SwitchThemeButton />
        </>
      ) : (
        <>
          <BrandEl>My Library Manager</BrandEl>
          <SwitchThemeButton />
        </>
      )}
    </ContainerEl>
  )
}
