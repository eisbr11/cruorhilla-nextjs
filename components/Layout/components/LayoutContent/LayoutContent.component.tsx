import React from 'react';
import { StoryData } from 'storyblok-js-client';

import Head from '@components/head';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import { Theme, useTheme } from '@context/theme.context';
import SettingsComponent from '@components/Settings';
import { AngstblitzSky, BaellebadBg, WartenAufDenKaterSky } from './components/CustomBackgrounds';
import useStyles from './LayoutContent.styles';

const renderBackground = (theme: string): React.ReactNode | null => {
  switch (theme) {
    case Theme.angstblitz:
      return (<AngstblitzSky />);
      break;
    case Theme.baellebad:
      return (<BaellebadBg />);
      break;
    case Theme.kater:
      return (<WartenAufDenKaterSky />);
    default:
      return null;
      break;
  }
};

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
  const { theme } = useTheme();

  return (
    <div className={classes.container}>
      <Head title={content.title} description={content.description} />
      <Nav settings={settings} />
      {renderBackground(theme)}
      <main className={classes.content}>
        {children}
      </main>
      <SettingsComponent />
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
