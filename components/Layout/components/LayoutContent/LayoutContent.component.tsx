import { FC, ReactNode } from 'react';
import { ISbStoryData } from 'storyblok-js-client';
import { Variants } from 'motion/react';

import Head from 'components/head';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import { ETheme, useTheme } from 'context/theme.context';
import SettingsComponent from 'components/Settings';
import {
  AngstblitzSky,
  BaellebadBg,
  WartenAufDenKaterSky,
} from './components/CustomBackgrounds';
import { DivContainer, MotionMainStyled } from './LayoutContent.styles';

const renderBackground = (theme: string): ReactNode | null => {
  switch (theme) {
    case ETheme.angstblitz:
      return <AngstblitzSky />;
    case ETheme.baellebad:
      return <BaellebadBg />;
    case ETheme.kater:
      return <WartenAufDenKaterSky />;
    default:
      return null;
  }
};

interface ILayoutContentProps {
  children: ReactNode;
  settings?: ISbStoryData;
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

const LayoutContent: FC<ILayoutContentProps> = ({
  children,
  settings,
  content,
}) => {
  const { theme } = useTheme();

  return (
    <DivContainer>
      <Head title={content?.title} description={content?.description} />
      <Nav settings={settings} />
      {renderBackground(theme)}
      <MotionMainStyled
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'tween', ease: 'easeInOut' }}
      >
        {children}
      </MotionMainStyled>
      <SettingsComponent />
      <Footer settings={settings} />
    </DivContainer>
  );
};

export default LayoutContent;
