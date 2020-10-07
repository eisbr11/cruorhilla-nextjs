import React from 'react';

import Head from '@/components/head';
import Nav from '@/components/nav';

const Layout = ({
  children,
  settings = {},
}: {
  children: React.ReactNode,
  settings?: {},
}) => (
  <div>
    <Head />
    <Nav settings={settings} />
    <div>
      {children}
    </div>
  </div>
);

export default Layout;

Layout.defaultProps = {
  settings: {},
};
