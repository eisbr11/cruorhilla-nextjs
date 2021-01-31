import React from 'react';
import { StoryData } from 'storyblok-js-client';

import Head from '@components/head';
import Nav from '@components/nav';
import Footer from '@components/footer';
import SwitchThemeSelect from '@components/switchThemeSelect/switchThemeSelect.component';
import useStyles from './LayoutContent.styles';

const LayoutContent = ({
  children,
  settings,
  content,
}: {
  children: React.ReactNode,
  settings?: StoryData,
  content?: {
    title: string,
    description: string,
  },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Head title={content.title} description={content.description} />
      <Nav settings={settings} />
      <main className={classes.content}>
        {children}
      </main>
      <SwitchThemeSelect />
      <Footer settings={settings} />
    </div>
  );
};

export default LayoutContent;

LayoutContent.defaultProps = {
  settings: {},
  content: {
    title: '',
    description: '',
  },
};
