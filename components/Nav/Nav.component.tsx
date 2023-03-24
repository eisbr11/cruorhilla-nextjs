import React, { useState } from 'react';
import { StoryData } from 'storyblok-js-client';
import Link from 'next/link';
import { AppBar, Container } from '@mui/material';

import { LogoNoText } from '@components/Logo';
import ThreeLinesButton from './components/ThreeLinesButton';
import NavItem from './components/NavItem';
import SubNav from './components/SubNav';
import useStyles from './Nav.styles';

interface INavComponentProps { settings: StoryData; }

const NavComponent = ({ settings }: INavComponentProps) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <AppBar position="sticky" className={classes.nav}>
      <Container maxWidth={false} className={classes.container}>
        <Link href="/" legacyBehavior>
          <a aria-label="Zur Startseite" className={classes.logoLink}>
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
      </Container>
    </AppBar>
  );
};

export default NavComponent;
