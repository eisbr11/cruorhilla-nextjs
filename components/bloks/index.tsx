import { SbEditableContent } from 'storyblok-react';

import Feature from './Feature';
import Grid from './Grid';
import Placeholder from './Placeholder';
import Teaser from './Teaser';
import Social from './Social';
import Container from './Container';

const Components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  social_blok: Social,
  container: Container,
};

const Component = ({ blok }: {blok: SbEditableContent}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const BlokComponent = Components[blok.component];
    return <BlokComponent blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
