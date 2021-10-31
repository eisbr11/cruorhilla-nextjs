import React, { useState } from 'react';
import {
  ButtonBase,
  ClickAwayListener,
  Container,
  Grow,
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import NavItem from '@components/Nav/components/NavItem';
import useStyles from './SubNav.style';

const SubNav = ({
  label,
  subNavi,
}: {
  label: string,
  subNavi: any[]
}) => {
  const classes = useStyles();
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
      <NavItem
        name={label}
        hasSubnavi
        openEvent={handleClick}
      />
      <Grow
        in={open}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <Container maxWidth={false} className={classes.container}>
          <ButtonBase aria-label="Go Back" className={classes.backButton} onClick={handleClickAway}>
            <ArrowBackRoundedIcon fontSize="large" />
          </ButtonBase>
          <ClickAwayListener onClickAway={handleClickAway}>
            <ul className={classes.list}>
              {subNavi.map((subitem) => (
                // eslint-disable-next-line no-underscore-dangle
                <li className={classes.listItem} key={subitem._uid}>
                  <NavItem
                    isSubNavItem
                    url={subitem.link.cached_url}
                    name={subitem.name}
                  />
                </li>
              ))}
            </ul>
          </ClickAwayListener>
        </Container>
      </Grow>
    </>
  );
};

export default SubNav;
