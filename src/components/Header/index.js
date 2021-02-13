import React from 'react'
import { LOGOUT, BOOK_CREATE } from 'config/router/paths'
import { BrandEl, ButtonsContainerEl, ContainerEl, LinkEl } from './style'
import { MainButton } from 'components/MainButton'
import { SecondaryButton } from 'components/SecondaryButton'
import { SwitchThemeButton } from 'components/SwitchThemeButton'

export const Header = ({ isPrivate }) => {
  return (
    <ContainerEl>
      {isPrivate ? (
        <>
          <ButtonsContainerEl>
            <LinkEl to={LOGOUT}>
              <MainButton alt="Cerrar sesión" label="Cerrar sesión" small />
            </LinkEl>
            <LinkEl to={BOOK_CREATE}>
              <SecondaryButton alt="Añadir libro" label="Añadir libro" small />
            </LinkEl>
          </ButtonsContainerEl>
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
