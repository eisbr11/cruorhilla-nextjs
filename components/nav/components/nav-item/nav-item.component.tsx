import React from 'react';
import Link from 'next/link';

import useStyles from './nav-item.styles';

const NavItemComponent = ({
  url,
  name,
  noLink,
}: {
  url: string,
  name: string,
  noLink: boolean,
}) => {
  const classes = useStyles();

  return (
    <>
      {!noLink ? (
        <Link href={url}>
          <a className={classes.link}>{name}</a>
        </Link>
      ) : (
        <span className={`${classes.link} ${classes.onlyOpenLink}`}>
          {name}
        </span>
      )}
    </>
  );
};

export default NavItemComponent;
