import React from 'react';
import Link from 'next/link';

import useStyles from './nav-item.styles';

const NavItemComponent = ({
  name,
  url,
  hasSubnavi,
  openEvent,
  isSubNavItem,
}: {
  name: string,
  url?: string,
  hasSubnavi?: boolean,
  openEvent?: any,
  isSubNavItem?: boolean,
}) => {
  const classes = useStyles();

  let linkClasses = classes.link;
  if (isSubNavItem) {
    linkClasses += ` ${classes.subNavLink}`;
  }

  return (
    <>
      {!hasSubnavi ? (
        <Link href={url}>
          <a className={linkClasses}>{name}</a>
        </Link>
      ) : (
        <a href="#" className={linkClasses} onClick={openEvent}>{name}</a>
      )}
    </>
  );
};

export default NavItemComponent;

NavItemComponent.defaultProps = {
  url: '#',
  hasSubnavi: false,
  openEvent: () => {},
  isSubNavItem: false,
};
