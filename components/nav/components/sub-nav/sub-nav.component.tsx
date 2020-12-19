import React, { useState } from 'react';
import { ButtonBase, ClickAwayListener, Grow } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

import NavItem from '@components/nav/components/nav-item';
import useStyles from './sub-nav.style';

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
        <div className={classes.container}>
          <ButtonBase className={classes.backButton} onClick={handleClickAway}>
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
        </div>
      </Grow>
    </>
  );
};

export default SubNav;
