import React, { useState } from 'react';
import { StoryData } from 'storyblok-js-client';
import Link from 'next/link';
import { AppBar } from '@material-ui/core';

import { LogoNoText } from '@components/logo';
import ThreeLinesButton from '@components/nav/components/threeLinesButton';
import NavItem from './components/nav-item';
import SubNav from './components/sub-nav';
import useStyles from './nav.styles';

const NavComponent = ({ settings }: {settings: StoryData}) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <AppBar position="sticky" className={classes.nav}>
      <div className={classes.container}>
        <Link href="/">
          <a className={classes.logoLink}>
            <LogoNoText />
          </a>
        </Link>
        <ThreeLinesButton clickHandler={() => setActive(!active)} active={active} />
        <div className={`${classes.navMenu} ${active ? classes.navMenuActive : ''}`}>
          <ul className={classes.list}>
            {settings.content && settings.content.main_navi.map((navitem) => (
              // eslint-disable-next-line no-underscore-dangle
              <li className={classes.listItem} key={navitem._uid}>
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppBar>
  );
};

export default NavComponent;
