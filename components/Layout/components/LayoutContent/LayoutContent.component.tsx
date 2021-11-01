import React from 'react';
import { StoryData } from 'storyblok-js-client';
import { motion, Variants } from 'framer-motion';

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
    case Theme.baellebad:
      return (<BaellebadBg />);
    case Theme.kater:
      return (<WartenAufDenKaterSky />);
    default:
      return null;
  }
};

interface ILayoutContentProps {
  children: React.ReactNode;
  settings?: StoryData;
  content?: {
    title: string;
    description: string;
  };
}

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.60 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 1.5 },
};

const LayoutContent = ({ children, settings, content }: ILayoutContentProps) => {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <div className={classes.container}>
      <Head title={content.title} description={content.description} />
      <Nav settings={settings} />
      {renderBackground(theme)}
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'spring', mass: 2, stiffness: 50  }}
        className={classes.content}>
          {children}
      </motion.main>
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
