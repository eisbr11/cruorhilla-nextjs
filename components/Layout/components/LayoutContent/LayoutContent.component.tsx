import React from 'react';
import { StoryData } from 'storyblok-js-client';
import { Variants } from 'framer-motion';

import Head from '@components/head';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import { Theme, useTheme } from '@context/theme.context';
import SettingsComponent from '@components/Settings';
import { AngstblitzSky, BaellebadBg, WartenAufDenKaterSky } from './components/CustomBackgrounds';
import { DivContainer, MotionMainStyled } from './LayoutContent.styles';

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
  hidden: { opacity: 0, x: '-60vw', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: '60vw', y: 0 },
};

const LayoutContent = ({ children, settings, content }: ILayoutContentProps) => {
  const { theme } = useTheme();

  return (
    <DivContainer>
      <Head title={content.title} description={content.description} />
      <Nav settings={settings} />
      {renderBackground(theme)}
      <MotionMainStyled
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'ease' }}
      >
          {children}
      </MotionMainStyled>
      <SettingsComponent />
      <Footer settings={settings} />
    </DivContainer>
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
