import React from 'react';
import Link from 'next/link';

import useStyles from './nav-item.styles';

const NavItemComponent = ({
  name,
  url,
  hasSubnavi,
  openEvent,
}: {
  name: string,
  url?: string,
  hasSubnavi?: boolean,
  openEvent?: any,
}) => {
  const classes = useStyles();

  return (
    <>
      {!hasSubnavi ? (
        <Link href={url}>
          <a className={classes.link}>{name}</a>
        </Link>
      ) : (
        <a href="#" className={`${classes.link} ${classes.onlyOpenLink}`} onClick={openEvent}>{name}</a>
      )}
    </>
  );
};

export default NavItemComponent;

NavItemComponent.defaultProps = {
  url: '#',
  hasSubnavi: false,
  openEvent: () => {},
};
