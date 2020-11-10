import React from 'react';
import { StoryData } from 'storyblok-js-client';

import NavItem from './components/nav-item';
import useStyles from './nav.styles';

const NavComponent = ({ settings }: {settings: StoryData}) => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <span className={classes.logo}>LOGO</span>
        <ul className={classes.list}>
          {settings.content && settings.content.main_navi.map((navitem) => (
            // eslint-disable-next-line no-underscore-dangle
            <li className={classes.listItem} key={navitem._uid}>
              <NavItem name={navitem.name} noLink={navitem.no_link} url={navitem.link.cached_url} />
              {navitem.sub_navi && navitem.sub_navi.length > 0 ? (
                <ul className={classes.sublist}>
                  {navitem.sub_navi.map((subitem) => (
                    // eslint-disable-next-line no-underscore-dangle
                    <li key={subitem._uid}>
                      <NavItem
                        url={subitem.link.cached_url}
                        name={subitem.name}
                        noLink={subitem.no_link}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                null
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;
