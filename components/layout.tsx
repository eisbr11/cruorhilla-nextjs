import React from 'react';
import { StoryData } from 'storyblok-js-client';

import Head from '@components/head';
import Nav from '@components/nav';

const Layout = ({
  children,
  settings,
}: {
  children: React.ReactNode,
  settings?: StoryData,
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
