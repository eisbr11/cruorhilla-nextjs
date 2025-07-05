import React, { FC } from 'react';

import { LinkNameStyled, LinkStyled } from './NavItem.styles';

interface INavItemProps {
  name: string,
  url?: string,
  hasSubnavi?: boolean,
  openEvent?: any,
  isSubNavItem?: boolean,
}

const NavItemComponent: FC<INavItemProps> = ({
  name,
  url = '#',
  hasSubnavi = false,
  openEvent = () => {},
  isSubNavItem = false,
}) => {
  return (
    <>
      {!hasSubnavi ? (
        <LinkStyled href={url} isSubNav={isSubNavItem}>
          <LinkNameStyled className='linkNameStyled'>{name}</LinkNameStyled>
        </LinkStyled>
      ) : (
        <LinkStyled isSubNav={isSubNavItem} href="#" onClick={openEvent}>
          <LinkNameStyled className='linkNameStyled'>{name}</LinkNameStyled>
        </LinkStyled>
      )}
    </>
  );
};

export default NavItemComponent;
