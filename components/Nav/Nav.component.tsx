import React, { useState } from 'react';
import { ISbStoryData } from 'storyblok-js-client';

import { LogoNoText } from '@components/Logo';
import ThreeLinesButton from './components/ThreeLinesButton';
import NavItem from './components/NavItem';
import SubNav from './components/SubNav';
import {
  AnchorLogoLink,
  AppBarNav,
  LiListItem,
  NavMenuStyled,
  StyledContainer,
  UlList,
} from './Nav.styles';

interface INavComponentProps { settings?: ISbStoryData; }

const NavComponent = ({ settings }: INavComponentProps) => {
  const [active, setActive] = useState(false);

  return (
    <AppBarNav position="sticky">
      <StyledContainer maxWidth={false}>
        <AnchorLogoLink href="/" aria-label="Zur Startseite">
          <LogoNoText />
        </AnchorLogoLink>
        <ThreeLinesButton clickHandler={() => setActive(!active)} active={active} />
        <NavMenuStyled isActive={active}>
          <UlList>
            {settings && settings.content && settings.content.main_navi.map((navitem) => (
              // eslint-disable-next-line no-underscore-dangle
              <LiListItem key={navitem._uid}>
                <div>
                  {navitem.sub_navi && navitem.sub_navi.length > 0 ? (
                    <SubNav
                      label={navitem.name}
                      subNavi={navitem.sub_navi}
                    />
                  ) : (
                    <NavItem
                      name={navitem.name}
                      url={navitem.link.cached_url}
                    />
                  )}
                </div>
              </LiListItem>
            ))}
          </UlList>
        </NavMenuStyled>
      </StyledContainer>
    </AppBarNav>
  );
};

export default NavComponent;
