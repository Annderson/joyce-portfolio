import { RoutesName } from '@/main/routes/routesName'
import locales from '@/locales/menu'

import * as S from './styles'
import useMenu from './useMenu'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  color: string
}

const Menu = ({ children, color }: Props) => {
  const { open, currentRoute, onOpen, onNavigate } = useMenu()

  return (
    <S.Container>
      {open ? (
        <S.MenuOpenContainer>
          <S.BackgroundContainer onClick={onOpen} />
          <S.MenuContainer>
            <S.IconButton onClick={onOpen}>
              <S.CloseIcon />
            </S.IconButton>

            <S.MenuItem
              id={RoutesName.Home}
              isactive={currentRoute === RoutesName.Home.toString()}
              onClick={onNavigate}
            >
              {locales.home.toUpperCase()}
            </S.MenuItem>

            <S.RouterContainer>
              <S.MenuItem
                id={RoutesName.About}
                isactive={currentRoute === RoutesName.About.toString()}
                onClick={onNavigate}
              >
                {locales.about.toUpperCase()}
              </S.MenuItem>
              <S.MenuItem
                id={RoutesName.Projects}
                isactive={currentRoute === RoutesName.Projects.toString()}
                onClick={onNavigate}
              >
                {locales.project.toUpperCase()}
              </S.MenuItem>
              <S.MenuItem
                id={RoutesName.Contact}
                isactive={currentRoute === RoutesName.Contact.toString()}
                onClick={onNavigate}
              >
                {locales.contact.toUpperCase()}
              </S.MenuItem>
            </S.RouterContainer>
          </S.MenuContainer>
        </S.MenuOpenContainer>
      ) : (
        <S.MenuCloseContainer color={color}>
          <S.IconButton onClick={onOpen}>
            <S.MenuGridIcon />
          </S.IconButton>
        </S.MenuCloseContainer>
      )}
      <S.ContentContainer open={open}>{children}</S.ContentContainer>
    </S.Container>
  )
}

export default Menu
