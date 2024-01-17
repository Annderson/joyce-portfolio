import { RoutesName } from '@/main/routes/routesName'
import locales from '@/locales/menu'

import * as S from './styles'
import useMenu from './useMenu'

const Menu = ({ children }: any) => {
  const { open, currentRoute, onOpen, onNavigate } = useMenu()

  return (
    <S.Container>
      {open ? (
        <S.MenuOpenContainer>
          <S.BackgroundContainer />
          <S.MenuContainer>
            <S.IconButton onClick={onOpen}>
              <S.CloseIcon />
            </S.IconButton>

            <S.MenuItem
              id={RoutesName.Home}
              isActive={currentRoute === RoutesName.Home}
              onClick={onNavigate}
            >
              {locales.home.toUpperCase()}
            </S.MenuItem>

            <S.RouterContainer>
              <S.MenuItem
                id={RoutesName.About}
                isActive={currentRoute === RoutesName.About}
                onClick={onNavigate}
              >
                {locales.about.toUpperCase()}
              </S.MenuItem>
              <S.MenuItem
                id={RoutesName.Projects}
                isActive={currentRoute === RoutesName.Projects}
                onClick={onNavigate}
              >
                {locales.project.toUpperCase()}
              </S.MenuItem>
              <S.MenuItem
                id={RoutesName.Contact}
                isActive={currentRoute === RoutesName.Contact}
                onClick={onNavigate}
              >
                {locales.contact.toUpperCase()}
              </S.MenuItem>
            </S.RouterContainer>
          </S.MenuContainer>
        </S.MenuOpenContainer>
      ) : (
        <S.MenuCloseContainer>
          <S.IconButton onClick={onOpen}>
            <S.MenuGridIcon />
          </S.IconButton>
        </S.MenuCloseContainer>
      )}
      <S.ContentContainer>{children}</S.ContentContainer>
    </S.Container>
  )
}

export default Menu
