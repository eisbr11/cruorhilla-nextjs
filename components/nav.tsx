import React from 'react';
import { StoryData } from 'storyblok-js-client';

import NavItem from './nav-item';

const Nav = ({ settings }: {settings: StoryData}) => (
  <nav>
    <ul>
      {settings && settings.content.main_navi.map((navitem) => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={navitem._uid}>
          <NavItem name={navitem.name} noLink={navitem.no_link} url={navitem.link.cached_url} />
          {navitem.sub_navi && navitem.sub_navi.length > 0 ? (
            <ul>
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
  </nav>
);

export default Nav;
