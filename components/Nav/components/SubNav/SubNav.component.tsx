import React, { useState } from 'react';
import { ClickAwayListener, Grow } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import NavItem from 'components/Nav/components/NavItem';
import { ButtonBaseBackButton, LiListItem, StyledContainer, UlList } from './SubNav.style';

const SubNav = ({
  label,
  subNavi,
}: {
  label: string,
  subNavi: any[]
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(
      (prev) => (!prev),
    );
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem name={label} hasSubnavi openEvent={handleClick} />
      <Grow in={open} timeout={300} mountOnEnter unmountOnExit>
        <StyledContainer maxWidth={false}>
          <ButtonBaseBackButton aria-label="Go Back" onClick={handleClickAway}>
            <ArrowBackRoundedIcon fontSize="large" />
          </ButtonBaseBackButton>
          <ClickAwayListener onClickAway={handleClickAway}>
            <UlList>
              {subNavi.map((subitem) => (
                // eslint-disable-next-line no-underscore-dangle
                <LiListItem key={subitem._uid}>
                  <NavItem
                    isSubNavItem
                    url={subitem.link.cached_url}
                    name={subitem.name}
                  />
                </LiListItem>
              ))}
            </UlList>
          </ClickAwayListener>
        </StyledContainer>
      </Grow>
    </>
  );
};

export default SubNav;
