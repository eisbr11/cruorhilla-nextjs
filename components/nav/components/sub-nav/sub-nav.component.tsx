import NavItem from '@components/nav/components/nav-item';
import React from 'react';
import useStyles from './sub-nav.style';

const SubNav = ({
  subNavi,
  open,
}: {
  subNavi: any[]
  open: boolean,

}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${open ? (classes.opened) : ''}`}>
      <ul className={classes.list}>
        {subNavi.map((subitem) => (
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
    </div>
  );
};

export default SubNav;
