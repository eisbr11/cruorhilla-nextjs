import React from 'react';
import Link from 'next/link';

const NavItem = ({
  url,
  name,
  noLink,
}: {
  url: string,
  name: string,
  noLink: boolean
}) => (
  <>
    {!noLink ? (
      <Link href={url}>
        <a>{name}</a>
      </Link>
    ) : (
      name
    )}
  </>
);

export default NavItem;
