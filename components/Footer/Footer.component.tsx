import React from 'react';
import { StoryData } from 'storyblok-js-client';
import Link from 'next/link';

import useStyles from './Footer.styles';

interface IFooterComponentProps {
  settings: StoryData;
}

const FooterComponent = ({ settings }: IFooterComponentProps) => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <ul className={classes.list}>
        {settings.content && settings.content.footer_navi.map((navitem) => (
          // eslint-disable-next-line no-underscore-dangle
          <li key={navitem._uid} className={classes.listItem}>
            <Link href={navitem.link.cached_url} legacyBehavior>
              <a className={classes.link}>{navitem.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterComponent;
