import React from 'react';
import Link from 'next/link';

import useStyles from './NavItem.styles';

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
        <Link href={url} legacyBehavior>
          <a className={linkClasses}>
            <span className={classes.linkName}>{name}</span>
          </a>
        </Link>
      ) : (
        <a href="#" className={linkClasses} onClick={openEvent}>
          <span className={classes.linkName}>
            {name}
          </span>
        </a>
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
